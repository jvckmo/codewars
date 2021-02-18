// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"


function findNeedle(array) {
  console.log(`found the needle at position ${array.indexOf('needle')}`)
  for (let idx = 0; idx < array.length; idx++) {  
    if (array[idx] == 'needle') {
      return `found the needle at position ${idx}`
    }
  }
}
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function howMuchWater(time) {
  return Math.floor(time * .5)
}

console.log(howMuchWater(3))
console.log(howMuchWater(6.7))
console.log(howMuchWater(11.8))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.
// Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.
// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.
// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters
// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.
function songDecoder(song) {
  return song.replace(/(WUB)+/g," ").trim()
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
const findNextSquare = (n) => {
  let root = Math.sqrt(n)
  if (root % 1 == 0) {
    let nextRoot = root+1
    return (nextRoot * nextRoot)
  } else {
    return -1
  }
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(114))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Very simple, given a number, find its opposite.
const opposite = (number) => {
   console.log(number * -1)
  return number * -1
}

opposite(-1)
opposite(24)
opposite(14)
opposite(-34)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
const squareSum = (numbers) => {
  let sum = 0
  for (let x of numbers) {
    sum += x*x
  }
  return sum
}

squareSum([0, 3, 4, 5])
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Make a simple function called greet that returns the most-famous "hello world!".
// const greet = () => {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz '
//   let array = alphabet.split('')
//   let numbers = ['8', '5', '12', '12', '15', '27', '23', '15', '18', '12', '4']
  
// }

// greet()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

const map = (array) => {
  return array.map(item => item * 2)
}

map([1,2,3])
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
const betterThanAverage = (array, myScore) => {
  let scoresTotal = 0
  for (let score of array) {
    scoresTotal += score 
  }
  let scoresAverage = scoresTotal / array.length

  if (scoresAverage > myScore) {
    return false
  } else {
    return true
  }
}

betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)