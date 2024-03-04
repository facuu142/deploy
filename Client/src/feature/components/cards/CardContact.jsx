import React, { useContext } from "react";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { HomeContext } from "../../../context/HomeContext";

const CardContact = ({ contact }) => {

  const {homeHookData} = useContext(HomeContext)

  return (
    <a onClick={homeHookData.handlerModalOpen}>
      <section
        className="relative flex w-full gap-2 px-2 transform-all duration-100 border-b
    border-sky-900 hover:border-slate-400 hover:bg-blue-200 cursor-pointer hover:scale-110"
      >
        <picture className="self-center">
          <img
            className="inline-block size-9 rounded-full self-center flex  object-cover"
            src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
            alt=""
          />
        </picture>
        <aside className="gap-y-0 leading-3 p-2 w-full ml-1">
          <h3 className="text-lg flex">
            {contact && contact.name}
            {/* <TbPointFilled
            style={{ color: "green", fontSize: "1.6rem" }}
            className="green self-center"
          /> */}
          </h3>
          <span className="text-xs italic">{contact && contact.message}</span>
        </aside>

        <span className="absolute text-sm right-1">
          {contact && contact.date}
        </span>
      </section>
    </a>
  );
};

export default CardContact;
