"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import Link from "next/link";

export default function BookPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    department: "Primary Care",
    symptoms: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // NEW: State for our custom premium error message
  const [errorMsg, setErrorMsg] = useState("");
  
  const departments = ["Primary Care", "Cardiology", "Neurology", "Orthopedics", "Pediatrics"];
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  
  useEffect(() => {
    let dates : any[]=[];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      dates.push(nextDate);
    }
    setAvailableDates(dates);
    if (dates.length > 0) {
      setFormData(prev => ({ ...prev, date: dates[0].toISOString().split('T')[0] }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(""); // Clear any previous errors

    // NEW: Custom Validation Check
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.symptoms) {
      setErrorMsg("Please fill out all required fields before submitting.");
      return; // Stop the function from proceeding
    }

    setIsSubmitting(true);

    const { error } = await supabase
      .from('appointments')
      .insert([
        { 
          first_name: formData.firstName, 
          last_name: formData.lastName, 
          email: formData.email, 
          date: formData.date, 
          department: formData.department, 
          symptoms: formData.symptoms 
        }
      ]);

    setIsSubmitting(false);

    if (error) {
      // Show database errors in our premium banner instead of an ugly alert()
      setErrorMsg("Connection error: " + error.message);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Request an Appointment</h1>
          <p className="text-lg text-slate-500 font-medium">Fill out the form below and we will schedule you with our top specialists.</p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          {isSubmitted ? (
            <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Confirmed!</h3>
              <p className="text-slate-500 text-lg font-medium mb-10">Your appointment has been safely stored in our cloud database.</p>
              <Link href="/dashboard" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-lg transition-all">
                View Your Dashboard
              </Link>
            </div>
          ) : (
            // NEW: Added 'noValidate' here to block the cheap browser popups
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              
              {/* NEW: Premium Error Banner */}
              {errorMsg && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                  <svg className="w-6 h-6 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  <p className="font-semibold text-red-700">{errorMsg}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                  <input placeholder="Jane" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700" onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                  <input placeholder="Doe" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700" onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input type="email" placeholder="jane@example.com" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                
                <div className="space-y-2 relative">
                  <label className="text-sm font-bold text-slate-700 ml-1">Department</label>
                  <button 
                    type="button" 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 flex justify-between items-center"
                  >
                    {formData.department}
                    <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-[85px] left-0 w-full bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden z-20 py-2">
                      {departments.map((dept) => (
                        <button
                          key={dept}
                          type="button"
                          className="w-full text-left px-5 py-3 hover:bg-slate-50 hover:text-blue-600 font-medium text-slate-700 transition-colors"
                          onClick={() => {
                            setFormData({...formData, department: dept});
                            setIsDropdownOpen(false); 
                          }}
                        >
                          {dept}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 ml-1">Select an Upcoming Date</label>
                <div className="flex overflow-x-auto gap-4 pb-4 pt-2 px-1 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {availableDates.map((d, index) => {
                    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
                    const dayNum = d.getDate();
                    const monthName = d.toLocaleDateString('en-US', { month: 'short' });
                    const fullDateString = d.toISOString().split('T')[0];
                    const isSelected = formData.date === fullDateString;

                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setFormData({...formData, date: fullDateString})}
                        className={`flex-shrink-0 snap-center flex flex-col items-center justify-center w-24 h-28 rounded-2xl border-2 transition-all duration-300 ${
                          isSelected 
                            ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/40 scale-105' 
                            : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 hover:-translate-y-1'
                        }`}
                      >
                        <span className={`text-xs font-bold uppercase tracking-wider mb-1 ${isSelected ? 'text-blue-200' : 'text-slate-400'}`}>{monthName}</span>
                        <span className={`text-3xl font-extrabold ${isSelected ? 'text-white' : 'text-slate-800'}`}>{dayNum}</span>
                        <span className={`text-sm font-medium mt-1 ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>{dayName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Symptoms or Reason for Visit</label>
                <textarea rows={4} placeholder="Please describe how you are feeling..." className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 resize-none" onChange={(e) => setFormData({...formData, symptoms: e.target.value})}></textarea>
              </div>

              <button disabled={isSubmitting} type="submit" className="w-full py-5 mt-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98] hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0">
                {isSubmitting ? "Processing..." : "Submit Appointment Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}