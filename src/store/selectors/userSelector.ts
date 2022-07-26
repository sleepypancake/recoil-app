import { selectorFamily } from "recoil";
import { USER } from "../keys";

export const userSelector = selectorFamily({
    key: USER,
    get: (userId: number) => async () => {

        const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                                .then(res => res.json())

        return userData
    }
})