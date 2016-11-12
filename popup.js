chrome.runtime.sendMessage({
    action: 'get_source'
})

chrome.runtime.onMessage.addListener(function(request){
    if (request.action === 'analysis_complete') {

        // Remove the 'Loading text'
        var uiWrapper = document.getElementById('container');
        var load = document.getElementById('loading');
        uiWrapper.removeChild(load);

        // Add the messages from alexjs to the list
        var messageContainer = document.getElementById('messages');
        request.analysis.forEach(function(message){
            messageContainer.innerHTML += '<div class="item">' + message + '</div>';
        })

        // If there's nothing to report, tell them
        if (request.analysis.length === 0) {
            messageContainer.innerHTML += '<div class="item">No insensitive language found. You\'re awesome!</div>';
        }
    }
})