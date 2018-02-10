const castToIntAndValidate = ({
  valueString, min, max, errors, description, minLength
}) => {
  const valueInt = parseInt(valueString, 10)
  if (valueString.length < minLength) {
    errors.push(
      `${description}: "${valueString}" is ambiguous`
    )
  }
  if (isNaN(valueInt)) {
    errors.push(
      `${description}: "${valueString}" is not an integer`
    )
  }
  if (valueInt > max) {
    errors.push(
      `${description}: "${valueString}" can not be greater than ${max}`
    )
  }
  if (valueInt < min) {
    errors.push(
      `${description}: "${valueString}" can not be smaller than ${min}`
    )
  }

  return {
    errors,
    value: valueInt
  }
}

const stringToTimeObject = (timeString) => {
  const timeStrings = timeString.split(':')
  const errors = []
  const hours = castToIntAndValidate({
    valueString: timeStrings[0],
    min: 0,
    max: 23,
    errors,
    description: 'hours',
    minLength: 1
  })
  const minutes = castToIntAndValidate({
    valueString: timeStrings[1],
    min: 0,
    max: 59,
    errors,
    description: 'minutes',
    minLength: 2
  })

  return {
    errors,
    valid: errors.length === 0,
    hours: hours.value,
    minutes: minutes.value
  }
}

const dateToTimeObject = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  valid: true
})

module.exports = {
  castToIntAndValidate,
  stringToTimeObject,
  dateToTimeObject
}
