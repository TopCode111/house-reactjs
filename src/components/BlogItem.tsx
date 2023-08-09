import { useState, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
    title: string;
    content: string;
    className?: string;
};

const BlogItem: React.FC<Props> = ({ title, content, className }) => {
    const mathRef = useRef(0)

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`text-left px-5 sm:px-10 py-4 sm:py-8 shadow rounded-lg ${className}`}
        >
            <div
                className="flex items-center justify-between w-full cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-20 sm:text-32 w-[10%] sm:w-[5%]">B</h3>
                <h3 className="font-semibold text-14 sm:text-20 w-[90%] sm:w-[95%]">
                    {title}
                </h3>
                <div className="w-[5%]">
                    <MdOutlineKeyboardArrowDown className="h-8 w-8" />
                </div>
            </div>
            {isOpen && (
                <div className="flex w-full mt-3">
                    <div
                        ref={mathRef}
                        dangerouslySetInnerHTML={{ __html: content }}
                    >
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogItem;
