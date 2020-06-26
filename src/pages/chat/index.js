import React from "react";
import "./index.scss";
import PetItem from "../../components/pet-item";
import UserItem from "../../components/user-item";
import DefaultLayout from "../../components/layout";
import InputChat from "../../components/input-chat";

const Chat = () => {
  return (
    <DefaultLayout>
      <section className="chat">
        <div className="chat--content">
          <PetItem />
          <UserItem />
        </div>
        <div className="chat--input">
          <InputChat />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Chat;
