import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Sbay Livestream AI đã thay đổi hoàn toàn cách chúng tôi tiếp cận thị trường. Doanh số tăng 200% chỉ sau một tháng sử dụng. Thật không thể tin được!',
    name: 'Nguyễn An',
    title: 'CEO, An Binh Tech',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
  },
  {
    quote: 'Trợ lý AI thực sự là một "game changer". Chúng tôi có thể tập trung vào nội dung, trong khi AI xử lý các tương tác và giúp chúng tôi không bỏ lỡ bất kỳ khách hàng nào.',
    name: 'Trần Thu Hà',
    title: 'Founder, HaHa Fashion',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
  },
  {
    quote: 'Giải pháp này không chỉ giúp tăng doanh số mà còn tiết kiệm rất nhiều thời gian và nhân lực. Đây là khoản đầu tư xứng đáng nhất của chúng tôi trong năm nay.',
    name: 'Lê Minh Tuấn',
    title: 'Giám đốc Marketing, Tuan Phat Corp',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Người thật, việc thật</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Khách Hàng Nói Gì Về Chúng Tôi
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-300 flex-grow">“{testimonial.quote}”</blockquote>
              <div className="mt-6 flex items-center">
                <img className="h-12 w-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
                <div className="ml-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
