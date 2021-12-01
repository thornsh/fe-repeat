function flatten1(arr) {
  let result = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item))
    } else {
      result.push(item)
    }
  })
  return result
}

function flatten2(arr) {
  return arr.reduce(
    (pre, curr) => pre.concat(Array.isArray(curr) ? flatten2(curr) : curr),
    []
  )
}

function flatten3(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
