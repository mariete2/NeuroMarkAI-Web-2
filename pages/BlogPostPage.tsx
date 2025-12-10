import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-dark-950 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Artículo no encontrado</h2>
        <button onClick={() => navigate('/blog')} className="text-brand-400 underline">
            Volver al Blog
        </button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-dark-950 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al Blog
        </Link>

        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
        >
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="px-3 py-1 rounded-full bg-brand-900/30 border border-brand-500/20 text-brand-400 font-medium flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {post.category}
                </span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight font-display">
                {post.title}
            </h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden mb-12 shadow-2xl border border-white/10"
        >
            <img src={post.imageUrl} alt={post.title} className="w-full h-[400px] object-cover" />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-a:text-brand-400 prose-img:rounded-xl prose-strong:text-white"
                >
                    <p className="lead text-xl text-gray-300 mb-8 border-l-4 border-brand-500 pl-4 italic">
                        {post.excerpt}
                    </p>
                    {/* Render HTML Content */}
                    <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
                </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
                <div className="bg-dark-900 p-6 rounded-2xl border border-white/5 sticky top-24">
                    <h3 className="text-white font-bold mb-4">¿Te ha gustado?</h3>
                    <p className="text-gray-400 text-sm mb-6">
                        No te pierdas ninguna actualización sobre IA y Neuromarketing.
                    </p>
                    <Link to="/booking" className="block w-full text-center bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-brand-500/20">
                        Agendar Auditoría Gratis
                    </Link>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white border border-white/10 p-3 rounded-xl transition-colors">
                        <Share2 className="w-4 h-4" /> Compartir Artículo
                    </button>
                </div>
            </div>
        </div>

      </div>
    </article>
  );
};

export default BlogPostPage;