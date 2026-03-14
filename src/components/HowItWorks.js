import React from 'react';
import { motion } from 'framer-motion';
import { Link, Video, BarChart2 } from 'lucide-react';

const steps = [
  {
    icon: <Link className="h-10 w-10 text-blue-400" />,
    title: 'Kết Nối Nền Tảng',
    description: 'Dễ dàng liên kết các tài khoản mạng xã hội của bạn chỉ với vài cú nhấp chuột.',
  },
  {
    icon: <Video className="h-10 w-10 text-blue-400" />,
    title: 'Bắt Đầu Livestream',
    description: 'Lên sóng với sự hỗ trợ đắc lực từ trợ lý AI, tự tin tương tác và bán hàng.',
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-blue-400" />,
    title: 'Đột Phá Doanh Số',
    description: 'Theo dõi hiệu quả, phân tích dữ liệu và tối ưu chiến lược để bùng nổ doanh thu.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Quy trình đơn giản</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bắt Đầu Dễ Dàng Chỉ Với 3 Bước
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-slate-800 hidden md:block" aria-hidden="true"></div>
          <div className="grid md:grid-cols-3 gap-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-slate-900 border-2 border-slate-800 mx-auto mb-6 relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-lg"></div>
                  {step.icon}
                  <div className="absolute -top-3 -right-3 h-10 w-10 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full border-4 border-slate-950 text-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-slate-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
