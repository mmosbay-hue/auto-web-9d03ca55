import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Target, HeartHandshake, ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Trần Bảo An',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Lê Minh Khang',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Phạm Thuỳ Linh',
    role: 'Head of Customer Success',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Hoàng Việt Dũng',
    role: 'Lead AI Engineer',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  },
];

const values = [
    {
        icon: <HeartHandshake className="h-8 w-8 text-blue-400" />,
        title: 'Sự Chân Thật',
        description: 'Chúng tôi tin vào sức mạnh của những câu chuyện thật và con người thật. Sự minh bạch là nền tảng cho mọi kết nối bền vững.'
    },
    {
        icon: <Lightbulb className="h-8 w-8 text-blue-400" />,
        title: 'Đổi Mới Sáng Tạo',
        description: 'Luôn tiên phong áp dụng công nghệ AI để giải quyết những thách thức thực tế, biến điều phức tạp trở nên đơn giản.'
    },
    {
        icon: <Target className="h-8 w-8 text-blue-400" />,
        title: 'Thành Công Của Khách Hàng',
        description: 'Thành công của bạn chính là thước đo lớn nhất cho thành công của chúng tôi. Chúng tôi đồng hành, không chỉ cung cấp.'
    }
];

export default function AboutPage() {
  const containerVariants = {
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
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="block">Sứ Mệnh Của Chúng Tôi:</span>
              <span className="gradient-text block mt-2">Biến Mỗi Tương Tác Thành Một Kết Nối Thật</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
              Chúng tôi tin rằng tương lai của kinh doanh không nằm ở những quảng cáo hào nhoáng, mà ở những cuộc đối thoại chân thành. Sbay ra đời để trao cho các CEO công cụ tạo ra những kết nối đó, biến mỗi buổi livestream thành một cơ hội vàng.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
            >
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Our Story" className="rounded-2xl shadow-2xl shadow-blue-500/10" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Câu Chuyện Của Sbay</h2>
                <p className="mt-4 text-slate-400 text-lg">Trong một thế giới bão hòa thông tin, nơi mà sự chú ý của khách hàng bị phân mảnh, chúng tôi nhận ra một sự thật đơn giản: <span className='text-white font-semibold'>con người tin vào con người.</span></p>
                <p className="mt-4 text-slate-400">Sbay Livestream AI được sinh ra từ trăn trở đó. Chúng tôi muốn phá vỡ những rào cản của quảng cáo truyền thống, tạo ra một cây cầu nối trực tiếp giữa doanh nghiệp và khách hàng. Livestream không chỉ là một kênh bán hàng, nó là một sân khấu để thể hiện sự chân thật, chia sẻ giá trị và xây dựng niềm tin. Và Sbay chính là người đồng hành thông minh trên sân khấu đó.</p>
            </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Giá Trị Cốt Lõi</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Những nguyên tắc dẫn lối cho mọi hành động và quyết định của chúng tôi.</p>
            </motion.div>
            <motion.div 
                className="mt-16 grid gap-8 md:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {values.map((value, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center"
                        variants={itemVariants}
                    >
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-800 mb-6 mx-auto">
                            {value.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{value.title}</h3>
                        <p className="mt-2 text-slate-400">{value.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Gặp Gỡ Đội Ngũ Đam Mê</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Chúng tôi là những chuyên gia về công nghệ, marketing và kinh doanh, cùng chung một tầm nhìn về sức mạnh của sự kết nối.</p>
          </motion.div>

          <motion.div 
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <img className="mx-auto h-32 w-32 rounded-full object-cover" src={member.image} alt={member.name} />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="gradient-text text-sm font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="relative bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-2xl text-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Sẵn Sàng Tạo Ra Sự Khác Biệt?</h2>
            <p className="mt-4 text-lg text-slate-400">Hãy cùng chúng tôi khai phá mỏ vàng doanh số và xây dựng một thương hiệu được yêu mến.</p>
            <a href="#" className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Khám Phá Giải Pháp Ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
