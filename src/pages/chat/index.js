import React from "react";
import "./index.scss";
import PetItem from "../../components/pet-item";
import UserItem from "../../components/user-item";
import DefaultLayout from "../../components/layout";

const Chat = () => {
  return (
    <DefaultLayout>
      <section className="chat">
        <PetItem />
        <UserItem />
      </section>
    </DefaultLayout>
  );
};

export default Chat;
