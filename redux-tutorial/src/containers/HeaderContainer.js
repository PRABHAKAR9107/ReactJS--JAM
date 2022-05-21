import Header from "../components/Header";

import { connect } from "react-redux";

// import { addToCart } from "../Services/Actions/actions";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
