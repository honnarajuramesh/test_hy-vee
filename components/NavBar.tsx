"use client";
import React from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("?signup=true");
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="" className="flex justify-center items-center">
          <div>Home</div>
        </Link>
        <CustomButton
          title="sign Up"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={handleSignUp}
        />
      </nav>
    </header>
  );
};

export default NavBar;
