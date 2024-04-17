"use client";
import SignupForm from "./SignupForm";
import SignupDesign from "./SignupSideDesign";

export default function AuthSpace() {
  return (
    <div className=" bg-white dark:bg-slate-950 z-10 rounded-3xl w-4/5 h-4/5 flex overflow-hidden shadow-md  ">
      <SignupForm />
      <SignupDesign />
    </div>
  );
}
