function partial(fn, ...preArgs) {
  return function (...currArgs) {
    return fn(...preArgs, ...currArgs)
  }
}

module.exports = partial
