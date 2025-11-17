import ArtItem from "./ArtItem";
import { ArtItemList } from "./ArtItem/@types";

export default function ArtAndSkill() {
  return (
    <section className="flex w-full justify-center items-center py-[80px] bg-background px-6">
      <div
        id="art-and-skill"
        className="bg-background scroll-mt-[120px]  flex flex-col justify-center gap-10 items-center w-full "
      >
        <h1 className=" text-[36px] gap-1 md:text-[40px] whitespace-nowrap flex text-center">
          <span className=" font-normal text-[#4b4747]">دوره های</span>
          <span className="text-primary font-black">هنر و مهارت</span>
        </h1>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-3 my-auto max-w-[1440px] mx-auto justify-center items-center w-full">
          {ArtItemList.map((data) => {
            return <ArtItem key={data.id} name={data.name} img={data.img} />;
          })}
        </div>
      </div>
    </section>
  );
}
