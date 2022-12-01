function onPageLoad(e) {
    chrome.permissions.request({
        permissions: ["tabs"]
    }, (granted) => {
        if (granted) {
            alert("permissions granted")
        }
        else {
            alert("not granted")
        }
    });
};

document.addEventListener("DOMContentLoaded", onPageLoad, false);

