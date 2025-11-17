import Button from "@/components/button";
import heroImage from "../../assets/Frame 74.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-background w-full h-full flex justify-center items-center py-[145px] px-[24px]">
      <div className="w-full gap-6 md:gap-8 max-w-[1440px] px-6 md:px-12 flex justify-center items-center  md:justify-between md:flex-row-reverse  flex-col">
        <div className="w-full flex md:justify-end justify-center">
          <Image
            width={607}
            height={579}
            className="md:flex hidden"
            alt={"heroImage"}
            src={heroImage}
          ></Image>
          <Image
            width={376}
            height={376}
            className="flex md:hidden"
            alt={"heroImage"}
            src={heroImage}
          ></Image>
        </div>
        <div className="flex flex-col gap-6 items-center md:items-start justify-center">
          <h1 className="flex md:flex-nowrap flex-wrap justify-center items-center font-black text-[40px] sm:text-[50px] md:text-[56px] md:text-clip text-center md:gap-2">
            <span className="text-black whitespace-nowrap">آکادمی هنری آموزشی</span>
            <span className="text-primary">صبا</span>
          </h1>

          <p className="md:text-4xl text-2xl  text-center md:text-start font-normal">
            آموزش زبان، هنر و توسعه فردی برای همه سنین
          </p>
          <div className="flex gap-x-4">
            <Link href="https://sabaacademy.vcv.ir/">
              <Button
                name="ورود به پنل آنلاین"
                className="bg-accent text-black transition-colors hover:bg-black hover:text-accent"
              />
            </Link>
            <Button
              name="اطلاعات بیشتر"
              className="text-white bg-primary transition-colors hover:text-primary hover:bg-[white]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
