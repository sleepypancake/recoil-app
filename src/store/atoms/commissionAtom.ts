import { atom } from "recoil";
import { COMMISSION } from "../keys";

export const commissionAtom = atom({
    key: COMMISSION,
    default: 5,
})