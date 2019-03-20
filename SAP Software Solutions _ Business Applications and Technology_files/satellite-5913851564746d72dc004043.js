/* 
  Adobe Analytics 
  Live Person Tracking
  Maintained by Acronym
*/
window.s_livePersonCallback = function(data, eventInfo) {
    try {
        var log = function() {
            if (
                location.search.match(/[&?]debug=/)
                ||_satellite.settings.isStaging
            ) console.log.apply(this, ['DTM: s_livePersonCallback:'].concat([].slice.call(arguments)));
        };
        s_livePersonCallback.chatTypePrefix = s_livePersonCallback.chatTypePrefix || 'User Initiated:';
        var eventInfo = eventInfo || {};
        var eventName = (eventInfo.eventName || '').toLowerCase();
        var data = data || {};
        var state = (data && String(data.state) || '').toLowerCase();;
        var conversationId = String(data.conversationId) || '';
        var engagementType = data.engagementType || -1;
        var engagementIs = {
            peelingcorner: 0,
            overlay: 1,
            toaster: 2,
            slideout: 3,
            embedded: 5,
            sticky: 6
        };
        var lpData = {};
        var isTriggered = s.tryParseJSON(s.c_rr('s_lpData')) || {};
        log('data: ', data);
        log('eventInfo: ', eventInfo);
        log('eventName: ', eventName);
        log('state: ', state);
        log('conversationID: ', conversationId);
        log('arguments: ', arguments);
        switch (eventName) {
            case 'offer_impression':
                switch (engagementType) {
                    //  invite popup displayed
                    case engagementIs.overlay:
                        log('CHAT INVITE');
                        if (!isTriggered.CHAT_INVITE) {
                            s_livePersonCallback.chatTypePrefix = 'Proactive:';
                            var lpData = {
                                'prop73': 's_livePersonCallback',
                                'eVar47': s_livePersonCallback.chatTypePrefix + 'Chat Invite',
                                'events': 'event41'
                            };
                            s.trackData(lpData, 'o', 'Chat Invite');
                            isTriggered.CHAT_INVITE = true;
                            s.c_wr('s_lpData', JSON.stringify(isTriggered));
                        } else {
                            log('CHAT INVITE ALREADY OCCURED. TRACKDATA NOT CALLED');
                        } // end if !isTriggered.CHAT_INVITE
                        break; // engagementType:engagementIs.overlay
                } // end engagementType
                break; // eventName:offer_impression
            case 'offer_declined':
            case 'offer_timeout':
            case 'windowclosed':
                log(eventName, 'resetting chatTypePrefix');
                s_livePersonCallback.chatTypePrefix = '';
                s.c_w('s_lpData', '');
                break; // eventName:offer_declined/timeout/windowclosed
            case 'state':
                switch(state) {
                    // chat window opens
                    case 'initialised': 
                        log('CHAT OPEN');
                        if (!isTriggered.CHAT_OPEN) {
                            var lpData = {
                                'prop73': 's_livePersonCallback',
                                'eVar47': s_livePersonCallback.chatTypePrefix + 'Chat Open',
                                'eVar44': 'CHAT_OPEN',
                                'prop44': 'CHAT_OPEN',
                                'prop45': location.href,
                                'eVar45': '+1',
                                'events': 'event37,event23',
                                'products': ';;;;event23=1'
                            };
                            s.trackData(lpData, 'o', 'Chat Open');
                            isTriggered.CHAT_OPEN = true;
                            s.c_wr('s_lpData', JSON.stringify(isTriggered));
                        } else {
                            log('CHAT OPEN ALREADY OCCURED. TRACKDATA NOT CALLED');
                        } // end if !isTriggered.CHAT_OPEN
                        break; // end eventName:state:initialised
                } // end state
                break; // end eventName:state
            case 'conversationinfo':
                switch (state) {
                    // prechat
                    case 'prechat':
                        break; // eventName:conversationinfo:state:prechat
                        // chat started
                    case 'interactive':
                    // case 'chatting':
                        if (conversationId) {
                            log('CHAT STARTED');
                            if (!isTriggered.CHAT_STARTED) {
                                var lpData = {
                                    'prop73': 's_livePersonCallback',
                                    'eVar47': s_livePersonCallback.chatTypePrefix + 'Chat Started',
                                    'eVar40': conversationId,
                                    'eVar44': 'CHAT_STARTED|' + conversationId,
                                    'prop44': 'CHAT_STARTED|' + conversationId,
                                    'prop45': location.href,
                                    'eVar45': '+1',
                                    'events': 'event38,event23',
                                    'products': ';;;;event23=1'
                                };
                                s.trackData(lpData, 'o', 'Chat Started');
                                isTriggered.CHAT_STARTED = true;
                                s.c_wr('s_lpData', JSON.stringify(isTriggered));
                            } else {
                                log('CHAT START ALREADY OCCURED. TRACKDATA NOT CALLED');
                            } // end if !isTriggered.CHAT_STARTED
                        } // end if conversationId
                        break; // eventName:conversationinfo:state:interactive (chat started)
                    case 'ended':
                        log('CHAT ENDED', 'resetting chatTypePrefix');
                        s_livePersonCallback.chatTypePrefix = '';
                        s.c_wr('s_lpData', '');
                        break; // eventName:conversationinfo:state:ended
                }
                break; // eventName:conversationinfo
        } // end eventName
        log('*****************************');
    } catch (e) {
        console.log('DTM: s_livePersonCallback: ERROR: ', e);
    }
} // s_livePersonCallback

try {
    if (window.lpTag && window.lpTag.events) {
        // listen for proactive invite
        lpTag.events.bind("LP_OFFERS", "OFFER_IMPRESSION", s_livePersonCallback);
        // listen for timeout/decline to reset the cookie used to only pop stuff once
        lpTag.events.bind("LP_OFFERS", "OFFER_TIMEOUT", s_livePersonCallback);
        lpTag.events.bind("LP_OFFERS", "OFFER_DECLINED", s_livePersonCallback);
        // listen for chat open and start
        lpTag.events.bind("lpUnifiedWindow", "state", s_livePersonCallback);
        lpTag.events.bind("lpUnifiedWindow", "conversationInfo", s_livePersonCallback);
        // listen for window closed to reset the cookie used to only pop stuff once
        lpTag.events.bind("lpUnifiedWindow", "windowClosed", s_livePersonCallback);
    }
} catch (e) {
    console.log('DTM: ERROR: ', e);
}
