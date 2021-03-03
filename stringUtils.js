const reverseStr = (str) => {
  return str.split('').reverse().join('')
}

const isPalindrome = (str) => {
  str = str.toUpperCase()
  let temp = reverseStr(str)
  if (str === temp) {
    return true
  } else {
    return false
  }
}

console.log(reverseStr('Hello!'))
console.log(isPalindrome('Kayak laval kaYak'))