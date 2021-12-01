function uniqueBase1(arr) {
  return arr.reduce(
    (pre, curr) => (pre.indexOf(curr) === -1 ? (pre.push(curr), pre) : pre),
    []
  )
}

function uniqueBase2(arr) {
  return [...new Set(arr)]
}

function unique(arr, key) {
  if (!key) {
    return [...new Set(arr)]
  }
  const mapKey = {
    string: (item) => item[key],
    function: (item) => key(item)
  }
  const fn = mapKey[typeof key]
  const obj = arr.reduce((pre, curr) => ((pre[fn(curr)] = curr), pre), {})
  return Object.values(obj)
}
