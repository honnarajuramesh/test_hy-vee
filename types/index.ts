import { MouseEventHandler } from "react";

export interface CustomButtonPros {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  isDisabled?: boolean;
}

export interface Modalprops {
  isModalOpen: boolean;
  onModalClose: () => void;
}
