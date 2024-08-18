// SCORM API Wrapper
var findAPITries = 0;
var API = null;

function findAPI(win) {
    while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
        findAPITries++;
        if (findAPITries > 7) {
            return null;
        }
        win = win.parent;
    }
    return win.API;
}

function getAPI() {
    var theAPI = findAPI(window);
    if ((theAPI == null) && (window.opener != null) && (typeof(window.opener) != "undefined")) {
        theAPI = findAPI(window.opener);
    }
    if (theAPI == null) {
        alert("Unable to find an API adapter");
    }
    return theAPI;
}

function initializeAPI() {
    API = getAPI();
    if (API != null) {
        API.LMSInitialize("");
    }
}

function terminateAPI() {
    if (API != null) {
        API.LMSFinish("");
    }
}

function setProgress(progress) {
    if (API != null) {
        API.LMSSetValue("cmi.core.lesson_status", progress);
        API.LMSCommit("");
    }
}

function setSuspendData(data) {
    if (API != null) {
        API.LMSSetValue("cmi.suspend_data", data);
        API.LMSCommit("");
    }
}

function getSuspendData() {
    if (API != null) {
        return API.LMSGetValue("cmi.suspend_data");
    }
    return "";
}
