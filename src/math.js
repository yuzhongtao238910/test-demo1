/*
 1- 手工测试
 2- 断言
 */
function add(a, b) {
	return a + b
}

function minus(a, b) {
	return a - b
}

function multiply(a, b) {
	return a * b
}

function divide(a, b) {
	return a / b
}
// // 1- 手工测试
// console.log(add(4, 2))
// console.log(minus(4, 2))
// console.log(multiply(4, 2))
// console.log(divide(4, 2))

// // 2- 断言 如果断言为 false，则将一个错误消息写入控制台。如果断言是 true，没有任何反应。
// console.assert(add(4, 2) === 6, '4+2!=6') //
// console.assert(minus(4, 2) === 2, '4-2!=2')
// console.assert(multiply(4, 2) === 18, '4*2!=8')
// console.assert(divide(4, 2), '4/2!=2')

module.exports = {
	add,
	minus,
	multiply,
	divide,
}
