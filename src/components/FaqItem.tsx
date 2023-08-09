import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  title: string;
  description: string;
  className?: string;
};

const Guide: React.FC<Props> = ({ title, description, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`text-left px-5 sm:px-10 py-4 sm:py-8 shadow rounded-lg ${className}`}
    >
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-20 sm:text-32 w-[10%] sm:w-[5%]">Q</h3>
        <h3 className="font-semibold text-14 sm:text-20 w-[90%] sm:w-[95%]">
          {title}
        </h3>
        <div className="w-[5%]">
          <MdOutlineKeyboardArrowDown className="h-8 w-8" />
        </div>
      </div>
      {isOpen && (
        <div className="flex w-full mt-3">
          <div className="text-20 sm:text-32 w-[10%] sm:w-[5%]" />
          <h3 className="text-14 sm:text-20 w-[90%] sm:w-[95%] whitespace-break-spaces">
            {description}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Guide;
