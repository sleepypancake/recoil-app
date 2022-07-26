import { selectorFamily } from "recoil";
import { elementAtom } from "../atoms/elementAtom";
import { EDIT_PROPERTY } from "../keys";
import { get as lodashGet, set as lodashSet } from "lodash";
import produce from "immer";

export const editPropertyState = selectorFamily<any, {path: string, id: number}> ({
    key: EDIT_PROPERTY,
    get: ({path, id}) => ({get}) => {
        const element = get(elementAtom(id))
        return lodashGet(element, path)
    },
    set: ({path, id}) => ({get, set}, newVal) => {
        const element = get(elementAtom(id))
        const newElement = produce(element, (draft) => {
            lodashSet(draft, path, newVal)
        })
        set(elementAtom(id), newElement)
    }
})