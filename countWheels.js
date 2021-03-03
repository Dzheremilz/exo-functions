const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {
  return nb_monocycle + nb_moto * 2 + nb_voiture * 4 + nb_limousine * 6
}

console.log(countWheels(10, 20, 7, 2))  // returns 90
console.log(countWheels(2, 3, 4, 5))    // returns 54