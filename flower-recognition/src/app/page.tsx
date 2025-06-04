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
//import { Button } from "@/components/ui/button";
//import { Input } from "@/components/ui/input";
//import { useRouter } from 'next/router';
//import { MailOpen } from "lucide-react"
import LoginButton from "@/components/ui/loginButton";

export default function Home() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div>
       <LoginButton />
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

