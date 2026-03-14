import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    category: 'Case Study',
    title: 'Tăng 200% Doanh Số Nhờ Livestream AI: Câu Chuyện Thành Công Của An Binh Tech',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    excerpt: 'Khám phá cách An Binh Tech, một công ty công nghệ, đã tận dụng Sbay Livestream AI để phá vỡ kỷ lục doanh số và xây dựng cộng đồng khách hàng trung thành.',
    author: {
      name: 'Nguyễn An',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    },
    date: '15 Tháng 6, 2024',
    href: '#',
  },
  {
    id: 2,
    category: 'Kinh Nghiệm',
    title: '5 Sai Lầm CEO Thường Mắc Phải Khi Livestream Bán Hàng Và Cách Tránh',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    excerpt: 'Từ việc chuẩn bị kịch bản đến tương tác với người xem, bài viết này chỉ ra những lỗi phổ biến và cung cấp giải pháp thực tế để buổi livestream của bạn hiệu quả hơn.',
    author: {
      name: 'Trần Thu Hà',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    },
    date: '10 Tháng 6, 2024',
    href: '#',
  },
  {
    id: 3,
    category: 'Hướng Dẫn AI',
    title: 'Sử Dụng Trợ Lý AI Để Tự Động Trả Lời Bình Luận: Hướng Dẫn Từ A-Z',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-2858200f7426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    excerpt: 'Tối ưu hóa thời gian và không bỏ lỡ bất kỳ khách hàng tiềm năng nào. Hướng dẫn chi tiết cách thiết lập và huấn luyện trợ lý AI cho fanpage của bạn.',
    author: {
      name: 'Lê Minh Khang',
      avatarUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    },
    date: '05 Tháng 6, 2024',
    href: '#',
  },
];

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 sm:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Blog & Tin Tức</h2>
          <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Kinh Nghiệm & Case Study Thực Tế
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Học hỏi từ những câu chuyện thành công, cập nhật kiến thức và các mẹo hữu ích để tối đa hóa hiệu quả livestream của bạn.
          </p>
        </motion.div>

        <motion.div
          className="mt-20 grid gap-12 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="flex flex-col bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex-shrink-0">
                <img className="h-56 w-full object-cover" src={post.imageUrl} alt={post.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-400">
                    <a href={post.href} className="hover:underline">
                      {post.category}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-200">{post.title}</p>
                    <p className="mt-3 text-base text-slate-400">{post.excerpt}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full object-cover" src={post.author.avatarUrl} alt={`Avatar of ${post.author.name}`} />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      <a href="#" className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-slate-500">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
