import LogoWithName from "@/assets/logoWithName";
import { AboutItemList } from "./AboutItem/@types";
import AboutItem from "./AboutItem";
import { TbBrandInstagram, TbBrandTelegram } from "react-icons/tb";

import Image from "next/image";
import social from "../../assets/social photo.png";
import Link from "next/link";

export default function AboutAcademy() {
  return (
    <>

      <section
        id="about-us"
        className="w-full scroll-mt-[120px] flex justify-center items-center my-20 mx-4"
      >
        <div className="w-full h-full flex flex-col mx-auto gap-10 justify-center items-center max-w-[1440px]">

          <h1 className="text-[28px] sm:text-[36px] md:text-[40px] gap-1 flex flex-wrap justify-center text-center leading-snug">
            <span className="font-normal text-[#4b4747]">درباره</span>
            <span className="text-primary font-black">آکادمی</span>
          </h1>


          <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
            {/* ستون متن */}
            <div className="w-full pl-8 px-4 md:px-6 flex flex-col items-center justify-center md:w-7/12">
              <p className="text-base md:text-2xl leading-8 md:leading-10 font-normal text-center md:text-justify">
                <span className="font-bold">آکادمی هنری آموزشی صبا</span> از سال ۱۳۸۳
                به‌عنوان نخستین مؤسسه آموزشی چندمنظوره در شهرستان نکا فعالیت خود
                را آغاز کرده و اکنون یکی از جامع‌ترین مراکز آموزش زبان، هنر و
                توسعه فردی در منطقه است. این آکادمی دوره‌های متنوعی از جمله
                زبان‌های خارجی (انگلیسی، فرانسه، آلمانی، روسی، ترکی استانبولی)،
                طراحی، نقاشی، فن بیان و توسعه فردی کودکان و نوجوانان را ارائه
                می‌دهد.
                <br />
                علاوه بر آموزش تخصصی، کلینیک مشاوره صبا با تیمی حرفه‌ای خدمات
                مشاوره تحصیلی، فردی، خانوادگی، کنترل استرس و مدیریت خشم را فراهم
                کرده تا مسیر رشد و آرامش زبان‌آموزان و خانواده‌ها را هموار کند.
                ما باور داریم آموزش باید فراتر از کتاب و کلاس باشد و به رشد کامل
                افراد کمک کند.
              </p>
            </div>


            <div className="w-full md:w-5/12  justify-center  flex flex-col mr-10  md:items-center">
              <div className="flex lg:hidden mr-6 mb-4">
                <LogoWithName width={270} height={92} />
              </div>

              <div className="hidden lg:flex mb-4">
                <LogoWithName width={414} height={141} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 w-full mt-4">
                {AboutItemList.map((data) => (
                  <AboutItem
                    key={data.id}
                    id={data.id}
                    Icon={data.Icon}
                    boxStyle={data.boxStyle}
                    title={data.title}
                    discription={data.discription}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="w-full bg-background px-4 sm:px-20 py-6">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">


          <div className="flex flex-col items-center sm:items-start gap-2 text-sm sm:text-base text-center sm:text-left">
            <p>
              <span className="font-bold">آدرس</span> : نکا انقلاب 38 – کوچه اصناف
            </p>
            <p>
              <span className="font-bold">تلفن</span> : 34727272 - 34734565
            </p>

            <div className="flex gap-2">
              <Link href={"https://www.instagram.com/academysaba?igsh=MTNlbno2dnl0OHc5dQ%3D%3D&utm_source=qr"} target="_blank" >
                <TbBrandInstagram size={30} className="stroke-red-400" />
              </Link>
              <Link href={"https://t.me/SabaEnglishInstitute"} target="_blank" >
                <TbBrandTelegram size={30} className="stroke-blue-500" />
              </Link>
            </div>
            {/* <Image src={social} alt="social" className="w-auto h-auto" /> */}
          </div>


          <div className="text-[12px] sm:text-[14px] md:mt-8 text-center sm:text-right font-normal">
            تمامی حقوق برای آکادمی صبا محفوظ است
          </div>
        </div>
      </footer>
    </>
  );
}
