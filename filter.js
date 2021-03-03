const filter = (array, fn) => {
  const tmpArray = [...array]
  const newArray = []
  for (const elem of tmpArray) {
    if (fn(elem)) {
      newArray.push(elem)
    }
  }
  return newArray
}

let array = [1, 2, 3, 4, 5, 6]
let array2 = filter(array, (a) => a > 3)

console.log(array2)