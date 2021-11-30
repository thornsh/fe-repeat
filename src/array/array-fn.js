function map(fn, arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr))
  }
  return result
}

function forEach(fn, arr) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr)
  }
}

function filter(fn, arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr) && result.push(arr[i])
  }
  return result
}
