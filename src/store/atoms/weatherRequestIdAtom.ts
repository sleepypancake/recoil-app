import { atomFamily } from "recoil";
import { WEATHER_REQUEST_ID } from "../keys";

export const weatherRequestIdAtom = atomFamily({
    key: WEATHER_REQUEST_ID,
    default: 0
})