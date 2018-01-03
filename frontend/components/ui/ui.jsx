import React from 'react';
import { Link } from 'react-router-dom';



const show = ({ modal1, modal2, openModal1, openModal2, closeModals}) => {
  if (modal1){
    return showModal1();
  } else if (modal2) {
    return showModal2();
  }
};



export default show;
