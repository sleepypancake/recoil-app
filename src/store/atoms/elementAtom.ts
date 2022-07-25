import { atomFamily } from "recoil";
import { Element } from "../../types";
import { ELEMENT } from "../keys";

export const elementAtom = atomFamily<Element, number>({
    key: ELEMENT,
    default: {
        style: {
            position: {
                top: 100,
                left: 100
            },
            size: {
                width: 50,
                height: 50
            }
        }
    }
})