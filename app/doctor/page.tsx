export default function DoctorsPage() {
  // 1. This is our list of data (like a mini database)
  const doctors = [
    { name: "Dr. Sarah Jenkins", specialty: "Cardiology", experience: "15 Years" },
    { name: "Dr. Michael Chen", specialty: "Neurology", experience: "12 Years" },
    { name: "Dr. Emily Rodriguez", specialty: "Pediatrics", experience: "8 Years" },
    { name: "Dr. James Wilson", specialty: "General Surgery", experience: "20 Years" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tight mb-4">
        Our Medical Experts
      </h1>
      <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
        Meet our team of board-certified specialists dedicated to providing you with the highest quality of care.
      </p>

      {/* 2. Here we loop through our data using .map() */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform">
            <div className="w-20 h-20 bg-teal-50 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
              🩺
            </div>
            <h3 className="text-xl font-bold text-slate-800">{doctor.name}</h3>
            <p className="text-teal-600 font-semibold mb-2">{doctor.specialty}</p>
            <p className="text-slate-500 text-sm">{doctor.experience} Experience</p>
          </div>
        ))}
      </div>
    </div>
  );
}