class Decorator {
	constructor() {
		this.stack = []
	}
	at(fun) {
		this.stack.unshift(fun)
		return this
	}
	_do(fun){
		for (let decoration of this.stack) {
			fun = decoration(fun)
		}
		fun()
	}
	set do(fun) {
		this._do(fun)
	}
	get do(){
		return this._do
	}
	static at(arg) {
		return new Decorator().at(arg)
	}
}
