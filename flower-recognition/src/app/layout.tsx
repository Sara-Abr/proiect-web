import type { Metadata } from "next";
import React from "react";
import './global.css'
import { AuthUserProvider } from '@/auth/AuthContext';

export const metadata: Metadata = {
  title: "Florile noastre",
  keywords: ["flowers", "blog", "gallery", "nextjs"],
  description: "Explore, Learn and Identify Flowers with us",
};

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthUserProvider>
          {children}
        </AuthUserProvider>
      </body>
    </html>
  )
}