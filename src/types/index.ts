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
}
