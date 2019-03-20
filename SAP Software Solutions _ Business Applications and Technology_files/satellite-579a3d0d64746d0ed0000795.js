if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        "use strict";
        if (typeof start !== "number") {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

var useNewLiveEngageScript = true;

var defaultSite = 'Global / USA';

var siteMappings = {
    'Global / USA': 'us',
    'Canada': 'ca',
    'Canada (French)': 'ca',
    'Australia': 'anz',
    'Sea': 'sea',
    'India': 'in',
    'Africa': 'za',
    'Mena': 'mena',
    'UK': 'uk',
    'Latinamerica': 'lac',
    'Brazil': 'br',
    'Italy': 'it',
    'Spain': 'es',
    'Portugal': 'pt',
    'France': 'fr',
    'Norway': 'no',
    'Denmark': 'dk',
    'Sweden': 'se',
    'Finland': 'fl',
    'Estonia': 'bal',
    'Latvia': 'bal',
    'Lithuania': 'bal',
    'Belgium': 'be',
    'Belgium & Luxembourg (French)': 'be',
    'Netherlands': 'nl',
    'Turkey': 'tr',

    'Germany': 'de',
    'Poland': 'pl',
    'Austria': 'at',
    'Cis': 'cis',
    'Switzerland': 'ch',
    'Switzerland (French)': 'ch',

    'China': 'cn',
    'HongKong': 'hk',
    'Korea': 'kr',
    'Taiwan': 'tw',
    'Japan': 'jp',

    'Community': 'us',
    'Careers': 'us',

    'Czechrepublic': 'cz'
};

function lp_getCurrentSite() {
    var siteIDs = $('meta[name=web_site_identifier]');

    if (siteIDs && siteIDs.length >= 2) {
        for (var i = 0; i < siteIDs.length; i++) {
            var content = $(siteIDs[i]).attr('content');
            if (content && content != 'Careers' && content != 'Community')
                return content;
        }
    }

    return siteIDs.attr('content');
}

var liveEngageRules = {
    'Czechrepublic': function () {
        var url = window.location.href.toUpperCase();
        return url.indexOf("/ABOUT/CAREERS") >= 0;
    }
};

var currentSite = lp_getCurrentSite() || defaultSite;

//useNewLiveEngageScript = useNewLiveEngageScript && (currentSite in siteMappings);
//useNewLiveEngageScript = useNewLiveEngageScript && (!document.cookie.match(/\bnotice_preferences=/) || !!document.cookie.match(/\bnotice_preferences=(1|2)/));

//var lp_country = siteMappings[currentSite] || 'us';

if (liveEngageRules[currentSite]) {
    if (!liveEngageRules[currentSite]()) {
        useNewLiveEngageScript = false;
    }
}

var getMobileOperatingSystem = function () {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }
    if (/android/i.test(userAgent) && /Mobile/i.test(userAgent)) {
        return "Android";
    }
    if (/iPhone/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
};

if (useNewLiveEngageScript) {

    function allowedSMSCountry() {
        //return currentSite && (currentSite == defaultSite || currentSite.indexOf("Canada") >= 0);
        var countryCookie = _satellite.readCookie('country');
        return countryCookie === "US" || countryCookie === "CA";
    }

    var liveEngageStartTime = new Date();

    if (getMobileOperatingSystem() !== "unknown" && allowedSMSCountry()) {
        $('<div id="lpSMSButtonDiv1" />').appendTo($('body'));
        console.log("[LiveEngage]adding lpSMSButton div since start:", (new Date() - liveEngageStartTime) / 1000);
        function addTextOverlay() {
            if ($('#lpSMSButton').length > 0) {
                console.log("[LiveEngage]lpSMSButton injected since start:", (new Date() - liveEngageStartTime) / 1000);
                if ($('#textingoverlay').length == 0) {
                    var messaging = $('<div id="textingoverlay"></div>');
                    messaging.click(function () { if ($('#lpSMSButton').length > 0) { $('#lpSMSButton')[0].click(); }; });
                    messaging.css({
                        right: "0px",
                        position: "fixed",
                        top: "50%",
                        marginTop: "-71px",
                        width: "31px",
                        height: "143px",
                        zIndex: "1000",
                        cursor: "pointer",
                        backgroundImage: "url(https://www.sap.com/content/dam/application/shared/images/contact-module/text.png)"
                    }).appendTo($('<div style="position: relative; border: solid;"></div>').appendTo($('body')));
                } else {
                    if (!$('#textingoverlay').is(':visible')) {
                        $('#textingoverlay').show();
                    }
                }
            } else {
                console.log("[LiveEngage]lpSMSButton removed since start:", (new Date() - liveEngageStartTime) / 1000);
                $('#textingoverlay').hide();
            }
        }

        (function () {
            if (window.MutationObserver) {
                console.log("[LiveEngage]using MutationObserver");
                var targetNode = document.getElementById('lpSMSButtonDiv1');
                var config = { childList: true };

                var observer = new MutationObserver(addTextOverlay);
                observer.observe(targetNode, config);
                //observer.disconnect();
            } else {
                console.log("[LiveEngage]using DOMSubtreeModified");
                $('#lpSMSButtonDiv1').bind('DOMSubtreeModified', function () {
                    addTextOverlay();
                });
            }
        })();
    }

    if (getMobileOperatingSystem() !== "unknown") {

        $('<div id="LPWhatsAppButtonDiv1" />').appendTo($('body'));

        (function () {

            function addWhatsApp() {
                var messaging = $('#LPWhatsAppButtonDiv1');
                messaging.css({
                    right: "0px",
                    position: "fixed",
                    top: "50%",
                    marginTop: "-71px",
                    width: "31px",
                    height: "143px",
                    zIndex: "1000",
                    cursor: "pointer"
                }).appendTo($('<div style="position: relative; border: solid;"></div>').appendTo($('body')));
            }


            if (window.MutationObserver) {
                var targetNode = document.getElementById('LPWhatsAppButtonDiv1');
                var config = { childList: true };

                var observer = new MutationObserver(addWhatsApp);
                observer.observe(targetNode, config);
                //observer.disconnect();
            } else {
                $('#LPWhatsAppButtonDiv1').bind('DOMSubtreeModified', function () {
                    addWhatsApp();
                });
            }
        })();

    }

    if (SAP && SAP.DTM && SAP.DTM.runMode) {
        SAP.DTM.LivePerson = SAP.DTM.LivePerson || {};

        SAP.DTM.LivePerson.accountID = "81933160"; //"60962385";
    }

    if (SAP && SAP.DTM && SAP.DTM.pageComponents &&
        (SAP.DTM.pageComponents.indexOf("sapdx/components/modular/contactModule") >= 0 ||
            SAP.DTM.pageComponents.indexOf("sapdx/components/modular/contactUsInPage") >= 0 ||
            SAP.DTM.pageComponents.indexOf("sapdx/components/modular/nav/footer") >= 0)
    ) {
        SAP && SAP.DTM && SAP.DTM.addScript && SAP.DTM.addScript({
            ids: ["liveEngage"],
            nativeScript: function () {

                try {
                    if (CQ_Analytics.BrowserInfoInstance.deviceType === "Desktop") {
                        $('head').append(
                            $('<style/>', {
                                id: "livechat-style-change",
                                html: ".lp_maximized {width: 475px  !important; height: 650px !important} .lp_chat_line {max-width: 90% !important;} #lpChat .lp_chat_line_wrapper .lp_rich_content_line .lp_title_text .lp-json-pollock .lp-json-pollock-layout,#lpChat .lp_chat_line_wrapper .lp_rich_content_line .lp_title_text .lp-json-pollock.lp-json-pollock-single-element{max-width:390px !important;}" +
                                      "#lpChat .lp_chat_line_wrapper .lp_rich_content_line .lp_title_text .lp-json-pollock .lp-json-pollock-element-text { color: #ffffff  !important; background-color:  #048ccf !important }"
                            }));
                    }
                } catch (ex) {
                    console.log("livechat style change error:", ex);
                }

                var lp_country = SAP.DTM.LivePerson.countryWithDefault || "us";
                var lp_language = SAP.DTM.LivePerson.languageWithDefault || "en";

                // Force variables' values to lower case
                SAP.DTM.LivePerson.arrLPvars.forEach(function (v) {
                    if (v.name !== 'WBSCode') {
                        v.value = v.value.toLowerCase();
                    }
                });

                var collectionValue;
                var lp_site;
                SAP.DTM.LivePerson.arrLPvars.forEach(function (v) {
                    if (v.name === 'Collection') {
                        collectionValue = v.value;
                    } else if (v.name === "Site") {
                        lp_site = v.value;
                    }
                });

                lp_site = "sap";

                window.lpTag = window.lpTag || {};
                window.lpMTagConfig = window.lpMTagConfig || {};

                var lpTag = window.lpTag;
                var lpMTagConfig = window.lpMTagConfig;

                lpTag.vars = lpTag.vars || [];
                lpTag.dbs = lpTag.dbs || [];

                lpTag.site = SAP.DTM.LivePerson.accountID;
                lpTag.tagletSection = 'sap';

                if (getMobileOperatingSystem() !== "unknown") {
                    lpTag.section = [lp_site, collectionValue || 'general', lp_country, lp_language,
                        lp_site + "_" + getMobileOperatingSystem().toLowerCase()];
                } else {
                    lpTag.section = [lp_site, collectionValue || 'general', lp_country, lp_language];
                }

                var campaignCode;
                var match = window.location.href.match(/[?&]campaigncode=(.*?)(&|$)/i);
                if (match) {
                    campaignCode = match[1];
                } else {
                    campaignCode = window.getCookie && window.getCookie('campaigncode');
                }

                if (campaignCode) {
                    lpTag.section.push('iscampaign', campaignCode);
                }

                // ---------- i: Sending variable array when the page loads --------------
                lpTag.vars.push(SAP.DTM.LivePerson.arrLPvars);

                // ======================= DYNAMIC BUTTONS ============================
                // Define a default dynamic button on the page, specifying the following parameters
                //   name: the name of the dynamic button in the LivePerson Admin Console
                //   pid: the id of the div that the button will be injected into
                //lpTag.dbs.push({ name: 'chat-sales-sap-general-" + SAP.DTM.LivePerson.countryWithDefault + "-" + SAP.DTM.LivePerson.languageWithDefault + "-1', pid: 'lpChatButtonDiv1' });
                //lpTag.dbs.push({ name: 'voice-sales-sap-general-" + SAP.DTM.LivePerson.countryWithDefault + "-" SAP.DTM.LivePerson.languageWithDefault + "-1', pid: 'lpVoiceButtonDiv1' });

                if (lp_country != 'cn') {
                    $(".dtm-live-chat").removeClass("online").addClass("offline");
                }

                window.liveEngageAgentAvailable = false;
                window.lp_engagementImpressionHandler = function () {

                    if (typeof (LPMobile) === "undefined") {
                        var available = $("#lpChatButtonDiv1 div").hasClass("lp-agent-available");

                        if (available) {
                            console.log("[LiveEngage]lp-agent-available since start:", (new Date() - liveEngageStartTime) / 1000);
                            $(".dtm-live-chat").removeClass("offline").addClass("online");
                        } else {
                            $(".dtm-live-chat").removeClass("online").addClass("offline");
                        }

                        window.liveEngageAgentAvailable = available;
                        $.event.trigger({ type: "LiveEngageAgentStatusChanged", agentAvailable: window.liveEngageAgentAvailable });
                    }

                    $('.dtm-live-chat.online a').on('click', function () {
                        $("#lpChatButtonDiv1 .lp-agent-available").trigger('click');
                    });

                }

                //Video
                $(function () {
                    var hiddenRuleID = "LPMoverlayRule"
                    var hiddenRule = '.LPMoverlay { visibility: hidden }';

                    function hideOverlay() {
                        if ($('#' + hiddenRuleID).length > 0) {
                            $('#' + hiddenRuleID).html(hiddenRule);
                        } else {
                            $('head').append(
                                $('<style/>', {
                                    id: hiddenRuleID,
                                    html: hiddenRule
                                }));
                        }
                    }

                    function showOverlay() {
                        $('#' + hiddenRuleID).html('');
                    }

                    $("video").on("play", null, function () {
                        hideOverlay();
                    });

                    $("video").on("pause", null, function () {
                        showOverlay();
                    });

                    $("video").on("ended", null, function () {
                        showOverlay();
                    });

                    $('html').on('playerInitialized', function (e, videoId) {
                        var player = !!videoId ? videojs.players[videoId] : null;
                        if (!!player) {
                            player.ready(function () {
                                player.on('play', function () {
                                    console.log("DTM : video listener : video started, hiding proactive dialog");

                                    hideOverlay();
                                });
                                player.on('pause', function () {
                                    console.log("DTM : video listener : video paused, showing proactive dialog");

                                    showOverlay();
                                });
                                player.on('ended', function () {
                                    console.log("DTM : video listener : video ended, showing proactive dialog");

                                    showOverlay();
                                });
                            }, true);
                        }
                    });

                });


                /* Demandbase Logic starts... */

                const setupLiveEngageDB = function (dbInfo) {
                    if (!dbInfo) return;

                    var readCookie = function (name, value) {
                        value = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
                        return value ? value.pop() : "";
                    };

                    var writeCookie = function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                            return false;
                        }
                        var sExpires = "";
                        if (vEnd) {
                            switch (vEnd.constructor) {
                                case Number:
                                    sExpires =
                                        vEnd === Infinity
                                            ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
                                            : "; max-age=" + vEnd;
                                    break;
                                case String:
                                    sExpires = "; expires=" + vEnd;
                                    break;
                                case Date:
                                    sExpires = "; expires=" + vEnd.toUTCString();
                                    break;
                            }
                        }

                        document.cookie =
                            encodeURIComponent(sKey) +
                            "=" +
                            encodeURIComponent(sValue) +
                            sExpires +
                            (sDomain ? "; domain=" + sDomain : "") +
                            (sPath ? "; path=" + sPath : "") +
                            (bSecure ? "; secure" : "");
                        return true;
                    };

                    //if cookie is not set, first time in session, send data - otherwise we don't do anything.
                    if (document.cookie && readCookie("DBLiveEngage") !== "1") {
                        //write a 30 minute cookie for starting a LiveEngage session. LiveEngage needs the DB data sent only once per session, hence the cookie.
                        var date = new Date();
                        date.setTime(date.getTime() + 30 * 60 * 1000);
                        var expires = "; expires=" + date.toGMTString();
                        var href_url = document.location.href;
                        var path = "; path=/";

                        writeCookie("DBLiveEngage", "1", expires, path, "", true);
                        runLiveEngageDB(dbInfo);
                    }
                };

                const runLiveEngageDB = function (dbInfo) {
                    try {
                        //LIVE ENGAGE API FOR SENDING DATA TO THEIR ERROR LOGS
                        var prefix = "DB_";
                        var companyName = prefix + (dbInfo.company_name || "No-Company-Name");
                        var industry = prefix + (dbInfo.industry || "No-Industry");
                        var employeeBand = prefix + (dbInfo.employee_range || "No-Employee-Range");
                        var employeeCount = prefix + (dbInfo.employee_count || "No-Employee-Count");
                        var revenueBand = prefix + (dbInfo.revenue_range || "No-Revenue-Range");
                        var annualRevenue = prefix + (dbInfo.annual_sales || "No-Annual-Sales");
                        var city = prefix + (dbInfo.city || "No-City");
                        var countryName = prefix + (dbInfo.country_name || "No-Country-Name");
                        var state = prefix + (dbInfo.state || "No-State");
                        var zip = prefix + (dbInfo.zip || "No-Zip");
                        var country = prefix + (dbInfo.country || "No-Country-Code");
                        var DMACode = prefix + (dbInfo.registry_dma_code || "No-DMA-Code");
                        var accountFocus =
                            prefix + (dbInfo.watch_list_account_focus || "No-Account-Focus");
                        var accountStatus =
                            prefix + (dbInfo.watch_list_account_status || "No-Account-Status");

                        lpTag.sdes = lpTag.sdes || [];

                        //Company Name
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DB_CompanyName", // THE ERROR CODE
                                message: companyName // THE ERROR MESSAGE
                            }
                        });
                        //Industry
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DB_Industry", // THE ERROR CODE
                                message: industry // THE ERROR MESSAGE
                            }
                        });
                        //Employee Band
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DB_EmployeeBand", // THE ERROR CODE
                                message: employeeBand // THE ERROR MESSAGE
                            }
                        });
                        //Employee Count
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DB_EmployeeCount", // THE ERROR CODE
                                message: employeeCount // THE ERROR MESSAGE
                            }
                        });
                        //Revenue Band
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DB_RevenueBand", // THE ERROR CODE
                                message: revenueBand // THE ERROR MESSAGE
                            }
                        });
                        //Annual Band
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DB_AnnualRevenue", // THE ERROR CODE
                                message: annualRevenue // THE ERROR MESSAGE
                            }
                        });
                        //city
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DB_City", // THE ERROR CODE
                                message: city // THE ERROR MESSAGE
                            }
                        });

                        //country name
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DB_CountryName", // THE ERROR CODE
                                message: countryName // THE ERROR MESSAGE
                            }
                        });
                        //state
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DB_State", // THE ERROR CODE
                                message: state // THE ERROR MESSAGE
                            }
                        });
                        //zip
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DB_Zip", // THE ERROR CODE
                                message: zip // THE ERROR MESSAGE
                            }
                        });
                        //Depending on how many Awa there is:
                        //DMACode
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DMACode", // THE ERROR CODE
                                message: DMACode // THE ERROR MESSAGE
                            }
                        });
                        //account Focus
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DB_AccountFocus", // THE ERROR CODE
                                message: accountFocus // THE ERROR MESSAGE
                            }
                        });
                        // account status
                        lpTag.sdes.push({
                            type: "error", //MANDATORY
                            error: {
                                code: "DB_AccountStatus", // THE ERROR CODE
                                message: accountStatus // THE ERROR MESSAGE
                            }
                        });
                    } catch (e) {
                        console.log(e.message);
                    }
                };


                /* Demandbase Logic ends... */

                lpTag.sdes = lpTag.sdes || [];

                if ($("html[data-page-path$='\/errors/404']").length > 0) {
                    lpTag.sdes.push({
                        "type": "error", //MANDATORY
                        "error": {
                            "message": "Page Not Found", // ERROR MESSAGE    
                            "code": "404" // ERROR CODE
                        }
                    });
                }

                function sendToLiveEngage(obj) {
                    lpTag.sdes.push({
                        "type": "ctmrinfo",
                        "info": {
                            "ctype": obj["industry"],
                            "cstatus": obj["account_status"] || "",
                            "companySize": obj["employee_count"] || 0,
                            "balance": obj["annual_sales"],
                            "accountName": obj["company_name"]
                        }
                    });

                    var affiliate = "None";

                    if (obj["company_name"] && obj["company_name"].toUpperCase().indexOf("SAP") >= 0) {
                        affiliate = obj["company_name"];
                    }

                    lpTag.sdes.push({
                        "type": "mrktInfo",
                        "info": {
                            "affiliate": affiliate
                        }
                    });

                    setupLiveEngageDB(obj);
                }

                function ledemandbaseCallback(obj) {
                    console && console.log("callback from demandbase to invoke liveengage logic:", obj);
                    sendToLiveEngage(obj);
                }

                $(function () {
                    console.log("[from demandbase:", window._demandbaseInfo);
                    var AsyncService = window.SAP && window.SAP.DemandBase && window.SAP.DemandBase.AsyncService;
                    if (AsyncService) {
                        AsyncService.findDefaultStore()
                            .then(ledemandbaseCallback);
                    } else {
                        console.error('window.SAP.DemandBase.AsyncService is not loaded. No demanbase data is sent to LiveEngage.');
                    }
                });
            }
        });

        SAP && SAP.DTM && SAP.DTM.addScript && SAP.DTM.addScript({
            ids: ["mtag"],
            nativeScript: function () {
                $(function () {

                    window.lpTag = window.lpTag || {}, "undefined" == typeof window.lpTag._tagCount ? (window.lpTag = {
                        site: lpTag.site || "",
                        section: lpTag.section || "",
                        tagletSection: lpTag.tagletSection || null,
                        autoStart: lpTag.autoStart !== !1,
                        ovr: lpTag.ovr || {},
                        _v: "1.7.0",
                        _tagCount: 1,
                        protocol: "https:",
                        events: {
                            bind: function (t, e, i) {
                                lpTag.defer(function () {
                                    lpTag.events.bind(t, e, i)
                                }, 0)
                            },
                            trigger: function (t, e, i) {
                                lpTag.defer(function () {
                                    lpTag.events.trigger(t, e, i)
                                }, 1)
                            }
                        },
                        defer: function (t, e) {
                            0 == e ? (this._defB = this._defB || [], this._defB.push(t)) : 1 == e ? (this._defT = this._defT || [], this._defT.push(t)) : (this._defL = this._defL || [], this._defL.push(t))
                        },
                        load: function (t, e, i) {
                            var n = this;
                            setTimeout(function () {
                                n._load(t, e, i)
                            }, 0)
                        },
                        _load: function (t, e, i) {
                            var n = t;
                            t || (n = this.protocol + "//" + (this.ovr && this.ovr.domain ? this.ovr.domain : "lptag.liveperson.net") + "/tag/tag.js?site=" + this.site);
                            var a = document.createElement("script");
                            a.setAttribute("charset", e ? e : "UTF-8"), i && a.setAttribute("id", i), a.setAttribute("src", n), document.getElementsByTagName("head").item(0).appendChild(a)
                        },
                        init: function () {
                            this._timing = this._timing || {}, this._timing.start = (new Date).getTime();
                            var t = this;
                            window.attachEvent ? window.attachEvent("onload", function () {
                                t._domReady("domReady")
                            }) : (window.addEventListener("DOMContentLoaded", function () {
                                t._domReady("contReady")
                            }, !1), window.addEventListener("load", function () {
                                t._domReady("domReady")
                            }, !1)), "undefined" == typeof window._lptStop && this.load()
                        },
                        start: function () {
                            this.autoStart = !0
                        },
                        _domReady: function (t) {
                            this.isDom || (this.isDom = !0, this.events.trigger("LPT", "DOM_READY", {
                                t: t
                            })), this._timing[t] = (new Date).getTime()
                        },
                        vars: lpTag.vars || [],
                        dbs: lpTag.dbs || [],
                        ctn: lpTag.ctn || [],
                        sdes: lpTag.sdes || [],
                        ev: lpTag.ev || []
                    }, lpTag.init()) : window.lpTag._tagCount += 1;

                    lpTag.events.bind("lpUnifiedWindow", "state", function () {
                        var deviceType = lpTag.device.familyName();
                        function forceDesktop() {
                            $("#lpChat").parent().removeClass("lpdv lp_tablet lp_portrait");
                            $("#lpChat").parent().addClass("lp_desktop lp_landscape");
                            $("#lpChat .lp_icon-white img").attr("src", "https://lpcdn.lpsnmedia.net/le_unified_window/8.10.1.3-release_1525/resources/icons/desktop/sprites_v1.png");

                            /*var parentDiv = document.getElementById("lpChat").parentNode; //without jquery
                            parentDiv.classList.remove("lp_tablet");
                            parentDiv.classList.remove("lp_portrait");
                            parentDiv.classList.add("lp_landscape");
                            parentDiv.classList.add("lp_desktop");*/
                        }
                        if (/Tablet/.test(deviceType)) {
                            forceDesktop();
                        }
                    });

                    lpTag.events.bind("lpUnifiedWindow", "windowClosed", function () {
                        var deviceType = lpTag.device.familyName();
                        function forceDefaults() {
                            var meta = document.createElement('meta');
                            meta.name = "viewport";
                            meta.content = "width=device-width, initial-scale=1.0";
                            document.getElementsByTagName('head')[0].appendChild(meta);
                        }
                        if (/Tablet/.test(deviceType)) {
                            window.setTimer(forceDefaults(), 500);
                        }
                    });

                    lpTag.events.bind("LP_OFFERS", "OFFER_IMPRESSION", function () {
                        try {
                            var payload = { "events": "event41", "eVar47": "Proactive Chat", "prop44": "LivePerson|Chat invitation displayed" };
                            //s_lp.track(payload,"tl_o","LivePerson");
                        } catch (e) {
                            console.log("Invitation Start Failure: " + e);
                        }
                    });

                    lpTag.events.bind("LP_OFFERS", "OFFER_CLICK", function () {
                        try {
                            var payload = { "events": "event23", "eVar47": "Proactive Chat", "prop44": "LivePerson|Chat invitation accepted" };
                            //s_lp.track(payload,"tl_o","LivePerson");
                        } catch (e) {
                            console.log("Invitation Accept Failure: " + e);
                        }
                    });

                    lpTag.events.bind("LP_OFFERS", "OFFER_DECLINED", function () {
                        try {
                            var payload = { "events": "event23", "eVar47": "Proactive Chat", "prop44": "LivePerson|Chat invitation declined" };
                            //s_lp.track(payload,"tl_o","LivePerson");
                        } catch (e) {
                            console.log("Invitation Declined Failure: " + e);
                        }
                    });

                    lpTag.events.bind("LP_OFFERS", "OFFER_IMPRESSION", function (data, eventInfo) {
                        try {
                            if (data.engagementType == 5) {
                                if (window.lp_engagementImpressionHandler) {
                                    window.lp_engagementImpressionHandler();
                                }
                            }
                        } catch (e) {
                            console.log("Error on Offer Impression: " + e);
                        }
                    });

                    lpTag.events.bind("LP_OFFERS", "OFFER_TIMEOUT", function () {
                        try {
                            var payload = { "events": "event23", "eVar47": "Proactive Chat", "prop44": "LivePerson|Chat invitation timed out" };
                            //s_lp.track(payload,"tl_o","LivePerson");
                        } catch (e) {
                            console.log("Invitation Timeout Failure: " + e);
                        }
                    });
                });
            }
        });

    }

}

