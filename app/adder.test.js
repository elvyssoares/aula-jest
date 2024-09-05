const adder = require('./adder')

describe('Adder Module', () => {
  it('deve somar dois números', () => {
    expect(adder(5, 5)).toBe(10)
  })
})
