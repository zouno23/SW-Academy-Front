"use client";
import ResetCodeForm from "./ResetCodeForm";
import Form from "./forgotPasswordForm";
import { useSearchParams } from "next/navigation";
import AuthBackground from "@/components/authbackground";

const ForgotPassword = async () => {
  const searchParams = useSearchParams();
  const pageState = searchParams.get("pageState") || "forgot-password-email";

  return (
    <AuthBackground>
      <div className=" bg-gray-50 dark:bg-slate-950 z-10 rounded-3xl md:w-2/5 w-full h-full md:h-3/5 flex justify-center items-center gap-y-8 flex-col overflow-hidden shadow-xl border  ">
        {pageState == `forgot-password-verif-code` ? (
          <ResetCodeForm />
        ) : (
          <Form />
        )}
      </div>
    </AuthBackground>
  );
};

export default ForgotPassword;
