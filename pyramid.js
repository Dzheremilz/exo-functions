const pyramid = (nbBase, reverse, char) => {
  let str = ''
  if (reverse) {
    for (let i = nbBase; i > 0; i--) {
      str += char.repeat(i)
      str += '\n'
    }
  } else {
    for (let i = 0; i <= nbBase; i++) {
      str += char.repeat(i)
      str += '\n'
    }
  }
  return str
}

console.log(pyramid(8, false, '†'))