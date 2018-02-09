const clock = require('./clock')

describe('clock', () => {
  describe('renderFace', () => {
    it('returns graphical clockface', () => {
      expect(clock.renderFace()).toEqual(`
          o
    o           o

 o                 o

o         +         o

 o                 o

    o           o
          o
`)
    })
  })
})
