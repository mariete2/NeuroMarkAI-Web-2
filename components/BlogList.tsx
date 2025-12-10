import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { BlogPost } from '../types';
import { blogPosts } from '../data/blogPosts'; // Updated import
import { Link } from 'react-router-dom';

interface BlogListProps {
  limit?: number;
}

const BlogList: React.FC<BlogListProps> = ({ limit }) => {
  const displayPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayPosts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="group flex flex-col bg-dark-900 rounded-2xl overflow-hidden border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 h-full"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-dark-950/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3 text-brand-400" />
              {post.category}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center text-gray-500 text-xs mb-3 space-x-2">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime} de lectura</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-brand-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-auto pt-4 border-t border-white/5">
                <Link 
                to={`/blog/${post.id}`} 
                className="inline-flex items-center text-brand-400 font-medium hover:text-brand-300 transition-colors text-sm"
                >
                Leer Artículo Completo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default BlogList;