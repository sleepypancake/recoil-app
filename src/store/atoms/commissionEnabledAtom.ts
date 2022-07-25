import { atom } from "recoil";
import {  COMMISSION_ENABLED } from "../keys";

export const commissionEnabledAtom = atom({
    key: COMMISSION_ENABLED,
    default: false,
})
