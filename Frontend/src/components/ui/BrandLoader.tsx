import { motion } from "framer-motion";

export const BrandLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
            <div className="relative flex flex-col items-center">
                {/* Logo with Pulse Effect */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8"
                >
                    <div className="relative w-32 md:w-40 z-10">
                        <img
                            src="/brand-logo-new.png"
                            alt="Academy of Tech Masters"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Subtle Glow behind logo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-60 animate-pulse" />
                </motion.div>

                {/* Loading Indicator */}
                <div className="flex flex-col items-center gap-3">
                    <div className="h-1.5 w-48 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#0066CC] to-[#00A3FF]"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
