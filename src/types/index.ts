export interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

//Day2--Core-concept..
export interface CoreConcept {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  vercelUrl: string;
  color: string;
  detailPath?: string;
}

//Day 3: Learning Page..
export interface LearningConcept {
  title: string
  description: string
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  vercelUrl: string
  completed: boolean
  topics: string[]
}

export interface LearningStage {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
  concepts: LearningConcept[]
}