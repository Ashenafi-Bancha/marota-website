// src/components/Instructors.jsx
import { FaFacebookF, FaLinkedinIn,FaTelegram } from "react-icons/fa";

const instructors = [
  { name: "Mathewos Ermias", role: "Film Instructor", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Lidya Abera", role: "Web Development Trainer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Natinael Eyasu", role: "Graphics Designer", img: "https://randomuser.me/api/portraits/men/56.jpg" }
  ,
  { name: "Amanuel B.", role: "Film Instructor", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Emiru L.", role: "Web Development Trainer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Matusala A.", role: "Graphics Designer", img: "https://randomuser.me/api/portraits/men/56.jpg" }
];

export default function Instructors() {
  return (
    <section id="instructors" className="py-24 bg-[#112240] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-[var(--accent-blue)]">Meet Our Instructors</h2>
        <p className="text-gray-400 mt-2">Learn from professionals with years of experience.</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {instructors.map((inst, idx) => (
          <div key={idx} className="bg-[#00192f] rounded-lg p-6 text-center shadow-lg hover:scale-105 transition hover:shadow-2xl hover:border hover:border-[var(--accent-blue)] hover:border-2">
            <img src={inst.img} alt={inst.name} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
            <h3 className="text-xl font-semibold">{inst.name}</h3>
            <p className="text-gray-400">{inst.role}</p>
            <div className="flex justify-center space-x-4 mt-3">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><FaTelegram /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><FaLinkedinIn /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
