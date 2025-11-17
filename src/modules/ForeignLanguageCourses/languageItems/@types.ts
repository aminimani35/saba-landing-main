import germany from "../../../assets/languageItems/germany 1.png"
import france from "../../../assets/languageItems/france.png"
import russia from "../../../assets/languageItems/russia1.png"
import turkey from "../../../assets/languageItems/turkey 1.png"
import { StaticImageData } from "next/image"

export interface ILanguagesItems {
    id?: number
    name : string
    img : string | StaticImageData
}

export const languageItems:ILanguagesItems[] = [
    {id : 1  , name : "زبان آلمانی" ,  img : germany},
    {id : 2  , name : "زبان فرانسه" ,  img : france},
    {id : 3  , name : "زبان روسی" ,  img : russia},
    {id : 4  , name : "زبان ترکی استانبولی" ,  img : turkey},
]