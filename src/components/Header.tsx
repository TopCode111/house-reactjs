import Button from "./Button";
import Logo from "../assets/images/logo.svg";
import SPMenu from "./SPMenu";
import { LP_INDEX } from "../const";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const scrollTo = (id: string) => {
    const waitList = document.getElementById(id);
    if (waitList) {
      waitList.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full flex items-center justify-between p-5 shadow">
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="w-[100px] sm:w-[150px]" />
      </Link>
      <div className="items-center font-bold hidden sm:flex">
        <a
          onClick={() => scrollTo(LP_INDEX.problem.id)}
          className="mx-3 cursor-pointer"
        >
          {LP_INDEX.problem.name}
        </a>
        <a
          onClick={() => scrollTo(LP_INDEX.features.id)}
          className="mx-3 cursor-pointer"
        >
          {LP_INDEX.features.name}
        </a>
        <a
          onClick={() => scrollTo(LP_INDEX.target.id)}
          className="mx-3 cursor-pointer"
        >
          {LP_INDEX.target.name}
        </a>    
        <Link to={"/blogs"}>
          {LP_INDEX.blog.name}
        </Link>
        <a
          onClick={() => scrollTo(LP_INDEX.faq.id)}
          className="mx-3 cursor-pointer"
        >
          {LP_INDEX.faq.name}
        </a>
        <Button
          className="mx-3"
          text={LP_INDEX.subscribe.name}
          color={"black"}
          size={"sm"}
          onClick={() => scrollTo(LP_INDEX.subscribe.id + "-pc")}
        />
      </div>
      <Button
        text={LP_INDEX.subscribe.name}
        color={"black"}
        size="sm"
        onClick={() => scrollTo(LP_INDEX.subscribe.id + "-sp")}
        className="sm:hidden"
      />
      <div className="sm:hidden">
        <SPMenu scrollTo={scrollTo} />
      </div>
    </div>
  );
};

export default Header;
