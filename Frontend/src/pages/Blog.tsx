import React from 'react';
import { motion } from "framer-motion";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPostsData } from "@/data/blogPosts";
import { BlogPostCard } from "@/components/BlogPostCard";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Helmet>
        <title>Tech Blog & Insights | Academy of Tech Masters</title>
        <meta name="description" content="Stay updated with the latest tech trends, career advice, and success stories from the Academy of Tech Masters blog." />
        <link rel="canonical" href="https://aotms.com/blog" />
      </Helmet>
      <Header />

      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6"
          >
            Our Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            Latest Insights & <span className="text-primary">News</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Explore expert articles, career guides, and industry trends to stay ahead in the fast-evolving tech world.
          </motion.p>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-24 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPostsData.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;