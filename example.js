function italic(fun) {
	return () => `<i>${fun()}</i>`
}

function bold(fun) {
	return () => `<b>${fun()}</b>`
}

function log(fun) {
	return () => document.body.innerHTML = fun()
}

Decorator
.at(log)
.at(bold)
.at(italic)
.do=
function (){
	return "How decorated it is!"
}