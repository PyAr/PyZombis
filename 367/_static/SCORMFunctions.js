// SCORM Functions
function loadPage() {
    initializeAPI();
    console.log("SCORM API initialized.");
}

function unloadPage() {
    terminateAPI();
    console.log("SCORM API terminated.");
}

function loadChapter(chapter) {
    loadPage();
    
    var completionStatus = API.LMSGetValue("cmi.core.lesson_status");
    
    if (completionStatus === "completed") {
        document.getElementById("completion-status").innerText = "This chapter has been completed.";
        document.getElementById("complete-button").style.display = "none";
    } else {
        document.getElementById("completion-status").innerText = "This chapter has not been completed.";
        document.getElementById("reset-button").style.display = "none";
    }
}

function completeChapter(chapter) {
    setProgress("completed");
    alert(chapter + " completed! Progress recorded.");
    document.getElementById("completion-status").innerText = "This chapter has been completed.";
    document.getElementById("complete-button").style.display = "none";
    document.getElementById("reset-button").style.display = "block";
}

function resetChapter(chapter) {
    setProgress("incomplete");
    alert(chapter + " reset to incomplete.");
    document.getElementById("completion-status").innerText = "This chapter has not been completed.";
    document.getElementById("complete-button").style.display = "block";
    document.getElementById("reset-button").style.display = "none";
}
