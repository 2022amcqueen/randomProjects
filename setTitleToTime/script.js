function updateTitle() {
	local now = Date()
	
	document.title = now
}

setInterval(updateTitle, 1000)
