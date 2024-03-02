import { GrSend } from "react-icons/gr";
//import { IoMdClose } from "react-icons/io";
//import { FaRegWindowMinimize } from "react-icons/fa";
//import { FiSearch } from "react-icons/fi";
import { SlPaperClip } from "react-icons/sl";
import { FaCameraRetro } from "react-icons/fa";
import { MdInsertEmoticon } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
//import SearchBar from "../SearchBar";

const ChatFront = () => {
  return (
    <section className=" absolute flex p-2 top-[8svh] w-full ">
      <aside className=" relative left-0 w-2/5 p-2 space-y-4">
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
        {/* <section className="flex top-10 left-0 p-2">
          <input
          type="text"
          placeholder="Buscar..."/>
          <FiSearch />
  </section>*/}

        <ul className="relative w-full p-1 overflow-auto">

        <li>
            <section className="relative flex p-2 w-full z-50 rounded gap-4">
              <picture className="self-center">
                <img
                  className="inline-block size-9 rounded-full self-center flex  object-cover"
                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                  alt=""
                />
              </picture>
              <aside className="gap-y-0 leading-3 border-b border-sky-900 p-2 w-full">
                <h3 className="text-lg flex">
                  Sofia Pumarejo
                  <TbPointFilled
                    style={{ color: "green", fontSize: "1.6rem" }}
                    className="green self-center"
                  />
                </h3>
                <span className="text-xs italic">Vale, voy a pensarlo muy bien.</span>
              </aside>
            </section>
          </li>

          <li>
            <section className="relative flex  p-2 w-full z-50 rounded gap-4">
              <picture className="self-center rounded-full">
                <img
                  className="inline-block size-9 rounded-full self-center flex  object-cover"
                  src="https://img.freepik.com/premium-photo/consultant-portrait-woman-with-glasses-office-manager-student-smiling-isolated-white-backgroundp_283470-8461.jpg?w=740"
                  alt=""
                />
              </picture>
              <aside className="gap-y-0 leading-3 border-b border-sky-900 p-2 w-full">
                <h3 className="text-lg flex">
                  Luz Sarmiento
                  <TbPointFilled
                    style={{ color: "orange", fontSize: "1.6rem" }}
                    className="green self-center"
                  />
                </h3>
                <span className="text-xs italic">Lo buscaba mas en rojo la verddad</span>
              </aside>
            </section>
          </li>

          <li>
            <section className="relative flex  p-2 w-full z-50 rounded gap-4">
              <picture className="self-center rounded-full">
                <img
                  className="inline-block size-9 rounded-full self-center flex  object-cover"
                  src="https://img.freepik.com/free-psd/studio-portrait-young-teenage-girl_23-2150162484.jpg?w=1380&t=st=1709244800~exp=1709245400~hmac=c46b8ba1e6884c4c69c962297ff6a5462a596ab035571fcfd96479e8b660ee50"
                  alt=""
                />
              </picture>
              <aside className="gap-y-0 leading-3 border-b border-sky-900 p-2 w-full">
                <h3 className="text-lg flex">
                  Johana Garcia
                  <TbPointFilled
                    style={{ color: "green", fontSize: "1.6rem" }}
                    className="green self-center"
                  />
                </h3>
                <span className="text-xs italic"> jajajajaj </span>
              </aside>
            </section>
          </li>

          <li>
            <section className="relative flex  p-2 w-full z-50 rounded gap-4">
              <picture className="self-center rounded-full  object-cover">
                <img
                  className="inline-block size-9 rounded-full self-center flex"
                  src="https://img.freepik.com/free-photo/portrait-hapy-young-smart-man-glasses-white-wall_231208-12206.jpg?w=740&t=st=1709248938~exp=1709249538~hmac=42dadf97bd3fc36cfacd38f0042e88b106d76286ca93b044b907d433bca5c5d9"
                  alt=""
                />
              </picture>
              <aside className="gap-y-0 leading-3 border-b border-sky-900 p-2 w-full">
                <h3 className="text-lg flex">
                  Diego Sanchez 
                  <TbPointFilled
                    style={{ color: "orange", fontSize: "1.6rem" }}
                    className="green self-center"
                  />
                </h3>
                <span className="text-xs italic"> 3'0000.000?</span>
              </aside>
            </section>
          </li>

          <li>
            <section className="relative flex  p-2 w-full z-50 rounded gap-4">
              <picture className="self-center rounded-full">
              <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                <span className="text-sm font-medium text-white leading-none">
                SM
                </span>
              </span>
              </picture>
              <aside className="gap-y-0 leading-3 border-b border-sky-900 p-2 w-full">
                <h3 className="text-lg flex">
                  Sofia Mendez
                  <TbPointFilled
                    style={{ color: "green", fontSize: "1.6rem" }}
                    className="green self-center"
                  />
                </h3>
                <span className="text-xs italic">Pinta mi cerca</span>
              </aside>
            </section>
          </li>

          <li>
            <section className="relative flex  p-2 w-full z-50 rounded gap-4">
              <picture className="self-center rounded-full">
              <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                <span className="text-sm font-medium text-white leading-none">
                  RP
                </span>
              </span>
              </picture>
              <aside className="gap-y-0 leading-3 border-b border-sky-900 w-full p-1">
                <h3 className="text-lg flex">
                  Rocio Perez
                  <TbPointFilled
                    style={{ color: "gray", fontSize: "1.6rem" }}
                    className="green self-center"
                  />
                </h3>
                <span className="text-xs italic">No puedo venderlo tan bajo</span>
              </aside>
            </section>
          </li>

          <li>
            <section className="relative flex p-2 w-full z-50 rounded gap-4">
              <picture className="self-center rounded-full">
                <img
                  className="inline-block size-9 rounded-full self-center flex object-cover"
                  src="https://img.freepik.com/free-photo/expressive-asian-girl-posing-indoor_344912-797.jpg?w=1380&t=st=1709244840~exp=1709245440~hmac=84cfbdf8d8d6b0bd8412548705fa40dedc9c7f671c2859744013992caa136829"
                  alt=""
                />
              </picture>
              <aside className="gap-y-0 leading-3 border-b border-sky-900 p-2 w-full">
                <h3 className="text-lg flex">
                  Alejandra Cardenas
                  <TbPointFilled
                    style={{ color: "gray", fontSize: "1.6rem" }}
                    className="green self-center"
                  />
                </h3>
                <span className="text-xs italic">Mañana nos vemos :)</span>
              </aside>
            </section>
          </li>
          
        </ul>
      </aside>

      <section className="relative w-3/5 flex flex-col right-0 p-2 top-4">
        <section className="bg-sky-900 relative flex p-2 w-full z-50 rounded gap-4">
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
        <section className="h-[50svh] bg-white w-full overflow-auto z-10">
          <ul className="space-y-5 top-10 relative">
            <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
              <picture>
                <img
                  className="inline-block size-9 rounded-full"
                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                  alt=""
                />
              </picture>

              <section className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
                <div className="space-y-1.5">
                  <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                    Hola, buenos dias estoy interesada en comprar tu casa.
                  </p>
                </div>
              </section>
            </li>

            <li className="flex ms-auto gap-x-2 sm:gap-x-4">
              <div className="grow text-end space-y-3">
                <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
                  <p className="text-sm text-white">
                    Si por supuesto podemos entablar un intercambio de bienes y
                    servicios.
                  </p>
                </div>
              </div>

              <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                <span className="text-sm font-medium text-white leading-none">
                  DR
                </span>
              </span>
            </li>

            <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
              <img
                className="inline-block size-9 rounded-full"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                alt=""
              />

              <section className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
                <div className="space-y-1.5">
                  <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                    Que tanto es lo minimo que podrias venderla?
                  </p>
                </div>
              </section>
            </li>

            <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
              <img
                className="inline-block size-9 rounded-full"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                alt=""
              />

              <section className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
                <div className="space-y-1.5">
                  <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                    Estoy buscando un lugar donde pueda vivir maximo 5 años y
                    moverme fuera del pais.
                  </p>
                </div>
              </section>
            </li>

            <li className="flex ms-auto gap-x-2 sm:gap-x-4 ">
              <div className="grow text-end space-y-3">
                <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
                  <p className="text-sm text-white">
                    Actualmente la estoy vendiendo por 200.000 USD$, pero podria
                    venderla por 190.000 USD$.
                  </p>
                </div>
              </div>

              <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                <span className="text-sm font-medium text-white leading-none">
                  DR
                </span>
              </span>
            </li>

            <li className="flex ms-auto gap-x-2 sm:gap-x-4 ">
              <div className="grow text-end space-y-3">
                <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
                  <p className="text-sm text-white">
                    Teniendo en cuenta que el mercado ahora es muy inestable,
                    eso seria en lo minimo que podria venderla.
                  </p>
                </div>
              </div>

              <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                <span className="text-sm font-medium text-white leading-none">
                  DR
                </span>
              </span>
            </li>

            <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
              <picture>
                <img
                  className="inline-block size-9 rounded-full"
                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                  alt=""
                />
              </picture>

              <section className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
                <div className="space-y-1.5">
                  <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                    Vale, voy a pensarlo muy bien.
                  </p>
                </div>
              </section>
            </li>
          </ul>

          {/* <article className="h-auto bg-green-400 transform rotate-45 origin-bottom-right rounded-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            temporibus eaque ab quibusdam delectus ea aspernatur inventore
            reiciendis quasi cum voluptas accusantium, sint, nesciunt velit unde
            tempora sed odit excepturi?
          </article>
          <article className="h-auto bg-blue-400 transform rotate-45 origin-top-left rounded-sm">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quam eveniet quaerat veniam nam quo aperiam magnam consequuntur
            voluptas vel repellendus provident facere nesciunt perferendis ipsum
            neque facilis, dolores excepturi!</p>
</article>*/}
        </section>
        <section className="bg-stone-100 flex p-2">
          <input
            className="bg-stone-200 p-2 bottom-0 outline-none flex-1 rounded"
            type="text"
            placeholder=". . . "
          />
          <section className="absolute flex right-[12svw] self-center gap-4">
            <SlPaperClip className="cursor-pointer" />
            <FaCameraRetro className="cursor-pointer" />
            <MdInsertEmoticon className="cursor-pointer" />
          </section>

          <button
            className="gap-x-0.5 justify-center rounded flex bg-sky-900 w-[8svw] p-2 text-white"
            type="submit"
          >
            Enviar
            <GrSend style={{ color: "#fff", alignSelf: "center" }} />
          </button>
        </section>
      </section>
    </section>
  );
};

export default ChatFront;
