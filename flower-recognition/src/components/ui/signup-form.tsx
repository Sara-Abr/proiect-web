import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";

interface SignUpFormProps {
  email: string;
  setEmail: (value: string) => void;
  passwordOne: string;
  setPasswordOne: (value: string) => void;
  passwordTwo: string;
  setPasswordTwo: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string | null;
}

export function SignUpForm({
  email,
  setEmail,
  passwordOne,
  setPasswordOne,
  passwordTwo,
  setPasswordTwo,
  onSubmit,
  error,
}: SignUpFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-sm space-y-6 bg-[#f8dbe8] p-6 rounded-xl shadow-md"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-[#436f53]">Sign Up</h1>
        <p className="text-sm text-[#6a8f73]">
          Enter your information to create an account
        </p>
      </div>

      {error && <p className="text-red-600 text-sm text-center">{error}</p>}

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#436f53]">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-[#88c9a1] focus:ring-[#88c9a1]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="passwordOne" className="text-[#436f53]">Password</Label>
          <Input
            id="passwordOne"
            type="password"
            value={passwordOne}
            onChange={(e) => setPasswordOne(e.target.value)}
            required
            className="border-[#88c9a1] focus:ring-[#88c9a1]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="passwordTwo" className="text-[#436f53]">Confirm Password</Label>
          <Input
            id="passwordTwo"
            type="password"
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
            required
            className="border-[#88c9a1] focus:ring-[#88c9a1]"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#436f53] text-white hover:bg-[#6a8f73]"
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
}
