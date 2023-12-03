const fs = require('fs');

const initGameState = {red: 12, green: 13, blue: 14}

const data = fs.readFileSync('input.txt', 'utf8');
const array = data.split('\n');

const separators = /[;:]/;
const regex = /\d+/g;
let result = 0;

array.map((item, index) => {
    let parsedInput = item.split(separators)
    let validInput = true;
    parsedInput.map((item, index) => {
        const parsedColors = item.split(',')
        parsedColors.map((item, index) => {
            if(item.includes('red')) {
                if(Number(item.match(regex)[0]) > initGameState['red']){
                    validInput = false;
                }
            }
            else if(item.includes('green')) {
                if(item.match(regex)[0] > initGameState['green']){
                    validInput = false;
                }
            }
            else if(item.includes('blue')) {
                if(item.match(regex)[0]> initGameState['blue']){
                    validInput = false;
                }
            }
        })
    })
    if(validInput){
        result += Number(item.split(":")[0].match(regex)[0])
    }
});

console.log(result)