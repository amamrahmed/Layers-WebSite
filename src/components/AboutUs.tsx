import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users2Icon, AwardIcon, RocketIcon, HeartIcon } from "lucide-react";

export function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Users2Icon,
      number: "250+",
      label: "Happy Clients",
      color: "#87CEEB",
    },
    {
      icon: AwardIcon,
      number: "15+",
      label: "Years Experience",
      color: "#FFD700",
    },
    {
      icon: RocketIcon,
      number: "500+",
      label: "Projects Completed",
      color: "#FF69B4",
    },
    {
      icon: HeartIcon,
      number: "100%",
      label: "Client Satisfaction",
      color: "#87CEEB",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#FFB800] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Creating exceptional designs and memorable brands since 2009
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">Our Story</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded in 2009, Layers has grown from a small design studio to a
              full-service creative agency. Our passion for innovation and
              commitment to excellence has helped us transform countless brands
              and businesses.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We believe in the power of design to solve problems, tell stories,
              and create meaningful connections. Our team of creative
              professionals brings together diverse skills and perspectives to
              deliver exceptional results for our clients.
            </p>
            <motion.button
              className="mt-8 px-8 py-4 bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#FFB800] text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,229,127,0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Our team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
                    border: `1px solid ${stat.color}30`,
                  }}
                >
                  <Icon size={32} style={{ color: stat.color }} />
                </div>
                <h4 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#FFB800] bg-clip-text text-transparent">
                  {stat.number}
                </h4>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
