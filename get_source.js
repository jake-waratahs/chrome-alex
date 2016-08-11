chrome.runtime.sendMessage({
	action: 'source',
	source: document.body.textContent
});