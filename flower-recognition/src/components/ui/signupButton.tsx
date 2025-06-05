/*"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
//import { MailOpen } from "lucide-react";
import { auth, provider_google } from "../../config/firebaseConfig";
import {
    createUserWithEmailAndPassword
} from "firebase/auth";


export default function SignUpButton() {
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
    <Button onClick={handleClick}>
      {clicked ? "Signed up" : "Sign up now!"}
    </Button>
  );
}*/