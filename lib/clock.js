const showPosition = () => ('o')
const clockface = `
          ${showPosition({index: 0})}
    ${showPosition({index: 11})}           ${showPosition({index: 1})}

 ${showPosition({index: 10})}                 ${showPosition({index: 2})}

${showPosition({index: 9})}         +         ${showPosition({index: 3})}

 ${showPosition({index: 8})}                 ${showPosition({index: 4})}

    ${showPosition({index: 7})}           ${showPosition({index: 5})}
          ${showPosition({index: 6})}
`

module.exports = {
  renderFace: () => (clockface)
}
