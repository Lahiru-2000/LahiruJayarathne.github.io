import { Code2, Database, Layout, Server, Smartphone, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C#", "Java", "JavaScript", "TypeScript", "PHP", "Dart"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["ASP.NET Core", "ASP.NET", "EF Core", "Dapper", "Razor Pages", "Spring Boot", "Laravel", "Microservices"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "Angular", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MS SQL Server", "MySQL", "Firebase"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["Flutter"],
  },
  {
    title: "Tools & Practices",
    icon: Wrench,
    skills: ["Git", "Visual Studio", "Postman", "DevExpress", "Agile"],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="pt-16 py-3 scroll-mt-16">
      <div className="max-w-7xl mx-auto py-3 text-white">
        {/* Section Header */}
        <section className="w-full h-auto py-8 mb-8">
          <div className="max-w-full text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="tracking-wide text-blue-400">Skills</span>
            </h2>
            <p className="font-normal max-w-full text-start text-lg text-gray-300 leading-relaxed">
              The languages, frameworks and tools I use to design, build and ship full-stack applications.
            </p>
          </div>
        </section>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <div
              key={title}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-gray-700 text-sm text-gray-200 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
