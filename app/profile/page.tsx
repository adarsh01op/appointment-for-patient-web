"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    sex: "Male",
    dob: "August 6",
    email: "john.doe@example.com",
    phone: "+1 (555) 019-8234"
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Use FileReader to reliably convert the file to a displayable data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 sm:pt-32 pb-16 px-4 sm:px-6 flex justify-center">
      <div className="w-full max-w-5xl">
        
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">My Profile</h1>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all text-sm"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Sidebar / Avatar Card */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col items-center text-center h-fit">
            
            <div className="relative group mb-4">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold shadow-inner overflow-hidden border-4 border-white">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span>{userInfo.name.split(' ').map(n => n[0]).join('')}</span>
                )}
              </div>

              <label className="absolute inset-0 bg-slate-900/50 rounded-full flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-[10px] font-bold uppercase tracking-wider">Change Photo</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">{userInfo.name}</h2>
            <p className="text-slate-500 font-medium mb-6">Patient ID: #CH-8924</p>
            
            <div className="w-full space-y-3">
              <label className="block w-full py-3 sm:py-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-xl transition-colors text-sm sm:text-base border border-slate-200 cursor-pointer text-center">
                Upload New Photo
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            <button 
  onClick={() => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/sign-in";
  }}
  className="w-full py-3 sm:py-4 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-xl transition-colors text-sm sm:text-base cursor-pointer"
>
  Sign Out
</button>
            </div>
          </div>

          {/* Details & Settings Column */}
          <div className="md:col-span-2 space-y-6 sm:space-y-8">
            
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-slate-200/40 border border-slate-100">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                Personal Details {isEditing && <span className="text-xs bg-blue-100 text-blue-600 px-2.5 py-0.5 rounded-full font-bold ml-2">Editing Mode Active</span>}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Full Name</p>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={userInfo.name} 
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 outline-none focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-base sm:text-lg font-semibold text-slate-800">{userInfo.name}</p>
                  )}
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Biological Sex</p>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={userInfo.sex} 
                      onChange={(e) => setUserInfo({...userInfo, sex: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 outline-none focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-base sm:text-lg font-semibold text-slate-800">{userInfo.sex}</p>
                  )}
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Date of Birth</p>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={userInfo.dob} 
                      onChange={(e) => setUserInfo({...userInfo, dob: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 outline-none focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-base sm:text-lg font-semibold text-slate-800">{userInfo.dob}</p>
                  )}
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                  {isEditing ? (
                    <input 
                      type="email" 
                      value={userInfo.email} 
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 outline-none focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-base sm:text-lg font-semibold text-slate-800">{userInfo.email}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={userInfo.phone} 
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 outline-none focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-base sm:text-lg font-semibold text-slate-800">{userInfo.phone}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-slate-200/40 border border-slate-100">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Lifestyle & Health Notes
              </h3>
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100">
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  Patient reports staying active by spending time in nature. Currently engaged in intensive desk work (web development and academic research on geographical environmental impacts), which may contribute to posture-related strain. Recommends regular stretching intervals.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}