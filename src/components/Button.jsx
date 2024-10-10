import classNames from "classnames";
import React, { createElement } from "react";
import PropTypes from "prop-types";

const Button = ({ size, disabled, children }) => {
  return createElement(
    "button",
    {
      className: classNames(
        "bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold w-[217px]",
        {
          "px-5 h-[52px] w-[232px] text-[17px]": size === "large",
          "px-4 h-[36px] w-[101px] text-[15px]": size === "normal",
          "px-4 w-auto h-[36px]": size === "small",
          [`opacity-50 cursor-not-allowed`]: disabled
        }
      ),
    },
    children
  );
};

Button.prototypes = {
  size: PropTypes.oneOf(["normal, large"]),
};

Button.defaultProps = {
  size: "normal",
  opacity: 100
};

export default Button;
