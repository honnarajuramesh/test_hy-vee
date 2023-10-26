"use client";

import Dialog from "@/components/Dialog";
import Hero from "../components/Hero";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleModalClose = () => {
    router.push("/");
  };

  console;
  return (
    <main className="overflow-hidden">
      <Hero />
      <Dialog isModalOpen={true} onModalClose={handleModalClose} />
    </main>
  );
}
