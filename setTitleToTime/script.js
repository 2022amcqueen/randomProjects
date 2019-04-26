function updateTitle() {
	let now = Date()
	let formatted = now.match("/\d+:\d+:\d+/")
	
	alert(typeof(formatted))
	
	document.title = ""
}

setInterval(updateTitle, 1000)
