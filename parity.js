const isOdd = (nb) => {
  return nb % 2 === 1 ? true : false
}

const isEven = (nb) => {
  return !isOdd(nb)
}

console.log(isEven(78))