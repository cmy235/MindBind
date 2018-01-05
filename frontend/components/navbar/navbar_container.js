import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './Navbar';
import {openModal1, openModal2} from '../../actions/ui_actions';

const mapStateToProps = ({ session }) => (
    {currentUser: session.currentUser}
);

const mapDispatchToProps = (dispatch) => (
    {logout: () => dispatch(logout()),
    openModal1: () => dispatch(openModal1()),
    openModal2: () => dispatch(openModal2())
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
