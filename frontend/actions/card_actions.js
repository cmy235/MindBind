import * as APIUtil from '../util/card_api_util';

export const RECEIVE_ALL_CARDS = "RECEIVE_ALL_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";

export const receiveAllCards = (cards) => {
  return {
    type: RECEIVE_ALL_CARDS,
    cards: cards
  };
};

export const receiveCard = (card) => {
  return {
    type: RECEIVE_CARD,
    card: card
  };
};

export const addCard = (card) => {
  return APIUtil.addCard(card).then( (card)=> {
    dispatch(receiveCard(card));
  });
};

export const editCard = (card) => {
  return APIUtil.editCard(card).then( (card)=> {
    dispatch(receiveCard(card));
  });
};

export const deleteCard = (card) => {
  return APIUtil.deleteCard(card).then( ()=> {
    dispatch(receiveCard());
  });
};

export const fetchCard = (card) => {
  return APIUtil.fetchCard(card).then( (card)=> {
    dispatch(receiveCard(card));
  });
};

export const fetchCards = (deckId) => {
  return APIUtil.fetchCards(deckId).then( ()=> {
    dispatch(receiveCard());
  });
};
