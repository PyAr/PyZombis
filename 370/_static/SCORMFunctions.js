// SCORM Functions

function loadPage() {
    initializeAPI();
    console.log("SCORM API initialized.");
}

function unloadPage() {
    saveTextBoxData(); // Save data when the page is unloaded
    terminateAPI();
    console.log("SCORM API terminated.");
}

function loadChapter(chapter) {
    loadPage();
    
    var suspendData = getSuspendData();
    if (suspendData) {
        console.log("Suspend data retrieved:", suspendData);
        // Restore the text data in the textbox
        document.getElementById("chapter-textbox").value = suspendData;
    }
    
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
    
    // Optionally save some suspend data when the chapter is completed
    setSuspendData(document.getElementById("chapter-textbox").value);
}

function resetChapter(chapter) {
    setProgress("incomplete");
    alert(chapter + " reset to incomplete.");
    document.getElementById("completion-status").innerText = "This chapter has not been completed.";
    document.getElementById("complete-button").style.display = "block";
    document.getElementById("reset-button").style.display = "none";
    
    // Clear the suspend data if the chapter is reset
    setSuspendData("");
    document.getElementById("chapter-textbox").value = ""; // Clear the textbox as well
}

function saveTextBoxData() {
    // Save the current state of the textbox into suspend data
    var textBoxData = document.getElementById("chapter-textbox").value;
    setSuspendData(textBoxData);
}
