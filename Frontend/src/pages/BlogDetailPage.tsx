import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BlogSidebar } from "@/components/BlogSidebar";
import { blogPostsData, BlogPost } from "@/data/blogPosts";
import {
  Calendar,
  User,
  ArrowLeft,
  Tag,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find the blog post by slug
  const post = blogPostsData.find((p) => p.slug === slug);

  // Get related posts (same category, excluding current)
  const relatedPosts = post
    ? blogPostsData
        .filter((p) => p.category === post.category && p.id !== post.id)
        .slice(0, 3)
    : [];

  // Handle share functionality
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || "Blog Post";

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          "_blank",
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
        break;
    }
  };

  // 404 state
  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-40 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-slate-600 mb-8">
              The blog post you're looking for doesn't exist or has been
              removed.
            </p>
            <Link to="/blog">
              <Button className="bg-[#0075CF] hover:bg-[#005fa3]">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        canonical={`https://aotms.in/blog/${post.slug}`}
      />
      <Header />

      {/* Hero Section with Featured Image */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-slate-500 mb-6"
          >
            <Link to="/" className="hover:text-[#0075CF] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[#0075CF] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-700 font-medium truncate max-w-[200px]">
              {post.title}
            </span>
          </motion.div>

          {/* Category Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#0075CF]/10 text-[#0075CF] text-xs font-bold uppercase tracking-widest mb-4"
          >
            {post.category}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tight text-slate-900 mb-6 max-w-4xl leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-slate-500 mb-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#0075CF]/10 flex items-center justify-center text-[#0075CF]">
                <User className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-700">
                {post.author}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0075CF]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0075CF]" />
              <span>5 min read</span>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 max-w-5xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-3xl shadow-lg shadow-slate-100 border border-slate-100 p-8 md:p-12">
              {/* Excerpt / Lead */}
              <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium border-l-4 border-[#0075CF] pl-6">
                {post.excerpt}
              </p>

              {/* Full Content */}
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed mb-6">
                  {post.content}
                </p>

                {/* Placeholder for extended content */}
                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Introduction
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  In today's rapidly evolving technological landscape, staying
                  ahead requires continuous learning and adaptation. This
                  article explores key insights and strategies that
                  professionals and students alike can leverage to excel in
                  their respective fields.
                </p>

                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Key Takeaways
                </h2>
                <ul className="list-disc list-inside text-slate-700 space-y-3 mb-6">
                  <li>
                    Embrace continuous learning as a core professional skill
                  </li>
                  <li>
                    Stay updated with the latest industry trends and
                    technologies
                  </li>
                  <li>
                    Build a strong foundation before diving into advanced topics
                  </li>
                  <li>Network with professionals and mentors in your field</li>
                  <li>Apply theoretical knowledge through hands-on projects</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                  Conclusion
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  As we continue to navigate the complexities of modern
                  technology, it's essential to maintain a growth mindset and
                  remain adaptable. At AOTMS, we are committed to providing the
                  tools and resources needed to help you succeed in your tech
                  journey.
                </p>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-3">
                  <Tag className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-semibold text-slate-500">
                    Tags:
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                    {post.category}
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                    Technology
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                    Learning
                  </span>
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-semibold text-slate-500">
                      Share:
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Author Box */}
              <div className="mt-12 p-6 md:p-8 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl border border-slate-100">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-20 h-20 rounded-full bg-[#0075CF]/10 flex items-center justify-center text-[#0075CF] flex-shrink-0">
                    <User className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      About the Author
                    </h3>
                    <p className="text-base font-semibold text-[#0075CF] mb-2">
                      {post.author}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A passionate educator and technology enthusiast with years
                      of experience in helping students achieve their
                      professional goals. Follow for more insights on tech
                      education and career growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100"
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-xs font-bold text-[#0075CF] uppercase tracking-wider">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-base font-bold text-slate-800 mt-2 line-clamp-2 group-hover:text-[#0075CF] transition-colors">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[#0075CF] font-semibold hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>
            </div>
          </motion.article>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
