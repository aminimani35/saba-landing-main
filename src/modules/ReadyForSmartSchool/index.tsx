import Image from "next/image";
import smartestImage from "../../assets/SmartetsSchool/college admission-bro 1.png";

export default function ReadyForSmartSchool() {
  return (
    <section id="smart" className="w-full h-full flex justify-center items-center px-6 py-20">
      <div className="w-full max-w-[1440px] h-full flex flex-col gap-10 justify-center items-center">
        <h1 className="text-center text-4xl md:text-[40px] leading-snug">
          <span className="block md:inline font-normal text-black">
            دوره‌های
          </span>{" "}
          <span className="block md:inline font-[1000] text-primary">
            آمادگی تیزهوشان و نمونه دولتی
          </span>
        </h1>
        <div className="flex justify-center px-4 md:flex-row flex-col-reverse gap-15 items-center">
            <div className="md:hidden flex">
          <Image
            width={320}
            height={320}
            alt="smartestImage"
            src={smartestImage}
          />
            </div>
            <div className="md:flex hidden">
            <Image
            width={400}
            height={400}
            alt="smartestImage"
            src={smartestImage}
          />
            </div>
          <p className="font-normal w-full text-2xl md:text-right  text-center leading-12 md:text-[32px]">
            با آموزش مفهومی دروس، تقویت مهارت‌های هوش و تست‌زنی، و برگزاری
            آزمون‌های شبیه‌ساز، آکادمی صبا دانش‌آموزان را برای موفقیت در
            آزمون‌های مدارس برتر آماده می‌کند.
          </p>
        </div>
      </div>
    </section>
  );
}
