import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  isButton?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  gradient: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
  content?: string; // HTML Content
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initial: string;
  gradient: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}