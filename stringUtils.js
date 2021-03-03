const reverseStr = (str) => {
  return str.split('').reverse().join('')
}

const isPalindrome = (str) => {
  str = str.toUpperCase()
  let temp = reverseStr(str)
  return str === temp ? true : false
}

console.log(reverseStr('Hello!'))
console.log(isPalindrome('Kayak laval kaYak'))