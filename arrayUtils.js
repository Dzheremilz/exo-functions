const biggest = (array) => {
  return array.sort((a, b) => b - a)[0]
}

const sortAscend = (array) => {
  return array.sort((a, b) => a - b)
}

const makeUnique = (array) => {
  return array.sort((a, b) => a - b).filter((a, b, c) => c.indexOf(a) === b)
}

console.log(biggest([99, 100, 101, 1]))
console.log(sortAscend([99, 100, 101, 1]))
console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))