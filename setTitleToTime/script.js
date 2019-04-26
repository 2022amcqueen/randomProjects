function updateTitle() {
	let now = Date()
	
	alert(now)
	document.title = now
}

setInterval(updateTitle, 1000)
