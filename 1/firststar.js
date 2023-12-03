const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
const array = data.split('\n');

const regex = /\d/g;
let result = 0;
array.map((item, index) => {
    const match = item.match(regex);
    let itemResult = 0;
    itemResult = match[0] + match[match.length - 1];
    result += Number(itemResult);
});


console.log(result);