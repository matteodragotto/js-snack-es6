const myArray = [
  'Mela',
  'Pera',
  'Banana',
  'Arancia',
  'Uva',
  'Pesca',
  'Kiwi'
]

const a = 2
const b = 5

function newArray (array, numero1, numero2) {
  const myNewArray = array.slice (numero1, numero2)
  return myNewArray
}

console.log(newArray(myArray, a, b));
