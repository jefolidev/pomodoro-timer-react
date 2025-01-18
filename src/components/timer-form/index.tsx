import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ErrorMessage } from "./components/error-message"

const timerDataSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  amount_session_minutes: z.string(),
  amount_session_breaks: z.string(),
  short_break_time: z.number().optional(),
  longe_break_time: z.number().optional(),
  session_until_long_break: z.number().optional(),
  created_at: z.date().optional(),
  completed_at: z.date().optional(),
  pending_since: z.date().optional(),
})

type TimerData = z.infer<typeof timerDataSchema>

export function TimerForm() {
  const [amountMinutesTime, setAmountMinutesTime] = useState(10)
  const [amountSessionsBreaks, setAmountSessionsBreaks] = useState(1)
  const [isError, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TimerData>({
    resolver: zodResolver(timerDataSchema),
  })

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
    amountSessionsBreaks < 5
      ? setAmountSessionsBreaks((prevTime) => prevTime + 1)
      : setAmountSessionsBreaks(1)
  }
  function decreaseSessionAmount() {
    amountSessionsBreaks <= 1
      ? setAmountSessionsBreaks(5)
      : setAmountSessionsBreaks((prevTime) => prevTime - 1)
  }

  function handleFormSubmit(data: TimerData) {
    const newSession: TimerData = {
      ...data,
      id: crypto.randomUUID(),
      short_break_time: 5 * 60,
      longe_break_time: 15 * 60,
      session_until_long_break: 4,
    }
  }

  useEffect(() => {
    if (errors.name) {
      setError(true)
    } else {
      setError(false)
    }
  }, [errors.name])

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
          onSubmit={handleSubmit(handleFormSubmit)}
          action=''
          className='flex flex-col gap-8'
        >
          <div className='flex flex-col'>
            <label htmlFor='' className='text-light text-gray-300'>
              Nome do temporizador
            </label>
            <input
              type='text'
              placeholder='Título do temporizador'
              className='rounded-md bg-secondary-color px-4 py-2'
              {...register("name")}
            />
            <ErrorMessage isError={isError} />
          </div>

          <div className='flex items-start justify-center gap-8'>
            {/* Tempo */}
            <div className='flex flex-col items-center gap-2'>
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
                    <input
                      type='text'
                      value={
                        amountMinutesTime === 5 ? "0" + 5 : amountMinutesTime
                      }
                      className='w-[5.5rem] bg-transparent text-center'
                      {...register("amount_session_minutes")}
                      disabled
                    />
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
            <div className='flex flex-col items-center gap-7'>
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

                <input
                  type='text'
                  value={"0" + amountSessionsBreaks}
                  className='-mt-2.5 w-[5.5rem] bg-transparent text-center text-5xl'
                  {...register("amount_session_breaks")}
                  disabled
                />

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
            className='-my-4 flex justify-center rounded-full bg-white py-3 font-bold uppercase text-slate-900 transition-all duration-100 ease-in hover:brightness-90'
          >
            Criar
          </button>
        </form>
      </div>
    </div>
  )
}
