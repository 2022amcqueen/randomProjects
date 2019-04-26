function updateTitle() {
	let now = Date()
	
	document.title = now
}

setInterval(updateTitle, 1000)
