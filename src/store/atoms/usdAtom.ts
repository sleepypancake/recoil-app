import { atom } from "recoil";
import { USD } from "../keys";

export const usdAtom = atom({
    key: USD,
    default: 1
})