export interface BlogPost {
    id: number;
    slug: string;
    category: string;
    title: string;
    author: string;
    date: string;
    image: string; // Added image property
    excerpt: string;
    content: string;
}

export const blogPostsData: BlogPost[] = [
    {
        id: 1,
        slug: "building-resilience-empathy",
        category: "Education",
        title: "Building Resilience and Empathy in the Classroom",
        author: "Dr. Sarah Mitchell",
        date: "December 12, 2024",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
        excerpt: "Discover effective strategies to foster resilience and empathy in students, crucial for their personal and academic growth in today's changing world.",
        content: "Detailed content about building resilience and empathy..."
    },
    {
        id: 2,
        slug: "future-of-ai-education",
        category: "Development",
        title: "The Future of AI in Education: Personalized Learning Paths",
        author: "James Carter",
        date: "August 26, 2025",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
        excerpt: "Explore how artificial intelligence is revolutionizing education, offering tailored learning experiences for every student.",
        content: "Detailed content about the future of AI in education..."
    },
    {
        id: 3,
        slug: "mastering-devops-tools",
        category: "Tech Guides",
        title: "Mastering DevOps Tools for Efficient Software Delivery",
        author: "Alex Rivera",
        date: "July 10, 2024",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
        excerpt: "A deep dive into essential DevOps tools and practices that streamline the software development lifecycle and boost productivity.",
        content: "Detailed content about mastering DevOps tools..."
    },
    {
        id: 4,
        slug: "expert-teachers-guide",
        category: "Career Growth",
        title: "A Guide to Becoming an Expert Teacher in Tech",
        author: "Emily Chen",
        date: "September 01, 2025",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        excerpt: "Insights and tips for educators looking to excel in teaching complex technology subjects to the next generation of developers.",
        content: "Detailed content about becoming an expert teacher..."
    },
    {
        id: 5,
        slug: "business-acumen-tech",
        category: "Business",
        title: "Developing Business Acumen for Tech Professionals",
        author: "Michael Ross",
        date: "October 05, 2024",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        excerpt: "Understanding the business side of technology is crucial for career advancement. Learn how to cultivate it to become a leader.",
        content: "Detailed content about business acumen..."
    },
    {
        id: 6,
        slug: "uncategorized-thoughts",
        category: "Insights",
        title: "Emerging Tech Trends To Watch In 2026",
        author: "David Kim",
        date: "November 15, 2024",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
        excerpt: "A collection of insightful thoughts on various emerging technologies and how they will shape our digital future.",
        content: "Detailed content about uncategorized thoughts..."
    },
];
