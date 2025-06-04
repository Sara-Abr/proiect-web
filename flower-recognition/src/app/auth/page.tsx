
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
//import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => { //trbuie implementat in fiecare pagina pt care conteaza autentificarea
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
   // const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
export default function Auth() {
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