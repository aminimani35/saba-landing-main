"use client";
import { useState } from "react";
import TabItem from "./Tabs/TabItem";
import QuestionItem from "./QuestionList";
import { questions } from "./Tabs/TabItem/@types";

export default function Questions() {
  const [activeTabId, setActiveTabId] = useState<number | null>(null);

  const [activeSection, setActiveSection] = useState<number>(1);

  const toggle = (id: number) => {
    setActiveTabId(activeTabId === id ? null : id);
  };

  const filteredQuestions = questions.filter(
    (item) => item.sectionId === activeSection
  );

  return (
    <section className="bg-background w-full h-full flex justify-center items-center px-6 py-20">
      <div className="w-full flex flex-col justify-center items-center gap-6 h-full max-w-[1440px]">
      <h1 className="flex flex-wrap justify-center items-center font-normal text-center text-[28px] sm:text-[32px] md:text-[40px] leading-snug">
  <span className="font-normal text-[#222]">سوالات و پرسش‌های&nbsp;</span>
  <span className="text-primary  font-extrabold">متداول</span>
</h1>


        <TabItem activeItem={activeSection} setActiveItem={setActiveSection} />

        <div className="w-full flex flex-col gap-4">
          {filteredQuestions.map((item) => (
            <QuestionItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={activeTabId === item.id}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
