import { Github, ExternalLink, Code, BookOpen, Zap, Users, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stat } from "@/types";
import { ForwardLink } from "@/components/ForwardLink";
import { useDarkMode } from "@/hooks/useDarkMode";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { coreConceptData } from "@/data/coreConceptData";

const stats: Stat[] = [
  { label: "Core Concepts", value: "12+", icon: BookOpen },
  { label: "Interactive Examples", value: "50+", icon: Code },
  { label: "Live Demos", value: "12", icon: Zap },
  { label: "Learning Hours", value: "20+", icon: Users },
];

export default function HomePage() {
  const { darkMode, toggleDarkMode, isLoaded } = useDarkMode();
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
            <DarkModeToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              isLoaded={isLoaded}
            />

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
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Interactive React Learning Experience
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Master{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              ReactJS
            </span>{" "}
            Core Concepts
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            A comprehensive collection of interactive examples and live
            demonstrations covering all essential ReactJS concepts. Each concept
            is deployed separately on Vercel with hands-on examples and detailed
            explanations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <ForwardLink to="/learn">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              </ForwardLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <a
                href="https://github.com/sinha001/ReactJS-CoreConcepts"
                target="_blank"
                rel="noopener noreferrer"
              >
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

      {/*Day 2: Core Concepts Grid */}

      <section className="py-20 px-4 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Core Concepts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Each concept includes interactive examples, live demos, and
              comprehensive explanation to help you master React Development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreConceptData.map((concept, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-full h-2 bg-gradient-to-r ${concept.color} rounded-t-lg mb-4`}
                  />
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {concept.title}
                    </CardTitle>
                    <Badge
                      variant={
                        concept.difficulty === "Beginner"
                          ? "default"
                          : concept.difficulty === "Intermediate"
                          ? "secondary"
                          : "destructive"
                      }
                      className="text-xs"
                    >
                      {concept.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {concept.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {concept.topics.map((topic, topicIndex) => (
                      <span
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        key={topicIndex}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  {/*day 3 -- detail overview of topic with live demo view.. */}
                  <div className="flex gap-2">
                    <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 dark:from-gray-100 dark:to-gray-300 dark:text-gray-900 dark:hover:from-gray-200 dark:hover:to-gray-400"
                  >
                    <a
                      href={concept.vercelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                  {concept.detailPath && (
                    <Button asChild variant={"outline"} className="flex-1">
                      <ForwardLink to={concept.detailPath}>
                        <Info className="w-4 h-4 mr-2" />
                        Details
                      </ForwardLink>
                    </Button>
                  )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="cotntainer mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About This Project
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            ReactJS Core Concepts is a comprehensive learning resource designed
            to help developers master React Fundamentals through interacive
            examples &amp; live demonstrations. Each concept is carefully
            crafted with practical examples, deployed individually on Vercel for
            easy access &amp; exploration.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Interactive Examples
              </h3>
              <p className="text-gray-600 dar:text-gray-400">
                Hands-on code examples you can modify and experiment with in
                real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Live Deployments
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Each concept deployed separately on Vercel for immediate access
                and testing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Comprehensive Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                From beginner to advanced concepts with detailed explanations
                and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

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
