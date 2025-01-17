import closeIcon from "../assets/close.svg"
import EffectButton from "./arrow-animation"

export function TimerConfig() {
  return (
    <div className='mx-auto my-0 flex h-[30rem] w-[30rem] flex-col items-center rounded-[20px] bg-primary-color p-8'>
      <div className='flex w-full justify-end self-start'>
        <button className='flex h-10 w-10 items-center rounded-full bg-white'>
          <img src={closeIcon} className='h-9 w-9'></img>
        </button>
      </div>
      <div className='self-cente flex w-full flex-col items-center justify-center gap-6 my-auto' >
        <h1 className='text-3xl'>Configurações</h1>
        <div className='grid w-full grid-rows-4 gap-2'>
          {/* Tempo de Seção */}
          <div className='flex items-center justify-between'>
            <span className='text-2xl'>Tempo da Sessão</span>
            <div className='flex items-center gap-6'>
              <div className='space-x-2'>
                <span className='text-3xl'>50</span>
                <p className='inline text-xl text-gray-400'>min</p>
              </div>
              <EffectButton />
            </div>
          </div>

          {/* Pausas Curtas */}
          <div className='flex items-center justify-between'>
            <span className='text-2xl'>Pausas Curtas</span>
            <div className='flex items-center gap-6'>
              <div className='space-x-2'>
                <span className='text-3xl'>5</span>
                <p className='inline text-xl text-gray-400'>min</p>
              </div>
              <EffectButton />
            </div>
          </div>

          {/* Pausas Longas */}
          <div className='flex items-center justify-between'>
            <span className='text-2xl'>Pausas Longas</span>
            <div className='flex items-center gap-6'>
              <div className='space-x-2'>
                <span className='text-3xl'>15</span>
                <p className='inline text-xl text-gray-400'>min</p>
              </div>
              <EffectButton />
            </div>
          </div>

          {/* Pausas Longas após */}
          <div className='flex items-center justify-between'>
            <span className='text-2xl'>Pausas Longas após</span>
            <div className='flex items-center gap-6'>
              <div className='space-x-2'>
                <span className='text-3xl'>4</span>
                <p className='inline text-xl text-gray-400'>sessões</p>
              </div>
              <EffectButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
