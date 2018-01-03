import { connect } from 'react-redux';

import ui from './ui';

const mapStateToProps = (state) => ({
  modal1: state.ui.modal1,
  modal2: state.ui.modal2
});

const mapDispatchToProps = (dispatch) => (
    {openModal1: () => dispatch(openModal1()),
     openModal2: () => dispatch(openModal2()),
     closeModals: () => dispatch(closeModals())}
);


export default connect(mapStateToProps, mapDispatchToProps)(ui);
