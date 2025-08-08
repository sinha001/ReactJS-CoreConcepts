import { useEffect, useRef, useState } from "react";
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type LiveDemoFrameProps = {
    src: string;
    title: string
    className?:string
    height?: number
};

export function LiveDemoFrame({
    src, title, className, height=520,
}: LiveDemoFrameProps)
{
    const [loaded, setLoaded] = useState(false);
    const [blocked, setBlocked] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    useEffect(()=>{
        //Suppose, the embed is blocked by X-Frame-Options, show fallback after a short timeout
        timeoutRef.current = window.setTimeout(()=>{
            if(!loaded) setBlocked(true);
        }, 2000);
        return()=>{
            if(timeoutRef.current) window.clearTimeout(timeoutRef.current);
        };
    },[loaded]);

    return(
        <div className={cn('rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900', className)}>
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-700">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {title}
                </div>
                <Button asChild variant={"secondary"} size={"sm"} className="gap-2">
                    <a href={src} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Open in new tab
                    </a>
                </Button>
            </div>

            {!blocked && (
                <iframe title={title}
                src={src}
                className="w-full"
                height={height}
                loading="lazy"
                onLoad={()=> setLoaded(true)}
                sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
            )}

            {blocked && (
                <div className="p-8 text-center">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Live preview unavailable
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        The demo site prevents embedding. You can still open it in a new tab.
                    </p>
                    <Button asChild>
                        <a href={src} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2"/>
                            Open Live Demo
                        </a>
                    </Button>
                </div>
            )}
        </div>
    );
}