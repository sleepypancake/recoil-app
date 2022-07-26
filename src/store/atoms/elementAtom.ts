import { atomFamily } from "recoil";
import { defaultElement } from "../../constants";
import { Element } from "../../types";
import { ELEMENT } from "../keys";

export const elementAtom = atomFamily<Element, number>({
    key: ELEMENT,
    default: defaultElement
})