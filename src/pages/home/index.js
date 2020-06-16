import React from "react";
import "./index.scss";
import Pet from "../../components/pet";
import dogAnimation from "../../data/dog.json";
import catAnimation from "../../data/cat.json";

const Home = ({ history }) => {
  return (
    <main className="home">
      <h1> Welcome to PetBot </h1>
      <h2>Are you a dog or a cat person?</h2>
      <div className="home--pets">
        <div className="home--pets--container">
          <Pet
            classes="home--pets--dog"
            animation={dogAnimation}
            history={history}
          />
        </div>
        <Pet
          classes="home--pets--cat"
          animation={catAnimation}
          history={history}
        />
      </div>
    </main>
  );
};

export default Home;
