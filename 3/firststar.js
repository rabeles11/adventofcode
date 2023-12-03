const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
const array = [data.split('\n')];
const arrayOfArrays = array[0].map(row => row.split(''))
const regex = /[^0-9.\n]+/g
const regexNumber = /\d/g;

let result = 0;

arrayOfArrays.map((itemArray, indexArray) => {
    itemArray.map((item, index) => {
        if(item.match(regex)){
            let searchFinded = {left: false, right: false, top: false, bottom: false, topLeft: false, topRight: false, bottomLeft: false, bottomRight: false}
            let arrayOfNumbersToSum = [];
            if(itemArray[index + 1].match(regexNumber)){
                searchFinded.right = true;
                let search = true;
                let searchIndexRight = index + 1;
                let DesiredNumber = [];
                while(search){
                        if(itemArray[searchIndexRight] && itemArray[searchIndexRight].match(regexNumber)){
                            DesiredNumber.push(itemArray[searchIndexRight].match(regexNumber)[0])
                            searchIndexRight++;
                        }
                        else{
                            search = false;
                        }
                }
                arrayOfNumbersToSum.push(Number(DesiredNumber.join('')))
            }
            if(itemArray[index - 1].match(regexNumber)){
                searchFinded.left = true;
                let search = true;
                let searchIndexLeft = index - 1;
                let DesiredNumber = [];

                while(search){
                    if(itemArray[searchIndexLeft] && itemArray[searchIndexLeft].match(regexNumber)){
                        DesiredNumber.push(itemArray[searchIndexLeft].match(regexNumber)[0])
                        searchIndexLeft--;
                    }
                    else{
                        search = false;
                    }
                }
                arrayOfNumbersToSum.push(Number(DesiredNumber.reverse().join('')))
            }
            if(arrayOfArrays[indexArray - 1][index].match(regexNumber)){
                searchFinded.top = true;
                let search = true;
                let searchIndexRight = index;
                let DesiredNumber = [];
                while(search){
                        if(arrayOfArrays[indexArray - 1][searchIndexRight] && arrayOfArrays[indexArray - 1][searchIndexRight].match(regexNumber)){
                            DesiredNumber.push(arrayOfArrays[indexArray - 1][searchIndexRight].match(regexNumber)[0])
                            searchIndexRight++;
                        }
                        else{
                            search = false;
                        }
                }

                let searchLeft = true;
                let searchIndexLeft = index - 1;
                let DesiredNumber2 = [];

                while(searchLeft){
                    if(arrayOfArrays[indexArray - 1][searchIndexLeft] && arrayOfArrays[indexArray - 1][searchIndexLeft].match(regexNumber)){
                        DesiredNumber2.push(arrayOfArrays[indexArray - 1][searchIndexLeft].match(regexNumber)[0])
                        searchIndexLeft--;
                    }
                    else{
                        searchLeft = false;
                    }
                }
                arrayOfNumbersToSum.push(Number(DesiredNumber2.reverse().concat(DesiredNumber).join('')))
            }
            if(arrayOfArrays[indexArray + 1][index].match(regexNumber)){
                searchFinded.bottom = true;

                let search = true;
                let searchIndexRight = index;
                let DesiredNumber = [];
                while(search){
                        if(arrayOfArrays[indexArray + 1][searchIndexRight] && arrayOfArrays[indexArray + 1][searchIndexRight].match(regexNumber)){
                            DesiredNumber.push(arrayOfArrays[indexArray + 1][searchIndexRight].match(regexNumber)[0])
                            searchIndexRight++;
                        }
                        else{
                            search = false;
                        }
                }

                let searchLeft = true;
                let searchIndexLeft = index - 1;
                let DesiredNumber2 = [];

                while(searchLeft){
                    if(arrayOfArrays[indexArray + 1][searchIndexLeft] && arrayOfArrays[indexArray + 1][searchIndexLeft].match(regexNumber)){
                        DesiredNumber2.push(arrayOfArrays[indexArray + 1][searchIndexLeft].match(regexNumber)[0])
                        searchIndexLeft--;
                    }
                    else{
                        searchLeft = false;
                    }
                }
                arrayOfNumbersToSum.push(Number(DesiredNumber2.reverse().concat(DesiredNumber).join('')))
            }
            if(arrayOfArrays[indexArray + 1][index + 1].match(regexNumber) && !searchFinded.bottom){
                searchFinded.bottomRight = true;

                let search = true;
                let searchIndexRight = index + 1;
                let DesiredNumber = [];
                while(search){
                        if(arrayOfArrays[indexArray + 1][searchIndexRight] && arrayOfArrays[indexArray + 1][searchIndexRight].match(regexNumber)){
                            DesiredNumber.push(arrayOfArrays[indexArray + 1][searchIndexRight].match(regexNumber)[0])
                            searchIndexRight++;
                        }
                        else{
                            search = false;
                        }
                }

                let searchLeft = true;
                let searchIndexLeft = index + 1 - 1;
                let DesiredNumber2 = [];

                while(searchLeft){
                    if(arrayOfArrays[indexArray + 1][searchIndexLeft] && arrayOfArrays[indexArray + 1][searchIndexLeft].match(regexNumber)){
                        DesiredNumber2.push(arrayOfArrays[indexArray + 1][searchIndexLeft].match(regexNumber)[0])
                        searchIndexLeft--;
                    }
                    else{
                        searchLeft = false;
                    }
                }
                arrayOfNumbersToSum.push(Number(DesiredNumber2.reverse().concat(DesiredNumber).join('')))
            }
            if(arrayOfArrays[indexArray + 1][index - 1].match(regexNumber) && !searchFinded.bottom){
                searchFinded.bottomLeft = true;

                let search = true;
                let searchIndexRight = index - 1;
                let DesiredNumber = [];
                while(search){
                        if(arrayOfArrays[indexArray + 1][searchIndexRight] && arrayOfArrays[indexArray + 1][searchIndexRight].match(regexNumber)){
                            DesiredNumber.push(arrayOfArrays[indexArray + 1][searchIndexRight].match(regexNumber)[0])
                            searchIndexRight++;
                        }
                        else{
                            search = false;
                        }
                }

                let searchLeft = true;
                let searchIndexLeft = index - 1 - 1;
                let DesiredNumber2 = [];

                while(searchLeft){
                    if(arrayOfArrays[indexArray + 1][searchIndexLeft] && arrayOfArrays[indexArray + 1][searchIndexLeft].match(regexNumber)){
                        DesiredNumber2.push(arrayOfArrays[indexArray + 1][searchIndexLeft].match(regexNumber)[0])
                        searchIndexLeft--;
                    }
                    else{
                        searchLeft = false;
                    }
                }
                arrayOfNumbersToSum.push(Number(DesiredNumber2.reverse().concat(DesiredNumber).join('')))
            }
            if(arrayOfArrays[indexArray - 1][index + 1].match(regexNumber) && !searchFinded.top){
                searchFinded.topRight = true;

                let search = true;
                let searchIndexRight = index + 1;
                let DesiredNumber = [];
                while(search){
                        if(arrayOfArrays[indexArray - 1][searchIndexRight] && arrayOfArrays[indexArray - 1][searchIndexRight].match(regexNumber)){
                            DesiredNumber.push(arrayOfArrays[indexArray - 1][searchIndexRight].match(regexNumber)[0])
                            searchIndexRight++;
                        }
                        else{
                            search = false;
                        }
                }

                let searchLeft = true;
                let searchIndexLeft = index + 1 - 1;
                let DesiredNumber2 = [];

                while(searchLeft){
                    if(arrayOfArrays[indexArray - 1][searchIndexLeft] && arrayOfArrays[indexArray - 1][searchIndexLeft].match(regexNumber)){
                        DesiredNumber2.push(arrayOfArrays[indexArray - 1][searchIndexLeft].match(regexNumber)[0])
                        searchIndexLeft--;
                    }
                    else{
                        searchLeft = false;
                    }
                }
                arrayOfNumbersToSum.push(Number(DesiredNumber2.reverse().concat(DesiredNumber).join('')))
            }
            if(arrayOfArrays[indexArray - 1][index - 1].match(regexNumber) && !searchFinded.top){
                searchFinded.topLeft = true;

                let search = true;
                let searchIndexRight = index - 1;
                let DesiredNumber = [];
                while(search){
                        if(arrayOfArrays[indexArray - 1][searchIndexRight] && arrayOfArrays[indexArray - 1][searchIndexRight].match(regexNumber)){
                            DesiredNumber.push(arrayOfArrays[indexArray - 1][searchIndexRight].match(regexNumber)[0])
                            searchIndexRight++;
                        }
                        else{
                            search = false;
                        }
                }

                let searchLeft = true;
                let searchIndexLeft = index - 1 - 1;
                let DesiredNumber2 = [];

                while(searchLeft){
                    if(arrayOfArrays[indexArray - 1][searchIndexLeft] && arrayOfArrays[indexArray - 1][searchIndexLeft].match(regexNumber)){
                        DesiredNumber2.push(arrayOfArrays[indexArray - 1][searchIndexLeft].match(regexNumber)[0])
                        searchIndexLeft--;
                    }
                    else{
                        searchLeft = false;
                    }
                }
                arrayOfNumbersToSum.push(Number(DesiredNumber2.reverse().concat(DesiredNumber).join('')))
            }

            result += arrayOfNumbersToSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        }
    })
});

console.log(result);