const count = (min, max, step) => {
  for (; min <= max; min += step) {
    console.log(min)
  }
}

count(0, 20, 4)