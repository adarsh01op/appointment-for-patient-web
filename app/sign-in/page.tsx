"use client";

import Link from "next/link";

export default function SignInPage() {
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save login status in browser storage
    localStorage.setItem("isLoggedIn", "true");
    
    // Use window.location.href instead of router.push to force a full page update.
    // This guarantees the navigation bar reloads and shows your Avatar!
    window.location.href = "/profile";
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-20 px-4 sm:px-6 overflow-hidden">
      
      {/* Modern Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551076805-e18690c5e451?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 z-0 bg-slate-900/60 backdrop-blur-md"></div>

      {/* Fluid Glassmorphism Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-2xl rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-white/50 animate-in fade-in zoom-in-95 duration-500">
        
        <div className="text-center mb-8 sm:mb-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold mx-auto mb-5 text-xl sm:text-2xl shadow-lg shadow-blue-600/30">
            CH
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Welcome back</h1>
          <p className="text-sm sm:text-base text-slate-500 font-medium">Sign in to your patient portal</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-5 sm:space-y-6">
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-xs sm:text-sm font-bold text-slate-700 ml-1">Email Address</label>
            <input 
              type="email" 
              required
              placeholder="jane@example.com" 
              className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 text-sm sm:text-base" 
            />
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs sm:text-sm font-bold text-slate-700">Password</label>
              <Link href="#" className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">Forgot Password?</Link>
            </div>
            <input 
              type="password" 
              required
              placeholder="••••••••" 
              className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 text-sm sm:text-base" 
            />
          </div>

          <button type="submit" className="w-full py-4 sm:py-5 mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98] hover:-translate-y-1">
            Sign In Securely
          </button>
        </form>

        <p className="text-center mt-8 sm:mt-10 text-sm sm:text-base font-medium text-slate-500">
          New patient? <Link href="/book" className="text-blue-600 font-bold hover:underline">Book your first visit</Link>
        </p>
      </div>

    </div>
  );
}