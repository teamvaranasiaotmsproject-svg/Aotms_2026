import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const data = [

    { name: 'Practical Exposure', value: 50, color: '#0075CF' }, // Primary Blue
    { name: 'Live Projects', value: 20, color: '#0EA5E9' }, // Sky Blue
    { name: 'Theory Knowledge', value: 10, color: '#F97316' }, // Orange
    { name: 'Weekly Evaluations', value: 5, color: '#64748B' }, // Slate
    { name: 'Placement Assessments', value: 5, color: '#10B981' }, // Emerald
    { name: 'Mock Interviews', value: 5, color: '#8B5CF6' }, // Violet
    { name: 'Group Discussion', value: 5, color: '#EC4899' }, // Pink
];

export const PerformanceBreakdown = () => {
    // State to trigger animations only when in view
    const [startAnim, setStartAnim] = useState(false);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Custom Label Renderer for Infographic Style
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index, name, value, color }: {
        cx: number;
        cy: number;
        midAngle: number;
        innerRadius: number;
        outerRadius: number;
        percent: number;
        index: number;
        name: string;
        value: number;
        color: string;
    }) => {
        const RADIAN = Math.PI / 180;
        // Calculate position for the label (further out)
        const labelRadius = isMobile ? 1.55 : 1.4;
        const radius = outerRadius * labelRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        // Text Anchor based on side
        const textAnchor = x > cx ? 'start' : 'end';

        return (
            <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={startAnim ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.1 + (index * 0.15), duration: 0.4, type: "spring" }}
            >
                {/* Connector Line */}
                <path d={`M${cx + outerRadius * Math.cos(-midAngle * RADIAN)},${cy + outerRadius * Math.sin(-midAngle * RADIAN)}L${x},${y}`} stroke={color} strokeWidth={2} fill="none" />

                {/* Circle at end of line */}
                <circle cx={x} cy={y} r={isMobile ? 3 : 4} fill={color} />

                {/* Text Label */}
                <text x={x + (x > cx ? (isMobile ? 4 : 10) : (isMobile ? -4 : -10))} y={y - (isMobile ? 2 : 10)} textAnchor={textAnchor} fill="#334155" fontSize={isMobile ? 9 : 16} fontWeight="bold" fontFamily="sans-serif">
                    {name}
                </text>
                <text x={x + (x > cx ? (isMobile ? 4 : 10) : (isMobile ? -4 : -10))} y={y + (isMobile ? 10 : 15)} textAnchor={textAnchor} fill={color} fontSize={isMobile ? 11 : 24} fontWeight="900" fontFamily="sans-serif">
                    {value}%
                </text>
            </motion.g>
        );
    };

    return (
        <section className="py-12 md:pb-12 bg-slate-50 overflow-hidden relative">
            {/* Background Animation Container (Academy Difference Style) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0075CF]/5 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#F97316]/5 rounded-full blur-[100px] opacity-60" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-0">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-black text-slate-900 font-display leading-tight"
                    >
                        How We Measure{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0075CF] to-[#F97316]">Your Success</span>
                    </motion.h2>
                </div>

                {/* Central Pie Chart Area */}
                <div className="w-full relative h-[400px] md:h-[600px] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.3 }}
                        onViewportEnter={() => setStartAnim(true)}
                        onViewportLeave={() => setStartAnim(false)}
                        className="relative w-full h-full"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                {/* Layer 1: Ghost Pie for Labels (Appears First) */}
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={isMobile ? 35 : 100}
                                    outerRadius={isMobile ? 60 : 180}
                                    dataKey="value"
                                    startAngle={90}
                                    endAngle={-270}
                                    stroke="none"
                                    label={renderCustomizedLabel}
                                    labelLine={false}
                                    isAnimationActive={false} // Immediate render for position calculation
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-ghost-${index}`} fill="none" stroke="none" />
                                    ))}
                                </Pie>

                                {/* Layer 2: Visible Pie for Color Fill (Appears Second) */}
                                <Pie
                                    key={startAnim ? 'active' : 'inactive'} // Checkpoint: Force animation restart on view
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={isMobile ? 35 : 100}
                                    outerRadius={isMobile ? 60 : 180}
                                    paddingAngle={1}
                                    dataKey="value"
                                    startAngle={90}
                                    endAngle={-270}
                                    stroke="none"
                                    label={false}
                                    isAnimationActive={true}
                                    animationBegin={600} // Started sooner (was 1200)
                                    animationDuration={1000} // Faster fill (was 1500)
                                    animationEasing="ease-out"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ color: '#1e293b', fontWeight: 'bold' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>

                        {/* Center Floating Label */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={startAnim ? { scale: 1, opacity: 1 } : {}}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                        >
                            <span className="text-2xl md:text-6xl font-black text-slate-900 leading-none">100%</span>
                            <span className="text-[8px] md:text-sm font-bold text-slate-900 uppercase tracking-wide mt-0">Success Model</span>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
