"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MailOpen } from "lucide-react";
import { auth, provider_google } from "@/config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

export default function LoginButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    try {
      setClicked(true);
      await signInWithPopup(auth, provider_google);
    } catch (error) {
      console.error("Login error:", error);
      setClicked(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={`w-full flex items-center justify-center gap-2 ${
        clicked ? "bg-[#88c9a1]" : "bg-[#436f53]"
      } text-white hover:bg-[#6a8f73] transition-colors`}
    >
      <MailOpen className="w-4 h-4" />
      {clicked ? "Logged In" : "Login with Google"}
    </Button>
  );
}