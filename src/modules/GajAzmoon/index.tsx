import React from "react";
import Gajlogo from "../../assets/GajLogo/social photo.png";
import Image from "next/image";

export default function AzmoonGaj() {
  return (
    <section id="gaj" className="flex justify-center items-center w-full bg-background py-16 px-6">
      <div className="w-full max-w-[1440px] flex flex-col gap-16 items-center text-center md:text-left">
        {/* Title */}
        <h1 className="flex md:flex-none flex-wrap justify-center gap-2 text-[28px] m sm:text-[36px] md:text-[40px] leading-snug">
          <span className="font-normal text-black">نمایندگی رسمی</span>
          <span className="font-black text-[#222222]">آزمون های سراسری گاج و زبان بین المللی VCV</span>
        </h1>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-between max-w-[1440px] items-center gap-10 md:gap-20 w-full">
          <p className="text-lg text-center md:text-right  md:text-xl lg:text-2xl font-normal leading-relaxed max-w-2xl">
            آکادمی صبا به‌عنوان نمایندگی برگزاری آزمون‌های سراسری گاج، امکان
            پیش‌ثبت‌نام و ثبت‌نام، شرکت در آزمون‌های دوره‌ای استاندارد، دریافت
            کارنامه و تراز تحلیلی در پنل کاربری، و پشتیبانی مشاوره‌ای برای تحلیل
            نتایج را فراهم می‌کند. آزمون‌ها طبق تقویم سراسری گاج به‌صورت حضوری یا
            آنلاین برگزار می‌شوند و دسترسی به جستجوی نمایندگی‌ها و فرم‌های رسمی از
            طریق سامانه گاج ممکن است.
          </p>
          <Image
            src={Gajlogo}
            alt="لوگوی گاج"
            className=""
          />
        </div>
      </div>
    </section>
  );
}