if (!useNewLiveEngageScript) {
    if ($ && $('.dtm-live-chat').length) {
        $('.dtm-live-chat').hide();
        $('.contact-us-in-page .service-item.two-items').removeClass('two-items').addClass('one-item');
        $('.contact-us-in-page .service-item.three-items').removeClass('three-items').addClass('two-items');
    }

    if (SAP && SAP.DTM && SAP.DTM.runMode) {
        SAP.DTM.LivePerson = SAP.DTM.LivePerson || {};

        SAP.DTM.LivePerson.accountID = "";
    }

    if (SAP && SAP.DTM && SAP.DTM.pageComponents &&
        (SAP.DTM.pageComponents.indexOf("sapdx/components/modular/contactModule") >= 0 ||
            SAP.DTM.pageComponents.indexOf("sapdx/components/modular/contactUsInPage") >= 0 ||
            SAP.DTM.pageComponents.indexOf("sapdx/components/modular/nav/footer") >= 0)
    ) {
        SAP && SAP.DTM && SAP.DTM.addScript && SAP.DTM.addScript({
            ids: ["liveEngage"],
            nativeScript: function () {
            }
        });

        SAP && SAP.DTM && SAP.DTM.addScript && SAP.DTM.addScript({
            ids: ["mtag"],
            nativeScript: function () {
            }
        });
    }
}

