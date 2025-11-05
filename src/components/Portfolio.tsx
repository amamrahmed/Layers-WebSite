import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLinkIcon } from 'lucide-react';
const portfolioItems = [{
  id: 1,
  title: 'TechFlow Branding',
  category: 'Brand Identity',
  image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop',
  color: '#87CEEB'
}, {
  id: 2,
  title: 'Urban Eats Campaign',
  category: 'Print & Digital',
  image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
  color: '#FFD700'
}, {
  id: 3,
  title: 'Nexus Product Launch',
  category: 'Advertising',
  image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
  color: '#FF69B4'
}, {
  id: 4,
  title: 'Zenith Packaging',
  category: 'Package Design',
  image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
  color: '#87CEEB'
}, {
  id: 5,
  title: 'Pulse Social Campaign',
  category: 'Social Media',
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  color: '#FFD700'
}, {
  id: 6,
  title: 'Elevate Website',
  category: 'Web Design',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  color: '#FF69B4'
}];
export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const {
    scrollYProgress
  } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  return <section id="portfolio" className="py-32 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-black">
            <span>Featured </span>
            <span className="bg-gradient-to-r from-[#87CEEB] via-[#FFD700] to-[#FF69B4] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of award-winning projects
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => <PortfolioCard key={item.id} item={item} index={index} inView={inView} y={y} />)}
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="text-center mt-16">
          <button className="px-10 py-4 bg-black text-white font-bold text-lg rounded-full hover:bg-gray-900 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>;
}
function PortfolioCard({
  item,
  index,
  inView,
  y
}: any) {
  const [isHovered, setIsHovered] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} animate={inView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.6,
    delay: index * 0.1
  }} style={{
    y: index % 2 === 0 ? y : undefined
  }} className="group relative overflow-hidden rounded-2xl cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} whileHover={{
    scale: 1.02
  }}>
      <div className="aspect-[4/3] relative overflow-hidden">
        <motion.img src={item.image} alt={item.title} className="w-full h-full object-cover" animate={{
        scale: isHovered ? 1.1 : 1
      }} transition={{
        duration: 0.6
      }} />
        <motion.div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" initial={{
        opacity: 0
      }} animate={{
        opacity: isHovered ? 1 : 0
      }} transition={{
        duration: 0.3
      }} />
        <motion.div className="absolute inset-0 flex flex-col justify-end p-6" initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: isHovered ? 0 : 20,
        opacity: isHovered ? 1 : 0
      }} transition={{
        duration: 0.3
      }}>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit" style={{
          backgroundColor: `${item.color}20`,
          color: item.color,
          border: `1px solid ${item.color}`
        }}>
            {item.category}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
          <div className="flex items-center gap-2 text-white">
            <span className="text-sm font-medium">View Project</span>
            <ExternalLinkIcon size={16} />
          </div>
        </motion.div>
      </div>
      <motion.div className="absolute inset-0 pointer-events-none" initial={{
      opacity: 0
    }} animate={{
      opacity: isHovered ? 1 : 0
    }} transition={{
      duration: 0.3
    }} style={{
      boxShadow: `0 0 40px ${item.color}60`
    }} />
    </motion.div>;
}