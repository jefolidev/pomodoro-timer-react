import { FormEvent, useState } from "react"

export function TimerForm() {
  const [amountMinutesTime, setAmountMinutesTime] = useState(10)
  const [amountSessionsTime, setAmountSessionsTime] = useState(1)

  function increaseMinuteAmount() {
    if (amountMinutesTime < 720) {
      amountMinutesTime < 60
        ? setAmountMinutesTime((prevTime) => prevTime + 5)
        : setAmountMinutesTime((prevTime) => prevTime + 30)
    } else {
      setAmountMinutesTime(5)
    }
  }
  function decreaseMinuteAmount() {
    if (amountMinutesTime > 5) {
      amountMinutesTime > 5 && amountMinutesTime < 60
        ? setAmountMinutesTime((prevTime) => prevTime - 5)
        : setAmountMinutesTime((prevTime) => prevTime - 30)
    } else {
      setAmountMinutesTime(5)
    }
  }

  function increaseSessionAmount() {
    amountSessionsTime < 5
      ? setAmountSessionsTime((prevTime) => prevTime + 1)
      : setAmountSessionsTime(1)
  }
  function decreaseSessionAmount() {
    amountSessionsTime <= 1
      ? setAmountSessionsTime(5)
      : setAmountSessionsTime((prevTime) => prevTime - 1)
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
  }

  function minutesInHours(minutesAmount: number) {
    return minutesAmount / 60
  }

  return (
    <div className='mx-auto my-0 flex h-[30rem] w-[30rem] flex-col rounded-[20px] bg-primary-color p-8'>
      <div className='flex flex-col'>
        <h1 className='text-2xl font-semibold'>Criar temporizador</h1>
        <span className='font-light text-gray-100'>
          Crie um temporizador para notificá-lo quando realizar uma tarefa.
        </span>
        <div className='my-4 h-px w-full bg-slate-800'></div>
        <form
          action=''
          className='flex flex-col gap-8'
          onSubmit={handleFormSubmit}
        >
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-light text-gray-300'>
              Nome do temporizador
            </label>
            <input
              type='text'
              placeholder='Título do temporizador'
              className='rounded-md bg-secondary-color px-4 py-2'
            />
          </div>

          <div className='flex items-start justify-center gap-8'>
            {/* Tempo */}
            <div className='flex flex-col items-center gap-4'>
              <label htmlFor='' className='text-xl text-gray-200'>
                Tempo{" "}
                <p
                  className={`${amountMinutesTime >= 60 ? "visible" : "hidden"} inline-block text-sm text-gray-300`}
                >
                  {`(${minutesInHours(amountMinutesTime)} hora/s)`}
                </p>
              </label>
              <div className='flex items-center gap-4'>
                <button
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-secondary-color p-4 text-2xl hover:brightness-90'
                  onClick={decreaseMinuteAmount}
                >
                  -
                </button>
                <div className='flex flex-col items-center'>
                  <span className='text-5xl'>
                    {amountMinutesTime === 5 ? "0" + 5 : amountMinutesTime}
                  </span>
                  <span className='text-xl font-light text-gray-300'>min</span>
                </div>
                <button
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-secondary-color p-4 text-2xl hover:brightness-90'
                  onClick={increaseMinuteAmount}
                >
                  +
                </button>
              </div>
            </div>

            {/* Intervalos */}
            <div className='flex flex-col items-center gap-8'>
              <label htmlFor='' className='text-gray-00 text-xl'>
                Intervalos
              </label>
              <div className='flex items-center gap-4'>
                <button
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-secondary-color p-4 text-2xl hover:brightness-90'
                  onClick={decreaseSessionAmount}
                >
                  -
                </button>
                <span className='text-5xl'>{"0" + amountSessionsTime}</span>
                <button
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-secondary-color p-4 text-2xl hover:brightness-90'
                  onClick={increaseSessionAmount}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            type='submit'
            className='flex justify-center rounded-full bg-white py-3 font-bold uppercase text-slate-900 transition-all duration-100 ease-in hover:brightness-90'
          >
            Criar
          </button>
        </form>
      </div>
    </div>
  )
}
