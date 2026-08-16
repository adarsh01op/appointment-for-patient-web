"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase"; 
import Link from "next/link";

export default function DashboardPage() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false }); 

      if (error) {
        console.error("Error fetching data:", error);
      } else if (data) {
        setAppointments(data);
      }
      setIsLoading(false);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        
        {/* Premium Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">Patient Portal</h1>
            <p className="text-lg text-slate-500 font-medium">Manage your upcoming appointments and medical records securely.</p>
          </div>
          <Link href="/book" className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            New Appointment
          </Link>
        </div>

        {/* Main Dashboard Card */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400"></div>
          
          <div className="p-8 md:p-10 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-2xl font-bold text-slate-800">Your Appointments</h2>
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-full shadow-sm">
              {appointments.length} Total
            </span>
          </div>
          
          <div className="p-8 md:p-10">
            {isLoading ? (
              // Premium Skeleton Loading Animation
              <div className="space-y-6">
                {[1, 2, 3].map((skeleton) => (
                  <div key={skeleton} className="w-full h-28 bg-slate-100 rounded-2xl animate-pulse flex items-center px-6">
                    <div className="w-12 h-12 bg-slate-200 rounded-full mr-6"></div>
                    <div className="space-y-3 flex-1">
                      <div className="h-4 bg-slate-200 rounded-full w-1/3"></div>
                      <div className="h-3 bg-slate-200 rounded-full w-1/4"></div>
                    </div>
                    <div className="h-8 bg-slate-200 rounded-full w-24"></div>
                  </div>
                ))}
              </div>
            ) : appointments.length === 0 ? (
              // Premium Empty State
              <div className="text-center py-16 px-6">
                <div className="w-24 h-24 bg-blue-50 text-blue-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800 mb-3">No upcoming appointments</h3>
                <p className="text-slate-500 mb-8 max-w-md mx-auto font-medium">You don't have any scheduled visits at the moment. When you book an appointment, it will show up securely right here.</p>
                <Link href="/book" className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-700 font-bold rounded-2xl shadow-sm transition-all">
                  Book a Visit
                </Link>
              </div>
            ) : (
              // Premium Appointment Cards
              <div className="space-y-5">
                {appointments.map((apt, index) => (
                  <div key={index} className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 relative overflow-hidden">
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>

                    <div className="flex items-center gap-5">
                      <div className="hidden sm:flex w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl items-center justify-center shrink-0">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-extrabold uppercase tracking-widest rounded-full">
                            Confirmed
                          </span>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">ID: {apt.id.substring(0,6)}</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">{apt.department} Visit</h3>
                        <p className="text-slate-500 font-medium text-sm mt-1">Patient: <span className="text-slate-700">{apt.first_name} {apt.last_name}</span></p>
                      </div>
                    </div>
                    
                    <div className="mt-5 md:mt-0 md:text-right w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between bg-slate-50 md:bg-transparent p-4 md:p-0 rounded-xl">
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1 hidden md:block">Scheduled Date</p>
                      <p className="text-lg font-extrabold text-slate-800 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        {apt.date}
                      </p>
                    </div>
                    
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}