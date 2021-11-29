const partial = require('../../src/functional/partial')
const expect = require('chai').expect

describe('partial函数测试', function () {
  const add = (a, b) => a + b
  it('1 加 1 应该等于 2', function () {
    expect(partial(add, 1)(1)).to.be.equal(add(1, 1))
  })
})
