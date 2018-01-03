import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

const showModal1 = () => (
  <div className="login-form-modal">
    <SessionFormContainer type="login"/>
  </div>
)

const showModal2 = () => (
  <div className="signup-form-modal">
    <SessionFormContainer type="signup"/>
  </div>
)



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
