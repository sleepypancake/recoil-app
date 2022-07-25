import { selector, useSetRecoilState } from "recoil";
import { Element } from "../../types";
import { elementAtom } from "../atoms/elementAtom";
import { selectedElementAtom } from "../atoms/selectedElementAtom";
import { SELECTED_ELEMENT_PROPERTIES } from "../keys";

export const selectedElementPropsSelector = selector<Element | undefined>({
    key: SELECTED_ELEMENT_PROPERTIES,
    get: ({get}) => {
        const selectedElementId = get(selectedElementAtom)
        if (selectedElementId == null) return

        return get(elementAtom(selectedElementId))
    },

    set: ({set, get}, newElement) => {
        const selectedElementId = get(selectedElementAtom)
        if (selectedElementId == null) return

        if(!newElement) return

        set(elementAtom(selectedElementId), newElement)
    }
})