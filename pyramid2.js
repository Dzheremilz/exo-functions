const reverseStr = (str) => {
  return str.split('\n').reverse().join('\n')
}

const pyramid = (nbBase, reverse, char) => {
  let str = ''
  for (let i = 0; i <= nbBase; i++) {
    str += char.repeat(i)
    str += '\n'
  }
  if (reverse) {
    str = reverseStr(str)
  }
  return str.slice(0, -1)
}

console.log(pyramid(8, true, '†'))