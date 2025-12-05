"use client";
import LogoWithName from "@/assets/logoWithName";
import Drawer from "../Drawer";
import { useState } from "react";
import menuIcon from "../../assets/menuIcon/Vector.png"
import Image from "next/image";
import phoneIcon from "../../assets/phoneIcon/phone.png"
import Link from "next/link";

interface InavbarList {
  key: number;
  id: string;
  name: string;
}

export default function Navbar() {
  const NavBarList: InavbarList[] = [
    { key: 6, id: "language", name: "زبان های خارجی" },
    { key: 5, id: "art-and-skill", name: "هنر و مهارت" },
    { key: 4, id: "smart", name: "تیزهوشان و نمونه‌دولتی" },
    { key: 3, id: "gaj", name: "نمایندگی آزمون‌های گاج " },
    { key: 2, id: "counseling-clinic", name: "کلینیک مشاوره" },
    { key: 1, id: "about-us", name: "درباره ما" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="fixed top-0 left-0 right-0 z-50 bg-white w-full shadow-md">
      <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center px-4 py-2 md:px-6 md:py-4 md:justify-center md:flex-col gap-2 ">

        <div className="mt-0 md:mt-1">
          <LogoWithName width={80} height={26} />
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden relative text-black"
        >
         <Image src={menuIcon} alt="menuIcon" />
        </button>


        <div className="md:flex hidden">
          <ul className="flex ulNav gap-[50px]">
            {NavBarList.map((data) => (
              <li key={data.key}>
                <a
                  className="relative text-[15px] pb-4 font-normal leading-[20px] text-[#333]
                  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2
                  after:w-0 hover:after:w-full after:h-[2px] after:bg-primary 
                  after:transition-all after:duration-300"
                  href={`#${data.id}`}
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
      <div className=" cursor-pointer shadow-md fixed bg-accent flex bottom-5 right-5 justify-center items-center z-99 rounded-[50%] md:w-[80px] md:h-[80px] w-[50px] h-[50px]">
        <Link href={"tel:02134727272"}>
          <div className="flex md:hidden">
            <Image width={30} height={30} src={phoneIcon} alt="phoneIcon" />
          </div>
          <div className="hidden md:flex">
            <Image width={60} height={60} src={phoneIcon} alt="phoneIcon" />
          </div>
        </Link>
      </div>
    </section>
  );
}
