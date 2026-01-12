import { useState, useEffect } from "react";

export function useMediaQuery() {
    const [isMobile, setIsMobile] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mobile = window.matchMedia("(max-width: 768px)");
        const desktop = window.matchMedia("(min-width: 769px)");

        const onChangeMobile = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        const onChangeDesktop = (e: MediaQueryListEvent) => {
            setIsDesktop(e.matches);
        };

        setIsMobile(mobile.matches);
        setIsDesktop(desktop.matches);

        mobile.addEventListener("change", onChangeMobile);
        desktop.addEventListener("change", onChangeDesktop);

        return () => {
            mobile.removeEventListener("change", onChangeMobile);
            desktop.removeEventListener("change", onChangeDesktop);
        };
    }, []);

    return { isMobile, isDesktop };
}
