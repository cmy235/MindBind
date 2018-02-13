import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import {openModal1, openModal2, closeModals} from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session }) => (
    {currentUser: session.currentUser}
);

const mapDispatchToProps = (dispatch) => (
    {logout: () => dispatch(logout()),
    openModal1: () => dispatch(openModal1()),
    openModal2: () => dispatch(openModal2()),
    closeModals: () => dispatch(closeModals())
  }
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
