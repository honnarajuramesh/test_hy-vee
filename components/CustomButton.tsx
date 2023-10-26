"use client";

import React from "react";
import { CustomButtonPros } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  isDisabled,
}: CustomButtonPros) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
