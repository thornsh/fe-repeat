function partial(fn, ...preArgs) {
  return function (...currArgs) {
    return fn(...preArgs, ...currArgs)
  }
}

function curry(fn) {
  const fnArgsLength = fn.length
  return (function nextCurried(preArgs) {
    return function (currArg) {
      const currentPreArgs = preArgs.concat([currArg])
      if (currentPreArgs.length >= fnArgsLength) {
        return fn(...currentPreArgs)
      } else {
        return nextCurried(currentPreArgs)
      }
    }
  })([])
}

function curryProxy(fn) {
  const fnArgsLength = fn.length
  return (function nextCurried(preArgs) {
    const proxyObj = new Proxy(fn, {
      apply(_target, context, args) {
        const currentPreArgs = preArgs.concat([...args])
        if (currentPreArgs.length >= fnArgsLength) {
          return fn.apply(context, currentPreArgs)
        }
        return nextCurried(currentPreArgs)
      }
    })
    return proxyObj
  })([])
}

function compose(...fn) {
  return function (arg) {
    const fnList = fn.slice()
    while (fnList.length) {
      arg = fnList.pop()(arg)
    }
    return arg
  }
}

function compose2(...fn) {
  const [fn1, fn2, ...rest] = fn.reverse()
  function composed(...args) {
    return fn2(fn1(...args))
  }
  if (rest.length) {
    return compose2(...rest.reverse(), composed)
  }
  return composed
}

module.exports = {
  partial,
  curry,
  curryProxy,
  compose,
  compose2
}
