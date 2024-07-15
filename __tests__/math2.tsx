it('演示匹配器的用法', () => {
	expect(1 + 1).toBe(2)
	expect({
		name: 'zhufeng',
	}).toEqual({
		name: 'zhufeng',
	})
	expect(null).toBeNull()
	expect(undefined).toBeUndefined()
	expect([1, 2, 3]).toContain(2)
	expect({
		age: 10,
		name: 'apple',
	}).toHaveProperty('age')

	expect('123').toContain('2')
})
