import CardMesagge from "../cards/CardMesagge"
import { Link } from "react-router-dom"

const Messages = ()=>{
    return (
        <>
          <h3 className="absolute w-full text-center top-3 text-gray-700 font-bold">Mensajes</h3>
          <div className="w-full p-2 flex flex-col">
            <CardMesagge />
            {/* JUST FOR TESTING --> DELETE LATER */}
            <CardMesagge />
            <CardMesagge />
          </div>
          <Link to="/chat" target="_blank">
          <button className="w-11/12 absolute bottom-[10svh] bg-sky-900 text-white p-2 items-center"> Ir al Chat</button>
          </Link>
        </>
    )
}
export default Messages