const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf8').replaceAll("one", "o1ne").replaceAll("two", "t2wo").replaceAll("three", "t3hree")
.replaceAll("four", "f4our").replaceAll("five", "f5ive").replaceAll("six", "s6ix")
.replaceAll("seven", "s7even").replaceAll("eight", "e8ight").replaceAll("nine", "n9ine");;

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
