/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Check, 
  Heart, 
  ShieldCheck, 
  Users, 
  Zap, 
  BookOpen, 
  Phone,
  ArrowRight,
  Star,
  Facebook,
  Youtube
} from 'lucide-react';

const NavItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-stone-600 hover:text-emerald-700 font-medium transition-colors duration-200"
  >
    {children}
  </a>
);

const ServiceCard = ({ title, subtitle, price, features, isFeatured = false }: any) => (
  <motion.div 
    whileHover={{ y: -12, shadow: "0 25px 50px -12px rgba(6, 95, 70, 0.15)" }}
    className={`p-10 rounded-[2.5rem] border flex flex-col h-full transition-all duration-500 ${
      isFeatured 
        ? 'bg-emerald-50 border-emerald-200 text-emerald-950 shadow-xl shadow-emerald-900/5 lg:scale-105 relative overflow-hidden' 
        : 'bg-white border-slate-100 text-slate-900 shadow-sm hover:border-emerald-100'
    }`}
  >
    {isFeatured && (
      <div className="absolute top-0 right-0 bg-emerald-700 text-white px-6 py-1.5 font-bold text-xs rounded-bl-2xl uppercase tracking-widest">
        Đề xuất
      </div>
    )}
    <div className="mb-8">
      <h3 className={`text-3xl font-bold mb-3 font-serif ${isFeatured ? 'text-emerald-900' : 'text-slate-900'}`}>{title}</h3>
      <p className={`text-lg ${isFeatured ? 'text-emerald-700 italic font-medium' : 'text-slate-500'}`}>{subtitle}</p>
    </div>
    <div className={`text-5xl font-bold mb-8 font-serif ${isFeatured ? 'text-emerald-800' : 'text-emerald-900'}`}>
      {price}<span className={`text-base font-normal ${isFeatured ? 'text-emerald-600' : 'text-slate-400'}`}> /tháng</span>
    </div>
    <ul className="space-y-5 mb-10 flex-grow">
      {features.map((feature: string, idx: number) => (
        <li key={idx} className="flex items-start space-x-4">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isFeatured ? 'bg-emerald-200 text-emerald-800' : 'bg-emerald-50 text-emerald-600'}`}>
            <Check className="w-4 h-4" />
          </div>
          <span className={`text-lg ${isFeatured ? 'text-emerald-900 font-medium' : 'text-slate-600'}`}>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${
      isFeatured 
        ? 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-lg shadow-emerald-700/20' 
        : 'bg-slate-50 text-emerald-900 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-200'
    }`}>
      Đăng ký ngay
    </button>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-stone-200 rounded-2xl overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center bg-stone-50 font-bold hover:bg-stone-100 transition-colors"
      >
        <span className="pr-4">{question}</span>
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 bg-stone-50 text-stone-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/d/18u5lXe4tQAmRLvQ2Fq6WvJmH8fkZQ8px" 
                alt="Bình An Yoga Logo" 
                className="w-12 h-12 rounded-xl object-cover shadow-sm border border-emerald-50"
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-bold text-emerald-900 font-serif tracking-tight">Bình An Yoga</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              <NavItem href="#about">Về Khánh Linh</NavItem>
              <NavItem href="#services">Dịch vụ</NavItem>
              <NavItem href="#premium">Gói Premium</NavItem>
              <NavItem href="#faq">Hỏi đáp</NavItem>
            </div>

            <div className="hidden md:block">
              <a href="#contact" className="bg-emerald-700 text-white px-6 py-2.5 rounded-full hover:bg-emerald-800 transition shadow-lg shadow-emerald-700/20 font-semibold">
                Nhận Tư Vấn
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-stone-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-stone-200 px-4 py-6 flex flex-col space-y-4"
            >
              <NavItem href="#about" onClick={() => setIsMenuOpen(false)}>Về Khánh Linh</NavItem>
              <NavItem href="#services" onClick={() => setIsMenuOpen(false)}>Dịch vụ</NavItem>
              <NavItem href="#premium" onClick={() => setIsMenuOpen(false)}>Gói Premium</NavItem>
              <NavItem href="#faq" onClick={() => setIsMenuOpen(false)}>Hỏi đáp</NavItem>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-emerald-700 text-white px-6 py-3 rounded-xl text-center font-bold">
                Nhận Tư Vấn
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Bio Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="w-16 h-1.5 bg-emerald-600 mb-8 rounded-full"></div>
              <h2 className="text-5xl font-bold mb-8 text-slate-900 leading-tight font-serif tracking-tight">
                Chuyên gia của bạn<br/><span className="text-emerald-700 italic">Nguyễn Thị Khánh Linh</span>
              </h2>
              <p className="text-xl text-emerald-800 font-semibold mb-10 tracking-wide uppercase text-sm">Yoga Trainer – Health Coach Pro</p>
              <div className="space-y-6 mb-12">
                {[
                  "Chứng chỉ Huấn luyện viên Yoga quốc tế 200h",
                  "Chứng chỉ HLV Sức khỏe chuyên nghiệp - <strong>Bộ Y Tế công nhận</strong>",
                  "Chuyên sâu về Yoga phục hồi & Trị liệu tư thế"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/50 hover:bg-emerald-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-slate-700 text-lg" dangerouslySetInnerHTML={{ __html: item }} />
                  </motion.div>
                ))}
              </div>
              <div className="p-8 bg-gradient-to-r from-emerald-50 to-white rounded-3xl border-l-8 border-emerald-700 shadow-sm">
                <p className="text-emerald-900 italic text-lg leading-relaxed">
                  "Tập luyện chỉ là một phần. Tại Bình An, chúng tôi kết hợp cả tập luyện, dinh dưỡng và tâm trí để bạn đạt được trạng thái sức khỏe tối ưu nhất dựa trên nền tảng khoa học."
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-96 lg:w-[450px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white relative z-10">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1emDUTuzWCOtMDrYCdWx1E_MfNQWsmL58" 
                    alt="HLV Khanh Linh" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -inset-4 border-2 border-emerald-100 rounded-[3.5rem] -z-10 translate-x-4 translate-y-4"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-50 rounded-full -z-20 blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50/30">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-200/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-amber-200/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/50 text-emerald-900 text-sm font-bold mb-6 border border-emerald-200/50">
                <Heart className="w-4 h-4" />
                <span className="uppercase tracking-widest">Yoga Phục Hồi & Sức Khỏe</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold leading-[1.1] mb-8 text-slate-900 font-serif tracking-tight">
                Chữa Lành <br/><span className="text-emerald-700 italic font-medium">Thân Tâm</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                Lộ trình chăm sóc sức khỏe chuyên sâu kết hợp Yoga phục hồi và tư vấn dinh dưỡng cá nhân hóa, dựa trên <span className="text-emerald-900 font-semibold underline decoration-emerald-300 decoration-2 underline-offset-4">kiến thức khoa học sức khỏe</span> thực thụ.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="#services" className="px-10 py-5 bg-emerald-800 text-white rounded-2xl text-center font-bold text-lg hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/20 hover:scale-[1.02] active:scale-[0.98]">
                  Xem các gói tập
                </a>
                <a href="#contact" className="px-10 py-5 bg-white text-emerald-800 border-2 border-emerald-100 rounded-2xl text-center font-bold text-lg hover:border-emerald-200 hover:bg-emerald-50/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Liên hệ ngay
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-emerald-900/10 border border-emerald-50">
                <div className="rounded-[2rem] h-[550px] w-full overflow-hidden relative">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1YgPb8KTCDF_3JAuOsGmWj7B1uuFpl-o0" 
                    alt="Yoga Practice" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                    <p className="text-emerald-950 italic font-semibold text-lg leading-snug">"Tôi giúp bạn giải tỏa tắc nghẽn và tìm lại sự cân bằng bền vững."</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100 rounded-3xl -z-10 rotate-12"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-emerald-100 rounded-full -z-10 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8 rounded-full"></div>
            <h2 className="text-5xl font-bold mb-6 font-serif tracking-tight text-slate-900">Yoga Cân Bằng & Phục Hồi</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">Dành cho những người muốn duy trì sức khỏe bền bỉ, giảm stress và trị liệu các vấn đề cơ bản.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Phục Hồi Cơ Bản"
              subtitle="Thư giãn sâu"
              price="300.000đ"
              features={[
                "3 buổi/tuần",
                "Tập trung hơi thở & Hệ thần kinh",
                "Tặng 1 buổi tư vấn dinh dưỡng cơ bản"
              ]}
            />
            <ServiceCard 
              title="Cân Bằng Toàn Diện"
              subtitle="Tái tạo năng lượng"
              price="500.000đ"
              features={[
                "5 buổi/tuần",
                "Tăng sự dẻo dai toàn diện",
                "Tặng 1 buổi tư vấn dinh dưỡng cơ bản"
              ]}
            />
            <ServiceCard 
              title="Lớp Nhóm Nhỏ"
              subtitle="Hiệu quả tối ưu nhất"
              price="700.000đ"
              isFeatured={true}
              features={[
                "Tối đa 5 người/lớp",
                "Chỉnh sửa kỹ thuật chuyên sâu",
                "Tốt cho người có vấn đề xương khớp"
              ]}
            />
          </div>

          {/* Yoga Kids */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 bg-white rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 border border-slate-100 shadow-xl shadow-emerald-900/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="md:w-1/2 relative z-10">
              <span className="text-emerald-700 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Dành cho thế hệ tương lai</span>
              <h2 className="text-4xl font-bold mt-2 mb-6 font-serif tracking-tight text-slate-900">Yoga Kids – Ươm Mầm Sức Khỏe</h2>
              <p className="text-slate-600 text-xl mb-10 leading-relaxed">
                Phát triển chiều cao, sự tập trung và điềm tĩnh thông qua các bài tập mô phỏng tự nhiên, kết hợp kể chuyện và thiền giúp trẻ kết nối với bản thân.
              </p>
              <div className="flex items-center gap-8 p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100/50 w-fit">
                <div>
                  <div className="text-3xl font-bold text-emerald-900 font-serif">200.000đ</div>
                  <div className="text-emerald-600 text-sm font-medium uppercase tracking-wider">Mỗi tháng</div>
                </div>
                <div className="w-px h-12 bg-emerald-200"></div>
                <div>
                  <div className="text-xl font-bold text-slate-800">2 buổi</div>
                  <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">Mỗi tuần</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-6 relative">
              <div className="h-64 bg-slate-100 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                <img src="https://media.licdn.com/dms/image/v2/D5612AQETa3WwjHMT_Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1700092347927?e=2147483647&v=beta&t=wBZxLl8HP449lTEXtjYqhTZ3iCLArk_MCaJQYvGmp3g" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="h-64 bg-slate-100 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white translate-y-12">
                <img src="https://media.licdn.com/dms/image/v2/D5612AQETa3WwjHMT_Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1700092347927?e=2147483647&v=beta&t=wBZxLl8HP449lTEXtjYqhTZ3iCLArk_MCaJQYvGmp3g" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Services */}
      <section id="premium" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-emerald-700 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Gói chuyên sâu</span>
            <h2 className="text-6xl font-bold mt-4 font-serif tracking-tight text-slate-900">Premium Therapy</h2>
            <p className="text-xl text-slate-500 mt-6 max-w-2xl mx-auto leading-relaxed">Sự giám sát từ chuyên gia với lộ trình thiết kế dựa trên kiến thức khoa học sức khỏe.</p>
          </div>

          <div className="space-y-16">
            {/* Premium 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-slate-50/50 p-12 rounded-[3.5rem] border border-slate-100 flex flex-col lg:flex-row items-center gap-16 transition-all hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 hover:border-emerald-100"
            >
              <div className="lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
                <h3 className="text-4xl font-bold mb-6 font-serif tracking-tight text-slate-900">PT 1:1 - Thiết kế riêng</h3>
                <p className="text-emerald-800 mb-8 italic text-xl font-medium">"Lộ trình xây dựng dựa trên chính thể trạng của bạn."</p>
                <div className="text-5xl font-bold text-emerald-900 font-serif">300.000đ<span className="text-lg text-slate-400 font-normal font-sans"> /giờ</span></div>
              </div>
              <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 group-hover:border-emerald-50">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Cá nhân hóa tuyệt đối</h4>
                  <p className="text-slate-500 leading-relaxed">Giảm cân, sửa tư thế, hoặc giảm đau mỏi theo nhu cầu cụ thể của từng cá nhân.</p>
                </div>
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 group-hover:border-emerald-50">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Chỉnh sửa từng milimet</h4>
                  <p className="text-slate-500 leading-relaxed">Đảm bảo an toàn và đạt kết quả nhanh chóng hơn so với tập luyện đại trà.</p>
                </div>
              </div>
            </motion.div>

            {/* Premium 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-emerald-900 p-12 lg:p-20 rounded-[4rem] flex flex-col lg:flex-row items-center gap-16 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
              <div className="lg:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full mb-8 border border-emerald-500/30">
                  <Zap className="w-4 h-4" />
                  <span className="uppercase tracking-widest">Combo Toàn Diện</span>
                </div>
                <h3 className="text-5xl font-bold mb-8 italic font-serif leading-tight tracking-tight">Quản lý Cân nặng & <br/>Chăm sóc Chủ động</h3>
                <p className="text-slate-300 text-xl mb-10 leading-relaxed">Sự kết hợp giữa chế độ tập luyện và thực đơn dinh dưỡng cá nhân hóa. Đồng hành mỗi ngày để đạt mục tiêu vóc dáng bền vững.</p>
                <div className="flex flex-wrap gap-4 mb-12">
                  {["📅 Đồng hành hàng ngày", "🥗 Dinh dưỡng cá nhân", "💪 Hỗ trợ tập luyện"].map((tag, i) => (
                    <span key={i} className="px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-xl text-sm font-medium border border-white/10">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-10">
                  <div className="text-5xl font-bold font-serif">3.000.000đ<span className="text-lg font-normal text-slate-500 font-sans"> /tháng</span></div>
                  <div className="text-amber-400 text-sm font-bold bg-amber-400/10 px-5 py-2.5 rounded-xl border border-amber-400/30 flex items-center gap-2">
                    <Star className="w-5 h-5 fill-amber-400" /> Tặng Khóa "24h Tỉnh Thức"
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative z-10">
                <div className="rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl shadow-black/50">
                  <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>

            {/* Premium 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-emerald-50/50 p-12 rounded-[3.5rem] border border-emerald-100 flex flex-col lg:flex-row items-center gap-16 transition-all hover:bg-emerald-50 hover:shadow-xl"
            >
              <div className="lg:w-2/5 order-2 lg:order-1">
                <div className="rounded-[3rem] overflow-hidden h-[450px] shadow-2xl border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="lg:w-3/5 order-1 lg:order-2">
                <span className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-sm italic mb-4 block">Cấp độ cao nhất</span>
                <h3 className="text-5xl font-bold mt-2 mb-8 font-serif tracking-tight text-slate-900">Phục hồi Sức khỏe sau <br/>Chấn thương & Phẫu thuật</h3>
                <p className="text-slate-600 text-xl leading-relaxed mb-10">
                  Gói dịch vụ đặc biệt kết hợp giữa <strong>kiến thức khoa học sức khỏe</strong> và Yoga trị liệu. Đảm bảo an toàn tuyệt đối và đẩy nhanh tốc độ hồi phục chức năng vận động.
                </p>
                <div className="p-8 bg-white rounded-3xl border-l-8 border-emerald-700 mb-10 shadow-sm">
                  <p className="text-emerald-900 font-bold italic text-lg">"Lộ trình được thiết kế và giám sát bởi chuyên gia có chuyên môn khoa học sức khỏe."</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-8">
                  <div className="text-6xl font-bold text-emerald-900 font-serif">5.000.000đ<span className="text-lg text-slate-400 font-normal font-sans"> /tháng</span></div>
                  <button className="bg-emerald-800 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/20 hover:scale-[1.02]">Liên hệ Chuyên gia</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/20 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Chương trình đặc biệt</span>
              <h2 className="text-6xl lg:text-7xl font-bold mb-10 italic font-serif tracking-tight">Khóa học <br/><span className="text-emerald-400">"24h Tỉnh Thức"</span></h2>
              <p className="text-2xl text-slate-400 mb-12 leading-relaxed">Xây dựng nền tảng tư duy đúng đắn về sức khỏe với 24 chủ đề chuyên sâu từ dinh dưỡng, quản lý giấc ngủ đến cảm xúc.</p>
              <div className="space-y-8 mb-16">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 border border-emerald-500/30">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2 font-serif">Tư duy gốc rễ</h4>
                    <p className="text-slate-400 text-lg">Giúp bạn trở thành người chăm sóc sức khỏe tốt nhất cho chính mình.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 border border-emerald-500/30">
                    <Zap className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2 font-serif">Áp dụng khoa học sức khỏe</h4>
                    <p className="text-slate-400 text-lg">Dinh dưỡng đúng cách, quản lý giấc ngủ và làm chủ cảm xúc.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="text-5xl font-bold font-serif">2.400.000đ<span className="text-lg text-slate-500 font-normal font-sans"> /khóa</span></div>
                <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all hover:scale-[1.02]">Đăng ký ngay</button>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-800 to-slate-900 rounded-[4rem] p-16 flex items-center justify-center border border-emerald-700/50 overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="text-center relative z-10">
                  <div className="text-[10rem] font-bold text-emerald-400 mb-2 leading-none group-hover:scale-110 transition duration-700 font-serif">24</div>
                  <div className="text-4xl font-bold tracking-[0.2em] uppercase text-white mb-8">Chủ đề chuyên sâu</div>
                  <div className="px-8 py-3 bg-emerald-500 text-emerald-950 font-bold rounded-full text-lg inline-block uppercase tracking-widest shadow-xl shadow-emerald-500/20">Health Coach Program</div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-16">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10" />,
              title: "An Toàn & Khoa Học",
              desc: "Mọi bài tập đều dựa trên nền tảng khoa học sức khỏe, phù hợp với giới hạn của cơ thể."
            },
            {
              icon: <Heart className="w-10 h-10" />,
              title: "Chữa Lành & Tái Tạo",
              desc: "Giúp bạn giải tỏa tắc nghẽn, xoa dịu tâm trí và nạp lại năng lượng tự nhiên."
            },
            {
              icon: <Users className="w-10 h-10" />,
              title: "Đồng Hành Cá Nhân",
              desc: "Không chỉ là giáo viên, chúng tôi là người bạn đồng hành cùng sức khỏe của bạn."
            }
          ].map((val, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="text-center p-12 bg-slate-50/50 rounded-[3rem] border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center text-emerald-700 mx-auto mb-8 shadow-sm">
                {val.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 font-serif tracking-tight text-slate-900">{val.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-slate-50/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-4 block">Giải đáp thắc mắc</span>
            <h2 className="text-5xl font-bold mb-6 font-serif tracking-tight text-slate-900">Câu Hỏi Thường Gặp</h2>
            <p className="text-xl text-slate-500">Những điều bạn có thể đang quan tâm về lộ trình tại Bình An Yoga.</p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="Tôi chưa từng tập Yoga bao giờ, có theo được không?"
              answer="Hoàn toàn được! Lộ trình tại Bình An được thiết kế từ cơ bản đến nâng cao. Với các gói phục hồi và PT 1:1, HLV sẽ điều chỉnh giáo án phù hợp nhất với biên độ vận động hiện tại của bạn."
            />
            <FAQItem 
              question="Yoga phục hồi khác gì với Yoga thông thường?"
              answer="Yoga phục hồi tập trung vào việc giải tỏa tắc nghẽn, hỗ trợ hệ thần kinh và phục hồi các tổn thương cơ xương khớp. Chúng tôi sử dụng nhiều dụng cụ hỗ trợ và giữ thế lâu hơn để tác động sâu vào các mô liên kết."
            />
            <FAQItem 
              question="Tại sao cần tư vấn dinh dưỡng kèm theo?"
              answer="Sức khỏe đến từ 70% dinh dưỡng và 30% tập luyện. Để phục hồi thực sự, cơ thể cần nguyên liệu đúng để tái tạo tế bào. HLV Khánh Linh sẽ giúp bạn thiết kế thực đơn khoa học mà vẫn ngon miệng."
            />
            <FAQItem 
              question="Việc phục hồi sau phẫu thuật bằng Yoga có thực sự an toàn?"
              answer="An toàn là ưu tiên số 1. Gói phục hồi cao cấp được xây dựng trên sự kết hợp giữa kiến thức khoa học sức khỏe và Yoga trị liệu. Lộ trình được giám sát chặt chẽ bởi chuyên gia để đảm bảo phù hợp với tiến độ hồi phục chức năng vận động của từng người."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900">
          <img 
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=2000" 
            alt="Yoga background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-900/90 to-emerald-800/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-10 italic font-serif text-white leading-tight">
              Bắt đầu hành trình <br/> <span className="text-emerald-300">Bình An</span> ngay hôm nay
            </h2>
            <p className="text-2xl text-emerald-100/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Đừng để những cơn đau hay sự mệt mỏi cản trở cuộc sống của bạn. Hãy để chúng tôi đồng hành cùng bạn trên con đường tìm lại sức khỏe.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:0946000989" className="px-12 py-6 bg-white text-emerald-900 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all shadow-2xl flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                Gọi ngay: 0946000989
              </a>
              <a href="https://zalo.me/0946000989" target="_blank" className="px-12 py-6 bg-emerald-600 text-white border border-emerald-500 rounded-2xl font-bold text-xl hover:bg-emerald-500 transition-all shadow-2xl flex items-center justify-center gap-3">
                Nhắn tin qua Zalo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src="https://lh3.googleusercontent.com/d/18u5lXe4tQAmRLvQ2Fq6WvJmH8fkZQ8px" 
                  alt="Bình An Yoga Logo" 
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-800"
                  referrerPolicy="no-referrer"
                />
                <div className="text-4xl font-bold text-white font-serif italic tracking-tight">Bình An Yoga</div>
              </div>
              <p className="text-slate-400 text-xl leading-relaxed max-w-md mb-10">
                Nơi hội tụ của kiến thức khoa học sức khỏe và sự tận tâm trong từng hơi thở Yoga.
              </p>
              <div className="flex gap-6">
                <a href="https://facebook.com/BinhAnWellness" target="_blank" className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition-colors">
                  <Facebook className="w-7 h-7" />
                </a>
                <a href="https://youtube.com/@BinhAnWellness" target="_blank" className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition-colors">
                  <Youtube className="w-7 h-7" />
                </a>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-bold mb-8 font-serif text-emerald-400">Thông tin liên hệ</h4>
                <ul className="space-y-6 text-slate-300">
                  <li className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">0946000989</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">ngklinh2606@gmail.com</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">61-63 Cách mạng tháng Tám - Hương Trà - Thành phố Huế</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-8 font-serif text-emerald-400">Giờ làm việc</h4>
                <ul className="space-y-4 text-slate-300 text-lg">
                  <li className="flex justify-between">
                    <span>Thứ 2 - Thứ 7:</span>
                    <span className="text-white font-semibold">05:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Chủ nhật:</span>
                    <span className="text-white font-semibold">Nghỉ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-800 text-center text-slate-500 text-lg">
            <p>© {new Date().getFullYear()} Bình An Yoga. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
