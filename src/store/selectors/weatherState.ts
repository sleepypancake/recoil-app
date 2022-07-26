import { selectorFamily } from "recoil";
import { getWeather } from "../../examples/FakeAPI";
import { weatherRequestIdAtom } from "../atoms/weatherRequestIdAtom";
import { WEATHER } from "../keys";
import { userSelector } from "./userSelector";

export const weatherState = selectorFamily({
    key: WEATHER,
    get: (userId: number) => async ({get}) => {
        get(weatherRequestIdAtom(userId))
        
        const user = get(userSelector(userId))
        const weather = await getWeather(user.address.city)
        return weather
    }
})