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

const calc = (operator, nb1, nb2) => {
  if (operator === '+') {
    return add(nb1, nb2)
  } else if (operator === '-') {
    return sub(nb1, nb2)
  } else if (operator === '*') {
    return mul(nb1, nb2)
  } else if (operator === '/') {
    return div(nb1, nb2)
  }
}

console.log(calc('*', 10, 2))