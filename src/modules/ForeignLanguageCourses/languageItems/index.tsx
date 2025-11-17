import Image from "next/image";
import { ILanguagesItems } from "./@types";

export default function LanguageItems({id , img , name}:ILanguagesItems){
    return(
        <section key={id} className="w-full items-center gap-4 bg-background flex justify-start max-w-[364px] h-[112px] rounded-2xl p-4">
            <div className="flex gap-4">
                <Image alt={`country-${name}`} src={img}/>
            </div>
            <p className="text-2xl text-[#222222] font-medium">{name}</p>
        </section>
    )
}