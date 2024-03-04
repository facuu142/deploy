import CardContact from "../cards/CardContact";
import { Link } from "react-router-dom";

const exampleContacts = [
  {
    id: 1,
    name: "John",
    message: "Hello there!",
    date: "2024-03-01",
    image: "",
  },
  {
    id: 2,
    name: "Alice",
    message: "How are you?",
    date: "2024-02-29",
    image: "",
  },
  {
    id: 3,
    name: "Bob",
    message: "Nice to meet you!",
    date: "2024-02-28",
    image: "",
  },
  {
    id: 4,
    name: "Emma",
    message: "Good morning!",
    date: "2024-02-27",
    image: "",
  },
  {
    id: 5,
    name: "Michael",
    message: "What's up?",
    date: "2024-02-26",
    image: "",
  },
  {
    id: 6,
    name: "Sophia",
    message: "Happy birthday!",
    date: "2024-02-25",
    image: "",
  },
  {
    id: 7,
    name: "William",
    message: "Have a great day!",
    date: "2024-02-24",
    image: "",
  },
  {
    id: 8,
    name: "Olivia",
    message: "Take care!",
    date: "2024-02-23",
    image: "",
  },
  {
    id: 9,
    name: "James",
    message: "See you soon!",
    date: "2024-02-22",
    image: "",
  },
  {
    id: 10,
    name: "Charlotte",
    message: "How's everything?",
    date: "2024-02-21",
    image: "",
  },
];

const Messages = () => {
  return (
    <>
      {/* TITLE */}
      <h3 className="absolute w-full text-center top-3 text-gray-700 font-bold">
        Mensajes
      </h3>

      {/* SEARCHBAR */}
      <div className="relative top-4 col-span-3 w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Buscar chats..."
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Buscar
        </button>
      </div>

      {/* ALL CONTACTS */}
      <div className="w-full p-2 flex flex-col mt-4">
        {exampleContacts.map((person) => {
          return <CardContact key={person.id} contact={person} />;
        })}
      </div>
    </>
  );
};
export default Messages;
