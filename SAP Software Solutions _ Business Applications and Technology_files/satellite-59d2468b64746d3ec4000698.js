(function () {
    var SITE_DOMAIN = "https://" + window.location.hostname;
    var SCI_LOGIN_URL_PREFIX = SAP.DTM.runMode == "prod" ?
        "https://accounts.sap.com/saml2/idp/sso?sp=wcms_sapdx_prod_29052019&RelayState=" :
        "https://accounts400.sap.com/saml2/idp/sso?sp=wcms_sapdx_qa_29052019&RelayState=";

    var ASSET_CHECK_PATH = "/bin/sapdx/gating/assetCheck";

    var MAX_TC_CHECK_COUNT = 3;
    var TC_ASSET = "/documents/2017/06/2a45e55b-c37c-0010-82c7-eda71af511fa.html";
    var TC_FLAG = "tccheck";
    var TC_CHECK_COOKIE_NAME = "TCCheckCount";

    function getTCCheckCount() {
        var count = _g.HTTP.getCookie(TC_CHECK_COOKIE_NAME) || "0";
        try {
            count = parseInt(count);
        } catch (ex) {
            count = 0;
        }
        return count;
    }

    function setTCCheckCount(count) {
        _g.HTTP.setCookie(TC_CHECK_COOKIE_NAME, count, "/");
    }

    function isLoggedIn() {
        return $(".authentication a.logged").length > 0;
    }

    $(document).ready(function () {
        if (!isLoggedIn()) return;

        if (window.location.pathname.toUpperCase().indexOf("/developer".toUpperCase()) !== 0) return;

        var checkCount = getTCCheckCount();
        if (checkCount >= MAX_TC_CHECK_COUNT) return;

        setTCCheckCount(checkCount + 1);
        $.get(ASSET_CHECK_PATH, { path: TC_ASSET, tcflag: TC_FLAG }).done(function () { });
    });

    $(document).ajaxComplete(function (event, xhr, settings) {
        if (!isLoggedIn()) return;

        var assetCheckURLPrefix = ASSET_CHECK_PATH + "?path=";
        var index = settings.url.indexOf(assetCheckURLPrefix);
        if (index >= 0) {
            try {
                var response = JSON.parse(xhr.responseText);
                if (response) {
                    if (response.isGated == true && response.havePermission == false) {
                        var assetURL = settings.url.substring(index + assetCheckURLPrefix.length);

                        if (assetURL.indexOf("tcflag=" + TC_FLAG) > 0) {
                            assetURL = window.location.href;                     
                            console.log("assetURL:", assetURL);

                            window.location.href = SCI_LOGIN_URL_PREFIX + encodeURIComponent(assetURL);
                        }
                    } else if (response.isGated == true && response.havePermission == true) {
                        setTCCheckCount(MAX_TC_CHECK_COUNT);
                    }
                }

            } catch (ex) {
                console.log(ex);
            }
        }
    });
})();
