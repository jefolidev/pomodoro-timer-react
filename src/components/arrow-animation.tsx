import * as motion from "motion/react-client"
import { useState } from "react"
import arrowIcon from "../assets/arrow-right.svg"

export default function ArrowAnimation() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className='duration-50 arrow-wrapper h-8 w-8 rounded-full'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        animate={
          isHovered
            ? {
                translateX: [0, 25, -10],
                transition: {
                  ease: ["easeIn"],
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }
            : { translateX: 0 }
        }
        src={arrowIcon}
        alt=''
        className='arrow-bounce mx-auto w-3 transition-transform ease-in'
      />
    </motion.button>
  )
}
