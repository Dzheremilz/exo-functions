const isOdd = (nb) => {
  if (nb % 2 === 1) {
    return true
  } else {
    return false
  }
}

const isEven = (nb) => {
  return !isOdd(nb)
}

console.log(isEven(77))