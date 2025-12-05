import Button from "@/components/button";

interface ITabList {
  id: number;
  name: string;
}

const TabList: ITabList[] = [
  { id: 1, name: "پیش از ثبت نام" },
  { id: 2, name: "امتحانات و آزمون" },
  { id: 3, name: "شرایط مالی" },
];

interface Props {
  activeItem: number | null;
  setActiveItem: (id: number) => void;
}

export default function TabItem({ activeItem, setActiveItem }: Props) {
  return (
    <section className="flex gap-1 md:gap-4">
      {TabList.map((data) => {
        return (
          <Button
            key={data.id}
            name={data.name}
            onClick={() => setActiveItem(data.id)}
            className={`cursor-pointer text-xs md:text-base px-2 py-1 md:px-4 md:py-2 ${
              activeItem === data.id
                ? "text-white bg-primary"
                : "text-white bg-neutral"
            }`}
          />
        );
      })}
    </section>
  );
}
