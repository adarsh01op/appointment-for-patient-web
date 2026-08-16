import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-32 text-center min-h-[85vh]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 z-0 bg-white/70 backdrop-blur-sm"></div>
        
        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
          <div className="bg-white/80 backdrop-blur-md text-teal-700 px-5 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-8 border border-teal-200 shadow-sm">
            🌟 The Future of Healthcare
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Modern healthcare, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              designed for you.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-700 mb-10 max-w-2xl leading-relaxed font-medium px-4">
            Experience compassionate, world-class care with our state-of-the-art facilities. Book appointments instantly, view your medical history, and manage your health securely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-4 sm:px-0">
            <Link href="/book" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              Book Appointment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-md border-2 border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-700 font-bold rounded-2xl shadow-sm transition-all flex items-center justify-center">
              Patient Portal
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-t border-b border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">10k+</h3>
            <p className="text-slate-500 font-medium mt-1">Happy Patients</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">50+</h3>
            <p className="text-slate-500 font-medium mt-1">Specialists</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">4.9</h3>
            <p className="text-slate-500 font-medium mt-1">Average Rating</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">24/7</h3>
            <p className="text-slate-500 font-medium mt-1">Emergency</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Departments</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">We provide specialized care across multiple disciplines to ensure you and your family get the best treatment possible.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">🩺</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Primary Care</h3>
              <p className="text-slate-500 leading-relaxed">Comprehensive health checkups, routine screenings, and preventative care for all ages.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">❤️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cardiology</h3>
              <p className="text-slate-500 leading-relaxed">Advanced heart care including ECGs, stress tests, and specialized cardiac treatments.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Neurology</h3>
              <p className="text-slate-500 leading-relaxed">Expert diagnosis and treatment for disorders of the nervous system and brain.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center bg-slate-900 text-slate-400 mt-auto relative z-10">
        <p>© 2026 City Hospital Cloud System. Built for excellence.</p>
      </footer>
      
    </div>
  );
}