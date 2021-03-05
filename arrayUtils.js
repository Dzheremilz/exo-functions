const biggest = (array) => {
  return array.sort((a, b) => b - a)[0]
}

const sortAscend = (array) => {
  return array.sort((a, b) => a - b)
}

const sortAscendOrigin = (array) => {
  let newArray = [...array]
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (newArray[i] < newArray[j]) {
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      }
    }
  }
  return newArray
}

const makeUnique = (array) => {
  return array.sort((a, b) => a - b).filter((a, b, c) => c.indexOf(a) === b)
}

const makeUniqueSet = (array) => {
  return sortAscendOrigin(Array.from(new Set(array)))
}

console.log(biggest([99, 100, 101, 1]))
console.log(sortAscend([99, 100, 101, 1]))
console.log(sortAscendOrigin([99, 100, 101, 1]))
console.log(makeUnique([10, 1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))
console.log(makeUniqueSet([10, 1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))