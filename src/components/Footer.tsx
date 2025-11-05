import React from "react";
import { motion } from "framer-motion";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "lucide-react";
export function Footer() {
  const socialLinks = [
    {
      icon: FacebookIcon,
      href: "#",
      color: "#87CEEB",
    },
    {
      icon: TwitterIcon,
      href: "#",
      color: "#FFD700",
    },
    {
      icon: InstagramIcon,
      href: "#",
      color: "#FF69B4",
    },
    {
      icon: LinkedinIcon,
      href: "#",
      color: "#87CEEB",
    },
  ];
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              LAYERS<span className="text-[#87CEEB]">.</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming brands through bold creativity and strategic
              innovation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/30 transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 0 20px ${social.color}40`,
                    }}
                    style={{
                      color: social.color,
                    }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                "Brand Design",
                "Print Solutions",
                "Digital Marketing",
                "Web Design",
                "Video Production",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#87CEEB] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Our Work", "Careers", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPinIcon
                  size={20}
                  className="text-[#87CEEB] flex-shrink-0 mt-1"
                />
                <span>123 Creative Street, Design District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <PhoneIcon size={20} className="text-[#FFD700] flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MailIcon size={20} className="text-[#FF69B4] flex-shrink-0" />
                <span>hello@layers.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Layers. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
