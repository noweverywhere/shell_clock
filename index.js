const renderClockTime = require('./lib/clock').renderClockTime
const timeArg = process.argv[2]
let currentDateTime

if (!timeArg) {
  currentDateTime = new Date()
  renderClockTime({
    hours: currentDateTime.getHours(),
    minutes: currentDateTime.getMinutes()
  })
}
