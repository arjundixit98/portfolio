export default function ProjectCard({ title, description, tech, github, demo, detailed_description }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-200 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>

       <p className="text-gray-400 mt-8 text-sm leading-relaxed">{detailed_description}</p>
        <div className="flex flex-wrap gap-2 mt-8">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-6">
      <a
  href={github}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-4 py-2 rounded-xl bg-white text-gray-900 border border-gray-300 font-semibold shadow-sm hover:bg-gray-100 transition"
>
  🔗 GitHub
</a>

<a
  href={demo}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-4 py-2 rounded-xl bg-indigo-600 !text-white font-semibold shadow-sm hover:bg-indigo-700 transition"
>
  🚀 Live Demo
</a>
      </div>
    </div>
  );
}