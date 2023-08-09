import ScrollReveal from "scrollreveal";
import PCIndex from "./components/_pc";
import SPIndex from "./components/_sp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect } from "react";
function App() {
  const reveral = (
    className: string,
    duration: number,
    distance: number,
    origin: string,
    delay: number = 0
  ) => {
    ScrollReveal().reveal(`.${className}`, {
      duration,
      origin,
      distance: `${distance}px`,
      opacity: 0,
      easing: "ease-in",
      delay,
    });
  };

  useEffect(() => {
    reveral("rtl", 1500, 50, "right");
    reveral("btt", 500, 30, "bottom");
    reveral("btt-d-1", 500, 50, "bottom", 300);
    reveral("btt-d-2", 500, 50, "bottom", 600);
    reveral("btt-d-3", 500, 50, "bottom", 900);
  }, []);

  const scrollTo = (id: string) => {
    const waitList = document.getElementById(id);
    if (waitList) {
      waitList.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50">
      <Header />
      <div className="hidden xl:block">
        <PCIndex scrollTo={scrollTo} />
      </div>
      <div className="block xl:hidden">
        <SPIndex scrollTo={scrollTo} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
