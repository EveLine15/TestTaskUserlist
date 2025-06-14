"use client";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export default function GetStartedButton() {
  const router = useRouter();

  function handleClick() {
    router.push("/users");
  }
  return (
    <Button className="hover:bg-purple-900" size="xl" onClick={handleClick}>
      Get Started
    </Button>
  );
}
