import { combineReducers } from 'redux';
import * as types from 'types';
import Deck from '../services/deck'

const deck = new Deck(2)

const players = (
  state = {
    user: {
      name: 'Player',
      hand: [],
      tacos: 100,
      bet: 5
    },
    dealer: {
      name: 'Dealer',
      hand: []
    },
  },
  action
) =>{
  console.log('action:', action);
  switch (action) {
    case 'DEAL_CARDS':
    console.log(action);
    const playingDeck = action.deck
    const hands = [[],[]]
    hands.map(hand => {
      hand.push(playingDeck.shift())
    })
    return {...state,
      dealer: { hand: hands[1] },
      user: { hand: hands[0] }
    }
    default:
      return state;
  }
}

const topicReducer = combineReducers({
  players
});

export default topicReducer;
