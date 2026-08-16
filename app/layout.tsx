"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Check login state from browser storage when the app loads
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsSignedIn(true);
    }
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen pt-24`}>
        
        {/* --- TOP NAVIGATION --- */}
        <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
          <nav className="flex items-center justify-between px-2 py-2 bg-white/40 backdrop-blur-md border border-white/60 shadow-lg shadow-slate-200/50 rounded-full">
            
            <div className="pl-4 pr-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                CH
              </div>
              <Link href="/" className="text-lg font-bold text-slate-900 tracking-tight">
                City Hospital
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1 font-medium text-slate-600 text-sm">
              <Link href="/" className="px-4 py-2 hover:bg-white/50 rounded-full transition-colors">Home</Link>
              <Link href="/services" className="px-4 py-2 hover:bg-white/50 rounded-full transition-colors">Services</Link>
              <Link href="/dashboard" className="px-4 py-2 hover:bg-white/50 rounded-full transition-colors">Dashboard</Link>
            </div>

            <div className="flex items-center gap-2 pr-1">
              {/* Dynamic Auth Display */}
              {isSignedIn ? (
                <Link href="/profile" className="hidden sm:flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 font-bold rounded-full border-2 border-white shadow-sm hover:ring-2 hover:ring-blue-400 transition-all">
                  JD
                </Link>
              ) : (
                <Link href="/sign-in" className="hidden sm:block px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                  Sign In
                </Link>
              )}
              
              <Link href="/book" className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md transition-all whitespace-nowrap">
                Book Now
              </Link>
              
              {/* Mobile Hamburger Menu */}
              <div className="md:hidden flex items-center">
                <details className="relative group">
                  <summary className="list-none cursor-pointer p-2.5 bg-white/50 border border-slate-200 rounded-full text-slate-700 hover:bg-white/80 transition-all shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                  </summary>
                  
                  <div className="absolute right-0 top-[120%] w-48 bg-white/90 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-2xl p-2 flex flex-col gap-1 z-50">
                    <Link href="/" className="px-4 py-3 hover:bg-slate-100 rounded-xl font-bold text-slate-700 transition-colors">Home</Link>
                    <Link href="/services" className="px-4 py-3 hover:bg-slate-100 rounded-xl font-bold text-slate-700 transition-colors">Services</Link>
                    <Link href="/dashboard" className="px-4 py-3 hover:bg-slate-100 rounded-xl font-bold text-slate-700 transition-colors">Dashboard</Link>
                    {isSignedIn ? (
                      <Link href="/profile" className="px-4 py-3 hover:bg-slate-100 rounded-xl font-bold text-slate-700 transition-colors">Profile</Link>
                    ) : null}
                  </div>
                </details>
              </div>
            </div>

          </nav>
        </div>

        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}