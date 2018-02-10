const renderClockTime = require('./lib/clock').renderClockTime
const { stringToTimeObject, dateToTimeObject } = require('./lib/time')
const timeArg = process.argv[2]
const timeObject = (timeArg)
  ? stringToTimeObject(timeArg) : dateToTimeObject(new Date())

if (timeObject.valid) {
  renderClockTime(timeObject).map((x) => console.log(x))
} else {
  console.log(
    `"${timeArg}" is not a valid time\n\t${timeObject.errors.join('\n\t')}`
  )
}
