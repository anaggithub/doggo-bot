import React, { useState } from "react";
import "./index.scss";
import PetItem from "../../components/pet-item";
import UserItem from "../../components/user-item";
import DefaultLayout from "../../components/layout";
import InputChat from "../../components/input-chat";

const Chat = () => {
  const [message, setMessage] = useState({});
  const [chat, setChat] = useState([
    {
      id: 0,
      emitter: "Pet",
      message: ["Hola humano!", "Có te llamas?"],
    },
  ]);
  return (
    <DefaultLayout>
      <section className="chat">
        <div className="chat--content">
          {chat.map((message, index) =>
            message.emitter === "Pet" ? (
              <PetItem text={message.message} key={index} />
            ) : (
              <UserItem key={index} text={message.message} key={index} />
            )
          )}
        </div>
        <div className="chat--input">
          <InputChat />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Chat;
