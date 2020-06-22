import React from "react";
import "./index.scss";
import Pet from "../../components/pet";
import DefaultLayout from "../../components/layout";

const Chat = () => {
  return (
    <DefaultLayout>
      <section className="chat">
        <Pet classes={"chat--pet"} />
      </section>
    </DefaultLayout>
  );
};

export default Chat;
