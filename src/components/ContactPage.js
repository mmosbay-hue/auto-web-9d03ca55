import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, User, AtSign, MessageSquare, Building, CheckCircle, AlertCircle } from 'lucide-react';

const ContactInfoItem = ({ icon, title, value }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 bg-slate-800 p-3 rounded-full text-blue-400">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-slate-400">{value}</p>
    </div>
  </div>
);

const FormInput = ({ icon, type, placeholder, value, onChange, name, required = true }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      {icon}
    </div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
    />
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus({ submitted: true, success: false, message: 'Vui lòng điền đầy đủ các trường bắt buộc.' });
      return;
    }
    console.log('Form submitted:', formData);
    setFormStatus({ submitted: true, success: true, message: 'Cảm ơn bạn! Chúng tôi đã nhận được thông tin và sẽ liên hệ lại sớm nhất.' });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setTimeout(() => setFormStatus({ submitted: false, success: false, message: '' }), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-950 hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Sẵn Sàng <span className="gradient-text">Bùng Nổ Doanh Số?</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
              Để lại thông tin bên dưới, đội ngũ chuyên gia của Sbay sẽ liên hệ tư vấn 1:1 và gửi bạn bản demo giải pháp Livestream AI hoàn toàn miễn phí.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Biểu mẫu tư vấn</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <FormInput icon={<User className="h-5 w-5 text-slate-500" />} type="text" placeholder="Họ và Tên *" name="name" value={formData.name} onChange={handleChange} />
                <FormInput icon={<AtSign className="h-5 w-5 text-slate-500" />} type="email" placeholder="Email *" name="email" value={formData.email} onChange={handleChange} />
                <FormInput icon={<Phone className="h-5 w-5 text-slate-500" />} type="tel" placeholder="Số điện thoại *" name="phone" value={formData.phone} onChange={handleChange} />
                <FormInput icon={<Building className="h-5 w-5 text-slate-500" />} type="text" placeholder="Tên công ty" name="company" value={formData.company} onChange={handleChange} required={false} />
                <div className="relative">
                  <div className="absolute top-3.5 left-0 pl-3 flex items-center pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-500" />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Nhu cầu của bạn là gì?"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-blue-500/30 hover:scale-105 transform transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>Nhận Tư Vấn Miễn Phí</span>
                </motion.button>
              </form>
              {formStatus.submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg flex items-center gap-3 ${formStatus.success ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                  {formStatus.success ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  <p>{formStatus.message}</p>
                </motion.div>
              )}
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Hoặc liên hệ trực tiếp</h3>
              <div className="space-y-6">
                <ContactInfoItem
                  icon={<MapPin size={24} />}
                  title="Địa chỉ văn phòng"
                  value="Tầng 12, Tòa nhà Tech-Hub, 123 Đường ABC, Quận 1, TP. Hồ Chí Minh"
                />
                <ContactInfoItem
                  icon={<Phone size={24} />}
                  title="Hotline hỗ trợ"
                  value="1900 1234 (Nhánh 2)"
                />
                <ContactInfoItem
                  icon={<Mail size={24} />}
                  title="Email"
                  value="support@sbay.ai"
                />
              </div>
              <div className="mt-8 pt-8 border-t border-slate-800">
                <h4 className="text-xl font-semibold text-white">Tại sao chọn Sbay?</h4>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Giải pháp AI tiên phong, tối ưu hóa cho thị trường Việt Nam.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Đội ngũ chuyên gia giàu kinh nghiệm, hỗ trợ 24/7.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Cam kết tăng trưởng doanh số rõ rệt sau 30 ngày.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}