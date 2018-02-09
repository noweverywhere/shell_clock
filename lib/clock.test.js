const clock = require('./clock')

describe('clock', () => {
  describe('renderFace', () => {
    it('returns graphical clockface', () => {
      const faceRenderer = () => ('o')
      expect(clock.renderFace(faceRenderer)).toEqual(`
          o
    o           o

 o                 o

o         +         o

 o                 o

    o           o
          o
`)
    })

    it('calls given function  with index foreach face position', () => {
      const spy = jest.fn()

      clock.renderFace(spy)

      expect(spy.mock.calls.length).toEqual(12)
      expect(spy.mock.calls[0][0]).toEqual({index: 0})
    })
  })

  describe('renderFacePosition returns a function that', () => {
    it('returns "h" when index matches hours', () => {
      const output = clock.renderFacePosition({hours: 3})

      expect(output({index: 3})).toEqual('h')
    })

    it('returns "o" when index does not match hours or minutes', () => {
      const output = clock.renderFacePosition({})

      expect(output({index: 2})).toEqual('o')
    })

    it('returns "m" when index matches minutes', () => {
      const output = clock.renderFacePosition({minutes: 16})

      expect(output({index: 3})).toEqual('m')
    })

    it('returns "x" when index matches hours and  minutes', () => {
      const output = clock.renderFacePosition({hours: 12, minutes: 0})

      expect(output({index: 0})).toEqual('x')
    })
  })
})
