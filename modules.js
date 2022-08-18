// Modules - encapsulated code (only share minimum)
// CommonJS, every file is module (by default)
const names = require('./namesmodule'); //import names
const sayHi = require('./secondmodule'); //import sayHi
const data = require('./alternative');
require('./mind-granade')

// console.log(data) 

// sayHi('Helio');
// sayHi(names.firstName);
// sayHi(names.secondName);