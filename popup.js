chrome.runtime.sendMessage({
    action: 'get_source'
})

chrome.runtime.onMessage.addListener(function(request){
    if (request.action === 'analysis_complete') {
        var div = document.getElementById('messages')
        div.innerHTML = '<ul>'
        request.analysis.forEach(function(message){
            div.innerHTML += '<li>' + message + '</li>';
        })
        div.innerHTML += '</ul>'
    }
})