import { StaticImageData } from "next/image";
import star from "../../../assets/AboutAcademy/star.png";
import lawPaper from "../../../assets/AboutAcademy/lawPaper.png";
import colaboration from "../../../assets/AboutAcademy/colaboration.png";
import student from "../../../assets/AboutAcademy/student.png";

export interface IAboutItem {
  id: number;
  title: string;
  discription: string;
  Icon: string | StaticImageData;
  boxStyle: string;
}

export const AboutItemList: IAboutItem[] = [
  {
    id: 1,
    title: "بیش از ۲۰ سال سابقه",
    discription: "فعالیت مستمر از سال ۱۳۸۳ تا امروز",
    Icon: star,
    boxStyle: "bg-primary",
  },
  {
    id: 2,
    title: "بیش از هزاران هنرجو",
    discription: "آموزش تخصصی برای تمام گروه‌های سنی",
    Icon: student,
    boxStyle: "bg-accent",
  },
  {
    id: 3,
    title: "نماینده رسمی",
    discription: "همکار رسمی گاج و زبان بین‌المللی VCV",
    Icon: colaboration,
    boxStyle: "bg-accent",
  },
  {
    id: 4,
    title: "مجوز رسمی",
    discription: "دارای مجوز رسمی فرهنگ و ارشاد و آموزش و پرورش",
    Icon: lawPaper,
    boxStyle: "bg-primary",
  },
];
