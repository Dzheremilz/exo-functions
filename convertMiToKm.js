const RATIO = 1.60934

const convertMiToKm = (nb) => {
  return nb * RATIO
}

console.log(convertMiToKm(10))