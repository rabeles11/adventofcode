const fs = require('fs');

const initGameState = {red: 12, green: 13, blue: 14}

const data = fs.readFileSync('input.txt', 'utf8');
const array = data.split('\n');

const separators = /[;:]/;
const regex = /\d+/g;
let result = 0;

array.map((item, index) => {
    let parsedInput = item.split(separators)
    let biggestNumbers = {red: 0, green: 0, blue: 0}; 
    parsedInput.map((item, index) => {
        const parsedColors = item.split(',')
        parsedColors.map((item, index) => {
            if(item.includes('red')) {
                if(Number(item.match(regex)[0]) > biggestNumbers['red']){
                    biggestNumbers['red'] = Number(item.match(regex)[0])
                }
            }
            else if(item.includes('green')) {
                if(Number(item.match(regex)[0]) > biggestNumbers['green']){
                    biggestNumbers['green'] = Number(item.match(regex)[0])
                }

            }
            else if(item.includes('blue')) {
                if(Number(item.match(regex)[0]) > biggestNumbers['blue']){
                    biggestNumbers['blue'] = Number(item.match(regex)[0])
                }
            }
        })
    })
    result += biggestNumbers['red'] * biggestNumbers['green'] * biggestNumbers['blue']
});

console.log(result)