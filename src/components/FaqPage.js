import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: 'Sbay Livestream AI là gì?',
    answer: 'Sbay Livestream AI là một giải pháp công nghệ tiên tiến, sử dụng trí tuệ nhân tạo để nâng cao hiệu quả của các buổi livestream bán hàng. Nó giúp các CEO và doanh nghiệp tự động hóa tương tác, phân tích hành vi người xem và tối ưu hóa thông điệp bán hàng trong thời gian thực.',
  },
  {
    question: 'Giải pháp này phù hợp với ai?',
    answer: 'Sản phẩm của chúng tôi được thiết kế cho các CEO, chủ doanh nghiệp, nhà bán hàng online và bất kỳ ai muốn tận dụng sức mạnh của livestream để tăng trưởng doanh số và xây dựng thương hiệu cá nhân. Dù bạn là người mới bắt đầu hay đã có kinh nghiệm, Sbay Livestream AI đều có thể giúp bạn.',
  },
  {
    question: 'Sbay Livestream AI hỗ trợ những nền tảng nào?',
    answer: 'Hiện tại, giải pháp của chúng tôi hỗ trợ các nền tảng livestream phổ biến nhất như Facebook, YouTube, và TikTok. Chúng tôi đang liên tục làm việc để mở rộng hỗ trợ sang các nền tảng khác trong tương lai.',
  },
  {
    question: 'Sử dụng Sbay Livestream AI có khó không?',
    answer: 'Hoàn toàn không. Chúng tôi đã thiết kế giao diện người dùng một cách trực quan và thân thiện nhất. Bạn chỉ cần vài cú nhấp chuột để kết nối tài khoản và bắt đầu sử dụng. Đội ngũ hỗ trợ của chúng tôi cũng luôn sẵn sàng 24/7 để giải đáp mọi thắc mắc của bạn.',
  },
  {
    question: 'Làm thế nào AI có thể giúp tôi bán hàng tốt hơn?',
    answer: 'AI của chúng tôi hoạt động như một trợ lý ảo thông minh. Nó tự động trả lời các bình luận thường gặp, lọc ra các câu hỏi quan trọng về sản phẩm, phân tích cảm xúc của người xem và cung cấp cho bạn các gợi ý về nội dung hoặc thời điểm chốt đơn hiệu quả nhất.',
  },
  {
    question: 'Chi phí cho dịch vụ này là bao nhiêu?',
    answer: 'Chúng tôi cung cấp nhiều gói dịch vụ linh hoạt phù hợp với quy mô và nhu cầu của từng doanh nghiệp. Vui lòng truy cập trang Bảng giá của chúng tôi để biết thông tin chi tiết hoặc liên hệ với đội ngũ tư vấn để được hỗ trợ gói phù hợp nhất.',
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-white hover:text-blue-400 transition-colors duration-300"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '16px' },
              collapsed: { opacity: 0, height: 0, marginTop: '0px' },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FaqPage() {
  return (
    <div className="py-24 sm:py-32 hero-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center bg-blue-500/10 text-blue-400 rounded-full p-3 mb-6 shadow-lg shadow-blue-500/20">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Câu Hỏi Thường Gặp
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            Tìm câu trả lời cho những thắc mắc phổ biến nhất về giải pháp Sbay Livestream AI. Nếu bạn không tìm thấy điều mình cần, đừng ngần ngại liên hệ với chúng tôi.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-4 sm:p-8 shadow-2xl shadow-blue-500/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
