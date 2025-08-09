import { Code, Palette, TrendingUp, Camera, Pen, Headphones, Calculator, Globe } from 'lucide-react'

export const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: Globe,
    count: 24
  },
  {
    id: 'development',
    name: 'Development',
    icon: Code,
    count: 6
  },
  {
    id: 'design',
    name: 'Design',
    icon: Palette,
    count: 6
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: TrendingUp,
    count: 4
  },
  {
    id: 'photography',
    name: 'Photography',
    icon: Camera,
    count: 3
  },
  {
    id: 'writing',
    name: 'Writing',
    icon: Pen,
    count: 3
  },
  {
    id: 'audio',
    name: 'Audio',
    icon: Headphones,
    count: 2
  }
]

export const services = [
  {
    id: 1,
    title: 'Modern Web Application Development',
    description: 'I will create a responsive, modern web application using React, TypeScript, and the latest web technologies. Perfect for startups and businesses looking to establish their online presence.',
    category: 'development',
    provider: {
      name: 'Marcus Johnson',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.9,
      reviews: 127,
      location: 'Austin, TX',
      responseTime: '1 hour'
    },
    price: {
      type: 'package' as const,
      amount: '$2,500',
      originalAmount: '$3,000'
    },
    skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'MongoDB'],
    featured: true,
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 2,
    title: 'Brand Identity & Logo Design',
    description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines. I help businesses create memorable and impactful visual identities.',
    category: 'design',
    provider: {
      name: 'Sarah Chen',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 5.0,
      reviews: 89,
      location: 'San Francisco, CA',
      responseTime: '2 hours'
    },
    price: {
      type: 'package' as const,
      amount: '$1,200',
    },
    skills: ['Logo Design', 'Brand Identity', 'Figma', 'Illustrator', 'Typography'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 3,
    title: 'SEO & Digital Marketing Strategy',
    description: 'Comprehensive SEO audit and digital marketing strategy to boost your online visibility. Includes keyword research, content strategy, and performance tracking.',
    category: 'marketing',
    provider: {
      name: 'Emily Rodriguez',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.8,
      reviews: 156,
      location: 'New York, NY',
      responseTime: '30 minutes'
    },
    price: {
      type: 'hourly' as const,
      amount: '$85/hr',
    },
    skills: ['SEO', 'Google Analytics', 'Content Marketing', 'PPC', 'Social Media'],
    featured: true,
    gallery: [
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 4,
    title: 'Professional Product Photography',
    description: 'High-quality product photography for e-commerce and marketing. Studio setup with professional lighting and post-processing included.',
    category: 'photography',
    provider: {
      name: 'David Kim',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.9,
      reviews: 73,
      location: 'Los Angeles, CA',
      responseTime: '3 hours'
    },
    price: {
      type: 'package' as const,
      amount: '$450',
      originalAmount: '$600'
    },
    skills: ['Product Photography', 'Lightroom', 'Photoshop', 'Studio Lighting', 'Retouching'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 5,
    title: 'Mobile App UI/UX Design',
    description: 'Complete mobile app design from wireframes to high-fidelity prototypes. Specialized in iOS and Android design guidelines with user-centered approach.',
    category: 'design',
    provider: {
      name: 'Alex Thompson',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.7,
      reviews: 94,
      location: 'Seattle, WA',
      responseTime: '4 hours'
    },
    price: {
      type: 'package' as const,
      amount: '$1,800',
    },
    skills: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research', 'Mobile Design'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 6,
    title: 'Content Writing & Copywriting',
    description: 'Engaging content writing for websites, blogs, and marketing materials. SEO-optimized content that converts visitors into customers.',
    category: 'writing',
    provider: {
      name: 'Jessica Miller',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.8,
      reviews: 112,
      location: 'Chicago, IL',
      responseTime: '2 hours'
    },
    price: {
      type: 'hourly' as const,
      amount: '$65/hr',
    },
    skills: ['Content Writing', 'Copywriting', 'SEO Writing', 'Blog Writing', 'Email Marketing'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 7,
    title: 'E-commerce Store Development',
    description: 'Full-featured e-commerce store with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.',
    category: 'development',
    provider: {
      name: 'Ryan Foster',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.9,
      reviews: 67,
      location: 'Miami, FL',
      responseTime: '1 hour'
    },
    price: {
      type: 'package' as const,
      amount: '$3,500',
      originalAmount: '$4,200'
    },
    skills: ['E-commerce', 'Shopify', 'React', 'Payment Integration', 'Database Design'],
    featured: true,
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 8,
    title: 'Podcast Production & Editing',
    description: 'Professional podcast production including recording, editing, mixing, and mastering. Complete audio post-production services for content creators.',
    category: 'audio',
    provider: {
      name: 'Michael Brown',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.6,
      reviews: 45,
      location: 'Nashville, TN',
      responseTime: '6 hours'
    },
    price: {
      type: 'hourly' as const,
      amount: '$75/hr',
    },
    skills: ['Audio Editing', 'Podcast Production', 'Pro Tools', 'Sound Design', 'Mixing'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 9,
    title: 'Social Media Management',
    description: 'Complete social media management including content creation, scheduling, community management, and analytics reporting across all major platforms.',
    category: 'marketing',
    provider: {
      name: 'Amanda Davis',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.7,
      reviews: 91,
      location: 'Denver, CO',
      responseTime: '2 hours'
    },
    price: {
      type: 'package' as const,
      amount: '$800',
    },
    skills: ['Social Media', 'Content Creation', 'Instagram', 'Facebook Ads', 'Analytics'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 10,
    title: 'Wedding Photography Package',
    description: 'Complete wedding photography coverage including engagement session, ceremony, reception, and edited high-resolution gallery delivery.',
    category: 'photography',
    provider: {
      name: 'Chris Martinez',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.9,
      reviews: 124,
      location: 'San Diego, CA',
      responseTime: '5 hours'
    },
    price: {
      type: 'package' as const,
      amount: '$2,200',
      originalAmount: '$2,800'
    },
    skills: ['Wedding Photography', 'Portrait Photography', 'Lightroom', 'Event Photography', 'Photo Editing'],
    featured: true,
    gallery: [
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 11,
    title: 'Technical Writing & Documentation',
    description: 'Professional technical writing services including API documentation, user manuals, and software documentation. Clear, concise, and user-friendly content.',
    category: 'writing',
    provider: {
      name: 'Robert Taylor',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.8,
      reviews: 56,
      location: 'Portland, OR',
      responseTime: '3 hours'
    },
    price: {
      type: 'hourly' as const,
      amount: '$80/hr',
    },
    skills: ['Technical Writing', 'API Documentation', 'User Manuals', 'Software Documentation', 'Markdown'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 12,
    title: 'Video Editing & Motion Graphics',
    description: 'Professional video editing and motion graphics for marketing videos, social media content, and corporate presentations. High-quality output with fast turnaround.',
    category: 'design',
    provider: {
      name: 'Jordan Lee',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.8,
      reviews: 78,
      location: 'Los Angeles, CA',
      responseTime: '2 hours'
    },
    price: {
      type: 'hourly' as const,
      amount: '$95/hr',
    },
    skills: ['Video Editing', 'Motion Graphics', 'After Effects', 'Premiere Pro', 'Color Grading'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 13,
    title: 'Full-Stack Web Development',
    description: 'Complete full-stack web development services using modern frameworks. From database design to frontend implementation, I handle the entire development lifecycle.',
    category: 'development',
    provider: {
      name: 'Taylor Swift',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.9,
      reviews: 143,
      location: 'San Francisco, CA',
      responseTime: '1 hour'
    },
    price: {
      type: 'package' as const,
      amount: '$4,500',
      originalAmount: '$5,500'
    },
    skills: ['Full-Stack', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
    featured: true,
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 14,
    title: 'Mobile App Development (React Native)',
    description: 'Cross-platform mobile app development using React Native. Build once, deploy to both iOS and Android with native performance and user experience.',
    category: 'development',
    provider: {
      name: 'Kevin Park',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.7,
      reviews: 89,
      location: 'Seattle, WA',
      responseTime: '2 hours'
    },
    price: {
      type: 'package' as const,
      amount: '$3,800',
    },
    skills: ['React Native', 'Mobile Development', 'iOS', 'Android', 'Firebase'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 15,
    title: 'DevOps & Cloud Infrastructure',
    description: 'Complete DevOps solutions including CI/CD pipelines, cloud infrastructure setup, and deployment automation. Expertise in AWS, Docker, and Kubernetes.',
    category: 'development',
    provider: {
      name: 'Maria Garcia',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 5.0,
      reviews: 67,
      location: 'Austin, TX',
      responseTime: '3 hours'
    },
    price: {
      type: 'hourly' as const,
      amount: '$120/hr',
    },
    skills: ['DevOps', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 16,
    title: 'UX Research & User Testing',
    description: 'Comprehensive UX research services including user interviews, usability testing, and data analysis. Help optimize your product based on real user feedback.',
    category: 'design',
    provider: {
      name: 'Lisa Wang',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.9,
      reviews: 92,
      location: 'New York, NY',
      responseTime: '4 hours'
    },
    price: {
      type: 'package' as const,
      amount: '$1,500',
    },
    skills: ['UX Research', 'User Testing', 'Data Analysis', 'Figma', 'Survey Design'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 17,
    title: 'Illustration & Digital Art',
    description: 'Custom illustrations and digital artwork for books, websites, marketing materials, and personal projects. Unique artistic style with attention to detail.',
    category: 'design',
    provider: {
      name: 'Emma Thompson',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.8,
      reviews: 156,
      location: 'Portland, OR',
      responseTime: '6 hours'
    },
    price: {
      type: 'package' as const,
      amount: '$650',
      originalAmount: '$800'
    },
    skills: ['Illustration', 'Digital Art', 'Procreate', 'Character Design', 'Concept Art'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 18,
    title: 'Print Design & Layout',
    description: 'Professional print design services for brochures, flyers, business cards, and marketing materials. Print-ready files with proper color management.',
    category: 'design',
    provider: {
      name: 'James Wilson',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.7,
      reviews: 84,
      location: 'Chicago, IL',
      responseTime: '5 hours'
    },
    price: {
      type: 'package' as const,
      amount: '$450',
    },
    skills: ['Print Design', 'InDesign', 'Layout Design', 'Typography', 'Color Management'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 19,
    title: 'Email Marketing Campaigns',
    description: 'Strategic email marketing campaigns that convert. From design to automation, I help businesses build effective email marketing systems.',
    category: 'marketing',
    provider: {
      name: 'Rachel Green',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.8,
      reviews: 118,
      location: 'Miami, FL',
      responseTime: '2 hours'
    },
    price: {
      type: 'package' as const,
      amount: '$950',
    },
    skills: ['Email Marketing', 'Mailchimp', 'Campaign Design', 'Automation', 'Analytics'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 20,
    title: 'PPC Advertising Management',
    description: 'Professional Google Ads and Facebook Ads management. Optimize your ad spend with data-driven strategies and continuous performance monitoring.',
    category: 'marketing',
    provider: {
      name: 'Michael Chen',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.9,
      reviews: 134,
      location: 'San Francisco, CA',
      responseTime: '1 hour'
    },
    price: {
      type: 'hourly' as const,
      amount: '$110/hr',
    },
    skills: ['Google Ads', 'Facebook Ads', 'PPC', 'Analytics', 'Conversion Optimization'],
    featured: true,
    gallery: [
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 21,
    title: 'Portrait Photography Session',
    description: 'Professional portrait photography for individuals, families, and corporate headshots. Studio or outdoor sessions with professional editing included.',
    category: 'photography',
    provider: {
      name: 'Sophie Martinez',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.9,
      reviews: 167,
      location: 'Los Angeles, CA',
      responseTime: '4 hours'
    },
    price: {
      type: 'package' as const,
      amount: '$350',
      originalAmount: '$450'
    },
    skills: ['Portrait Photography', 'Studio Lighting', 'Photo Editing', 'Posing Direction', 'Retouching'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 22,
    title: 'Blog Writing & Content Strategy',
    description: 'Strategic blog writing services that drive traffic and engagement. SEO-optimized articles with compelling storytelling and clear calls-to-action.',
    category: 'writing',
    provider: {
      name: 'Daniel Rodriguez',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.8,
      reviews: 203,
      location: 'Austin, TX',
      responseTime: '3 hours'
    },
    price: {
      type: 'hourly' as const,
      amount: '$55/hr',
    },
    skills: ['Blog Writing', 'Content Strategy', 'SEO Writing', 'Research', 'WordPress'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 23,
    title: 'Music Production & Mixing',
    description: 'Professional music production and mixing services for artists and content creators. High-quality audio production with industry-standard equipment.',
    category: 'audio',
    provider: {
      name: 'Alex Johnson',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.7,
      reviews: 89,
      location: 'Nashville, TN',
      responseTime: '8 hours'
    },
    price: {
      type: 'package' as const,
      amount: '$1,200',
    },
    skills: ['Music Production', 'Audio Mixing', 'Mastering', 'Pro Tools', 'Sound Design'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  },
  {
    id: 24,
    title: 'Voice Over & Narration',
    description: 'Professional voice over services for commercials, audiobooks, e-learning, and corporate videos. Multiple language options and quick turnaround.',
    category: 'audio',
    provider: {
      name: 'Victoria Smith',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.9,
      reviews: 156,
      location: 'New York, NY',
      responseTime: '6 hours'
    },
    price: {
      type: 'hourly' as const,
      amount: '$85/hr',
    },
    skills: ['Voice Over', 'Narration', 'Audio Recording', 'Script Reading', 'Multiple Languages'],
    featured: false,
    gallery: [
      'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    ]
  }
]
