import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Bot, BarChart, Share2 } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-white" />,
    title: 'AI Phân Tích Hành Vi',
    description: 'Hiểu sâu insight người xem, gợi ý nội dung thu hút và xác định thời điểm vàng để chốt đơn.',
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: 'Trợ Lý AI Tương Tác',
    description: 'Tự động trả lời bình luận, lọc câu hỏi quan trọng và giữ cho luồng trò chuyện luôn sôi nổi, không bỏ lỡ khách hàng tiềm năng.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-white" />,
    title: 'Tối Ưu Thông Điệp',
    description: 'AI phân tích và đề xuất kịch bản, thông điệp bán hàng phù hợp với từng nhóm đối tượng khách hàng trong thời gian thực.',
  },
  {
    icon: <Share2 className="h-8 w-8 text-white" />,
    title: 'Tái Sử Dụng Nội Dung',
    description: 'Tự động tạo hàng chục nội dung ngắn (short video, clip highlight) từ mỗi buổi livestream để lan tỏa trên đa kênh.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Tính năng đột phá</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sức Mạnh Vượt Trội Của AI
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Giải pháp Sbay Livestream AI không chỉ là một công cụ, mà là một người đồng đội thông minh giúp bạn chinh phục mọi mục tiêu.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-500/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
