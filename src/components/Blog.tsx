import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, TrendingUp, Brain, Target } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "10 AI-Powered Prospecting Strategies That Doubled Our Sales Pipeline",
      excerpt: "Discover how leading sales teams are using artificial intelligence to find and convert high-quality prospects faster than ever before.",
      category: "Sales Strategy",
      readTime: "8 min read",
      date: "December 15, 2024",
      author: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      featured: true
    },
    {
      title: "The Complete Guide to GDPR-Compliant Lead Generation",
      excerpt: "Navigate data privacy regulations while building a robust sales pipeline. Learn best practices for compliant prospecting in 2024.",
      category: "Compliance",
      readTime: "12 min read",
      date: "December 10, 2024",
      author: "Michael Torres",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      featured: false
    },
    {
      title: "Data Enrichment vs. Contact Discovery: What's the Difference?",
      excerpt: "Understanding the key differences between data enrichment and contact discovery to optimize your sales intelligence strategy.",
      category: "Technology",
      readTime: "6 min read",
      date: "December 5, 2024",
      author: "Alex Rodriguez",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      featured: false
    },
    {
      title: "ROI Calculator: Measuring the True Cost of Manual Prospecting",
      excerpt: "Calculate how much time and money your sales team loses with traditional prospecting methods compared to AI-powered solutions.",
      category: "Analytics",
      readTime: "10 min read",
      date: "November 28, 2024",
      author: "Jennifer Park",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = [
    { name: "All Posts", icon: TrendingUp, count: 24 },
    { name: "AI & Technology", icon: Brain, count: 8 },
    { name: "Sales Strategy", icon: Target, count: 12 },
    { name: "Case Studies", icon: TrendingUp, count: 4 }
  ];

  return (
    <section id="blog" className="py-20 bg-ai-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ai-light mb-6">
            Sales Intelligence
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Insights</span>
          </h2>
          <p className="text-xl text-ai-light/80 max-w-3xl mx-auto">
            Stay ahead with the latest trends, strategies, and insights in AI-powered sales intelligence and B2B prospecting.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-smooth ${
                index === 0 
                  ? 'bg-gradient-primary text-black border-ai-purple' 
                  : 'bg-card/50 text-ai-light border-ai-purple/20 hover:border-ai-purple/40'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                index === 0 ? 'bg-black/20' : 'bg-ai-purple/20'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <div key={index} className="mb-16">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-ai-purple/20 hover:border-ai-purple/40 transition-smooth">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-primary text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-ai-light/70">
                    <span className="bg-ai-purple/20 text-ai-purple px-2 py-1 rounded">{post.category}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-ai-light mb-4">{post.title}</h3>
                  <p className="text-ai-light/80 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-ai-light/70" />
                      <span className="text-sm text-ai-light/70">{post.author}</span>
                    </div>
                    <Button variant="cta" size="sm" className="group">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <article key={index} className="bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-ai-purple/20 hover:border-ai-purple/40 transition-smooth group">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-ai-purple/80 text-ai-light px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-xs text-ai-light/70">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-ai-light mb-3 group-hover:text-ai-blue transition-smooth">
                  {post.title}
                </h3>
                <p className="text-ai-light/70 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3 text-ai-light/70" />
                    <span className="text-xs text-ai-light/70">{post.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-ai-blue hover:text-ai-purple">
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-secondary rounded-xl p-8 border border-ai-purple/20 text-center">
          <h3 className="text-2xl font-bold text-ai-light mb-4">Stay Updated with AI Sales Intelligence</h3>
          <p className="text-ai-light/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, case studies, and best practices in AI-powered prospecting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://salescentri.com/tutorials" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg">Browse Tutorials</Button>
            </a>
            <a href="https://salescentri.com/whitepapers" target="_blank" rel="noopener noreferrer">
              <Button variant="ctaSecondary" size="lg">Download Whitepapers</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;