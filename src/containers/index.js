import { choosePet } from "../actions";
import { connect } from "react-redux";
import Pet from "../components/pet";
const mapStateToProps = (store) => {
  return store;
};

const mapDispatchToProps = (dispatch) => {
  return {
    choosePet() {
      dispatch(choosePet);
    },
  };
};

const petContainer = connect(mapStateToProps, mapDispatchToProps)(Pet);
