import React, { FC, ChangeEvent } from "react";

interface Option {
  value: string;
  label: string;
}

export interface SelectBoxProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const SelectBox: FC<SelectBoxProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select
      className="w-full p-2 sm:p-3 text-14 sm:text-16 border border-gray-500 rounded"
      value={selectedValue}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
