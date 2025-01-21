import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { createSession } from "../../http/create-session"
import { ErrorMessage } from "./components/error-message"

const timerDataSchema = z.object({
  name: z.string().min(1),
  amount_session_minutes: z.number(),
  amount_session_breaks: z.number(),
  created_at: z.date().optional(),
})

type TimerData = z.infer<typeof timerDataSchema>

export function TimerForm() {
  const [amountMinutesTime, setAmountMinutesTime] = useState(5)
  const [amountSessionsBreaks, setAmountSessionsBreaks] = useState(1)
  const [isError, setError] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TimerData>({
    resolver: zodResolver(timerDataSchema),
  })

  function increaseMinuteAmount() {
    if (amountMinutesTime < 720) {
      const newValue =
        amountMinutesTime < 60 ? amountMinutesTime + 5 : amountMinutesTime + 30

      setAmountMinutesTime(newValue)
      setValue("amount_session_minutes", newValue)
    } else {
      setAmountMinutesTime(5)
      setValue("amount_session_minutes", 5)
    }
  }

  function decreaseMinuteAmount() {
    if (amountMinutesTime > 5) {
      const newValue =
        amountMinutesTime > 5 && amountMinutesTime < 60
          ? amountMinutesTime - 5
          : amountMinutesTime - 30
      setAmountMinutesTime(newValue)
      setValue("amount_session_minutes", newValue)
    } else {
      setAmountMinutesTime(5)
      setValue("amount_session_minutes", 5)
    }
  }

  function increaseSessionAmount() {
    const newValue = amountSessionsBreaks < 5 ? amountSessionsBreaks + 1 : 1

    setAmountSessionsBreaks(newValue)
    setValue("amount_session_breaks", newValue)
  }
  function decreaseSessionAmount() {
    const newValue = amountSessionsBreaks <= 1 ? 5 : amountSessionsBreaks - 1

    setAmountSessionsBreaks(newValue)
    setValue("amount_session_breaks", newValue)
  }

  async function handleFormSubmit(data: TimerData) {
    return await createSession(data)
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
                  type='button'
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
                      {...register("amount_session_minutes", {
                        valueAsNumber: true,
                      })}
                    />
                  </span>
                  <span className='text-xl font-light text-gray-300'>min</span>
                </div>
                <button
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-secondary-color p-4 text-2xl hover:brightness-90'
                  onClick={increaseMinuteAmount}
                  type='button'
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
                  type='button'
                >
                  -
                </button>

                <input
                  type='text'
                  value={"0" + amountSessionsBreaks}
                  className='-mt-2.5 w-[5.5rem] bg-transparent text-center text-5xl'
                  {...register("amount_session_breaks", {
                    valueAsNumber: true,
                  })}
                />

                <button
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-secondary-color p-4 text-2xl hover:brightness-90'
                  onClick={increaseSessionAmount}
                  type='button'
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
