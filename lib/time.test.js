const {stringToTimeObject, castToIntAndValidate} = require('./time')

describe('time', () => {
  describe('stringToTimeObject', () => {
    it('casts time string to time object with hours and minutes', () => {
      const outcome = stringToTimeObject('09:06')

      expect(outcome.hours).toEqual(9)
      expect(outcome.minutes).toEqual(6)
    })

    describe('validates the time', () => {
      it('valid=true when given valid hours and minutes', () => {
        const outcome = stringToTimeObject('09:06')

        expect(outcome.valid).toBe(true)
      })

      describe(' hours', () => {
        it('returns valid=false with errors when given non-numeric hours', () => {
          const outcome = stringToTimeObject('x:06')

          expect(outcome.valid).toBe(false)
        })

        it('returns valid=false when given hours greater than 23', () => {
          const outcome = stringToTimeObject('25:06')

          expect(outcome.valid).toBe(false)
        })

        it('returns valid=false when given hours smaller than 0', () => {
          const outcome = stringToTimeObject('-5:06')

          expect(outcome.valid).toBe(false)
        })
      })

      describe('validates minutes', () => {
        it('returns valid=false when given non-numeric minutes', () => {
          const outcome = stringToTimeObject('9:x6')

          expect(outcome.valid).toBe(false)
        })

        it('returns valid=false when given minutes greater than 59', () => {
          const outcome = stringToTimeObject('09:60')

          expect(outcome.valid).toBe(false)
        })

        it('returns valid=false when given minutes smaller than 0', () => {
          const outcome = stringToTimeObject('9:-06')

          expect(outcome.valid).toBe(false)
        })
      })
    })
  })

  describe('castToIntAndValidate', () => {
    describe('validation', () => {
      it('returns descriptive error when given non-numeric valueString', () => {
        const outcome = castToIntAndValidate({
          valueString: 'x', min: 0, max: 1, errors: [], description: 'foo'
        })

        expect(outcome.errors).toContain('foo: "x" is not an integer')
      })

      it('returns valid=false when given valueString greater than max', () => {
        const outcome = castToIntAndValidate({
          valueString: '2', min: 0, max: 1, errors: [], description: 'foo'
        })

        expect(outcome.errors).toContain(
          'foo: "2" can not be greater than 1'
        )
      })

      it('returns valid=false when given valueString smaller than 0', () => {
        const outcome = castToIntAndValidate({
          valueString: '-1', min: 0, max: 1, errors: [], description: 'foo'
        })

        expect(outcome.errors).toContain(
          'foo: "-1" can not be smaller than 0'
        )
      })

      it('returns descriptive error when given valueString shorter than minLength', () => {
        const outcome = castToIntAndValidate({
          description: 'foo',
          errors: [],
          max: 1,
          min: 0,
          minLength: 2,
          valueString: '1'
        })

        expect(outcome.errors).toContain('foo: "1" is ambiguous')
      })
    })
  })
})
