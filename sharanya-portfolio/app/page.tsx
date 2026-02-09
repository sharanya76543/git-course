export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-bold text-indigo-700">
          Sharanya Reddy
        </h1>

        <p className="mt-4 text-2xl text-gray-700">
          Senior .NET Developer
        </p>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Experienced software engineer with 5+ years of experience building
          scalable applications using .NET, C#, SQL Server, Azure, and Microservices.
        </p>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">

          <a
            href="mailto:sharanyareddy128@email.com"
            className="text-indigo-600 font-medium hover:underline"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/sharanya-brahmanpalli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-medium hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/sharanya76543"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-medium hover:underline"
          >
            GitHub
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Download Resume
          </a>

        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">
          Professional Experience
        </h2>

        {/* Robinhood */}
        <div className="bg-white p-8 rounded-xl shadow mb-8">

          <h3 className="text-xl font-semibold">
            .NET Full Stack Developer
          </h3>

          <p className="text-gray-600">
            Robinhood, NY | March 2025 – Present
          </p>

          <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
            <li>Built distributed microservices for options trading</li>
            <li>Developed low-latency APIs with .NET 8 and gRPC</li>
            <li>Created React trading dashboards</li>
            <li>Implemented Kafka pipelines</li>
            <li>Deployed on AKS</li>
            <li>Used Redis and Cosmos DB</li>
            <li>Automated infra using Terraform</li>
          </ul>

        </div>

        {/* PayPal */}
        <div className="bg-white p-8 rounded-xl shadow mb-8">

          <h3 className="text-xl font-semibold">
            .NET Full Stack Developer
          </h3>

          <p className="text-gray-600">
            PayPal, CA | Aug 2023 – Feb 2025
          </p>

          <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
            <li>Built REST APIs with .NET 6</li>
            <li>Developed React portals</li>
            <li>Azure Service Bus workflows</li>
            <li>Azure Functions</li>
            <li>CI/CD pipelines</li>
            <li>API integrations</li>
          </ul>

        </div>

        {/* AT&T */}
        <div className="bg-white p-8 rounded-xl shadow">

          <h3 className="text-xl font-semibold">
            .NET Developer
          </h3>

          <p className="text-gray-600">
            AT&amp;T, TX | Jan 2021 – July 2023
          </p>

          <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
            <li>ASP.NET MVC apps</li>
            <li>Billing systems</li>
            <li>Bootstrap UI</li>
            <li>SQL optimization</li>
            <li>Agile development</li>
          </ul>

        </div>

      </section>

      {/* Skills */}
      <section className="bg-indigo-50 py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <SkillBox
              title="Backend"
              skills={[
                ".NET 8",
                "C#",
                "ASP.NET API",
                "Microservices",
                "gRPC",
                "SignalR",
              ]}
            />

            <SkillBox
              title="Frontend"
              skills={[
                "React",
                "Redux",
                "TypeScript",
                "HTML/CSS",
                "Tailwind",
              ]}
            />

            <SkillBox
              title="Cloud & DevOps"
              skills={[
                "Azure",
                "AKS",
                "Docker",
                "Terraform",
                "CI/CD",
              ]}
            />

            <SkillBox
              title="Databases & Messaging"
              skills={[
                "SQL Server",
                "Cosmos DB",
                "Redis",
                "Kafka",
              ]}
            />

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white text-center py-10">

        <p className="font-semibold text-lg">
          Sharanya Reddy
        </p>

        <p>.NET Full Stack Developer</p>

        <div className="mt-4 space-x-4">

          <a href="mailto:sharanyareddy128@gmail.com" className="underline">
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/sharanya-brahmanpalli"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/sharanya76543"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>

        </div>

        <p className="mt-4 text-sm opacity-80">
          © {new Date().getFullYear()} Sharanya Reddy
        </p>

      </footer>

    </main>
  );
}

/* Reusable Skill Box */
function SkillBox({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h3 className="text-xl font-semibold mb-4 text-indigo-700">
        {title}
      </h3>

      <ul className="list-disc ml-6 text-gray-700 space-y-1">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

    </div>
  );
}


