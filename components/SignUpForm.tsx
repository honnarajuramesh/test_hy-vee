"use client";
import React, { useState } from "react";
import GenderDropdown from "./DropDown";

type Props = {};

const SignUpForm = (props: Props) => {
  const [formData, setFormData] = useState({
    age: "",
    nationality: "",
    gender: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.age && formData.nationality && formData.gender) {
      // Handle form submission with formData
      console.log("Form Data:", formData);
    } else {
      // Handle the case when the gender field is not selected
      alert("Please select a gender.");
    }
  };

  const handleGenderSelect = (selectedGender: string) => {
    setFormData({ ...formData, gender: selectedGender });
  };

  const handleChange = (name: "age" | "nationality", value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      className="space-y-6"
      action="#"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor="age"
          className="block text-sm font-medium leading-6 text-gray-900 mt-5"
        >
          Age
        </label>
        <div className="mt-2">
          <input
            id="age"
            name="age"
            type="number"
            required
            className="input-field "
            onChange={(e) => handleChange("age", e.target.value)}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="nationality"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nationality
          </label>
        </div>
        <div className="mt-2">
          <input
            id="nationality"
            name="nationality"
            type="text"
            autoComplete="current-password"
            required
            className="input-field "
            onChange={(e) => handleChange("nationality", e.target.value)}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="gender"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Gender
          </label>
        </div>
        <GenderDropdown
          onGenderSelect={function (gender: string): void {
            console.log(gender);
            handleGenderSelect(gender);
          }}
        />
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
