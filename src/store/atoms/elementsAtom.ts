import { atom } from "recoil";
import { ELEMENTS } from "../keys";

export const elementsAtom = atom<number[]> ({
    key: ELEMENTS,
    default: []
})