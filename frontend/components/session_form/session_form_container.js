import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { type }) => {
  const processForm = (type === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    openModal2: () => dispatch(closeModals())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
