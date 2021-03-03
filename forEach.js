const forEach = (array, fn) => {
  for (const elem of array) {
    fn(elem)
  }
}


let x = [1, 2, 3, 4, 5]
forEach(x, console.log)
x.forEach(elem => console.log(elem))