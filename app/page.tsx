'use client'
import { Button } from "@/components/ui/button";
import { useUser } from "./Provider";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user }: any = useUser();
  const router = useRouter();
  console.log("User in Home page:", user);
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold ">Welcome to AI Interview Assistant App</h1>
      <p className="mt-4 text-lg">
        This is the home page of your AI Interview Assistant App.
      </p>
      <Button onClick={() => router.push("/dashboard")} className="mt-6">
        Let's Start
      </Button>
    </div>
  );
}
