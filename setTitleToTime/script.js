function updateTitle() {
	let now = Date()
	let formatted = now.match("/\d+:\d+:\d+/")
	
	document.title = now
}

setInterval(updateTitle, 1000)
