"use client";

import { useRegisterStore } from "@/store/register";
import CredentialsForm from "./form/credentials";
import ProfileForm from "./form/profile";
import Link from "next/link";

export default function RegisterForm() {
  const { steps } = useRegisterStore();

  return (
    <div className="w-[328px] md:w-[300px] h-fit flex flex-col gap-2">
      <div className="w-full h-full">
        {steps === 1 && <CredentialsForm />}
        {steps === 2 && <ProfileForm />}
      </div>

      {steps === 1 && (
        <Link
          href={"/login"}
          className="w-fit self-start text-xs text-primary underline"
        >
          Déjà inscrit?
        </Link>
      )}
    </div>
  );
}
