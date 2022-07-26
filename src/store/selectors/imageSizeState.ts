import { selectorFamily } from "recoil";
import { getImageDimensions } from "../../util";
import { IMAGE_SIZE } from "../keys";

export const imageSizeState = selectorFamily({
    key: IMAGE_SIZE,
    get: (src: string | undefined) => () => {
        if (!src) return
        return getImageDimensions(src)
    }
})