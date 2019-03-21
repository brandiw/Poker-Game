function deal(){
  shuffle()
  for(var i = 0; i < 5; i++){
    computerHand.push(deck.pop())
  }
  for(var i = 0; i < 5; i++){
    playerHand.push(deck.pop())
  }
}

function shuffle(){
  deck.sort(function(){
    return 0.5 - Math.random()
  })
}
