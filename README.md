# No-Build-Decorations
---
The core concept is to stack functions and call them as they are intended to.  
It is very similar to `@` syntax, instead you call `.at` method.  
Let's see some examples.

```JavaScript
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
function() {
	return "How decorated it is!"
}
```

You can even get rid of the `Decorator` line with `const at = Decorator.at`, but it will break the `.ab` harmony.  
If you want a nice alignment: _(which I prefer)_
```JavaScript
let myFun = ()=> "How decorated it is!"

Decorator
.at(log)
.at(bold)
.at(italic)
.do(myFun)
```

A clean way to implement decorations in 25 lines of JavaScript.