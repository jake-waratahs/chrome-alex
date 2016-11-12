chrome.runtime.sendMessage({
    action: 'source_recieved',
    source: document.body.textContent
});