import React, { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";

const initPropertyData = {
  name: "",
  description: "",
  type: "Casa",
  bedrooms: 0,
  bathrooms: 0,
  address: "",
  price: 0,
  status: true,
};

const PropertyForm = () => {
  // fields property
  const [propertyForm, setPropertyForm] = useState(initPropertyData);
  const {
    name,
    description,
    type,
    bedrooms,
    bathrooms,
    address,
    price,
  } = propertyForm;

  // error validation
  const [errors, setErrors] = useState({});

  const isValidated = () => {
    const error = {}
    const emptyInputs = Object.keys(propertyForm).filter(
      (val) => propertyForm[val] === "" || propertyForm[val] === 0
    );

    console.log("empty property inputs: ", emptyInputs);

    
    emptyInputs.map((val) => {
      error[val] = `El campo ${val} no puede ir vacio`
    });

    setErrors(error)

    if(emptyInputs.length > 0) return false

    return true
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(isValidated()) console.log("It should do something with this data: ", propertyForm)
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setPropertyForm({
      ...propertyForm,
      [name]: value,
    });
  };

  return (
      <form onSubmit={onSubmit} className="bg-white flex flex-col px-4">
        {/* IMAGE */}
        <section className="border-dotted border-2 border-cyan-900 w-full h-20 flex items-center justify-center">
          <MdAddAPhoto style={{ fill: "gray", fontSize: "1.5rem" }} />
        </section>

        {/* PROPERTY NAME */}
        <section className="lg:mb-2">
          <article className="w-full mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nombre
            </label>

            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                errors.name && "border border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-first-name"
              name="name"
              placeholder="Ej: Barrio, Edificio"
              type="text"
              value={name}
              onChange={onInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name}</p>
            )}
          </article>

          {/* DESCRIPTION */}
          <article className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-description"
            >
              Descripción
            </label>
            <textarea
              className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                errors.description && "border border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-description"
              name="description"
              placeholder="Agrega comentarios"
              type="text"
              value={description}
              onChange={onInputChange}
            />
            {errors.description && (
              <p className="text-red-500 text-xs italic">{errors.description}</p>
            )}
          </article>

          {/* ADDRESS */}
          <article className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-address"
            >
              Dirección
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                errors.address && "border border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-address"
              name="address"
              placeholder="Direccion"
              type="text"
              value={address}
              onChange={onInputChange}
            />
            {errors.address && (
              <p className="text-red-500 text-xs italic">{errors.address}</p>
            )}
          </article>
        </section>

        {/* ROOMS */}
        <section className="flex space-x-2">
          <article className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-bedrooms"
            >
              Habitaciones
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                errors.bedrooms && "border border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-bedrooms"
              name="bedrooms"
              placeholder="0"
              type="number"
              value={bedrooms}
              onChange={onInputChange}
            />
            {errors.bedrooms && (
              <p className="text-red-500 text-xs italic">{errors.bedrooms}</p>
            )}
          </article>

          <article className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-bathrooms"
            >
              Baños
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                errors.bathrooms && "border border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-bathrooms"
              name="bathrooms"
              placeholder="0"
              type="number"
              value={bathrooms}
              onChange={onInputChange}
            />
            {errors.bathrooms && (
              <p className="text-red-500 text-xs italic">{errors.bathrooms}</p>
            )}
          </article>
        </section>
        {/* PROPERTY COST & TYPE */}
        <section className="flex space-x-2">
          <article className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-price"
            >
              Precio
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 ${
                errors.price && "border border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-price"
              name="price"
              placeholder="Precio"
              type="number"
              value={price}
              onChange={onInputChange}
            />
            {errors.price && (
              <p className="text-red-500 text-xs italic">{errors.price}</p>
            )}
          </article>
          <article className="w-full mb-6 md:mb-0">
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
          <article className="lg:right-0">
            <button type="submit" className="w-full p-3 bg-sky-500 text-white rounded md:h-12">
              Crear
            </button>
          </article>
        </section>
      </form>
  );
};

export default PropertyForm;
