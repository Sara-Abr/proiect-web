import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SignUpForm() {
  return (
    <div className="mx-auto max-w-sm space-y-6 bg-[#f8dbe8] p-6 rounded-xl shadow-md">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-[#436f53]">Sign Up</h1>
        <p className="text-sm text-[#6a8f73]">
          Enter your information to create an account
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name" className="text-[#436f53]">First name</Label>
            <Input
              id="first-name"
              placeholder="Lee"
              required
              className="border-[#88c9a1] focus:ring-[#88c9a1]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name" className="text-[#436f53]">Last name</Label>
            <Input
              id="last-name"
              placeholder="Robinson"
              required
              className="border-[#88c9a1] focus:ring-[#88c9a1]"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#436f53]">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            className="border-[#88c9a1] focus:ring-[#88c9a1]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-[#436f53]">Password</Label>
          <Input
            id="password"
            type="password"
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
    </div>
  );
}