import { selector } from "recoil";
import { commissionAtom } from "../atoms/commissionAtom";
import { commissionEnabledAtom } from "../atoms/commissionEnabledAtom";
import { usdAtom } from "../atoms/usdAtom";
import { EURO } from "../keys";

const exchangeRate = 0.83

const addCommission = (amount: number, commission: number) => {
    return amount / (1 - commission / 100)
}

const removeCommission = (amount: number, commission: number) => {
    return amount * (1 - commission / 100)
}

export const eurSelector = selector<number>({
    key: EURO,
    get: ({get}) => {
        let usd = get(usdAtom)

        const commissionEnabled = get(commissionEnabledAtom)
        if (commissionEnabled) {
            const commission = get(commissionAtom)
            usd = removeCommission(usd, commission)
        }
        return usd * exchangeRate
    },
    set: ({set, get}, newEurValue)=> {
            // @ts-ignore
            let newUsdValue = newEurValue / exchangeRate

            const commissionEnabled = get(commissionEnabledAtom)
            if (commissionEnabled) {
                const commission = get(commissionAtom)
                newUsdValue = addCommission(newUsdValue, commission)
            }

            set(usdAtom, newUsdValue)
        
    }
})