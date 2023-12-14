import { ReactNode } from "react";
import Image from "next/image";
import BackgroundImage from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Image
        src={BackgroundImage}
        alt="background image"
        fill
        priority
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
      />

      <Image
        src={Logo}
        width={120}
        height={120}
        alt="logo"
        priority
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6 "
      />
      {children}
    </div>
  );
};

export default AuthLayout;
