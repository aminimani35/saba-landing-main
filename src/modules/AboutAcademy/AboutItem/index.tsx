import Image from "next/image";
import { IAboutItem } from "./@types";

export default function AboutItem({ id, title, discription, Icon, boxStyle }: IAboutItem) {
  console.log("🚀 ~ AboutItem ~ id:", id)
  return (
    <div className="w-full max-w-[320px] bg-background rounded-2xl p-4 flex items-center gap-4 shadow-sm">

      <div className={`w-[64px] h-[64px] ${boxStyle} flex justify-center items-center rounded-lg`}>
        <Image alt={title} src={Icon} width={32} height={32} />
      </div>


      <div className="flex flex-col justify-center">
        <p className="text-lg font-bold text-[#222222]">{title}</p>
        <p className="text-sm font-normal text-[#444] leading-6">{discription}</p>
      </div>
    </div>
  );
}
