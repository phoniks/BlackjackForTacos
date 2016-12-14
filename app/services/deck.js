class Card {
  constructor(rank, suit){
    if (!(rank in Card.VALUES)) throw new Error('invalid rank: '+rank)
    this.rank = rank;
    this.suit = suit
    this.value = Card.VALUES[rank]
    this.facingup = false
  }

  forDisplay(){
    return this.facingup ? this.toString() : Card.HIDDEN_CARD
  }

  isFacingUp(){
    return this.facingup === true
  }

  toString(){
    return `${this.rank}${this.suit}`
  }

  isAce(){
    return this.rank === Card.ACE;
  }
}

Card.HIDDEN_CARD = '🂠'
Card.JACK     = 'J'
Card.QUEEN    = 'Q'
Card.KING     = 'K'
Card.ACE      = 'A'
Card.SPADES   = 'SPADES'
Card.CLUBS    = 'CLUBS'
Card.HEARTS   = 'HEARTS'
Card.DIAMONDS = 'DIAMONDS'
Card.SUITS = [Card.SPADES, Card.DIAMONDS, Card.CLUBS, Card.HEARTS]
Card.VALUES = {
  'A': 11,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  'J': 10,
  'Q': 10,
  'K': 10,
}
Card.RANKS = Object.keys(Card.VALUES)

var createDeck = function(numberOfPlayers){
  var s, r;
  var cards = []
  do {
    for (s = 0; s < Card.SUITS.length; s++){
      for (r = 0; r < Card.RANKS.length; r++){
        cards.push(new Card( Card.RANKS[r], Card.SUITS[s]) )
      }
    }
  } while((numberOfPlayers -= 2) > 0)
  return cards
}

class Deck {
  constructor(numberOfPlayers) {
    this.cards = createDeck(numberOfPlayers)
    this.shuffle();
  }

  shuffle() {
    var i = 0, j = 0, temp = null;

    var maxIndex = this.cards.length - 1;
    for (i = maxIndex; i >= 0; i--) {
      j = Math.floor(Math.random() * maxIndex) + 1;
      temp = this.cards[j];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  takeOne(){
    return this.cards.shift()
  }
}

Deck.Card = Card

module.exports = Deck
