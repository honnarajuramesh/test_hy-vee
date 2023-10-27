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

// this interface was created after looking into docs of "randomuser.me",
//And only partial/ required part is used here.

interface User {
  dob: { date: Date; age: number };
  gender: "female" | "male";
  location: {
    city: string;
    coordinates: { latitude: string; longitude: string };
    country: string;
    postcode: number;
    state: string;
  };
}
export interface UserResponce {
  results: [User];
}
