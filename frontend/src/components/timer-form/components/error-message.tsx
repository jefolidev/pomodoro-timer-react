import * as motion from "motion/react-client"

export function ErrorMessage({ isError }: { isError: boolean }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={
        isError
          ? {
              opacity: 1,
              x: [0, -10, 10, -10, 10, -5, 5, -2, 2, 0],
            }
          : { opacity: 0 }
      }
      transition={{
        duration: isError ? 0.6 : 0.2,
        ease: "easeInOut",
      }}
      className='-mb-3.5 mt-2 h-[4px] text-xs font-medium text-red-400'
    >
      Por favor, informe o nome do seu temporizador!
    </motion.p>
  )
}
