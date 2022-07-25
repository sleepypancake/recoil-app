import { atom } from "recoil";
import { DARKMODE } from "../keys";

export const darkModeAtom = atom({
    key: DARKMODE,
    default: false
})