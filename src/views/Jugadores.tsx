
import { useState } from "react";
import { useNavigate } from "react-router";

function Jugadores() {
  let navigate = useNavigate();
  const [jugador1, setJugador1] = useState("");
  const [jugador2, setJugador2] = useState("");

  const activo = jugador1.length > 1 && jugador2.length > 1

  return (
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Jugadores</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Ingrese el nombre de los jugadores que se enfrentaran en el super gato</p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                Jugador 1
              </label>
              <div className="mt-2.5">
                <input
                  id="jugador1"
                  name="jugador1"
                  type="text"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  onChange={(e) => {setJugador1(e.target.value)}}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                Jugador 2
              </label>
              <div className="mt-2.5">
                <input
                  id="jugador2"
                  name="jugador2"
                  type="text"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  onChange={(e) => {setJugador2(e.target.value)}}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <a
              className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm ${ activo ? 'bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'bg-gray-200 text-gray-400' }`}
              onClick={() => {
                if(activo) navigate(`/juego/${jugador1}/${jugador2}`);
              }}
            >
              ¡Jugar!
            </a>
          </div>
        </form>
      </div>
    );
  }
  
  export default Jugadores;
  