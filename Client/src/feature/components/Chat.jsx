import { GrSend } from "react-icons/gr";
//import { IoMdClose } from "react-icons/io";
//import { FaRegWindowMinimize } from "react-icons/fa";
//import { FiSearch } from "react-icons/fi";
import { SlPaperClip } from "react-icons/sl";
import { FaCameraRetro } from "react-icons/fa";
import { MdInsertEmoticon } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
//import SearchBar from "../SearchBar";

const Chat = () => {
  return (
    <>
      <section className="h-full w-full flex flex-col">
        {/* CHAT TOPNAR */}
        <section className="bg-sky-900 relative flex p-2 w-full rounded gap-4">
          <picture className="self-center rounded-full">
            <img
              className="inline-block size-9 rounded-full self-center flex"
              src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
              alt=""
            />
          </picture>
          <aside className="gap-y-0 leading-3">
            <h3 className="text-white text-lg">Sofia Pumarejo</h3>
            <span className="text-white text-xs italic">En Linea</span>
          </aside>
        </section>

        {/* CHAT CONTENT */}
        <section className="grow bg-white w-full space-y-2 overflow-y-auto">
          <div className="bg-blue-600 rounded text-white mx-2">
            You can then use the Modal component as before in your main
            component. When the modal is opened, it will display this chat
            interface. You can further expand this by adding more messages or
            integrating with a real chat system.
          </div>

          <div className="bg-blue-600 rounded text-white mx-2">
            You can then use the Modal component as before in your main
            component. When the modal is opened, it will display this chat
            interface. You can further expand this by adding more messages or
            integrating with a real chat system.
          </div>

          <div className="bg-blue-600 rounded text-white mx-2">
            You can then use the Modal component as before in your main
            component. When the modal is opened, it will display this chat
            interface. You can further expand this by adding more messages or
            integrating with a real chat system.
          </div>

          <div className="bg-blue-600 rounded text-white mx-2">
            You can then use the Modal component as before in your main
            component. When the modal is opened, it will display this chat
            interface. You can further expand this by adding more messages or
            integrating with a real chat system.
          </div>

          <div className="bg-blue-600 rounded text-white mx-2">
            You can then use the Modal component as before in your main
            component. When the modal is opened, it will display this chat
            interface. You can further expand this by adding more messages or
            integrating with a real chat system.
          </div>

          <div className="bg-blue-600 rounded text-white mx-2">
            You can then use the Modal component as before in your main
            component. When the modal is opened, it will display this chat
            interface. You can further expand this by adding more messages or
            integrating with a real chat system.
          </div>

          <div className="bg-blue-600 rounded text-white mx-2">
            You can then use the Modal component as before in your main
            component. When the modal is opened, it will display this chat
            interface. You can further expand this by adding more messages or
            integrating with a real chat system.
          </div>
        </section>

        {/* CHAT INPUT MESSAGE */}
        <section className="bg-stone-100 flex p-2 space-x-2">
          <input
            className="bg-stone-200 p-2 bottom-0 outline-none rounded grow"
            type="text"
            placeholder=". . . "
          />

          <button
            className="rounded flex bg-sky-900 p-2 text-white"
            type="submit"
          >
            <GrSend style={{ color: "#fff", alignSelf: "center" }} />
          </button>
        </section>
      </section>
    </>
  );
};

export default Chat;
