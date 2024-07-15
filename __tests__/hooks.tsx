let counter = 0
describe('counter测试代码', () => {
	beforeAll(() => {
		console.log('beforeAll')
		counter++
	})

	beforeEach(() => {
		console.log('beforeEach')
		counter++
	})

	afterEach(() => {
		console.log('afterEach')
		counter++
	})

	afterAll(() => {
		console.log('afterAll')
		counter++
		console.log(counter, '====')
	})

	test('测试用例1', () => {
		console.log('测试用例1')
		counter++
	})

	test('测试用例2', () => {
		console.log('测试用例2')
		counter++
	})
})
