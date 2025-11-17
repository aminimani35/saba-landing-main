
interface Props {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export default function Drawer({ isOpen, onClose }: Props) {
    return (
      <>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-[99]"
            onClick={onClose}
          ></div>
        )}
  

        <section
          className={`fixed top-0 right-0 h-screen w-[300px] scroll-mt-[120px] bg-white z-[100] shadow-lg 
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-4 flex justify-between items-center">
            <span className="font-bold text-lg">منو</span>
            <button onClick={onClose} className="text-black font-bold">
            *
            </button>
          </div>
  
          <nav className="p-4 space-y-4">
            <a href="#language" onClick={onClose} className="block">زبان های خارجی</a>
            <a href="#art-and-skill" onClick={onClose} className="block">هنر و مهارت</a>
            <a href="#smart" onClick={onClose} className="block">تیزهوشان و نمونه دولتی</a>
            <a href="#gaj" onClick={onClose} className="block">نمایندگی آزمون های گاج</a>
            <a href="#counseling-clinic" onClick={onClose} className="block">کلینیک مشاوره</a>
            <a href="#about-us" onClick={onClose} className="block">درباره ما</a>
          </nav>
        </section>
      </>
    );
  }
  