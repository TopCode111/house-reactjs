import React from "react";

type Colors = "black" | "main";
type Sizes = "sm" | "md" | "lg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: Colors;
  size?: Sizes;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  text,
  color,
  size = "md",
  className,
  onClick,
  ...rest
}) => {
  const colorMap = {
    black: "bg-black text-white",
    main: "bg-gradient text-black",
  };

  const sizeMap = {
    sm: "text-12 font-normal py-3 px-5",
    md: "text-16 font-normal py-5 px-12",
    lg: "text-20 font-semibold py-5 px-12",
  };

  return (
    <button
      className={`rounded-full disabled:opacity-30 ${colorMap[color]} ${sizeMap[size]} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
