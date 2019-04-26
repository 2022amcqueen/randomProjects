function updateTitle() {
	let now = Date()
	let formatted = now.match("/\d+:\d+:\d+/")
	
	document.title = formatted
}

setInterval(updateTitle, 1000)
