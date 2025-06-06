import { cn } from "@/auth/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoginButton from "./loginButton";
import Link from 'next/link';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#f8dbe8] text-[#333] shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-[#436f53] text-2xl">Login to your account</CardTitle>
          <CardDescription className="text-[#6a8f73]">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-[#436f53]">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="border-[#88c9a1] focus:ring-[#88c9a1]"
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-[#436f53]">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="border-[#88c9a1] focus:ring-[#88c9a1]"
                />
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <Button
                  type="submit"
                  className="w-full bg-[#436f53] hover:bg-[#6a8f73] text-white"
                >
                  Login
                </Button>
                <LoginButton />
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-[#436f53]">
              Don&apos;t have an account?{" "}
              <Link href="/signUp" className="underline underline-offset-4 text-[#6a8f73] hover:text-[#436f53]">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}