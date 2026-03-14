import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';

const pricingPlans = {
  monthly: [
    {
      name: 'Cá Nhân',
      price: '1.990.000',
      description: 'Dành cho cá nhân hoặc doanh nghiệp siêu nhỏ mới bắt đầu.',
      features: [
        '1 tài khoản mạng xã hội',
        'Trợ lý AI trả lời bình luận cơ bản',
        'Phân tích 1000 bình luận/tháng',
        'Báo cáo hiệu suất cơ bản',
        'Hỗ trợ qua email',
      ],
      popular: false,
    },
    {
      name: 'Doanh Nghiệp',
      price: '4.990.000',
      description: 'Giải pháp tối ưu cho các doanh nghiệp đang tăng trưởng.',
      features: [
        '5 tài khoản mạng xã hội',
        'Trợ lý AI thông minh (học theo kịch bản)',
        'Phân tích 10.000 bình luận/tháng',
        'Gợi ý nội dung & thời điểm vàng',
        'Báo cáo chuyên sâu & phân tích đối thủ',
        'Hỗ trợ ưu tiên qua Zalo/Telegram',
      ],
      popular: true,
    },
    {
      name: 'Tùy Chỉnh',
      price: 'Liên hệ',
      description: 'Dành cho các tập đoàn lớn với nhu cầu đặc thù.',
      features: [
        'Không giới hạn tài khoản',
        'AI được tùy chỉnh theo ngành hàng',
        'Phân tích không giới hạn',
        'Tích hợp CRM/ERP',
        'Quản lý tài khoản chuyên biệt',
        'Hỗ trợ 24/7',
      ],
      popular: false,
    },
  ],
  yearly: [
    {
      name: 'Cá Nhân',
      price: '19.900.000',
      description: 'Dành cho cá nhân hoặc doanh nghiệp siêu nhỏ mới bắt đầu.',
      features: [
        '1 tài khoản mạng xã hội',
        'Trợ lý AI trả lời bình luận cơ bản',
        'Phân tích 1000 bình luận/tháng',
        'Báo cáo hiệu suất cơ bản',
        'Hỗ trợ qua email',
      ],
      popular: false,
    },
    {
      name: 'Doanh Nghiệp',
      price: '49.900.000',
      description: 'Giải pháp tối ưu cho các doanh nghiệp đang tăng trưởng.',
      features: [
        '5 tài khoản mạng xã hội',
        'Trợ lý AI thông minh (học theo kịch bản)',
        'Phân tích 10.000 bình luận/tháng',
        'Gợi ý nội dung & thời điểm vàng',
        'Báo cáo chuyên sâu & phân tích đối thủ',
        'Hỗ trợ ưu tiên qua Zalo/Telegram',
      ],
      popular: true,
    },
    {
      name: 'Tùy Chỉnh',
      price: 'Liên hệ',
      description: 'Dành cho các tập đoàn lớn với nhu cầu đặc thù.',
      features: [
        'Không giới hạn tài khoản',
        'AI được tùy chỉnh theo ngành hàng',
        'Phân tích không giới hạn',
        'Tích hợp CRM/ERP',
        'Quản lý tài khoản chuyên biệt',
        'Hỗ trợ 24/7',
      ],
      popular: false,
    },
  ],
};

const PricingCard = ({ plan, billingCycle, index }) => {
  const isPopular = plan.popular;
  const isCustom = plan.price === 'Liên hệ';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col h-full p-8 rounded-2xl border ${isPopular ? 'bg-slate-900 border-blue-500 shadow-blue-500/20 shadow-2xl' : 'bg-slate-900/50 border-slate-800'}`}
    >
      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full text-white text-sm font-semibold">
            <Star size={16} className="text-yellow-300 fill-current" />
            Phổ Biến Nhất
          </div>
        </div>
      )}
      <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
      <p className="mt-4 text-slate-400 text-sm h-12">{plan.description}</p>
      
      {isCustom ? (
         <div className="mt-6">
            <p className="text-4xl font-bold tracking-tight text-white">Thương Lượng</p>
            <p className="text-sm text-slate-400">Giải pháp theo yêu cầu của bạn</p>
         </div>
      ) : (
        <div className="mt-6">
            <p className="text-4xl font-bold tracking-tight text-white">{plan.price} <span className="text-lg font-medium text-slate-400">VNĐ</span></p>
            <p className="text-sm text-slate-400">/{billingCycle === 'monthly' ? 'tháng' : 'năm'}</p>
        </div>
      )}

      <ul role="list" className="mt-8 space-y-4 text-sm leading-6 text-slate-300 flex-grow">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckCircle className="h-6 w-5 flex-none text-blue-500" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold leading-6 text-white transition-all duration-300 ${isPopular ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/40' : 'bg-slate-700 hover:bg-slate-600'}`}
      >
        {isCustom ? 'Liên Hệ Tư Vấn' : 'Bắt Đầu Ngay'}
      </a>
    </motion.div>
  );
};


export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="py-24 sm:py-32 hero-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 gradient-text"
          >
            Bảng Giá
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Đầu tư thông minh cho sự tăng trưởng vượt bậc
          </motion.p>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-300"
        >
          Chọn gói dịch vụ phù hợp nhất với quy mô và mục tiêu của bạn. Tất cả các gói đều được thiết kế để tối đa hóa doanh thu từ livestream.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative rounded-full p-1 bg-slate-800/80 flex text-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative rounded-full px-4 py-1.5 transition-colors duration-300 ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Thanh Toán Tháng
              {billingCycle === 'monthly' && (
                <motion.div
                  layoutId="billing-cycle-active"
                  className="absolute inset-0 bg-slate-700 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative rounded-full px-4 py-1.5 transition-colors duration-300 ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Thanh Toán Năm
              {billingCycle === 'yearly' && (
                <motion.div
                  layoutId="billing-cycle-active"
                  className="absolute inset-0 bg-slate-700 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
            <div className="absolute top-0 -right-4 translate-x-full hidden sm:block">
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                    Tiết kiệm 15%
                </span>
            </div>
          </div>
        </motion.div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pricingPlans[billingCycle].map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} billingCycle={billingCycle} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
