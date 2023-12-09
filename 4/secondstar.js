const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');

const cardArray = data.split('\n');
const cardData = [];
let numberOfCards = 0;

cardArray.map((item, index) => {
    const [cardInfo, numbers] = item.split(':');
    const [cardName, cardNumbers] = cardInfo.split(/\s+/); 
    const [winningNumbers, scratchNumbers] = numbers.trim().split(' | ');
    cardData.push({
      cardName: cardName,
      cardNumber: Number(cardNumbers),
      winningNumbers: winningNumbers.split(' ').map(Number).filter(item => item !== 0),
      scratchNumbers: scratchNumbers.split(' ').map(Number).filter(item => item !== 0),
    });
    })


    
const cardRecurisve = (arrayOfWinnings) => {
        if(
            arrayOfWinnings.length === 0
        )
        {
            return;
        }
        else {
            arrayOfWinnings.map((card, index) => {
                const copyCards = [];
                let numberOfWins = 0;
                card.winningNumbers.map((number, index) => {
                    if(card.scratchNumbers.includes(number)){
                        numberOfWins++;
                    }
                })
                if(numberOfWins >= 1){
                    for (let i = card.cardNumber+1; i <= card.cardNumber + numberOfWins; i++) {
                        const desiredCard = cardData.find((card) => card.cardNumber === i);
                        copyCards.push(desiredCard);
                    }
                    
                }
                numberOfCards += 1;
                cardRecurisve(copyCards);
            })
        }
    }

cardRecurisve(cardData);
console.log(numberOfCards);