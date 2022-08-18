// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

const _ = require('lodash');

const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

let words = ['home', 'sky', 'eagle', 'water', 'flower', 'child']
console.log(_.slice(words, 1, 4));
console.log(_.nth(words, 2));
console.log(_.chunk(words, 2))
let numbers = _.random(5, 10)
console.log(numbers)