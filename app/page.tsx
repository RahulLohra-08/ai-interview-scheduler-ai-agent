import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold ">Welcome to AI Interview Assistant App</h1>
      <p className="mt-4 text-lg">
        This is the home page of your AI Interview Assistant App.
      </p>
      <Button >Let's Start</Button>
    </div>
  );
}
