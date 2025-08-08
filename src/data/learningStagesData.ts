import { LearningStage } from '@/types'
import { Lightbulb, Target, Zap, Rocket, Trophy } from 'lucide-react'

export const learningStages: LearningStage[] = [
  {
    id: 1,
    title: "Foundation",
    description: "Start your React journey with the fundamentals",
    icon: Lightbulb,
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    concepts: [
      {
        title: "What is React?",
        description: "Understanding React, Virtual DOM, and why React matters",
        duration: "15 min",
        difficulty: "Beginner",
        vercelUrl: "https://what-is-react.vercel.app",
        completed: false,
        topics: ["Virtual DOM", "Component-Based", "Declarative"]
      },
      {
        title: "JSX Fundamentals",
        description: "Learn JSX syntax and how it transforms to JavaScript",
        duration: "20 min",
        difficulty: "Beginner",
        vercelUrl: "https://jsx-concept.vercel.app",
        completed: false,
        topics: ["JSX Syntax", "Expressions", "Fragments"]
      },
      {
        title: "Components Basics",
        description: "Create your first functional components",
        duration: "25 min",
        difficulty: "Beginner",
        vercelUrl: "https://components-concept.vercel.app",
        completed: false,
        topics: ["Functional Components", "Component Structure", "Rendering"]
      }
    ]
  },
  {
    id: 2,
    title: "Core Concepts",
    description: "Master the essential React concepts",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    concepts: [
      {
        title: "Props & Data Flow",
        description: "Learn how to pass data between components",
        duration: "30 min",
        difficulty: "Beginner",
        vercelUrl: "https://props-concept.vercel.app",
        completed: false,
        topics: ["Passing Props", "PropTypes", "Default Props"]
      },
      {
        title: "State Management",
        description: "Understand component state with useState hook",
        duration: "35 min",
        difficulty: "Intermediate",
        vercelUrl: "https://state-concept.vercel.app",
        completed: false,
        topics: ["useState Hook", "State Updates", "State Patterns"]
      },
      {
        title: "Event Handling",
        description: "Handle user interactions and events",
        duration: "25 min",
        difficulty: "Beginner",
        vercelUrl: "https://events-concept.vercel.app",
        completed: false,
        topics: ["Event Handlers", "Synthetic Events", "Event Binding"]
      }
    ]
  },
  {
    id: 3,
    title: "Interactive UI",
    description: "Build dynamic and interactive user interfaces",
    icon: Zap,
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    concepts: [
      {
        title: "Conditional Rendering",
        description: "Show/hide content based on conditions",
        duration: "20 min",
        difficulty: "Beginner",
        vercelUrl: "https://conditional-concept.vercel.app",
        completed: false,
        topics: ["If-Else", "Ternary Operator", "Logical AND"]
      },
      {
        title: "Lists & Keys",
        description: "Render dynamic lists efficiently",
        duration: "30 min",
        difficulty: "Intermediate",
        vercelUrl: "https://lists-concept.vercel.app",
        completed: false,
        topics: ["Rendering Lists", "Keys", "Performance"]
      },
      {
        title: "Forms & Input",
        description: "Handle user input and form validation",
        duration: "40 min",
        difficulty: "Intermediate",
        vercelUrl: "https://forms-concept.vercel.app",
        completed: false,
        topics: ["Controlled Components", "Form Validation", "Form Libraries"]
      }
    ]
  },
  {
    id: 4,
    title: "Advanced Patterns",
    description: "Explore advanced React patterns and hooks",
    icon: Rocket,
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    concepts: [
      {
        title: "useEffect Hook",
        description: "Master side effects and lifecycle methods",
        duration: "45 min",
        difficulty: "Intermediate",
        vercelUrl: "https://react-js-core-concepts.vercel.app/",
        completed: false,
        topics: ["Side Effects", "Dependencies", "Cleanup"]
      },
      {
        title: "useRef & DOM Manipulation",
        description: "Persist values and access DOM nodes imperatively",
        duration: "35 min",
        difficulty: "Intermediate",
        vercelUrl: "https://react-js-core-concepts-wc5w.vercel.app/",
        completed: false,
        topics: ["Refs", "DOM Access", "Focus/Scroll", "Measurements"]
      },
      {
        title: "Context API",
        description: "Manage global state without prop drilling",
        duration: "50 min",
        difficulty: "Advanced",
        vercelUrl: "https://context-concept.vercel.app",
        completed: false,
        topics: ["Context Provider", "useContext", "Global State"]
      },
      {
        title: "Custom Hooks",
        description: "Create reusable logic with custom hooks",
        duration: "40 min",
        difficulty: "Advanced",
        vercelUrl: "https://hooks-concept.vercel.app",
        completed: false,
        topics: ["Hook Creation", "Logic Reuse", "Hook Patterns"]
      }
    ]
  },
  {
    id: 5,
    title: "Optimization",
    description: "Optimize your React applications for production",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    concepts: [
      {
        title: "Performance Optimization",
        description: "Optimize React apps with memoization techniques",
        duration: "60 min",
        difficulty: "Advanced",
        vercelUrl: "https://performance-concept.vercel.app",
        completed: false,
        topics: ["React.memo", "useMemo", "useCallback", "Lazy Loading"]
      }
    ]
  }
]
