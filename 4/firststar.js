const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');

const cardArray = data.split('\n');
const cardData = [];

cardArray.map((item, index) => {
    const [cardInfo, numbers] = item.split(':');
    const [cardName, cardNumbers] = cardInfo.split(' ');
    const [winningNumbers, scratchNumbers] = numbers.trim().split(' | ');
    cardData.push({
      cardName: cardName + cardNumbers,
      winningNumbers: winningNumbers.split(' ').map(Number).filter(item => item !== 0),
      scratchNumbers: scratchNumbers.split(' ').map(Number).filter(item => item !== 0),
    });
    
})

let result = 0;

cardData.map((card, index) => {
    //const regexPattern = new RegExp(`^(${card.winningNumbers.map(number => `${number}`).join('|')})$`);
    let winningCount = 0;
    card.winningNumbers.map((number, index) => {
        if(card.scratchNumbers.includes(number) && winningCount != 0){
            winningCount *= 2;
            console.log(winningCount, number);
        }
        if(card.scratchNumbers.includes(number) && winningCount === 0){
            winningCount = 1
            console.log(winningCount, number);
        }
    })
    console.log(card.cardName, winningCount)

    result += winningCount;
})

console.log(result)