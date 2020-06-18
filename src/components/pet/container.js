import { choosePet } from "../../actions";
import { connect } from "react-redux";
import Pet from "../../components/pet";
//import Home from "../../pages/home";

const mapStateToProps = (state) => {
  return { ...state, pet: state.pet };
};

const mapDispatchToProps = (dispatch) => {
  return {
    choosePet: (pet) => dispatch(choosePet(pet)),
  };
};

const createConnection = connect(mapStateToProps, mapDispatchToProps);

const PetContainer = createConnection(Pet);

export default PetContainer;
