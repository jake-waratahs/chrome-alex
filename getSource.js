chrome.runtime.sendMessage({
	action: 'source',
	source: document.getElementsByTagName('html')[0].innerHTML
});