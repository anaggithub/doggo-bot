import React from "react";
import "./index.scss";
import Pet from "../../components/pet/container";
import dogAnimation from "../../data/dog.json";
import catAnimation from "../../data/cat.json";
import { useDispatch } from "react-redux";
import { choosePet } from "../../actions/";

const Home = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  function handleOnClick(pet) {
    dispatch(choosePet(pet));
    history.push("/chat");
  }

  return (
    <div className="home">
      <header className="home--header">
        <h1> Welcome to PetBot </h1>
        <h2>Are you a dog or a cat person?</h2>
      </header>
      <main className="home--pets-container">
        <Pet
          classes="home--pets dog"
          animation={dogAnimation}
          history={history}
          handleOnClick={(e) => handleOnClick("dog")}
        />

        <Pet
          classes="home--pets cat"
          animation={catAnimation}
          history={history}
          handleOnClick={(e) => handleOnClick("cat")}
        />
      </main>
    </div>
  );
};

export default Home;
