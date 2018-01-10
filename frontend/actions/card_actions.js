import * as APIUtil from '../util/card_api_util';

export const RECEIVE_ALL_CARDS = "RECEIVE_ALL_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

export const receiveAllCards = (cards) => {
  return {
    type: RECEIVE_ALL_CARDS,
    cards: cards
  };
};

export const receiveCard = (payload) => {
  debugger
  return {
    type: RECEIVE_CARD,
    payload: payload
  };
};

export const removeCard = ({card, deck}) => {
  return {
    type: REMOVE_CARD,
    card: card
  };
};

export const addCard = (card) => {
  debugger
  return APIUtil.addCard(card).then( (payload)=> {
    dispatch(receiveCard(payload));
  });
};


export const deleteCard = (cardId) => {
  return APIUtil.deleteCard(cardId).then( ()=> {
    dispatch(removeCard());
  });
};

// export const fetchCard = (card) => {
//   return APIUtil.fetchCard(card).then( (card)=> {
//     dispatch(receiveCard(card));
//   });
// };

export const fetchCards = (deckId) => {
  return APIUtil.fetchCards(deckId).then( ()=> {
    dispatch(receiveCard());
  });
};
