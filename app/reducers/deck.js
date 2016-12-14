import { combineReducers } from 'redux';
import * as types from 'types';
import Deck from '../services/deck'

const newDeck = new Deck(2)

const deck = (
  state = {
    deck: newDeck
  },
  action
) =>{
  switch(action.type){
    case 'SHUFFLE':
      return {...state, deck: state.deck.shuffle()}
    default: return state
  }
}

const topicReducer = combineReducers({
  deck
});

export default topicReducer;
