import React from 'react';
import { Link } from 'react-router-dom';

const DeckIndexItem = ({deck}) => {
  debugger
  return (
    <div>
    <li>{deck.id}</li>
    <li>{deck.title}</li>
  </div>
  )
};

export default DeckIndexItem;
