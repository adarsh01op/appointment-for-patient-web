import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: "🩺",
      title: "Primary Care",
      desc: "Comprehensive health checkups, routine screenings, and preventative care for all ages.",
      color: "bg-blue-100 text-blue-600",
      border: "hover:border-blue-300 hover:shadow-blue-100"
    },
    {
      icon: "❤️",
      title: "Cardiology",
      desc: "Advanced heart care including ECGs, stress tests, and specialized cardiac treatments.",
      color: "bg-red-100 text-red-600",
      border: "hover:border-red-300 hover:shadow-red-100"
    },
    {
      icon: "🧠",
      title: "Neurology",
      desc: "Expert diagnosis and treatment for disorders of the nervous system and brain.",
      color: "bg-purple-100 text-purple-600",
      border: "hover:border-purple-300 hover:shadow-purple-100"
    },
    {
      icon: "🦴",
      title: "Orthopedics",
      desc: "Specialized care for bones, joints, ligaments, tendons, and muscles.",
      color: "bg-orange-100 text-orange-600",
      border: "hover:border-orange-300 hover:shadow-orange-100"
    },
    {
      icon: "👶",
      title: "Pediatrics",
      desc: "Compassionate, expert healthcare dedicated to infants, children, and adolescents.",
      color: "bg-teal-100 text-teal-600",
      border: "hover:border-teal-300 hover:shadow-teal-100"
    },
    {
      icon: "🚑",
      title: "Emergency Care",
      desc: "24/7 rapid response trauma and urgent care facilities equipped for critical situations.",
      color: "bg-rose-100 text-rose-600",
      border: "hover:border-rose-300 hover:shadow-rose-100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-blue-200 shadow-sm">
            Medical Departments
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Specialized Care. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Exceptional Results.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            We combine world-class medical expertise with state-of-the-art technology to provide the best possible care for you and your family.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200/40 border-2 border-slate-100 transition-all duration-300 hover:-translate-y-2 group ${service.border}`}>
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-sm transition-transform group-hover:scale-110 duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-8">
                {service.desc}
              </p>
              <Link href="/book" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                Book Department 
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}