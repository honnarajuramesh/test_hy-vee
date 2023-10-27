"use client";
import React, { useState } from "react";
import GenderDropdown from "./DropDown";
import { fetchUser } from "@/utils";
import LoadingScreen from "@/app/loading";
import { UserResponce } from "@/types";

type Props = {
  onComplete: () => void;
};

const SignUpForm = ({ onComplete }: Props) => {
  const [userName, updateUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { results }: UserResponce = await fetchUser(userName);
    setIsLoading(false);
    onComplete();

    const { dob, gender, location } = results[0];
    alert(
      `Data provided, Age: ${dob.age}, Gender: ${gender}, and Nationality: ${location.country}`
    );
  };

  const handleChange = (value: string) => {
    updateUserName(value);
  };
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            User Name
          </label>
        </div>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="text"
            required
            className="input-field "
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
