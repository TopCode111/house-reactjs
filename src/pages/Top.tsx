import PCIndex from "../components/_pc";
import SPIndex from "../components/_sp";

const Top = () => {
  const scrollTo = (id: string) => {
    const waitList = document.getElementById(id);
    if (waitList) {
      waitList.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hidden xl:block">
        <PCIndex scrollTo={scrollTo} />
      </div>
      <div className="block xl:hidden">
        <SPIndex scrollTo={scrollTo} />
      </div>
    </>
  );
};

export default Top;
