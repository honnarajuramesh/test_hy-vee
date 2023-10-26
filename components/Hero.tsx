"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x ">
        <h1 className="hero__title">
          Hey, Its an simple signup website -- made for hy-vee.
        </h1>
        <p className="hero__subtitle">
          Click on signUp at top right of the screen to view a signup form.
        </p>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="Hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
