export const callCallback = (onSuccess) => {
	setTimeout(() => {
		onSuccess({ code: 0 })
	}, 1000)
}
export const callPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ code: 0 })
		}, 1000)
	})
}
