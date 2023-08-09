type Props = {
  imageSrc: string;
  title: string;
  description: string;
  subDescription?: string;
  className?: string;
};

const Guide2: React.FC<Props> = ({
  imageSrc,
  title,
  description,
  subDescription,
  className = "",
}) => {
  return (
    <div className={className}>
      <img src={imageSrc} alt="" className="mx-auto mb-5 w-40 h-40" />
      <h3 className="text-16 font-semibold mb-3">{title}</h3>
      <p className="text-14 sm:text-16 text-gray-600 whitespace-pre-wrap">
        {description}
      </p>
      {subDescription && (
        <small className="text-gray-500 text-12 whitespace-break-spaces">
          {subDescription}
        </small>
      )}
    </div>
  );
};

export default Guide2;
