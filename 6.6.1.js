const word = prompt("Введите слово")
const arr = word.toLowerCase().replaceAll(' ', '').split('')
console.log(arr.reverse().join(''))

if (arr.join('') === arr.reverse().join('')) {
  console.log(`${word} - палиндром`)
} else {
  console.log(`${word} - не палиндром`)
}