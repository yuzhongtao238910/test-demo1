import { exec, createInstance, getUsers, delay } from '../src/mock'
import axios from 'axios'
jest.mock('axios') // 让jest自己模拟axios模块
it('测试exec', () => {
	let callback = jest.fn()

	//callback.mockReturnValueOnce('abc')
	//callback.mockReturnValueOnce('def')
	exec(callback)
	// 检测被调用了
	expect(callback).toBeCalled()
	// expect
	expect(callback).toBeCalledTimes(2)
	expect(callback).toBeCalledWith('123')
	// console.log(callback.mock)
})

it('测试 createInstance', () => {
	let callback = jest.fn()
	createInstance(callback)
	console.log(callback.mock)
})

it('测试 getUsers', async () => {
	axios.get.mockResolvedValue({
		data: {
			code: 0,
		},
	})
	const res = await getUsers()
	expect(res.data).toEqual({
		code: 0,
	})
})

jest.useFakeTimers()
it('测试 delay', (done) => {
	delay((res) => {
		expect(res).toBe(5000)
		done()
	}, 5000)
	jest.runAllTimers()
})
