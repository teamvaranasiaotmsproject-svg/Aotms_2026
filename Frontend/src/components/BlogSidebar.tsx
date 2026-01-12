import React from 'react';
import { Link } from 'react-router-dom';
import { blogPostsData } from '@/data/blogPosts';
import { Input } from '@/components/ui/input';
import { Search, ChevronRight, Hash } from 'lucide-react';

const SidebarWidget = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-8">
        <h3 className="text-lg font-display font-bold text-slate-800 mb-6 pb-2 border-b-2 border-primary/10 inline-block">{title}</h3>
        {children}
    </div>
);

export const BlogSidebar = () => {
    const categories = [...new Set(blogPostsData.map(post => post.category))];
    const recentPosts = blogPostsData.slice(0, 3);

    return (
        <aside className="space-y-8">
            {/* Search Widget */}
            <div className="bg-white border border-slate-100 rounded-2xl p-2 shadow-sm">
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Search articles..."
                        className="pl-12 py-6 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-slate-700 placeholder:text-slate-400"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                </div>
            </div>

            {/* Categories Widget */}
            <SidebarWidget title="Explore Topics">
                <ul className="space-y-2">
                    {categories.map(category => (
                        <li key={category}>
                            <Link
                                to="#"
                                className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all duration-300"
                            >
                                <span className="flex items-center gap-3 text-slate-600 font-medium group-hover:text-primary transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                        <Hash className="w-4 h-4" />
                                    </div>
                                    {category}
                                </span>
                                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </SidebarWidget>

            {/* Recent Posts Widget */}
            <SidebarWidget title="Recent Articles">
                <ul className="space-y-6">
                    {recentPosts.map(post => (
                        <li key={post.id} className="group">
                            <Link to={`/blog/${post.slug}`} className="flex gap-4">
                                <div className="relative shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1 block">
                                        {post.category}
                                    </span>
                                    <h4 className="font-bold text-slate-700 group-hover:text-primary transition-colors text-sm leading-snug line-clamp-2">
                                        {post.title}
                                    </h4>
                                    <p className="text-xs text-slate-400 mt-2 font-medium">{post.date}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </SidebarWidget>

            {/* Newsletter Mini Widget */}
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-center text-white shadow-lg shadow-blue-900/20">
                <h3 className="text-xl font-display font-bold mb-2">Join Our Newsletter</h3>
                <p className="text-blue-100 text-sm mb-6">Get the latest insights and trends directly in your inbox.</p>
                <Link to="/contact" className="inline-block w-full py-3 bg-white text-primary rounded-xl font-bold font-sm hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300">
                    Subscribe Now
                </Link>
            </div>
        </aside>
    );
};
