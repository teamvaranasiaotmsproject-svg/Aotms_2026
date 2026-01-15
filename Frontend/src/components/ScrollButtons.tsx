import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollButtons = () => {
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Show buttons after scrolling 300px
            setShowButtons(scrollTop > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (!showButtons) return null;

    return (
        <div className="fixed bottom-24 right-8 z-[100] flex flex-col gap-3">
            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="group w-9 h-9 rounded-full text-white shadow-lg touch-manipulation transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center -webkit-tap-highlight-transparent"
                style={{
                    background: '#0066CC',
                    boxShadow: '0 4px 14px rgba(0, 102, 204, 0.3)',
                    border: '2px solid white'
                }}
                aria-label="Scroll to top"
            >
                <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" strokeWidth={3} />
            </button>
        </div>
    );
};
