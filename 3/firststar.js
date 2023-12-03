const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
const array = [data.split('\n')];
const arrayOfArrays = array[0].map(row => row.split(''))
const regex = /[^0-9.\n]+/g
const regexNumber = /\d/g;

let result = 0;

function search(array, index, rightDirection){
    let search = true;
    let searchIndex = index;
    let DesiredNumber = [];
    while(search){
            if(array[searchIndex] && array[searchIndex].match(regexNumber)){
                DesiredNumber.push(array[searchIndex].match(regexNumber)[0])
                if(rightDirection){
                    searchIndex++;
                }
                else{
                    searchIndex--;
                }
            }
            else{
                search = false;
            }
    }
    return DesiredNumber;
}
function searchParent(array, parentIndex, index, regexNumber, rightDirection){
    let search = true;
    let searchIndex = index;
    let DesiredNumber = [];
    while(search){
        if(array[parentIndex] && array[parentIndex][searchIndex] && array[parentIndex][searchIndex].match(regexNumber)){
            DesiredNumber.push(array[parentIndex][searchIndex].match(regexNumber)[0]);
            if(rightDirection){
                searchIndex++;
            } else {
                searchIndex--;
            }
        } else {
            search = false;
        }
    }
    return DesiredNumber;
}


arrayOfArrays.map((itemArray, indexArray) => {
    itemArray.map((item, index) => {
        if(item.match(regex)){
            let searchFinded = {left: false, right: false, top: false, bottom: false, topLeft: false, topRight: false, bottomLeft: false, bottomRight: false}
            let arrayOfNumbersToSum = [];
            if(itemArray[index + 1].match(regexNumber)){
                searchFinded.right = true;
                arrayOfNumbersToSum.push(Number(search(itemArray, index + 1, true).join('')))
            }
            if(itemArray[index - 1].match(regexNumber)){
                searchFinded.left = true;
                arrayOfNumbersToSum.push(Number(search(itemArray, index - 1, false).reverse().join('')))
            }
            if(arrayOfArrays[indexArray - 1][index].match(regexNumber)){
                searchFinded.top = true;
                arrayOfNumbersToSum.push(Number(searchParent(arrayOfArrays,indexArray-1,index-1,regexNumber,false).reverse().concat(searchParent(arrayOfArrays,indexArray-1,index,regexNumber,true)).join('')))
            }
            if(arrayOfArrays[indexArray + 1][index].match(regexNumber)){
                searchFinded.bottom = true;
                arrayOfNumbersToSum.push(Number(searchParent(arrayOfArrays,indexArray+1,index-1,regexNumber,false).reverse().concat(searchParent(arrayOfArrays,indexArray+1,index,regexNumber,true)).join('')))
            }
            if(arrayOfArrays[indexArray + 1][index + 1].match(regexNumber) && !searchFinded.bottom){
                searchFinded.bottomRight = true;
                arrayOfNumbersToSum.push(Number(searchParent(arrayOfArrays,indexArray+1,index+1-1,regexNumber,false).reverse().concat(searchParent(arrayOfArrays,indexArray+1,index+1,regexNumber,true)).join('')))
            }
            if(arrayOfArrays[indexArray + 1][index - 1].match(regexNumber) && !searchFinded.bottom){
                searchFinded.bottomLeft = true;
                arrayOfNumbersToSum.push(Number(searchParent(arrayOfArrays,indexArray+1,index-1-1,regexNumber,false).reverse().concat(searchParent(arrayOfArrays,indexArray+1,index-1,regexNumber,true)).join('')))
            }
            if(arrayOfArrays[indexArray - 1][index + 1].match(regexNumber) && !searchFinded.top){
                searchFinded.topRight = true;
                arrayOfNumbersToSum.push(Number(searchParent(arrayOfArrays,indexArray-1,index+1-1,regexNumber,false).reverse().concat(searchParent(arrayOfArrays,indexArray-1,index+1,regexNumber,true)).join('')))
            }
            if(arrayOfArrays[indexArray - 1][index - 1].match(regexNumber) && !searchFinded.top){
                searchFinded.topLeft = true;
                arrayOfNumbersToSum.push(Number(searchParent(arrayOfArrays,indexArray-1,index -1-1,regexNumber,false).reverse().concat(searchParent(arrayOfArrays,indexArray-1,index-1,regexNumber,true)).join('')))
            }

            result += arrayOfNumbersToSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        }
    })
});

console.log(result);