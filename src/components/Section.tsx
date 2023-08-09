import { ReactNode } from "react";

type Props = {
  title: string;
  subTitle?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

const Section: React.FC<Props> = ({
  title,
  subTitle,
  description,
  children,
  className,
  id,
}) => {
  return (
    <section
      className={`px-5 sm:px-28 py-8 sm:py-12 text-center ${className}`}
      id={id}
    >
      <div className="mb-8">
        <h2 className="text-32 font-semibold mb-2 hidden sm:block whitespace-break-spaces">
          {title}
        </h2>
        <small className="text-gray-500">{subTitle}</small>
        <h2 className="text-20 font-semibold mb-3 block sm:hidden whitespace-break-spaces">
          {title}
        </h2>
        <p className="text-14 sm:text-16">{description}</p>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
