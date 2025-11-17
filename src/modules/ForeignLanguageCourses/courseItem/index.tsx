import Image from "next/image";
import { ICourseItem } from "./@types";

export default function CourseItem({ id, name, img }: ICourseItem) {
  console.log("🚀 ~ CourseItem ~ id:", id)
  return (
    <section className="w-full h-full gap-6 flex flex-col  items-center justify-between z-0 md:transition-transform md:duration-300 cursor-pointer md:hover:scale-[1.13]">
      <div>
        <Image src={img} alt="" />
      </div>
      <p className="font-semibold text-center md:whitespace-nowrap whitespace-pre-line text-[24px]">{name}</p>
    </section>
  );
}
