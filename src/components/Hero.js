import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            <span className="block">🚀 GIẢI PHÁP SBAY LIVESTREAM AI</span>
            <span className="block gradient-text mt-2">Mỏ Vàng Doanh Số Mới Của CEO</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg lg:text-xl text-slate-300">
            Biến mỗi buổi livestream thành cỗ máy bán hàng thông minh. Xây dựng niềm tin, bùng nổ tương tác và đột phá doanh thu với sức mạnh của AI.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href="#cta"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Dùng Thử Miễn Phí <ArrowRight className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-semibold py-4 px-8 rounded-full hover:bg-slate-800/60 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlayCircle className="h-6 w-6 text-blue-400" /> Xem Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
