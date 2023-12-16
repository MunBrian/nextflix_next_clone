import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="my-6">
      <Button>Hello</Button>
      <h1>{session?.user?.name}</h1>
      <img src={session?.user?.image} alt="user's profile" />
    </div>
  );
}
