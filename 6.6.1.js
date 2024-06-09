let word = prompt("Введите слово")
let arr = word.toLowerCase().replaceAll(' ', '').split('')
console.log(arr.reverse().join(''))

if (arr.join('') === arr.reverse().join('')) {
  console.log(`${word} - палиндром`)
} else {
  console.log(`${word} - не палиндром`)
}