import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, TrendingUp, FileText, Settings, BarChart3, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  seoTopics?: Array<"keyword-research" | "on-page" | "technical" | "content" | "link-building" | "analytics">;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Keyword Research Mastery: Find High-Value Keywords That Convert",
    excerpt: "A systematic approach to discovering profitable keywords with low competition and high search intent.",
    content: `
      <h2>Research Process</h2>
      <ul>
        <li>Seed keywords: Start with your core business terms</li>
        <li>Competitor analysis: Steal their best-performing keywords</li>
        <li>Long-tail discovery: Find specific, high-intent phrases</li>
        <li>Search intent mapping: Match keywords to user goals</li>
      </ul>
      <h3>Tools & Metrics</h3>
      <p>Use Ahrefs, SEMrush, and Google Keyword Planner. Focus on search volume, keyword difficulty, and CPC.</p>
    `,
    author: "SEO Team",
    date: "October 15, 2025",
    readTime: "8 min read",
    category: "Keyword Research",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["keyword-research"]
  },
  {
    id: 2,
    title: "On-Page SEO Checklist: Optimize Every Element for Rankings",
    excerpt: "Complete guide to optimizing title tags, meta descriptions, headers, and content for maximum visibility.",
    content: `
      <h2>Essential Elements</h2>
      <ul>
        <li>Title tags: Include primary keyword within 60 characters</li>
        <li>Meta descriptions: Compelling copy with keywords in 155 characters</li>
        <li>Header structure: H1, H2, H3 hierarchy with keyword variations</li>
        <li>Internal linking: Connect related pages strategically</li>
      </ul>
      <p>Focus on user experience while maintaining keyword optimization throughout.</p>
    `,
    author: "Content Team",
    date: "October 8, 2025",
    readTime: "6 min read",
    category: "On-Page SEO",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["on-page", "content"]
  },
  {
    id: 3,
    title: "Technical SEO Audit: Fix Issues That Kill Your Rankings",
    excerpt: "Identify and resolve technical problems that prevent search engines from properly crawling and indexing your site.",
    content: `
      <h2>Critical Issues</h2>
      <ul>
        <li>Site speed: Optimize for Core Web Vitals</li>
        <li>Mobile responsiveness: Ensure perfect mobile experience</li>
        <li>Crawl errors: Fix 404s and redirect chains</li>
        <li>Schema markup: Implement structured data</li>
      </ul>
      <p>Use Google Search Console, PageSpeed Insights, and Screaming Frog for comprehensive audits.</p>
    `,
    author: "Technical Team",
    date: "September 28, 2025",
    readTime: "10 min read",
    category: "Technical SEO",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["technical"]
  },
  {
    id: 4,
    title: "Content That Ranks: Writing for Users and Search Engines",
    excerpt: "Create compelling, SEO-optimized content that satisfies search intent and drives conversions.",
    content: `
      <h2>Content Strategy</h2>
      <ul>
        <li>Search intent analysis: Understand what users really want</li>
        <li>Content depth: Comprehensive coverage beats thin content</li>
        <li>Keyword integration: Natural placement throughout content</li>
        <li>User engagement: Structure for readability and interaction</li>
      </ul>
      <p>Balance keyword optimization with valuable, engaging content that keeps users on your site.</p>
    `,
    author: "Content Strategy",
    date: "September 15, 2025",
    readTime: "7 min read",
    category: "Content SEO",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["content", "on-page"]
  },
  {
    id: 5,
    title: "Link Building That Works: Earn High-Quality Backlinks",
    excerpt: "Proven strategies to acquire authoritative backlinks that boost your domain authority and rankings.",
    content: `
      <h2>Link Building Tactics</h2>
      <ul>
        <li>Resource page outreach: Get listed on industry resource pages</li>
        <li>Broken link building: Replace dead links with your content</li>
        <li>Guest posting: Contribute to authoritative industry sites</li>
        <li>Digital PR: Create newsworthy content for media coverage</li>
      </ul>
      <p>Focus on quality over quantity. One high-authority link beats dozens of low-quality ones.</p>
    `,
    author: "Link Building Team",
    date: "August 30, 2025",
    readTime: "9 min read",
    category: "Link Building",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["link-building"]
  },
  {
    id: 6,
    title: "SEO Analytics: Track What Matters for Business Growth",
    excerpt: "Essential metrics and reporting strategies to measure SEO success and demonstrate ROI.",
    content: `
      <h2>Key Metrics</h2>
      <ul>
        <li>Organic traffic: Monitor growth and traffic quality</li>
        <li>Keyword rankings: Track target keyword positions</li>
        <li>Conversion rates: Measure organic traffic conversions</li>
        <li>Technical health: Monitor crawl errors and site speed</li>
      </ul>
      <p>Use Google Analytics 4, Search Console, and rank tracking tools for comprehensive reporting.</p>
    `,
    author: "Analytics Team",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "SEO Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["analytics"]
  }
];

export const Blog = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="blog"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="relative mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Latest Insights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gold">
            Blog & <span className="text-gold">Resources</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Expert insights, strategies, and guides to improve your search rankings and drive organic traffic growth.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card border border-border/50 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden hover:border-gold/50 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer w-full flex flex-col"
                onClick={() => navigate(`/blog/${post.id}`)}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 sm:px-3 bg-gold text-foreground text-[10px] sm:text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/30">
                    <span className="text-[10px] sm:text-xs text-muted-foreground truncate">By {post.author}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      {post.seoTopics && (
                        <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground/70">
                          {post.seoTopics.includes("keyword-research") && <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Keyword Research" />}
                          {post.seoTopics.includes("on-page") && <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="On-Page SEO" />}
                          {post.seoTopics.includes("technical") && <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Technical SEO" />}
                          {post.seoTopics.includes("content") && <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Content SEO" />}
                          {post.seoTopics.includes("link-building") && <Link className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Link Building" />}
                          {post.seoTopics.includes("analytics") && <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="SEO Analytics" />}
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-gold font-semibold text-[10px] sm:text-xs group-hover:gap-1.5 transition-all">
                        <span className="hidden sm:inline">Read</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
