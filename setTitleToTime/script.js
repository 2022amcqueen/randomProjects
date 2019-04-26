function updateTitle() {
	let now = Date()
	let formatted = now.match("/\d+:\d+:\d+/")
	
	alert(formatted[1])
	
	document.title = ""
}

setInterval(updateTitle, 1000)
