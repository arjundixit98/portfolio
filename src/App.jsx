import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-blue-50 text-gray-800">
      <header className="py-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-2">
          🚀 Portfolio
        </h1>
        {/* <p className="text-gray-600 text-lg">Showcasing key projects and technologies</p> */}
        <p className="text-gray-600 text-lg">   Hi, I am Arjun Dixit, a developer passionate about building amazing web applications. 
        
        </p>
        <p className="text-gray-600 text-lg"> Explore my work and projects.</p>
      
      </header>

      <main className="w-[60%] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 content-center">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} {...p} />
          ))}
        </div>
      </main>

      <footer className="mt-16 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Arjun — Built with 💙 React & Tailwind
      </footer>
    </div>
  );
}