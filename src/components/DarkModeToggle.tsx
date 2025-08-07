import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isLoaded?: boolean;
}

export const DarkModeToggle = ({
  darkMode,
  toggleDarkMode,
  isLoaded = true,
}: DarkModeToggleProps) => {
  if (!isLoaded) {
    return (
      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun className="h-5 w-5 transition-transform duration-200" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-200" />
      )}
      <span className="sr-only">
        {darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  );
};
