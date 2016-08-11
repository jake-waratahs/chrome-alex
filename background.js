chrome.runtime.onMessage.addListener(function(request, sender){
	if (request.action == 'source') {
		var res = (alex(request.source).messages).map(function(m) {return m.message;});
		alert(res.join("\n"));
	}
});

chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.executeScript(null, {file: "getSource.js"});
});