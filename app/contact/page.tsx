"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SENDING SUPPORT TICKET:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tight mb-4">Contact Support</h1>
        <p className="text-slate-600 text-lg">Have a general question or need help with billing? We are here for you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Support Info Cards */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2 text-lg">Billing Inquiries</h3>
            <p className="text-slate-600 text-sm mb-2">Available Mon-Fri, 9am - 5pm</p>
            <p className="text-teal-600 font-bold">(555) 123-4567</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2 text-lg">General Hospital Info</h3>
            <p className="text-slate-600 text-sm mb-2">24/7 Operator</p>
            <p className="text-teal-600 font-bold">(555) 987-6543</p>
          </div>
        </div>

        {/* Support Form */}
        <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
          {isSubmitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-teal-900 mb-2">Message Sent</h3>
              <p className="text-slate-600 mb-6">Thanks {formData.name}, our support team will reply to {formData.email} soon.</p>
              <button onClick={() => setIsSubmitted(false)} className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors">Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Name</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Subject</label>
                <input required type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500"></textarea>
              </div>
              <button type="submit" className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all shadow-md">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}