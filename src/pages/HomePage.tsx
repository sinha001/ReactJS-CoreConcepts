import { Github, Code, BookOpen, Zap, Users } from 'lucide-react';
// import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Stat } from '@/types';

const stats: Stat[] = [
  { label: 'Core Concepts', value: '12+', icon: BookOpen },
  { label: 'Interactive Examples', value: '50+', icon: Code },
  { label: 'Live Demos', value: '12', icon: Zap },
  { label: 'Learning Hours', value: '20+', icon: Users },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                ReactJS Core Concepts
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Interactive Learning Hub
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* DarkModeToggle */}
            <a
              href="https://github.com/sinha001/ReactJS-CoreConcepts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Interactive React Learning Experience
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Master{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              ReactJS
            </span>{' '}
            Core Concepts
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            A comprehensive collection of interative examples and live
            demonstrations covering all essential ReactJS concepts. Each concept
            is deployed separately on vercel with hands-on examples and detailed
            explanations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              size="lg"
              asChild
            >
              {/*<Link to="/">*/}
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              {/*</Link>*/}
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <a href="https://github.com/sinha001/ReactJS-CoreConcepts">
                <Github className="w-5 h-5 mr-2" />
                Explore Code
              </a>
            </Button>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg mb-3">
                    <StatIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      {/* About Section */}

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">ReactJS Core Concepts</h3>
                <p className="text-gray-400 text-sm">
                  Interactive Learning Hub
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/sinha001/ReactJS-CoreConcepts"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>Github</span>
              </a>
              <div className="text-gray-400 text-sm">
                Built with ❤️ for the React Community
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} ReactJS Core Concepts. Open
              Source Learning Resource.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
