"use client";

import { useEffect, useState } from "react";
import { Button } from "../common/button";
import { useRouter } from "next/navigation";
import { logout } from "@/services/auth/logout";

export default function Logout() {
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      router.push("/login");
    }
  }, [router, redirect]);

  const onLogout = async () => {
    try {
      const response = await logout();

      if (response) {
        setRedirect(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <Button onClick={onLogout}>Se déconnecter</Button>;
}
