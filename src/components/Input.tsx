import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ name, className, onChange, ...rest }) => {
  return (
    <input
      id={name}
      name={name}
      {...rest}
      className={`p-2 sm:p-3 text-14 sm:text-16 border border-gray-500 rounded ${className}`}
      onChange={onChange}
    />
  );
};

export default Input;
