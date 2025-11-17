interface Props {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: (id: number) => void;
}

export default function QuestionItem({ id, question, answer, isOpen, toggle }: Props) {
  return (
    <div
      onClick={() => toggle(id)}
      className={`cursor-pointer transition-all  duration-300 w-full bg-white rounded-[40px] px-8 py-6 shadow-sm ${
        isOpen ? "h-auto" : "h-[100px] overflow-hidden"
      }`}
    >
      <h2 className="md:text-2xl text-xl font-bold text-[#222] mb-4">{id}. {question}</h2>
      <p
        className={`text-md leading-8 text-gray-700 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {answer}
      </p>
    </div>
  );
}
