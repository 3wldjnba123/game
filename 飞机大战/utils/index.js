//throttle (思路：等待执行完一个计时器才能再执行setTimeout，关键词return;)
function throttle(fn, delay = 1000) {
	//this指向window, window.throttle()
	let timer; //必须的用闭包缓存私有变量timer
	return function(e) { //闭包函数才代表addEventListener内的函数，具备e参数，this指向元素，
		if (timer) {
			return;
		}
		timer = setTimeout(() => {
			fn.call(this, e); // fn.apply(this, arguments);
			timer = null
		}, delay);
	}
}
// p.addEventListener("drag", throttle((e) => { //如上fn this作用域===父级函数闭包this作用域，那么就去找父级函数被调用地方的上级this
// 	console.log("target", e.target, "指向Plane", this);
// }, 1000))

// debounce（思路: 用户每一个操作都会执行setTimeout，但是在计时内被删除了，关键词clearTimeout(timer);）
function debounce(fn, delay = 200) {
	let timer = null;
	return function(e) {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.call(this, e)
			timer = null; //这一步不影响实际效果，如没有无法就是多执行了一个clearTimeout(timer);
		}, delay);
	}
}
