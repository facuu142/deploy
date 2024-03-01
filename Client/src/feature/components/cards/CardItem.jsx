//import React from "react";
/* LIKE */
import { BiLike } from "react-icons/bi";
//import { BiSolidLike } from "react-icons/bi";
/* STARS */
import { CiStar } from "react-icons/ci";
//import { FaStar } from "react-icons/fa";

const CardItem = () => {
  return (
    <div className="bg-white shadow relative rounded overflow-hidden m-2">
     <a href="./id">
      <div >
        {/* IMAGE RESOURCE */}
        <img
          className="w-full"
          src="https://umbral.co/wp-content/uploads/2021/11/DSC9262-P2.png"
          alt="Sunset in the mountains"
        />
        {/* LIKE BUTTON */}
        <BiLike
          onClick={() => console.log("Property liked!")}
          style={{ color: "#ffffff", fontSize: "1.5rem" }}
          className="absolute top-0 right-0 m-2"
        />

        {/* STARS */}
        <CiStar
          onClick={() => console.log("Property stars!")}
          style={{ color: "#ffffff", fontSize: "1.5rem" }}
          className="absolute top-0 left-0 m-2"
        />
      </div>

      <div className="px-4 flex flex-col py-4 space-y-2">
        <h4 className="font-bold text-md">Nombre de la propiedad</h4>
        <p className="text-gray-700 text-base">Dir 34 #12-54</p>

        {/* MOST COMMON POST */}
        <span
          className="inline-block bg-cyan-700 rounded-lg
        px-1 py-1 text-sm font-semibold text-white text-center"
        >
          Contactar
        </span>
      </div>
      </a>
    </div>
  );
};

export default CardItem;
