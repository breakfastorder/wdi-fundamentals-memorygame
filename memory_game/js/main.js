console.log("up and running!");

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

function checkForMatch()
{
  if(cardsInPlay[0] === cardsInPlay[1])
  {
    console.log("You found a match!");
  }else{
    console.log("Sorry, try again.");
  }
}


function flipCard(cardId)
{
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  if(cardsInPlay.length === 2)
  {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        checkForMatch()
    } else {
        checkForMatch()
    }
  }

}

flipCard(0);
flipCard(2);
