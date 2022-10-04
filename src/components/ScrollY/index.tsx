import React, { useState } from "react";
import { BtnUp, IconTop } from "./styles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    scrolled > 300 ? setVisible(true) : setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <BtnUp>
      <IconTop
        onClick={scrollToTop}
        style={
          {
            height: visible ? '40px' : 0,
            transition: '300ms'
          }
        }
      />
    </BtnUp>
  );
};

export default ScrollButton;
