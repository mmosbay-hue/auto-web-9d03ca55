# Sbay Livestream AI Project

## Design Tokens
- **Primary Color:** Vibrant Blue (`#3b82f6`) with gradients to Purple (`#8b5cf6`).
- **Font:** Be Vietnam Pro (sans-serif).
- **Border Radius:** `rounded-xl` or `rounded-2xl` for cards, `rounded-full` for buttons.
- **Shadow Style:** `shadow-lg`, `shadow-blue-500/20` for glowing effects.

## Components Created
- `src/components/Header.js`: Main navigation bar with logo and CTA.
- `src/components/Hero.js`: Main hero section for the homepage.
- `src/components/Features.js`: Grid of AI features with icons.
- `src/components/WhyLivestream.js`: Section explaining the benefits of livestreaming.
- `src/components/HowItWorks.js`: Simple 3-step process guide.
- `src/components/Testimonials.js`: Customer testimonials section.
- `src/components/CTA.js`: Final call-to-action section.
- `src/components/Footer.js`: Site footer with links and social media.
- `src/components/AboutPage.js`: The 'About Us' page, detailing the company's mission and team.
- `src/components/FeaturesPage.js`: Detailed page for all AI features with descriptions and images.
- `src/components/PricingPage.js`: Trang hiển thị các gói dịch vụ và bảng giá.
- `src/components/ContactPage.js`: Trang liên hệ với biểu mẫu thu thập thông tin khách hàng tiềm năng.
- `src/components/BlogPage.js`: Trang blog hiển thị các bài viết, case study.
- `src/components/FaqPage.js`: Trang câu hỏi thường gặp (FAQ) với hiệu ứng accordion.

## Shared Data Shapes
- `feature`: `{ icon, title, description }`
- `testimonial`: `{ quote, name, title, company, image }`
- `step`: `{ icon, title, description }`
- `detailedFeature`: `{ icon, title, description, keyPoints, image }`
- `pricingPlan`: `{ name, price, description, features, popular }`
- `lead`: `{ name, email, phone, company, message }`
- `blogPost`: `{ id, category, title, imageUrl, excerpt, author: { name, avatarUrl }, date, href }`
- `faqItem`: `{ question, answer }`
