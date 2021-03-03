const add = (nb1, nb2) => {
  return nb1 + nb2
}

const sub = (nb1, nb2) => {
  return nb1 - nb2
}

const mul = (nb1, nb2) => {
  return nb1 * nb2
}

const div = (nb1, nb2) => {
  return nb1 / nb2
}

const calc = (Op, nb1, nb2) => {
  if (Op === '+') {
    return add(nb1, nb2)
  } else if (Op === '-') {
    return sub(nb1, nb2)
  } else if (Op === '*') {
    return mul(nb1, nb2)
  } else if (Op === '/') {
    return div(nb1, nb2)
  }
}

console.log(calc('/', 2, 3))