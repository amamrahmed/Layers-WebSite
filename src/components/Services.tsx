import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PaletteIcon, PrinterIcon, TrendingUpIcon, LayoutIcon, VideoIcon, PackageIcon } from 'lucide-react';
const services = [{
  icon: PaletteIcon,
  title: 'Brand Design',
  description: 'Create unforgettable brand identities that resonate with your audience.',
  color: '#87CEEB'
}, {
  icon: PrinterIcon,
  title: 'Print Solutions',
  description: 'High-quality printing services from business cards to large-format displays.',
  color: '#FFD700'
}, {
  icon: TrendingUpIcon,
  title: 'Digital Marketing',
  description: 'Strategic campaigns that drive engagement and deliver measurable results.',
  color: '#FF69B4'
}, {
  icon: LayoutIcon,
  title: 'Web Design',
  description: 'Stunning, responsive websites that convert visitors into customers.',
  color: '#87CEEB'
}, {
  icon: VideoIcon,
  title: 'Video Production',
  description: 'Compelling video content that tells your story and captivates audiences.',
  color: '#FFD700'
}, {
  icon: PackageIcon,
  title: 'Packaging Design',
  description: 'Eye-catching packaging that makes your products stand out on shelves.',
  color: '#FF69B4'
}];
export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="services" className="py-32 px-6 relative">
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
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-[#87CEEB] via-[#FFD700] to-[#FF69B4] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to elevate your brand
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <motion.div key={service.title} initial={{
            opacity: 0,
            y: 30
          }} animate={inView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300 cursor-pointer" whileHover={{
            y: -8
          }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{
              boxShadow: `0 0 30px ${service.color}40`
            }} />
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300" style={{
              background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
              border: `1px solid ${service.color}30`
            }}>
                  <Icon size={32} style={{
                color: service.color
              }} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#87CEEB] group-hover:to-[#FF69B4] group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <motion.div className="mt-6 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              color: service.color
            }}>
                  Learn More
                  <motion.span animate={{
                x: [0, 5, 0]
              }} transition={{
                duration: 1.5,
                repeat: Infinity
              }}>
                    →
                  </motion.span>
                </motion.div>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
}