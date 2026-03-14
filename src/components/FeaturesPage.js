import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Bot, ClipboardCheck, Share2, BarChart4, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    title: 'AI Phân Tích Hành Vi Người Xem',
    description: 'Công nghệ AI độc quyền của chúng tôi phân tích sâu vào dữ liệu tương tác trong thời gian thực, giúp bạn hiểu rõ khán giả hơn bao giờ hết. Từ cảm xúc, mức độ quan tâm đến các điểm \'nóng\' trong buổi livestream, AI cung cấp cho bạn bức tranh toàn cảnh để tối ưu hóa nội dung và chiến lược bán hàng.',
    keyPoints: [
      'Phân tích cảm xúc qua bình luận.',
      'Xác định sản phẩm được quan tâm nhất.',
      'Gợi ý thời điểm vàng để kêu gọi hành động (CTA).',
      'Báo cáo chi tiết sau mỗi phiên live.'
    ],
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    icon: Bot,
    title: 'Trợ Lý AI Tương Tác Thông Minh',
    description: 'Đừng để bất kỳ khách hàng tiềm năng nào bị bỏ lỡ. Trợ lý AI của chúng tôi hoạt động như một đội ngũ hỗ trợ 24/7, tự động trả lời các câu hỏi thường gặp, lọc và ghim các bình luận quan trọng, và thậm chí có thể chốt đơn tự động theo kịch bản được thiết lập sẵn.',
    keyPoints: [
      'Tự động trả lời bình luận theo từ khóa.',
      'Gom đơn hàng tự động qua comment.',
      'Lọc bình luận chứa thông tin nhạy cảm.',
      'Gửi tin nhắn riêng cho khách hàng tiềm năng.'
    ],
    image: 'https://images.unsplash.com/photo-1555255707-c0796982ecb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    icon: ClipboardCheck,
    title: 'Tối Ưu Hóa Nội Dung & Kịch Bản',
    description: 'Trước và trong khi livestream, AI sẽ phân tích kịch bản của bạn, so sánh với dữ liệu từ hàng triệu buổi livestream thành công để đưa ra gợi ý cải thiện. Từ cách mở đầu, cách giới thiệu sản phẩm đến việc tạo ra các mini-game, AI giúp bạn xây dựng một kịch bản hấp dẫn và hiệu quả.',
    keyPoints: [
      'Gợi ý tiêu đề và mô tả thu hút.',
      'Phân tích và đề xuất cải thiện kịch bản.',
      'Tạo mini-game, vòng quay may mắn tự động.',
      'Đề xuất các chủ đề \'trending\' để thảo luận.'
    ],
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
  },
  {
    icon: Share2,
    title: 'Tái Sử Dụng Nội Dung Đa Kênh',
    description: 'Mỗi buổi livestream là một mỏ vàng nội dung. AI của chúng tôi sẽ tự động xác định những khoảnh khắc đắt giá nhất, cắt ghép thành các video ngắn (Reels, Shorts, TikTok) và tạo ra các bài viết tóm tắt để bạn đăng tải trên các nền tảng khác. Tối đa hóa giá trị, tiết kiệm thời gian.',
    keyPoints: [
      'Tự động cắt highlight video.',
      'Tạo phụ đề và video ngắn định dạng dọc.',
      'Tóm tắt nội dung chính thành bài viết blog/social.',
      'Phân tích hiệu quả của nội dung tái sử dụng.'
    ],
    image: 'https://images.unsplash.com/photo-1611162617213-6d221bde380f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    icon: BarChart4,
    title: 'Báo Cáo & Phân Tích Chuyên Sâu',
    description: 'Dữ liệu là chìa khóa để tăng trưởng. Sbay Livestream AI cung cấp hệ thống báo cáo trực quan, chi tiết về hiệu suất mỗi buổi live: từ số lượng người xem, tỷ lệ tương tác, doanh thu tạo ra, đến chân dung khách hàng. Giúp CEO đưa ra quyết định dựa trên dữ liệu chính xác.',
    keyPoints: [
      'Dashboard theo dõi hiệu suất thời gian thực.',
      'Phân tích ROI (Return on Investment) của từng phiên.',
      'Nhận diện khách hàng trung thành và tiềm năng.',
      'So sánh hiệu quả giữa các buổi livestream.'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];

const FeatureCard = ({ feature, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className={`lg:order-${isReversed ? '2' : '1'}`}>
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <feature.icon className="h-8 w-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
        </div>
        <p className="text-slate-300 mb-6 text-lg leading-relaxed">{feature.description}</p>
        <ul className="space-y-3">
          {feature.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-slate-300">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`lg:order-${isReversed ? '1' : '2'}`}>
        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
          <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

export default function FeaturesPage() {
  return (
    <div className="relative hero-bg py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tính Năng Vượt Trội Của <span className="gradient-text">Sbay Livestream AI</span>
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Khám phá bộ công cụ AI mạnh mẽ được thiết kế để biến mỗi buổi livestream của bạn thành một cỗ máy bán hàng thông minh và hiệu quả.
          </motion.p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
