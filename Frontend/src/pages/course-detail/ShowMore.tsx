import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ShowMoreProps {
    children: React.ReactNode;
    initialHeight?: string;
}

export const ShowMore = ({ children, initialHeight = "300px" }: ShowMoreProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative">
            <div
                className={cn("overflow-hidden transition-all duration-500")}
                style={{ maxHeight: isExpanded ? "2000px" : initialHeight }}
            >
                {children}
            </div>
            {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
            <div className="mt-4 text-center">
                <Button
                    variant="ghost"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-bold"
                >
                    {isExpanded ? "Show Less" : "Show More"}
                    <ChevronDown className={cn("ml-2 w-4 h-4 transition-transform", isExpanded && "rotate-180")} />
                </Button>
            </div>
        </div>
    );
};
