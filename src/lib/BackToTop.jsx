import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed z-99999999 bottom-10 right-10 bg-orange-500 cursor-pointer text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-110"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
