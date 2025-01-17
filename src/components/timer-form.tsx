export function TimerForm() {
  return (
    <div className="mx-auto my-0 flex h-[30rem] w-[30rem] flex-col rounded-[20px] bg-primary-color p-8">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">Criar temporizador</h1>
        <span className="font-light text-gray-100">
          Crie um temporizador para notificá-lo quando realizar uma tarefa.
        </span>
        <div className="my-4 h-px w-full bg-slate-800"></div>
        <form action="" className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-light text-gray-300">
              Nome do temporizador
            </label>
            <input
              type="text"
              placeholder="Título do temporizador"
              className="rounded-md bg-secondary-color px-4 py-2"
            />
          </div>

          <div className="flex items-start justify-center gap-8">
            {/* Tempo */}
            <div className="flex flex-col items-center gap-4">
              <label htmlFor="" className="text-xl text-gray-200">
                Tempo
              </label>
              <div className="flex items-center gap-4">
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-color p-4 text-2xl hover:brightness-90">
                  -
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-5xl">20</span>
                  <span className="text-xl font-light text-gray-300">min</span>
                </div>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-color p-4 text-2xl hover:brightness-90">
                  +
                </button>
              </div>
            </div>

            {/* Intervalos */}
            <div className="flex flex-col items-center gap-8">
              <label htmlFor="" className="text-gray-00 text-xl">
                Intervalos
              </label>
              <div className="flex items-center gap-4">
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-color p-4 text-2xl hover:brightness-90">
                  -
                </button>
                <span className="text-5xl">20</span>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-color p-4 text-2xl hover:brightness-90">
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="flex justify-center rounded-full bg-white py-3 font-bold uppercase text-slate-900 transition-all duration-100 ease-in hover:brightness-90"
          >
            Criar
          </button>
        </form>
      </div>
    </div>
  );
}
