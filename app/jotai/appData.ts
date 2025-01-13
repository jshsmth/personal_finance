import data from "../data.json";
import { atomWithStorage } from "jotai/utils";


export const appDataAtom = atomWithStorage('appData', data)