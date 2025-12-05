import React from "react";

interface Props {
  linkpage?: string;
  name: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ linkpage, name, className = "", onClick }: Props) {
  const href = linkpage && linkpage.trim() !== "" ? linkpage : "#";
  console.log("🚀 ~ Button ~ href:", href)

  return (
    <button
      onClick={onClick}
      className={`w-full max-w-full min-w-[80px] md:min-w-[163px] px-3 md:px-6 py-2 md:py-3 flex justify-center items-center whitespace-nowrap rounded-[40px] text-sm md:text-[16px] font-bold ${className}`}
      type="button"
      // اگر هدفت استفاده لینک هست، باید <a> باشه ولی اگر دکمه است، این درسته
    >
      {name}
    </button>
  );
}
