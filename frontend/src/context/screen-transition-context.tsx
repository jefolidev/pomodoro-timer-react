import { createContext, useState } from "react"

type Screens = "form" | "timer" | "config"

interface ScreenTransitionContext {
  screen: Screens
  handleGoToScreen: (newScreen: Screens) => void
}

interface ScreenTransitionProvider {
  children: React.ReactNode
}

export const ScreenTransitionContext = createContext(
  {} as ScreenTransitionContext,
)

export function ScreenTransitionProvider({
  children,
}: ScreenTransitionProvider) {
  const [screen, setScreen] = useState<Screens>("form")

  function handleGoToScreen(newScreen: Screens) {
    setScreen(newScreen)
  }

  return (
    <ScreenTransitionContext.Provider value={{ screen, handleGoToScreen }}>
      {children}
    </ScreenTransitionContext.Provider>
  )
}
