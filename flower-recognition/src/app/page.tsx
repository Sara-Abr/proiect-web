"use client";

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/router';
import { MailOpen } from "lucide-react"
import { useState } from "react";
import { auth, provider_google } from "../lib/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    try {
      setClicked(true);
      await signInWithPopup(auth, provider_google);
    } catch (error) {
      console.error("Login error:", error);
      setClicked(false); // reset if there's an error
    };

  return (
    <Button onClick={handleClick}>
      <MailOpen /> {clicked ? "Logged In" : "Login with Google"}
    </Button>
  );
  }
export default function Home() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            // handle form submission here
            console.log(data);
          })}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit">Submit</button>
        </form>
      </Form>
    </div>
  );
}

