//Day 3: Detailed view of this example..

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LiveDemoFrame } from "@/components/ui/live-demo-frame";
import { ArrowLeft,Code, Pointer, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const LIVE_URL = "https://react-js-core-concepts-wc5w.vercel.app/";

export default function UseRefConcept() {
  return (
     <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link to="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 grid place-items-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">ReactJS Core Concepts</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">useRef & DOM Manipulation</div>
            </div>
          </div>
          <span className="w-24" />
        </div>
      </header>

      <section className="container mx-auto px-4 py-10 max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300">
            <Pointer className="h-4 w-4 mr-2" /> Refs & DOM APIs
          </div>
          <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">useRef + DOM Manipulation</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Store mutable values across renders and directly access DOM nodes for imperative actions like focus, scroll, or measurements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Key Ideas</CardTitle>
                <Badge variant="secondary" className="text-xs">Intermediate</Badge>
              </div>
              <CardDescription>Refs don’t trigger re-renders; ideal for DOM access and storing instance values.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>Attach ref to a DOM node and call imperative methods like focus() or scrollIntoView().</li>
                <li>Use refs to store values that persist without re-rendering (e.g., interval IDs, previous values).</li>
                <li>Avoid using refs for data that should drive UI; use state for that.</li>
              </ul>
              <div className="rounded-lg bg-gray-50 dark:bg-gray-800/60 p-3">
                <pre className="text-xs overflow-auto"><code>{`const inputRef = useRef<HTMLInputElement>(null)
function focusInput() {
  inputRef.current?.focus()
}
return <input ref={inputRef} />`}</code></pre>
              </div>
            </CardContent>
          </Card>

          <div>
            <LiveDemoFrame src={LIVE_URL} title="useRef + DOM – Live Demo" height={520} />
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button asChild className="gap-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 dark:from-gray-100 dark:to-gray-300 dark:text-gray-900">
            <a href={LIVE_URL} target="_blank" rel="noopener noreferrer">
              <Sparkles className="h-4 w-4" /> Try the Full Demo
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
