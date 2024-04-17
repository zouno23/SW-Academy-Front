"use client";

import LoginCard from "./LoginCard";

export default function LoginDesign() {
  return (
    // spin card animation to this component. to do
    <main className="flex flex-col w-1/2 bg-gradient-to-bl from-blue-700 to-blue-100 justify-center items-center max-md:hidden">
      <LoginCard/>
    </main>
  );
}
