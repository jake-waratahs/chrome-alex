chrome.runtime.onMessage.addListener(function(request){
    if (request.action === 'source_recieved') {
        var res = (alex(request.source).messages).map(function(m) {return m.message;});
        chrome.runtime.sendMessage({
            action: 'analysis_complete',
            analysis: res
        })
    } else if (request.action === 'get_source') {
        chrome.tabs.executeScript(null, {file: "get_source.js"});
    }
});