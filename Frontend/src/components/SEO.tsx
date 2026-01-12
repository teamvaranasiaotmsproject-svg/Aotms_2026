import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
}

export const SEO = ({
    title,
    description = "Become job-ready in 90 days with Academy of Tech Masters. Expert-led IT training in Vijayawada for AI, Cloud, DevOps, and Full Stack.",
    keywords = "IT Training Vijayawada, Full Stack Course, DevOps Training, AI Coaching",
    image = "/og-image.png"
}: SEOProps) => {
    const siteTitle = "Academy of Tech Masters | Job-Ready IT Training in Vijayawada";

    return (
        <Helmet>
            <title>{title} | Academy of Tech Masters</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};
