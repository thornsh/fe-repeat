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

function reduce(fn, init, arr) {
  let result
  let currentIndex
  if (arguments.length === 3) {
    result = init
    currentIndex = 0
  } else if (arguments.length === 2) {
    arr = init
    result = arr[0]
    currentIndex = 1
  }
  for (let i = currentIndex; i < arr.length; i++) {
    result = fn(result, arr[i], i, arr)
  }
  return result
}
