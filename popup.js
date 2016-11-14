function addMessages(messages) {
    // Remove the 'Loading text'
    var uiWrapper = document.getElementById('container');
    var load = document.getElementById('loading');
    uiWrapper.removeChild(load);

    // Add the messages from alexjs to the list
    var messageContainer = document.getElementById('messages');
    messages.forEach(function(message){
        messageContainer.innerHTML += '<div class="item">' + message + '</div>';
    })

    // If there's nothing to report, tell them
    if (messages.length === 0) {
        messageContainer.innerHTML += '<div class="item">No insensitive language found. You\'re awesome! 😃</div>';
    }    
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0].url.match(/.*facebook\.com.*/)) {
        addMessages(['Unfortunately we don\'t currently support Facebook pages 😞']);
    } else {
        chrome.runtime.sendMessage({
            action: 'get_source'
        });
    }
});

chrome.runtime.onMessage.addListener(function(request){
    if (request.action === 'analysis_complete') {
        addMessages(request.analysis);
    }
});