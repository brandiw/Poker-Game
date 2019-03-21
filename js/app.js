document.addEventListener('DOMContentLoaded', function(){
  startGame()
})

function startGame(){
  deal()
  displayHand(computerHand, 'computer-hand', false)
  displayHand(playerHand, 'player-hand', true)
}

function displayHand(hand, id, visible){
  var container = document.getElementById(id)
  hand.forEach(function(card){
    var div = document.createElement('div')
    if(visible){
      div.classList.add('card')
      div.textContent = card.value + ' ' + card.symbol
    }
    else {
      div.classList.add('card-back')
    }
    container.append(div)
  })
}
