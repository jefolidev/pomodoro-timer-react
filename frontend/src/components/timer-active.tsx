import configIcon from "../assets/config.svg";
import returnIcon from "../assets/return.svg";

export function TimerActive() {
  return (
    <div className="mx-auto my-0 flex h-[30rem] w-[30rem] flex-col items-center justify-center rounded-[20px] bg-primary-color p-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-72 w-72 flex-col items-center justify-center gap-2 rounded-full border-[5px] border-gray-400">
          <h1 className="mt-10 text-6xl font-medium">25:00</h1>
          <div className="flex gap-4">
            <div className="h-4 w-2 rounded-full bg-white"></div>
            <div className="h-4 w-2 rounded-full bg-white"></div>
            <div className="h-4 w-2 rounded-full bg-white"></div>
            <div className="h-4 w-2 rounded-full bg-white"></div>
          </div>
          <p className="font-medium uppercase text-gray-400">Descanso</p>
        </div>
        <button
          type="submit"
          className="flex w-52 justify-center rounded-full bg-white py-3 font-bold uppercase text-slate-900 transition-all duration-100 ease-in hover:brightness-90"
        >
          Pausar
        </button>
      </div>
      <div className="flex w-full justify-between">
        <button className="-mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all duration-75 ease-in hover:brightness-90">
          <img src={returnIcon} alt="" className="h-6 w-6" />
        </button>
        <button className="-mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all duration-75 ease-in hover:brightness-90">
          <img src={configIcon} alt="" className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
