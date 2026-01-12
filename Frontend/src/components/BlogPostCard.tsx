import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/data/blogPosts';
import { Calendar, User, MessageCircle, ArrowRight } from 'lucide-react';

import { motion } from 'framer-motion';

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export const BlogPostCard = ({ post, index }: BlogPostCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
    >
      <Link to={`/blog/${post.slug}`} className="block relative h-60 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-xs font-bold text-primary uppercase tracking-wider rounded-full shadow-lg">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-6 md:p-8">
        <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5 text-primary" />
            <span>0 Comments</span>
          </div>
        </div>

        <h2 className="text-xl font-display font-bold text-slate-800 mb-3 leading-snug group-hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-6">
          {post.excerpt}
        </p>

        <div className="pt-6 border-t border-slate-100 flex justify-between items-center bg-slate-50/50 -mx-8 -mb-8 p-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <User className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-slate-700">{post.author}</span>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest hover:gap-3 transition-all"
          >
            Read More <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
