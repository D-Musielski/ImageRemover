// Messages listener
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        // Button state switch
        switch (request.state) {
            case "hide":
                chrome.tabs.executeScript(null, {
                    file: "hide.js",
                    allFrames: true
                });
                sendResponse({
                    state: "hide"
                });
                break;
            case "show":
                chrome.tabs.executeScript(null, {
                    file: "show.js",
                    allFrames: true
                });
                sendResponse({
                    state: "show"
                });
                break;
            default:
                alert(request);
        }
    }
);