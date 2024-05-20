import { add, subtract } from './utils/math.js'
import { capitalize, lowercase } from './utils/string.js'

console.log('Content script running...')

// Example usage of imported functions
const resultAdd = add(5, 3)
const resultSubtract = subtract(10, 7)
const capitalized = capitalize('hello')
const lowercased = lowercase('WORLD')

console.log('Addition Result:', resultAdd)
console.log('Subtraction Result:', resultSubtract)
console.log('Capitalized String:', capitalized)
console.log('Lowercased String:', lowercased)
