import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <Users className="h-8 w-8 text-blue-400" />,
    title: 'Xây Dựng Niềm Tin Vững Chắc',
    description: 'Khách hàng mua vì con người thật, câu chuyện thật. Livestream là cầu nối trực tiếp, xóa nhòa khoảng cách giữa thương hiệu và thị trường.',
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-400" />,
    title: 'Tương Tác Tức Thì',
    description: 'Giải đáp thắc mắc, nhận phản hồi và tạo ra một cuộc đối thoại chân thực. Biến người xem thành khách hàng trung thành.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-400" />,
    title: 'Tỷ Lệ Chuyển Đổi Vượt Trội',
    description: 'Sự chân thật và tính cấp bách của livestream tạo ra động lực mua hàng mạnh mẽ mà quảng cáo truyền thống không thể có được.',
  },
];

export default function WhyLivestream() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-livestream" className="py-16 sm:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Sức mạnh của kết nối</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tại Sao Livestream Là Mỏ Vàng Doanh Số?
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Trong thế giới số, niềm tin là đơn vị tiền tệ quý giá nhất. Livestream không chỉ bán sản phẩm, nó bán niềm tin và xây dựng mối quan hệ bền vững.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-800 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
              <p className="mt-2 text-slate-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
