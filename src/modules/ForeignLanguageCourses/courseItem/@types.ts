import { StaticImageData } from "next/image"
import English_teacher_bro from "../../../assets/courseImages/English teacher-bro 2.png"
import Kids_reading_bro from "../../../assets/courseImages/Kids reading-bro 1.png"
import Reading_glasses_bro from "../../../assets/courseImages/Reading glasses-bro 1.png"
import Speech_bubbles_bro from "../../../assets/courseImages/Speech bubbles-bro 1.png"
import Think_different_bro from "../../../assets/courseImages/Think different-bro 1.png"
import Typewriter_bro from "../../../assets/courseImages/Typewriter-bro 1.png"
export interface ICourseItem {
    id?: number
    name: string
    img: string | StaticImageData
}

export const CourseList: ICourseItem[] = [
    { id: 1, name: "دوره‌های ترمی زبان", img: English_teacher_bro },
    { id: 2, name: "دوره‌های مکالمه بزرگسالان", img: Think_different_bro },
    { id: 3, name: "دوره‌های مکالمه خردسالان", img: Kids_reading_bro },
    { id: 4, name: "دوره‌های فقط مکالمه", img: Speech_bubbles_bro },
    { id: 5, name: "دوره‌های آمادگی آزمون‌های آیلتس و تافل", img: Reading_glasses_bro },
    { id: 6, name: "ترجمه متون انگلیسی به فارسی و بالعکس", img: Typewriter_bro },

]