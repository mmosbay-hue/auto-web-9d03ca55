import React from 'react';
import { Rocket, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Về chúng tôi', href: '#' },
    { name: 'Tính năng', href: '#features' },
    { name: 'Bảng giá', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Liên hệ', href: '#' },
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Facebook size={20} />, href: '#' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <a href="#" className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">Sbay AI</span>
            </a>
            <p className="text-slate-400 text-base">
              Giải pháp AI đột phá cho livestream, giúp CEO bùng nổ doanh số.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item, index) => (
                <a key={index} href={item.href} className="text-slate-400 hover:text-white">
                  <span className="sr-only">{item.icon.type.displayName}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Giải pháp</h3>
                <ul className="mt-4 space-y-4">
                  {navLinks.slice(0, 3).map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Công ty</h3>
                <ul className="mt-4 space-y-4">
                  {navLinks.slice(3).map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Pháp lý</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-slate-400 hover:text-white">Chính sách</a></li>
                  <li><a href="#" className="text-base text-slate-400 hover:text-white">Điều khoản</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-base text-slate-400 xl:text-center">&copy; {new Date().getFullYear()} Sbay AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
