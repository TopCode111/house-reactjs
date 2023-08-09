import { ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
  className?: string;
  required?: boolean;
};

const FormGroup: React.FC<Props> = ({
  label,
  children,
  className,
  required = false,
}) => {
  return (
    <div className={`text-left ${className}`}>
      <div className="mb-3 font-semibold text-14 sm:text-16">
        {required && (
          <span className="bg-red-200 text-red-500 text-12 p-1 mr-2 rounded">
            必須
          </span>
        )}
        {label}
      </div>
      {children}
    </div>
  );
};

export default FormGroup;
