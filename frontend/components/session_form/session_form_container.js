import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModals } from '../../actions/ui_actions';

const mapStateToProps = (state, { type }) => {
  debugger
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    type: type
  };
};

const mapDispatchToProps = (dispatch, { type }) => {
  const processForm = (type === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    closeModals: () => dispatch(closeModals()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
