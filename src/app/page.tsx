import AboutAcademy from "@/modules/AboutAcademy";
import ArtAndSkill from "@/modules/ArtAndSkill";
import CounselingClinic from "@/modules/CounselingClinic";
import ForeignLanguageCourses from "@/modules/ForeignLanguageCourses";
import AzmoonGaj from "@/modules/GajAzmoon";
import Hero from "@/modules/Hero";
import Questions from "@/modules/Questions";
import ReadyForSmartSchool from "@/modules/ReadyForSmartSchool";

export default function Landing() {
  return (
    <main className="w-full  overflow-hidden h-full">
      <Hero />
      <ForeignLanguageCourses />
      <ArtAndSkill />
      <ReadyForSmartSchool />
      <AzmoonGaj />
      <CounselingClinic />
      <Questions />
      <AboutAcademy />
    </main>
  );
}
