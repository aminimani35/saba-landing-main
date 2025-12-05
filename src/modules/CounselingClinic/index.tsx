import Image from "next/image";
import img from "../../assets/counseling-clinic/Group 2.png";
import React from "react";

interface Ilist {
  id: number;
  name: string;
}

const list: Ilist[] = [
  { id: 1, name: "برنامه ریزی و مشاوره تحصیلی" },
  { id: 2, name: "سنجش هوش و استعداد تحصیلی " },
  { id: 3, name: "مسیر موفقیت تحصیلی" },
  { id: 4, name: "مشاوره فردی و خانوادگی" },
  { id: 5, name: "مدیریت استرس و اضطراب" },
  { id: 6, name: "مدیریت خشم" },
];

export default function CounselingClinic() {
  return (
    <div
      id="counseling-clinic"
      className="flex bg-white scroll-mt-[120px] mx-auto w-full max-w-[1440px] justify-center items-center"
    >
      <section className="bg-white w-full items-center flex md:gap-15 gap-10 flex-col px-6 py-20">
        <h1 className="flex items-center gap-1 font-normal text-[28px] sm:text-[36px] md:text-[40px]">
          <span className="text-black">کلینیک</span>
          <span className="text-primary font-[1000]">مشاوره</span>
        </h1>
        <div className="flex flex-col-reverse gap-16 md:flex-row w-full max-w-[1440px] justify-between items-center">
          <div className="flex px-4 md:px-6 gap-4 flex-col w-full md:w-auto">
            <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold">
              خدمات مشاوره ای شامل :
            </h3>
            <ul className="flex flex-col gap-y-3 list-inside ullist gap-x-2">
              {list.map((data) => (
                <li
                  key={data.id}
                  className="text-[18px] sm:text-[22px] md:text-[28px] list-disc md:whitespace-nowrap whitespace-pre-line font-normal"
                >
                  {data.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex justify-end max-w-[400px] md:max-w-none">
            <Image src={img} alt="CounselingClinic" />
          </div>
        </div>
      </section>
    </div>
  );
}
