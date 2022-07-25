import { atom } from "recoil";
import { SELECTED_ELEMENT } from "../keys";

export const selectedElementAtom = atom<number | null>({
    key: SELECTED_ELEMENT,
    default: null
})