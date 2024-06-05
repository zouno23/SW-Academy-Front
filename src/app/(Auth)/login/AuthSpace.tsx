"use client";
import LoginForm from "./LoginForm";
import LoginDesign from "./LoginSideDesign";

export default function AuthSpace() {
  return (
    <div className=" bg-gray-50 dark:bg-slate-950 z-10 rounded-3xl w-4/5 h-4/5 flex overflow-hidden shadow-xl border  ">
      <LoginForm />
      <LoginDesign />
    </div>
  );
}
