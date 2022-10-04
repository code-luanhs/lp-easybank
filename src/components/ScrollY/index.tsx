import React, { useState } from "react";
import { BtnUp, IconTop } from "./styles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    } else if (scrolled >= 300) {
      setVisible(false);
    }
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
        style={{ display: visible ? "inline" : "none" }}
      />
    </BtnUp>
  );
};

export default ScrollButton;
