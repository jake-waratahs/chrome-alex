chrome.runtime.onMessage.addListener(function(request, sender){
	if (request.action == 'source') {
		var res = alex(request.source).messages;
		// console.log(request.source);
		console.log('RESULT IS');
		console.log(res);
		document.getElementById('messages').innerHTML = res;
	}
});

document.addEventListener('DOMContentLoaded', function(){
	chrome.tabs.executeScript(null, {file: "getSource.js"});
});