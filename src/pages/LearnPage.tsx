import {
  Code,
  Rocket,
  Trophy,
  Star,
  Github,
  ArrowRight,
  CheckCircle,
  Play,
  Clock,
  Circle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { learningStages } from "@/data/learningStagesData";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDarkMode } from "@/hooks/useDarkMode";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function LearnPage() {
  const { darkMode, toggleDarkMode, isLoaded } = useDarkMode();
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(1);
  const [completedConcepts, setCompletedConcepts] = useState<string[]>([]);

    useEffect(()=>{
        //load progress from localStorage
        const savedProgress = localStorage.getItem('react-learning-progress')
        if(savedProgress){
            const parsed = JSON.parse(savedProgress);
            setCompletedConcepts(parsed.completed || []);
            setCurrentStage(parsed.currentStage || 1);
        }
    },[])

    useEffect(()=>{
        const totalConcepts = learningStages.reduce((acc, stage)=> acc + stage.concepts.length,0)
        const completed = completedConcepts.length
        setProgress((completed / totalConcepts)*100)

        localStorage.setItem('react-learning-progress', JSON.stringify({
            completed: completedConcepts, 
            currentStage
        }))
    },[completedConcepts,currentStage])

    const markAsCompleted = (conceptTitle:string) => {
        if(!completedConcepts.includes(conceptTitle)){
            setCompletedConcepts([...completedConcepts, conceptTitle])
        }
    }

    const getStageProgress = (stageId: number) => {
    const stage = learningStages.find(s => s.id === stageId)
    if (!stage) return 0
    const completed = stage.concepts.filter(concept => 
      completedConcepts.includes(concept.title)
    ).length
    return (completed / stage.concepts.length) * 100
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  ReactJS Learning Path
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Stage-by-Stage Learning
                </p>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* Progress Indicator */}
            <div className="hidden md:flex items-center space-x-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Progress:
              </span>
              <div className="w-32">
                <Progress value={progress} className="h-2" />
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {Math.round(progress)}%
              </span>
            </div>
            {/* DarkModeToggle */}
            <DarkModeToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              isLoaded={isLoaded}
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Your React Learning Journey Starts Here
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Learn React{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Step by Step
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Follow our structured learning path with interactive examples, animations, and hands-on projects. Master React concepts progressively from beginner to advanced level.
          </p>

          {/* Mobile Progress */}
          <div className="md:hidden mb-8">
            <div className="flex items-center">
                <span className="text-sm">Overall Progress:</span>
                <span className="text-sm font-medium">
                    {Math.round(progress)}%
                </span>
            </div>
            <Progress value={progress} className="h-3 max-w-xs mx-auto" />
          </div>
        </div>
      </section>

       {/* Learning Stages */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {learningStages.map((stage, stageIndex) => {
            const StageIcon = stage.icon
            const stageProgress = getStageProgress(stage.id)
            const isCurrentStage = stage.id === currentStage
            const isCompleted = stageProgress === 100

            return (
              <div key={stage.id} className="mb-12">
                {/* Stage Header */}
                <div className={`${stage.bgColor} rounded-2xl p-6 mb-6 border-2 ${isCurrentStage ? 'border-blue-300 dark:border-blue-600' : 'border-transparent'} transition-all duration-300`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <StageIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Stage {stage.id}: {stage.title}
                          </h2>
                          {isCompleted && (
                            <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                              <Trophy className="w-5 h-5" />
                              <span className="text-sm font-medium">Completed!</span>
                            </div>
                          )}
                          {isCurrentStage && !isCompleted && (
                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                              Current Stage
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{stage.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {Math.round(stageProgress)}%
                      </div>
                      <Progress value={stageProgress} className="w-24 h-2" />
                    </div>
                  </div>
                </div>

                {/* Concepts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stage.concepts.map((concept, conceptIndex) => {
                    const isCompleted = completedConcepts.includes(concept.title)
                    
                    return (
                      <Card 
                        key={conceptIndex} 
                        className={`group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800 ${isCompleted ? 'ring-2 ring-green-400 dark:ring-green-500' : ''}`}
                      >
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              {isCompleted ? (
                                <CheckCircle className="w-6 h-6 text-green-500" />
                              ) : (
                                <Circle className="w-6 h-6 text-gray-400" />
                              )}
                              <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {concept.title}
                              </CardTitle>
                            </div>
                            <Badge 
                              variant={concept.difficulty === 'Beginner' ? 'default' : concept.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}
                              className="text-xs"
                            >
                              {concept.difficulty}
                            </Badge>
                          </div>
                          <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                            {concept.description}
                          </CardDescription>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{concept.duration}</span>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="pt-0">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {concept.topics.map((topic, topicIndex) => (
                              <span 
                                key={topicIndex}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button 
                              asChild 
                              className="flex-1 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 dark:from-gray-100 dark:to-gray-300 dark:text-gray-900 dark:hover:from-gray-200 dark:hover:to-gray-400"
                            >
                              <a 
                                href={concept.vercelUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => markAsCompleted(concept.title)}
                              >
                                <Play className="w-4 h-4 mr-2" />
                                {isCompleted ? 'Review' : 'Start'}
                              </a>
                            </Button>
                            
                            {!isCompleted && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => markAsCompleted(concept.title)}
                                className="px-3"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                {/* Stage Connector */}
                {stageIndex < learningStages.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-600">
                      <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                      <ArrowRight className="w-6 h-6" />
                      <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Completion Celebration */}
      {progress === 100 && (
        <section className="py-12 px-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
          <div className="container mx-auto text-center max-w-2xl">
            <div className="mb-6">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                🎉 Congratulations!
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                You've completed the entire React learning path! You're now ready to build amazing React applications.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Star className="w-5 h-5 mr-2" />
                Share Your Achievement
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/sinha001/ReactJS-CoreConcepts" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Contribute to Project
                </a>
              </Button>
            </div>
          </div>
        </section>
      )}

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
