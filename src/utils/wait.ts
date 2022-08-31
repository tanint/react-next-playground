export const wait = (timer = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve({})
    }, timer)
  })
}
