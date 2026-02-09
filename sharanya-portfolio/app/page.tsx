export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">
        Sharanya Reddy
      </h1>

      <p className="text-xl mt-3 text-gray-600">
        Senior .NET Developer
      </p>

      <p className="mt-4 max-w-xl text-gray-500">
        Experienced software engineer with 5+ years of experience building
        scalable applications using .NET, C#, SQL Server, Azure, and Microservices.
      </p>

      <div className="mt-6 flex gap-6 justify-center">

  <a
    href="mailto:sharanyareddy128@email.com"
    className="text-blue-600 underline"
  >
    Email
  </a>

  <a
    href="https://www.linkedin.com/in/sharanya-brahmanpalli"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/sharanya76543/Investments"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    GitHub
  </a>

  <a
  href="/resume.pdf"
  target="_blank"
  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
>
  Download Resume
</a>

</div>
{/* Professional Experience */}
<section className="mt-16 max-w-4xl mx-auto px-6">

  <h2 className="text-3xl font-bold mb-8 text-center">
    Professional Experience
  </h2>

  {/* Robinhood */}
  <div className="mb-10">
    <h3 className="text-xl font-semibold">
      .NET Full Stack Developer
    </h3>
    <p className="text-gray-600">
      Robinhood, Broadway, NY | March 2025 – Present
    </p>

    <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
      <li>Designed and built distributed .NET microservices for real-time options trading.</li>
      <li>Developed low-latency APIs using .NET 8, ASP.NET Core, and gRPC.</li>
      <li>Built real-time trading UI using React and Redux Toolkit.</li>
      <li>Implemented high-throughput pipelines using Kafka.</li>
      <li>Deployed containerized services to Azure Kubernetes Service (AKS).</li>
      <li>Used Cosmos DB and Redis for low-latency data access and caching.</li>
      <li>Automated infrastructure using Terraform.</li>
      <li>Built real-time notifications using SignalR.</li>
    </ul>
  </div>

  {/* PayPal */}
  <div className="mb-10">
    <h3 className="text-xl font-semibold">
      .NET Full Stack Developer
    </h3>
    <p className="text-gray-600">
      PayPal, San Jose, CA | Aug 2023 – Feb 2025
    </p>

    <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
      <li>Developed RESTful microservices using ASP.NET Core and .NET 6.</li>
      <li>Built internal web portals using React.</li>
      <li>Designed event-driven workflows using Azure Service Bus.</li>
      <li>Created Azure Functions for asynchronous processing.</li>
      <li>Designed Azure SQL schemas using Entity Framework Core.</li>
      <li>Implemented CI/CD pipelines in Azure DevOps.</li>
      <li>Integrated third-party APIs for KYC and AML compliance.</li>
    </ul>
  </div>

  {/* AT&T */}
  <div className="mb-10">
    <h3 className="text-xl font-semibold">
      .NET Developer
    </h3>
    <p className="text-gray-600">
      AT&amp;T, Dallas, TX | Jan 2021 – July 2023
    </p>

    <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
      <li>Developed enterprise web applications using ASP.NET Core MVC and C#.</li>
      <li>Built backend logic for billing and service provisioning.</li>
      <li>Created UI using Razor, Bootstrap, and jQuery.</li>
      <li>Optimized T-SQL queries and stored procedures.</li>
      <li>Worked in Agile teams for feature delivery and bug fixing.</li>
      <li>Automated deployments using PowerShell scripts.</li>
    </ul>
  </div>

</section>
{/* Technical Skills */}
<section className="mt-16 max-w-4xl mx-auto text-left">
  <h2 className="text-3xl font-bold mb-6 text-center">
    Technical Skills
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Backend */}
    <div>
      <h3 className="text-xl font-semibold mb-2">Backend</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>.NET Core / .NET 8</li>
        <li>C#</li>
        <li>ASP.NET Web API</li>
        <li>Microservices Architecture</li>
        <li>gRPC</li>
        <li>SignalR</li>
      </ul>
    </div>

    {/* Frontend */}
    <div>
      <h3 className="text-xl font-semibold mb-2">Frontend</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>React</li>
        <li>Redux Toolkit</li>
        <li>TypeScript</li>
        <li>HTML5 / CSS3</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>

    {/* Cloud & DevOps */}
    <div>
      <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Microsoft Azure</li>
        <li>Azure Kubernetes Service (AKS)</li>
        <li>Docker</li>
        <li>Terraform</li>
        <li>CI/CD Pipelines</li>
      </ul>
    </div>

    {/* Databases & Messaging */}
    <div>
      <h3 className="text-xl font-semibold mb-2">Databases & Messaging</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>SQL Server</li>
        <li>Cosmos DB</li>
        <li>Redis</li>
        <li>Apache Kafka</li>
      </ul>
    </div>

  </div>
</section>
{/* Projects */}
<section className="mt-16 max-w-4xl mx-auto text-left">
  <h2 className="text-3xl font-bold mb-6 text-center">
    Selected Projects
  </h2>

  <div className="space-y-6">

    <div>
      <h3 className="text-xl font-semibold">
        Real-Time Options Trading Platform
      </h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Designed and developed real-time trading services using .NET 8 and ASP.NET Core.</li>
        <li>Implemented low-latency APIs and gRPC services for high-frequency data exchange.</li>
        <li>Integrated Kafka for real-time market data streaming and event processing.</li>
        <li>Built responsive trading UI using React and Redux Toolkit.</li>
        <li>Deployed services to Azure Kubernetes Service (AKS) using Docker.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold">
        Real-Time Notification System
      </h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Built scalable notification services using SignalR and .NET Core.</li>
        <li>Enabled real-time alerts for trading events and system updates.</li>
        <li>Optimized performance using Redis caching.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold">
        Cloud-Native Microservices Platform
      </h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Designed and deployed containerized microservices using Docker and AKS.</li>
        <li>Automated infrastructure provisioning using Terraform.</li>
        <li>Implemented CI/CD pipelines for automated build and deployment.</li>
      </ul>
    </div>

  </div>
</section>
<footer className="mt-20 py-8 border-t text-center text-gray-600">
  <p className="font-semibold">Sharanya Reddy</p>
  <p>.NET Full Stack Developer</p>

  <div className="mt-3 space-x-4">
    <a href="mailto:sharanyareddy128@gmail.com" className="text-blue-600 underline">Email</a>
    <a href="https://www.linkedin.com/in/sharanya66.linkedin.com/in/YOUR_LINKEDIN" target="_blank" className="text-blue-600 underline">LinkedIn</a>
    <a href="https://github.com/sharanya76543" target="_blank" className="text-blue-600 underline">GitHub</a>
  </div>

  <p className="mt-4 text-sm">© {new Date().getFullYear()} Sharanya Reddy</p>
</footer>

  </main>
  );
}

