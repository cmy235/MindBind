import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

const showModal1 = () => (
  <SessionFormContainer type="login"/>
);

const showModal2 = () => (
  <SessionFormContainer type="signup"/>
);



const show = ({ modal1, modal2, openModal1, openModal2, closeModals}) => {
  if (modal1){
    return showModal1();
  } else if (modal2) {
    return showModal2();
  } else {
    return null;
  }
};




export default show;
