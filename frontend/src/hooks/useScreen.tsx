import { useContext } from "react";
import { ScreenTransitionContext } from "../context/screen-transition-context";

export function useScreen() {
    const screen = useContext(ScreenTransitionContext)
    return screen
}