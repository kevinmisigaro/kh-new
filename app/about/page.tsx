import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/"
            className="text-purple-400 hover:text-purple-300 mb-8 inline-block"
          >
            ← Back to Home
          </Link>

          <h1 className="text-5xl font-bold text-white mb-8">About This Project</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Tech Stack</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">▹</span>
                <span><strong className="text-white">Next.js 14:</strong> React framework with App Router</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">▹</span>
                <span><strong className="text-white">TypeScript:</strong> Type-safe development</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">▹</span>
                <span><strong className="text-white">Tailwind CSS:</strong> Utility-first styling</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">▹</span>
                <span><strong className="text-white">ESLint:</strong> Code quality and consistency</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>Server and Client Components</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>File-based routing with App Router</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>Responsive design with Tailwind CSS</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>TypeScript for type safety</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>Modern UI with glassmorphism effects</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
