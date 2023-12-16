"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import GoogleIcon from "../../public/google.svg";

const GoogleSigninButton = () => {
  return (
    <Button variant="outline" onClick={() => signIn("google")}>
      <Image src={GoogleIcon} alt="google icon" priority className="w-6 h-6" />
    </Button>
  );
};

export default GoogleSigninButton;
