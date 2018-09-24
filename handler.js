document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('switcher').addEventListener('click', sendHandler);
});

// Send actual button state
function sendHandler(e) {
    let switcher = document.getElementById("switcher");

    if (switcher.checked == true) {
        chrome.runtime.sendMessage({
            state: "hide"
        }, function(response) {
        });
    } else {
        chrome.runtime.sendMessage({
            state: "show"
        }, function(response) {
        });
    }    
}