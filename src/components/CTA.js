import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 sm:p-12 rounded-2xl text-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-16 -left-10 w-56 h-56 bg-white/10 rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sẵn Sàng Khai Phá Mỏ Vàng Doanh Số Của Bạn?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
              Đừng để đối thủ vượt mặt. Hãy là người dẫn đầu xu hướng và biến livestream thành lợi thế cạnh tranh không thể sao chép.
            </p>
            <div className="mt-8">
              <a 
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-200 text-blue-600 font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Nhận Tư Vấn Miễn Phí <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
