//import React from "react";
/* LIKE */
import { BiLike } from "react-icons/bi";
//import { BiSolidLike } from "react-icons/bi";
/* STARS */
import { CiStar } from "react-icons/ci";
//import { FaStar } from "react-icons/fa";

const CardItem = ({ post }) => {
  return (
    <div className="bg-white shadow relative rounded overflow-hidden m-2 border border-gray-300">
      <a href="./id">
        <div>
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

        {/* CARD BODY */}
        <div className="px-4 flex flex-col py-4 space-y-4">
          <h4 className="font-bold text-md">{post.name}</h4>

          <div>
            <h5>Precio de propiedad</h5>
            <p className="font-bold">${post.price}</p>
          </div>

          {/* AREA AND ROOMS DATA */}
          <ul className="md:grid md:grid-cols-3">
            <li className="flex flex-col">
              <span>Area(m²)</span>
              <p className="font-bold">{post.area}</p>
            </li>

            <li className="flex flex-col">
              <span>Hab.</span>
              <p className="font-bold">{post.bedrooms}</p>
            </li>

            <li className="flex flex-col">
              <span>Baños</span>
              <p className="font-bold">{post.bathrooms}</p>
            </li>
          </ul>

          {/* CONTACT */}
          <button
            className="inline-block bg-cyan-700 rounded-lg
        px-1 py-1 text-sm font-semibold text-white text-center"
          >
            Contactar
          </button>
        </div>
      </a>
    </div>
  );
};

export default CardItem;
