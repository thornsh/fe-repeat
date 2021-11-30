const { partial, curry, curryProxy } = require('../../src/functional/partial')
const expect = require('chai').expect

describe('partial函数测试', function () {
  const add = (a, b) => a + b
  it('1 加 1 应该等于 2', function () {
    expect(partial(add, 1)(1)).to.be.equal(add(1, 1))
  })
})

describe('curry函数测试', function () {
  const add = (a, b, c) => a + b + c
  it('add(1,2,3) = 6', function () {
    expect(curry(add)(1)(2)(3)).to.be.equal(add(1, 2, 3))
  })
  it('add(1,2,3) = 6', function () {
    expect(curryProxy(add)(1)(2)(3)).to.be.equal(add(1, 2, 3))
  })
})
