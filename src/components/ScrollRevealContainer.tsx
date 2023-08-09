// https://qiita.com/taisuke101700/items/5957eda0c63634fbaa56

import { FC, useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

type Move = "left" | "right" | "top" | "bottom";

interface ScrollRevealContainerProps extends React.HTMLAttributes<HTMLElement> {
  move: Move;
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({
  children,
  move,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 0,
        opacity: 0,
        origin: move,
        distance: "200px",
        duration: 3000,
      });
  }, [sectionRef]);

  return <section ref={sectionRef}>{children}</section>;
};
export default ScrollRevealContainer;
