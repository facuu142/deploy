import React, { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";

const initPropertyData = {
  name: "",
  description: "",
  type: "Casa",
  bedrooms: 0,
  address: "",
  views: 0,
  price: 0,
  comments: "",
  status: true,
};

const initialErrors = {};

const PropertyForm = () => {
  // fields property
  const [property, setProperty] = useState(initPropertyData);
  const {
    name,
    description,
    type,
    bedrooms,
    address,
    views,
    price,
    comments,
    status,
  } = property;

  // error validation
  const [errors, setErrors] = useState(initialErrors);

  const onSubmit = () => {
    console.log("Still working!!!");
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setProperty({
      ...property,
      [name]: value,
    });
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="bg-white flex flex-col"
      >
        {/* IMAGE */}
        <section className="border-dotted border-2 border-cyan-900 w-full h-20 flex items-center justify-center">
            <MdAddAPhoto style={{fill: "gray", fontSize: "1.5rem"}}/>
        </section>

        {/* PROPERTY NAME */}
        <section className="lg:mb-2">
          <article className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nombre
            </label>

            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                errors.firstName && "border border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-first-name"
              name="name"
              placeholder="Ej: Barrio, Edificio"
              type="text"
              value={name}
              onChange={onInputChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">{errors.firstName}</p>
            )}
          </article>

          {/* DESCRIPTION */}
          <article className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Descripción
            </label>
            <textarea
              className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                errors.lastName && "border border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-last-name"
              name="description"
              placeholder="Agrega comentarios"
              type="text"
              value={address}
              onChange={onInputChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">{errors.lastName}</p>
            )}
          </article>

          <article className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Direccion
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                errors.lastName && "border border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-last-name"
              name="address"
              placeholder="Direccion"
              type="text"
              value={address}
              onChange={onInputChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">{errors.lastName}</p>
            )}
          </article>

          <article className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              ¿Cuantas habitaciones?
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                errors.lastName && "border border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-last-name"
              name="bedrooms"
              placeholder="Habitaciones"
              type="number"
              value={address}
              onChange={onInputChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">{errors.lastName}</p>
            )}
          </article>
        </section>
        {/* PROPERTY ADDRESS & TYPE */}
        <section className="grid grid-cols-2">
          <article className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Precio
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                errors.email && "border border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-password"
              name="price"
              placeholder="Precio"
              type="number"
              value={price}
              onChange={onInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </article>
          <article className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-type"
            >
              Tipo
            </label>
            <article className="relative ">
              <select
                id="grid-type"
                name="type"
                value={type}
                onChange={onInputChange}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>Casa</option>
                <option>Apartamento</option>
                <option>Oficina</option>
              </select>
              <article className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </article>
            </article>
          </article>
        </section>

        {/* CREATE PROPERTY */}
        <section className="w-full">
          <article className="lg:right-0 mx-4">
            <button className="w-full p-3 bg-sky-500 text-white rounded md:h-12">
              Crear
            </button>
          </article>
        </section>
      </form>
    </div>
  );
};

export default PropertyForm;
