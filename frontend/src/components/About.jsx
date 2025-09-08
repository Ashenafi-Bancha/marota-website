 // src/components/About.jsx 
import Image1 from "../assets/about.jpg"; 

 export default function About() { 
  return ( <section id="about" className="py-24 bg-gradient-to-r from-[#112240]/50 via-[#112240]/10 to-[#0a192f]/90 text-white"> 
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
     {/* Text */} 
     <div className="md:w-1/2 space-y-6 bg-"> 
     <h2 className="text-4xl font-bold text-[var(--accent-blue)] text-center">About Marota</h2>
      <p className="text-gray-300 leading-relaxed"> 
        Marota Cinematography & Software Institute is dedicated to empowering students with modern skills in film production, programming, graphics design, and computer literacy. We bridge creativity and technology to prepare you for the digital era. </p> 
        </div>
         {/* Image */} 
         <div className="md:w-1/2"> 
         <img src={Image1} alt="About Marota" className="rounded-lg shadow-lg object-cover w-full h-80" /> 
         </div> 
         </div> 
         </section> 
         );
         }