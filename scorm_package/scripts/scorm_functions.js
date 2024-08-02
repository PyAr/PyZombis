var scorm = pipwerks.SCORM;
scorm.version = "1.2";

function initialize() {
    return new Promise((resolve, reject) => {
        var result = scorm.init();
        if (result) {
            console.log("SCORM initialized");
            resolve();
        } else {
            console.log("SCORM initialization failed");
            reject();
        }
    });
}

function completeLesson() {
    console.log("Complete Lesson button clicked");
    scorm.setValue("cmi.core.lesson_status", "completed").then(() => {
        fetch('/LMSSetValue', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ element: "cmi.core.lesson_status", value: "completed" }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
}

scorm.setValue = function(element, value) {
    return new Promise((resolve, reject) => {
        fetch('/LMSSetValue', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ element: element, value: value }),
        })
        .then(response => {
            if (response.ok) {
                resolve();
            } else {
                reject();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            reject();
        });
    });
};

scorm.getValue = function(element) {
    return new Promise((resolve, reject) => {
        fetch(`/LMSGetValue?element=${element}`)
        .then(response => response.json())
        .then(data => {
            resolve(data[element]);
        })
        .catch(error => {
            console.error('Error:', error);
            reject();
        });
    });
};

// Expose functions to global scope
window.completeLesson = completeLesson;
window.initialize = initialize;
