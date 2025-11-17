import { StaticImageData } from "next/image"
import Making_art_bro from '../../../assets/ArtAndSkillImages/Frame 32 (2).png'
import freepik_background_simple_inject from "../../../assets/ArtAndSkillImages/Frame 32.png"
import personal_growth_bro from "../../../assets/ArtAndSkillImages/Frame 32 (3).png"

export interface IArtItemList {
    id? : number
    name : string
    img : string | StaticImageData
}

export const ArtItemList : IArtItemList[] = [
    {id : 1 , name : "دوره‌های طراحی و نقاشی" , img : Making_art_bro },
    {id : 2 , name : "دوره‌های فن بیان و سخنوری" , img : freepik_background_simple_inject },
    {id : 3 , name : "دوره‌های توسعه فردی کودکان و نوجوانان" , img : personal_growth_bro },
]