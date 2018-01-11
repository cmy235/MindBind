import * as APIUtil from '../util/card_api_util';

export const RECEIVE_ALL_CARDS = "RECEIVE_ALL_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

const receiveAllCards = (cards) => {
  return {
    type: RECEIVE_ALL_CARDS,
    cards: cards
  };
};

const receiveCard = ({card, deck}) => {
  
  return {
    type: RECEIVE_CARD,
    card: card,
    deck: deck
  };
};

const removeCard = ({card, deck}) => {
  
  return {
    type: REMOVE_CARD,
    cardId: card.id,
    deck: deck
  };
};

export const addCard = (card) => dispatch => {
  return APIUtil.addCard(card).then( (payload)=> {
    dispatch(receiveCard(payload));
  });
};


export const deleteCard = (cardId) => dispatch => {
  
  return APIUtil.removeCard(cardId).then( (payload)=> {
    
    dispatch(removeCard(payload));
  });
};

// export const fetchCard = (card) => dispatch => {
//   return APIUtil.fetchCard(card).then( (card)=> {
//     dispatch(receiveCard(card));
//   });
// };

export const fetchCards = (deckId) => dispatch => {
  return APIUtil.fetchCards(deckId).then( ()=> {
    dispatch(receiveCard());
  });
};
