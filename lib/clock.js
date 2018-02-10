const clockface = (showPosition) => (`
          ${showPosition({index: 0})}
    ${showPosition({index: 11})}           ${showPosition({index: 1})}

 ${showPosition({index: 10})}                 ${showPosition({index: 2})}

${showPosition({index: 9})}         +         ${showPosition({index: 3})}

 ${showPosition({index: 8})}                 ${showPosition({index: 4})}

    ${showPosition({index: 7})}           ${showPosition({index: 5})}
          ${showPosition({index: 6})}
`)

const renderFace = (showPosition) => (
  clockface(showPosition)
)

const renderFacePosition = ({hours, minutes}) => ({index}) => {
  const matchesHoursPosition = (hours && hours % 12) === index
  const matchesMinutesPosition = (Math.floor(minutes / 5)) === index

  switch (true) {
    case (matchesHoursPosition && matchesMinutesPosition): {
      return 'x'
    }
    case (matchesHoursPosition): {
      return 'h'
    }
    case (matchesMinutesPosition): {
      return 'm'
    }
    default: {
      return 'o'
    }
  }
}

module.exports = {
  renderFace,
  renderFacePosition,
  renderClockTime: ({hours, minutes}) => {
    const facePostionRenderFunction = renderFacePosition({hours, minutes})
    console.log(`${hours}:${minutes}`)
    console.log(renderFace(facePostionRenderFunction))
  }
}
