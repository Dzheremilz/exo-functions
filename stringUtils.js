const reverseStr = (str) => {
  return str.split('').reverse().join('')
}

const reverseStr2 = (str) => {
  return (str === '') ? '' : reverseStr2(str.substr(1)) + str.charAt(0);
}

const reverseStr3 = (str) => {
  let str2 = str.split('')
  for (let i = 0, j = str2.length - 1; i < (str2.length / 2); i++) {
    [str2[i], str2[j]] = [str2[j], str2[i]]
    j--;
  }
  str2 = str2.join('')
  return str2
}

const isPalindrome = (str) => {
  str = str.toUpperCase()
  let temp = reverseStr(str)
  return str === temp ? true : false
}

console.log(reverseStr('Hello!'))
console.log(reverseStr2('Hello!'))
console.log(reverseStr3('AbCdEfGhIjKlMnOpQrStUvWxYz!'))

console.log(isPalindrome('Kayak laval kaYak'))