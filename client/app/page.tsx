"use client";
import { HeroUIProvider } from "@heroui/react";
import { Signup } from "@/components";

export default function Home() {
  return (
    <HeroUIProvider>
      <div className="min-h-screen max-h-screen grid place-items-center">
       <Signup/>
      </div>
    </HeroUIProvider>
  );
}