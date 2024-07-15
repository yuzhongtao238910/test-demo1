// import { add, minus, multiply, divide } from './math.js'
const { add, minus, multiply, divide } = require('./math')

describe('测试add', () => {
	test('测试2+4=6', () => {
		expect(add(2, 4)).toBe(6)
	})
	it('测试3+3=6', () => {
		expect(add(3, 3)).toBe(6)
	})
})
describe('测试minus', () => {
	test('测试5-1=4', () => {
		expect(minus(5, 1)).toBe(4)
	})
})

describe('测试multiply', () => {
	test('测试5*1=5', () => {
		expect(multiply(5, 1)).toBe(5)
	})
})

describe('测试divide', () => {
	test('测试5/1=5', () => {
		expect(divide(5, 1)).toBe(5)
	})
})