$(function () {
    var chatDivID = "lpChatButtonDiv1";

    if (window.location.pathname.indexOf('/about/careers') < 0 || $('#' + chatDivID).length > 0) {
        return;
    }

    $("body").append('<div id="' + chatDivID + '" style="display:none"></div>');

    var url = window.location.href;

    window.SAP = window.SAP || {};
    SAP.DTM = SAP.DTM || {};
    SAP.DTM.LivePerson = SAP.DTM.LivePerson || {};

    window.SAP.showOverlay = true;

    if (SAP.DTM.getScript) {
        SAP.DTM.getScript("mtag").invoke();

        SAP.DTM.LivePerson.arrLPvars = [
            { scope: 'page', name: 'Unit', value: "sales" },
            { scope: 'page', name: 'Section', value: "home" },
            { scope: 'page', name: 'Site', value: "sap" },
            { scope: 'page', name: 'Collection', value: "general" },
            { scope: 'page', name: 'Country', value: "us" },
            { scope: 'page', name: 'Language', value: "en" },
            { scope: 'page', name: 'WBSCode', value: "CRM-XH16-INB-CHAT" },
            { scope: 'page', name: 'Url', value: url },
            { scope: 'session', name: 'lpReferrer', value: url },
            { scope: "page", name: "VideoIsPlaying", value: "false" }
        ];

        SAP.DTM.LivePerson.countryWithDefault = "us";
        SAP.DTM.LivePerson.languageWithDefault = "en";

        SAP.DTM.getScript("liveEngage").inline();
    }
});
