import React from "react";

type Props = {
  imageSrc: string;
  index: number;
  title: string;
  description: JSX.Element;
  imagePosition: "left" | "right";
  className?: string;
};

const Guide: React.FC<Props> = ({
  imageSrc,
  index,
  title,
  description,
  imagePosition,
  className,
}) => {
  const imgClass = imagePosition === "left" ? "order-0" : "order-1";

  return (
    <div
      className={`flex text-left items-center flex-col sm:flex-row ${className}`}
    >
      <img
        src={imageSrc}
        className={`w-40 sm:w-80 h-40 sm:h-80 ${imgClass}`}
        alt="My image"
      />
      <div className="px-5 sm:px-20">
        <div className="h-10 sm:h-14 w-10 sm:w-14 rounded-full flex items-center justify-center text-16 sm:text-30 font-semibold text-gray-700 mb-3 border-2 border-gray-700">
          {index}
        </div>
        <h3 className="text-black text-16 sm:text-30 font-semibold mb-3">
          {title}
        </h3>
        {description}
      </div>
    </div>
  );
};

export default Guide;
