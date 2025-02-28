import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";

function Juego() {
  const { jugador1, jugador2 } = useParams();
  const [turno, setTurno] = useState(true);
  const [puntos1, setPuntos1] = useState(0);
  const [puntos2, setPuntos2] = useState(0);
  const [matriz, setMatriz] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);

  const handleClick = (indexFila: number, indexColumna: number) => {
    let aux = JSON.parse(JSON.stringify(matriz));
    aux[indexFila][indexColumna] = turno ? 1 : 2;
    setMatriz(aux);
  };

  useEffect(() => {
    const ganador = detectarGanador();
    if(ganador === 1){
      setPuntos1(puntos1 + 1);
    } else if(ganador === 2) {
      setPuntos2(puntos2 + 1);
    }
     else {
      setTurno(!turno);
    }
  }, [matriz]);

  useEffect(() => {
    setMatriz([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);
  }, [puntos1, puntos2]);

  const detectarGanador = () => {
    for(let i = 0; i < 3; i++){
      if(matriz[i][0] === matriz[i][1] && matriz[i][1] === matriz[i][2] && matriz[i][0] !== 0){
        return matriz[i][0];
      }
      if(matriz[0][i] === matriz[1][i] && matriz[1][i] === matriz[2][i] && matriz[0][i] !== 0){
        return matriz[0][i];
      }
    }
    if(matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2] && matriz[0][0] !== 0){
      return matriz[0][0];
    }
    if(matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0] && matriz[0][2] !== 0){
      return matriz[0][2];
    }
    return null;
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Juego iniciado</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Turno a turno cada jugador debe elegir cuál será su siguiente movimiento</p>
      </div>
      <div className="bg-white py-4 sm:py-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className={`flex flex-col p-8 ${turno ? 'bg-yellow-100' : 'bg-gray-400/5'}`}>
                <dt className="text-sm/6 font-semibold text-gray-600">{jugador1}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{puntos1} puntos</dd>
              </div>
              <div className={`flex flex-col p-8 ${!turno ? 'bg-blue-200' : 'bg-gray-400/5'}`}>
                <dt className="text-sm/6 font-semibold text-gray-600">{jugador2}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{puntos2} puntos</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            {matriz.map((fila, indexFila) => { 
              return fila.map((celda, indexColumna) => {
                console.log(celda);
                if(celda === 1){
                  return (
                    <div key={`${indexFila}-${indexColumna}`} className="p-6 sm:p-10 flex justify-center items-center bg-yellow-50">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-14 text-yellow-500">
                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                      </svg>
                    </div>
                  );
                } else if(celda === 2){
                  return (
                    <div key={`${indexFila}-${indexColumna}`} className="p-8 sm:p-10 flex justify-center items-center bg-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-blue-500">
                        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  );
                } else {
                  return (
                    <div key={`${indexFila}-${indexColumna}`} className="bg-gray-400/5 p-6 sm:p-10" onClick={() => {handleClick(indexFila, indexColumna)}}>
                    </div>
                  );
                }
              })
            })}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <NavLink
          to="/"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Terminar Juego
        </NavLink>
      </div>
    </div>
  );
}

export default Juego;
