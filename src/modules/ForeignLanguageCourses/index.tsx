import CourseItem from "./courseItem";
import { CourseList } from "./courseItem/@types";
import LanguageItems from "./languageItems";
import { languageItems } from "./languageItems/@types";

export default function ForeignLanguageCourses() {
  return (
    <section
      id="language"
      className="w-full scroll-mt-[120px] md:py-[20px] py-[20px] px-[24px] h-full bg-white flex justify-center items-center"
    >
      <div className="grid grid-cols-12 gap-6  md:gap-[40px] md:grid-rows-4 max-w-[1440px] w-full h-full">
        <div className="flex w-full justify-center col-span-12 items-center">
          <h1 className=" text-[28px] text-center md:text-[40px] font-normal">
            <span className="font-normal">دوره های آموزشی</span>
            <span> </span>
            <span className="font-[1000] text-primary">زبان خارجی</span>
          </h1>
        </div>
        <div className="col-span-12  whitespace-nowrap gap-y-[40px] grid  grid-cols-1 gap-44  md:grid-cols-3 grid-rows-2 row-span-2">
          {CourseList.map((item) => {
            return <CourseItem key={item.id} name={item.name} img={item.img} />;
          })}
        </div>
        <div className="col-span-12 max-w-[1440px] gap-15 mx-auto mt-10 whitespace-nowrap grid-cols-1 grid md:grid-cols-4">
          {languageItems.map((data) => {
            return (
              <LanguageItems key={data.id} name={data.name} img={data.img} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
