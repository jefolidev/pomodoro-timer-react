import './index.css'

export function App() {
  return (
    <div className="flex flex-col bg-primary-color p-8 w-[30rem] h-[30rem] mx-auto my-0 rounded-[20px]">
      <div className="flex flex-col ">
        <h1 className="font-semibold text-2xl">Criar temporizador</h1>
        <span className="text-gray-100 font-light">
          Crie um temporizador para notificá-lo quando realizar uma tarefa.
        </span>
        <div className="h-px w-full bg-slate-800 my-4  "></div>
        <form action="" className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-300 text-light">
              Nome do temporizador
            </label>
            <input
              type="text"
              placeholder="Título do temporizador"
              className="bg-secondary-color rounded-md px-4 py-2 "
            />
          </div>

          <div className="flex items-start justify-center gap-8">
            {/* Tempo */}
            <div className="flex flex-col items-center gap-4">
              <label htmlFor="" className="text-xl text-gray-200 ">
                Tempo
              </label>
              <div className="flex gap-4 items-center">
                <button className="hover:brightness-90 bg-secondary-color p-4 rounded-full w-9 h-9 flex items-center justify-center text-2xl">
                  -
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-5xl">20</span>
                  <span className="text-gray-300 font-light text-xl">min</span>
                </div>
                <button className="hover:brightness-90 bg-secondary-color p-4 rounded-full w-9 h-9 flex items-center justify-center text-2xl">
                  +
                </button>
              </div>
            </div>

            {/* Intervalos */}
            <div className="flex flex-col items-center  gap-8">
              <label htmlFor="" className="text-xl text-gray-00 ">
                Intervalos
              </label>
              <div className="flex gap-4 items-center">
                <button className="hover:brightness-90 bg-secondary-color p-4 rounded-full w-9 h-9 flex items-center justify-center text-2xl">
                  -
                </button>
                <span className="text-5xl">20</span>
                <button className="hover:brightness-90 bg-secondary-color p-4 rounded-full w-9 h-9 flex items-center justify-center text-2xl">
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="hover:brightness-90 transition-all duration-100 ease-in flex bg-white font-bold  text-slate-900 justify-center rounded-md py-3"
          >
            Criar
          </button>
        </form>
      </div>
    </div>
  )
}
