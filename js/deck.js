var deck = []
var computerHand = []
var playerHand = []

var SUITS = [
  {name: 'hearts', symbol: '♥'},
  {name: 'diamonds', symbol: '♦'},
  {name: 'spades', symbol: '♠'},
  {name: 'clubs', symbol: '♣'}
]
var FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

SUITS.forEach(function(suit){
  console.log(suit)
  FACES.forEach(function(face){
    deck.push({
      value: face,
      suit: suit.name,
      symbol: suit.symbol
    })
  })
})

deck.sort(function(){
  return 0.5 - Math.random()
})

console.log(deck)
