import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import Logo from "../assets/images/logo.svg";
import Button from "./Button";
import { LP_INDEX } from "../const";

interface MenuItemProps {
  id: string;
  text: string;
  scrollTo: (id: string) => void;
  close: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, text, scrollTo, close }) => {
  return (
    <div
      className="p-5 border-b border-gray-100"
      onClick={() => {
        close();
        scrollTo(id);
      }}
    >
      {text}
    </div>
  );
};

interface Props {
  scrollTo: (id: string) => void;
}

const SPMenu: React.FC<Props> = ({ scrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    document.body.style.overflow = "auto";
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <MdMenu
        onClick={() => setIsOpen(true)}
        className="text-30 cursor-pointer text-gray-500"
      />
      {isOpen && (
        <div className="bg-white w-full h-screen absolute top-0 left-0 z-50">
          <div className="w-full flex items-center justify-between p-5 border-b border-gray-100">
            <img src={Logo} alt="logo" className="w-[100px]" />
            <MdClose
              className="text-30 cursor-pointer text-gray-500"
              onClick={() => close()}
            />
          </div>
          <MenuItem
            id={LP_INDEX.problem.id + "-sp"}
            text={LP_INDEX.problem.name}
            scrollTo={scrollTo}
            close={close}
          />
          <MenuItem
            id={LP_INDEX.features.id + "-sp"}
            text={LP_INDEX.features.name}
            scrollTo={scrollTo}
            close={close}
          />
          <MenuItem
            id={LP_INDEX.target.id + "-sp"}
            text={LP_INDEX.target.name}
            scrollTo={scrollTo}
            close={close}
          />
          <MenuItem
            id={LP_INDEX.faq.id + "-sp"}
            text={LP_INDEX.faq.name}
            scrollTo={scrollTo}
            close={close}
          />
          <div className="text-center mt-5 px-5">
            <Button
              text={LP_INDEX.subscribe.name}
              color={"main"}
              className="w-full"
              onClick={() => {
                close();
                scrollTo(LP_INDEX.subscribe.id + "-sp");
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SPMenu;
