import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from "recharts";

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

      <h3>Search Intent Deep Dive</h3>
      <p>
        Before you decide whether a keyword is worth targeting, break it down by intent: informational,
        commercial, transactional, and navigational. This helps you design content that matches where the
        user is in the buying journey instead of just chasing volume.
      </p>

      <h3>Advanced Techniques</h3>
      <p>Look for keyword gaps in competitor content, analyze SERP features for opportunities, and prioritize keywords based on business value rather than just search volume.</p>

      <h3>Topic Clusters & Internal Links</h3>
      <p>
        Group related keywords into topic clusters. Build one pillar page around the main keyword and
        several supporting articles around long-tail variations. Link everything together in a logical way
        so users and search engines can clearly understand the relationships.
      </p>

      <h3>Implementation Strategy</h3>
      <p>Create content clusters around primary keywords, use long-tail variations naturally throughout your content, and track performance to refine your keyword strategy over time.</p>

      <h3>Ongoing Optimization</h3>
      <p>
        Revisit your keyword list every 30–60 days. Remove terms that don&apos;t convert, double down on
        winning topics, and keep an eye on new opportunities that appear in Google Search Console.
      </p>

      <h3>Real-World Example</h3>
      <p>
        An e-commerce brand selling home office gear identified a long-tail query around ergonomic chairs
        for remote workers. By building a small cluster of comparison guides and how-to content around that
        phrase, they captured a profitable niche that larger competitors were ignoring.
      </p>

      <h3>Action Checklist</h3>
      <ul>
        <li>List your top 3–5 revenue-driving services or products.</li>
        <li>Generate seed keywords for each and expand with long-tail variations.</li>
        <li>Validate search intent and competition before committing to a topic.</li>
        <li>Group related keywords into clusters with one clear pillar page.</li>
      </ul>
    `,
    author: "SEO Team",
    date: "October 15, 2025",
    readTime: "8 min read",
    category: "Keyword Research",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
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

      <h3>Above-the-Fold Experience</h3>
      <p>
        Make sure the first screen users see answers their main question quickly. Use clear headings,
        concise copy, and a strong primary call-to-action so visitors immediately know they&apos;re in the
        right place.
      </p>

      <h3>Content Optimization</h3>
      <p>Ensure your content thoroughly covers the topic, uses semantic keywords naturally, and provides clear value to readers. Include relevant images with optimized alt text.</p>

      <h3>Readability & Layout</h3>
      <p>
        Break long paragraphs into shorter blocks, use bullets and numbered lists, and highlight key
        phrases. This improves dwell time and helps scanners quickly find what matters most.
      </p>

      <h3>Technical Elements</h3>
      <p>Optimize URL structure, implement schema markup, ensure fast loading times, and maintain mobile responsiveness for better search engine visibility.</p>

      <h3>On-Page QA Checklist</h3>
      <p>
        Before you publish, double-check headings, internal links, image alt text, structured data, and
        mobile formatting to avoid losing easy on-page wins.
      </p>

      <h3>Real-World Example</h3>
      <p>
        A B2B SaaS company reworked its feature pages to focus on customer outcomes and added structured
        headings plus internal links to key blog posts. Within a few weeks, click-through rates improved
        and time on page increased noticeably.
      </p>

      <h3>Action Checklist</h3>
      <ul>
        <li>Audit 5–10 of your highest-value pages for basic on-page elements.</li>
        <li>Rewrite titles and meta descriptions to be clearer and more compelling.</li>
        <li>Restructure content with descriptive headings and internal links.</li>
        <li>Add at least one clear call-to-action above the fold.</li>
      </ul>
    `,
    author: "Content Team",
    date: "October 8, 2025",
    readTime: "6 min read",
    category: "On-Page SEO",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop&q=80"
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

      <h3>Core Web Vitals Breakdown</h3>
      <p>
        Pay special attention to LCP, FID, and CLS. These metrics tell you whether your site feels fast and
        stable to real users. Small improvements here can have an outsized impact on both rankings and
        conversions.
      </p>

      <h3>Performance Optimization</h3>
      <p>Compress images, minify CSS/JS, leverage browser caching, and use a content delivery network (CDN) to improve site speed and user experience.</p>

      <h3>Site Architecture & Internal Links</h3>
      <p>
        Flatten deep folder structures, keep URLs human-readable, and make sure important pages are never
        more than three clicks from the homepage. This improves crawl efficiency and distributes authority
        more evenly.
      </p>

      <h3>Crawlability & Indexing</h3>
      <p>Optimize your robots.txt file, create XML sitemaps, fix broken links, and ensure proper canonical tag implementation to help search engines understand your site structure.</p>

      <h3>Monitoring & Alerts</h3>
      <p>
        Set up alerts in Search Console and your uptime monitoring tool so you&apos;re notified immediately
        when new technical issues appear instead of discovering them weeks later.
      </p>

      <h3>Real-World Example</h3>
      <p>
        A publisher with thousands of pages discovered that a misconfigured robots.txt file had blocked an
        entire section of high-intent content. Fixing the rule and resubmitting sitemaps restored traffic
        over the following weeks.
      </p>

      <h3>Action Checklist</h3>
      <ul>
        <li>Run a full technical crawl at least once per quarter.</li>
        <li>Monitor Core Web Vitals and fix regressions quickly.</li>
        <li>Keep redirects, canonical tags, and hreflang rules tidy and documented.</li>
        <li>Log major technical changes so you can connect them to ranking shifts.</li>
      </ul>
    `,
    author: "Technical Team",
    date: "September 28, 2025",
    readTime: "10 min read",
    category: "Technical SEO",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=80"
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

      <h3>Planning Your Topic Roadmap</h3>
      <ul>
        <li>Plan content quarterly around clear business objectives.</li>
        <li>Map every article to a specific persona and funnel stage.</li>
        <li>Avoid publishing random topics that don&apos;t support a larger strategy.</li>
      </ul>

      <h3>Content Structure</h3>
      <ul>
        <li>Use clear headings and short paragraphs for easy scanning.</li>
        <li>Include examples, case studies, and screenshots where helpful.</li>
        <li>Add actionable tips so readers know exactly what to do next.</li>
      </ul>

      <h3>Voice, Tone & Branding</h3>
      <ul>
        <li>Create a simple style guide for tone, vocabulary, and CTAs.</li>
        <li>Keep language consistent across blogs, emails, and landing pages.</li>
        <li>Use stories and analogies that feel natural to your brand.</li>
      </ul>

      <h3>Optimization Techniques</h3>
      <ul>
        <li>Research related keywords and questions from your audience.</li>
        <li>Optimize for featured snippets and other SERP features.</li>
        <li>Use internal and external links to support your claims.</li>
      </ul>

      <h3>Content Refresh Framework</h3>
      <ul>
        <li>Review top-performing posts every few months.</li>
        <li>Add new data, updated examples, and fresh screenshots.</li>
        <li>Retire or merge outdated posts that no longer serve a purpose.</li>
      </ul>

      <h3>Real-World Example</h3>
      <p>
        A marketing agency refreshed an old &quot;SEO basics&quot; guide with updated screenshots, new tools, and a
        short video walkthrough. The post regained lost rankings and became one of their top lead sources
        again.
      </p>

      <h3>Action Checklist</h3>
      <ul>
        <li>Tag evergreen posts in your CMS so you can revisit them on a schedule.</li>
        <li>Track which refreshed posts gain the biggest ranking or conversion lifts.</li>
        <li>Document what changed so you can repeat winning patterns elsewhere.</li>
      </ul>
    `,
    author: "Content Strategy",
    date: "September 15, 2025",
    readTime: "7 min read",
    category: "Content SEO",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80"
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

      <h3>Prospecting for the Right Sites</h3>
      <p>
        Build a prospect list based on relevance, authority, and audience overlap. Prioritize websites that
        already rank for your target topics and have real engagement, not just high domain ratings.
      </p>

      <h3>Outreach Strategy</h3>
      <p>Research target websites thoroughly, personalize your outreach emails, provide clear value propositions, and follow up professionally to build lasting relationships.</p>

      <h3>Building Linkable Assets</h3>
      <p>
        Invest in content that people actually want to reference: original research, industry benchmarks,
        calculators, and in-depth visual guides. These assets keep earning links long after they&apos;re
        published.
      </p>

      <h3>Content for Link Building</h3>
      <p>Create linkable assets like original research, comprehensive guides, infographics, and tools that naturally attract backlinks from other websites in your industry.</p>

      <h3>Tracking Link Impact</h3>
      <p>
        Use analytics and rank tracking to connect new backlinks with changes in visibility and traffic so
        you know which tactics are truly worth scaling.
      </p>

      <h3>Real-World Example</h3>
      <p>
        A niche software company secured links from a handful of highly relevant industry blogs rather than
        dozens of generic directories. Those links coincided with steady ranking lifts for bottom-of-funnel
        keywords.
      </p>

      <h3>Action Checklist</h3>
      <ul>
        <li>Tag acquired links by campaign or tactic in your tracking sheet.</li>
        <li>Monitor keyword groups tied to each campaign over the following months.</li>
        <li>Scale the tactics that reliably move rankings and traffic, pause the rest.</li>
      </ul>
    `,
    author: "Link Building Team",
    date: "August 30, 2025",
    readTime: "9 min read",
    category: "Link Building",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
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

      <h3>Building a Simple SEO Dashboard</h3>
      <p>
        Combine traffic, rankings, and conversions into a single view so stakeholders can understand
        performance at a glance. Highlight only a handful of KPIs that relate directly to revenue.
      </p>

      <h3>Advanced Analytics</h3>
      <p>Set up goal tracking, analyze user behavior patterns, monitor click-through rates from search results, and track the customer journey from search to conversion.</p>

      <h3>Attribution & Assisted Conversions</h3>
      <p>
        Don&apos;t judge SEO only by last-click conversions. Look at assisted conversions and multi-touch
        attribution models to see how organic search supports other channels like paid and email.
      </p>

      <h3>Reporting & Insights</h3>
      <p>Create automated reports, identify trends and opportunities, benchmark against competitors, and use data to inform your SEO strategy and content planning decisions.</p>

      <h3>Turning Data Into Actions</h3>
      <p>
        End every report with a short list of priorities: what to fix, what to scale, and what to test next.
        This keeps your analytics work tightly connected to growth.
      </p>

      <h3>Real-World Example</h3>
      <p>
        An online education platform noticed strong organic traffic but weak signups on a handful of key
        course pages. By simplifying the offer and tightening the form, they lifted conversion rates without
        needing more traffic.
      </p>

      <h3>Action Checklist</h3>
      <ul>
        <li>Decide on 3–5 core SEO KPIs for your business and track them consistently.</li>
        <li>Use dashboards and recurring reports instead of one-off screenshots.</li>
        <li>Attach every insight to a specific experiment or implementation task.</li>
      </ul>
    `,
    author: "Analytics Team",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "SEO Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  }
];

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const post = blogPosts.find(p => p.id === Number(id));

  const trafficData = [
    { month: "Jan", clicks: 1200, impressions: 8200 },
    { month: "Feb", clicks: 1500, impressions: 9300 },
    { month: "Mar", clicks: 1800, impressions: 11250 },
    { month: "Apr", clicks: 2100, impressions: 12800 },
    { month: "May", clicks: 2450, impressions: 14200 },
    { month: "Jun", clicks: 2700, impressions: 15600 },
  ];

  const engagementData = [
    { label: "Search", value: 62 },
    { label: "Social", value: 18 },
    { label: "Referral", value: 12 },
    { label: "Direct", value: 8 },
  ];

  const trafficChartConfig = {
    clicks: {
      label: "Clicks",
      color: "hsl(var(--chart-1))",
    },
    impressions: {
      label: "Impressions",
      color: "hsl(var(--chart-2))",
    },
  };

  const engagementChartConfig = {
    value: {
      label: "Sessions",
      color: "hsl(var(--chart-3))",
    },
  };
  const chartSettingsByPost: Record<
    number,
    {
      primaryTitle: string;
      primarySubtitle: string;
      secondaryTitle: string;
      secondarySubtitle: string;
      secondaryType: "bar" | "line";
    }
  > = {
    1: {
      primaryTitle: "Keyword Traffic Trend",
      primarySubtitle: "Clicks and impressions over the last 6 months",
      secondaryTitle: "Search Channel Breakdown",
      secondarySubtitle: "Where your keyword traffic is coming from",
      secondaryType: "bar",
    },
    2: {
      primaryTitle: "On-Page Performance Trend",
      primarySubtitle: "Impact of on-page changes over time",
      secondaryTitle: "Engagement by Source",
      secondarySubtitle: "Sessions by acquisition channel",
      secondaryType: "line",
    },
    3: {
      primaryTitle: "Technical Health vs Traffic",
      primarySubtitle: "Traffic trend after fixing technical issues",
      secondaryTitle: "Traffic Quality Breakdown",
      secondarySubtitle: "How visits are distributed across channels",
      secondaryType: "bar",
    },
    4: {
      primaryTitle: "Content Visibility Trend",
      primarySubtitle: "Organic reach for this content cluster",
      secondaryTitle: "Reader Acquisition",
      secondarySubtitle: "Top sources bringing readers to this content",
      secondaryType: "line",
    },
    5: {
      primaryTitle: "Link-Building Impact",
      primarySubtitle: "Traffic change from new backlinks",
      secondaryTitle: "Referrer Mix",
      secondarySubtitle: "Share of traffic by source",
      secondaryType: "bar",
    },
    6: {
      primaryTitle: "Analytics Overview",
      primarySubtitle: "High-level performance for this SEO topic",
      secondaryTitle: "Channel-Level Sessions",
      secondarySubtitle: "Sessions split across key channels",
      secondaryType: "line",
    },
  };

  const chartSettings = post ? chartSettingsByPost[post.id] ?? chartSettingsByPost[1] : chartSettingsByPost[1];
  const showBarBreakdown = chartSettings.secondaryType === "bar";

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gold hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <motion.section
        className="relative pt-4 sm:pt-6 pb-20 sm:pb-24 md:pb-28 lg:pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.button
            onClick={() => navigate('/')}
            className="mt-11 mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-gold/50 rounded-lg sm:rounded-xl text-foreground hover:text-gold transition-all duration-300 font-semibold group shadow-md hover:shadow-lg hover:shadow-gold/10 text-sm sm:text-base"
            whileHover={{ x: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </motion.button>

          <article className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 sm:mb-8 lg:mb-10"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 border border-gold/20">
                {post.category}
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm md:text-base text-muted-foreground pb-6 sm:pb-8 border-b border-border">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>

            {/* Performance graphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1">
                Performance insights for this article
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
                Visual overview of how this topic is performing across traffic and engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-10 sm:mb-12"
            >
              <div className="bg-card border border-border/60 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm overflow-hidden">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {chartSettings.primaryTitle}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                    {chartSettings.primarySubtitle}
                  </p>
                </div>
                <ChartContainer config={trafficChartConfig} className="w-full h-56 sm:h-64 md:h-72">
                  <LineChart data={trafficData} margin={{ top: 16, left: 0, right: 16, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line
                      type="monotone"
                      dataKey="clicks"
                      stroke="var(--color-clicks)"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="impressions"
                      stroke="var(--color-impressions)"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4 }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>

              <div className="bg-card border border-border/60 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm overflow-hidden">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {chartSettings.secondaryTitle}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                    {chartSettings.secondarySubtitle}
                  </p>
                </div>
                {showBarBreakdown ? (
                  <ChartContainer config={engagementChartConfig} className="w-full h-56 sm:h-64 md:h-72">
                    <BarChart data={engagementData} margin={{ top: 16, left: 0, right: 16, bottom: 8 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis
                        dataKey="label"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <ChartTooltip
                        cursor={{ fill: "hsl(var(--muted))" }}
                        content={<ChartTooltipContent labelKey="label" />}
                      />
                      <Bar dataKey="value" fill="var(--color-value)" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                ) : (
                  <ChartContainer config={trafficChartConfig} className="w-full h-56 sm:h-64 md:h-72">
                    <LineChart data={trafficData} margin={{ top: 16, left: 0, right: 16, bottom: 8 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                      <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="clicks"
                        stroke="var(--color-clicks)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4 }}
                      />
                    </LineChart>
                  </ChartContainer>
                )}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-sm sm:prose-base lg:prose-lg prose-headings:text-foreground prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:font-extrabold prose-h3:mb-3 prose-h3:mt-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground prose-li:my-1 max-w-none mb-10 sm:mb-12"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </motion.div>

            {/* CTA at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border-2 border-gold/30 rounded-xl sm:rounded-2xl text-center relative overflow-hidden group hover:border-gold/50 transition-all duration-300"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                  Book a free consultation and discover how virtual assistants can help you scale.
                </p>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gold text-foreground font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="hidden sm:inline">Book Free Consultation →</span>
                  <span className="sm:hidden">Get Started →</span>
                </button>
              </div>
            </motion.div>

            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-border"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">More Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                  <motion.div
                    key={relatedPost.id}
                    onClick={() => navigate(`/blog/${relatedPost.id}`)}
                    className="group cursor-pointer bg-card border border-border/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-36 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-gold text-foreground text-xs font-bold rounded-full">{relatedPost.category}</span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">{relatedPost.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </article>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogDetail;
