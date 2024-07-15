import { callCallback, callPromise } from '../src/api'

describe('异步测试', () => {
	it('测试 callCallback', (done) => {
		callCallback((result) => {
			expect(result).toEqual({
				code: 0,
			})
			done()
		})
	})

	it('测试 callPromise-1-done', (done) => {
		callPromise().then((result) => {
			expect(result).toEqual({
				code: 0,
			})
			done()
		})
	})

	it('测试 callPromise-2-async', async () => {
		const result = await callPromise()
		expect(result).toEqual({
			code: 0,
		})
	})

	it('测试 callPromise-3', () => {
		expect(callPromise()).resolves.toEqual({ code: 0 })
	})
})
