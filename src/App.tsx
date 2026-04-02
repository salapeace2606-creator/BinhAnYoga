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
    whileHover={{ y: -10 }}
    className={`p-8 rounded-3xl shadow-sm border flex flex-col h-full transition-all duration-300 ${
      isFeatured 
        ? 'bg-emerald-900 border-emerald-800 text-white shadow-xl lg:scale-105 relative overflow-hidden' 
        : 'bg-white border-stone-200 text-stone-900'
    }`}
  >
    {isFeatured && (
      <div className="absolute top-0 right-0 bg-amber-400 text-stone-900 px-4 py-1 font-bold text-xs rounded-bl-xl uppercase tracking-tighter">
        Phổ biến nhất
      </div>
    )}
    <div className="mb-6">
      <h3 className={`text-2xl font-bold mb-2 ${isFeatured ? 'text-white' : 'text-stone-900'}`}>{title}</h3>
      <p className={isFeatured ? 'text-emerald-300 italic' : 'text-stone-500'}>{subtitle}</p>
    </div>
    <div className={`text-4xl font-bold mb-6 ${isFeatured ? 'text-white' : 'text-emerald-800'}`}>
      {price}<span className={`text-sm font-normal ${isFeatured ? 'text-emerald-400' : 'text-stone-400'}`}> /tháng</span>
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature: string, idx: number) => (
        <li key={idx} className="flex items-start space-x-3">
          <Check className={`w-5 h-5 mt-1 flex-shrink-0 ${isFeatured ? 'text-amber-400' : 'text-emerald-500'}`} />
          <span className={isFeatured ? 'text-emerald-100' : 'text-stone-600'}>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-xl font-bold transition-all duration-200 ${
      isFeatured 
        ? 'bg-amber-400 text-stone-900 hover:bg-amber-300 shadow-lg' 
        : 'border-2 border-stone-200 hover:bg-stone-50'
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
    <div className="font-sans bg-stone-50 text-stone-800">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <img 
                src="https://drive.google.com/uc?export=view&id=1RQURzX869pkZ8PqUwoEMljO6KqR44Afj" 
                alt="Bình An Yoga Logo" 
                className="w-12 h-12 rounded-lg object-cover border border-emerald-100"
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-bold text-emerald-800 font-serif italic">Bình An Yoga</span>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[linear-gradient(135deg,#fdfcfb_0%,#e2d1c3_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-4 uppercase tracking-wider">
                Yoga Phục Hồi & Sức Khỏe
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-stone-900 font-serif">
                Chữa Lành Thân Tâm, <br/><span className="text-emerald-700 italic">Tái Tạo Năng Lượng</span>
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Lộ trình chăm sóc sức khỏe chuyên sâu kết hợp Yoga phục hồi và tư vấn dinh dưỡng cá nhân hóa, dựa trên <strong>kiến thức khoa học sức khỏe</strong> thực thụ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="px-8 py-4 bg-emerald-700 text-white rounded-xl text-center font-bold text-lg hover:shadow-xl transition shadow-emerald-700/30">
                  Xem các gói tập
                </a>
                <a href="#contact" className="px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-700 rounded-xl text-center font-bold text-lg hover:bg-stone-50 transition">
                  Liên hệ ngay
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-full bg-emerald-200/50 absolute -top-10 -right-10 w-64 h-64 blur-3xl"></div>
              <div className="bg-stone-200 rounded-3xl h-[500px] w-full overflow-hidden shadow-2xl relative border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Yoga Practice" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white">
                  <p className="text-stone-800 italic font-medium">"Tôi giúp bạn giải tỏa tắc nghẽn và tìm lại sự cân bằng bền vững."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-bold mb-6 text-stone-900 leading-tight font-serif">
                Chuyên gia của bạn<br/><span className="text-emerald-700">Nguyễn Thị Khánh Linh</span>
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed italic">Yoga Trainer – Health Coach Pro</p>
              <ul className="space-y-4 mb-8">
                {[
                  "Chứng chỉ Huấn luyện viên Yoga quốc tế 200h",
                  "Chứng chỉ HLV Sức khỏe chuyên nghiệp - Bộ Y Tế công nhận",
                  "Chuyên sâu về Yoga phục hồi & Trị liệu tư thế"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-stone-700">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-stone-50 rounded-2xl border-l-4 border-emerald-700">
                <p className="text-stone-700 italic">
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
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
                <div className="absolute inset-0 border-2 border-emerald-700 translate-x-4 translate-y-4 rounded-2xl"></div>
                <div className="absolute inset-0 bg-stone-300 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://drive.google.com/uc?export=view&id=1emDUTuzWCOtMDrYCdWx1E_MfNQWsmL58" 
                    alt="HLV Khanh Linh" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">Yoga Cân Bằng & Phục Hồi</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Dành cho những người muốn duy trì sức khỏe bền bỉ, giảm stress và trị liệu các vấn đề cơ bản.</p>
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
            className="mt-20 bg-emerald-50 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 border border-emerald-100"
          >
            <div className="md:w-1/2">
              <span className="text-emerald-700 font-bold text-sm uppercase tracking-widest">Dành cho thế hệ tương lai</span>
              <h2 className="text-3xl font-bold mt-2 mb-4 font-serif">Yoga Kids – Ươm Mầm Sức Khỏe</h2>
              <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                Phát triển chiều cao, sự tập trung và điềm tĩnh thông qua các bài tập mô phỏng tự nhiên, kết hợp kể chuyện và thiền giúp trẻ kết nối với bản thân.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-2xl font-bold text-emerald-800">200.000đ<span className="text-sm text-stone-400 font-normal"> /tháng</span></div>
                <div className="text-stone-500 border-l border-stone-300 pl-6">2 buổi /tuần</div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="h-48 bg-stone-200 rounded-2xl overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="h-48 bg-stone-200 rounded-2xl overflow-hidden shadow-md translate-y-6">
                <img src="https://images.unsplash.com/photo-1552196564-972b222165a4?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Services */}
      <section id="premium" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Gói chuyên sâu</span>
            <h2 className="text-5xl font-bold mt-4 font-serif">Premium Therapy</h2>
            <p className="text-stone-500 mt-4 max-w-2xl mx-auto">Sự giám sát từ chuyên gia với lộ trình thiết kế dựa trên kiến thức khoa học sức khỏe.</p>
          </div>

          <div className="space-y-12">
            {/* Premium 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-stone-50 p-8 rounded-[3rem] border border-stone-100 flex flex-col lg:flex-row items-center gap-12 transition hover:bg-stone-100"
            >
              <div className="lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-4 font-serif">PT 1:1 - Thiết kế riêng</h3>
                <p className="text-stone-600 mb-6 italic text-lg">"Lộ trình xây dựng dựa trên chính thể trạng của bạn."</p>
                <div className="text-4xl font-bold text-emerald-800">300.000đ<span className="text-lg text-stone-400 font-normal"> /giờ</span></div>
              </div>
              <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <h4 className="font-bold text-emerald-700 mb-2">Cá nhân hóa tuyệt đối</h4>
                  <p className="text-sm text-stone-500">Giảm cân, sửa tư thế, hoặc giảm đau mỏi theo nhu cầu cụ thể của từng cá nhân.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <h4 className="font-bold text-emerald-700 mb-2">Chỉnh sửa từng milimet</h4>
                  <p className="text-sm text-stone-500">Đảm bảo an toàn và đạt kết quả nhanh chóng hơn so với tập luyện đại trà.</p>
                </div>
              </div>
            </motion.div>

            {/* Premium 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-stone-900 p-8 lg:p-12 rounded-[3rem] flex flex-col lg:flex-row items-center gap-12 text-white relative"
            >
              <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full mb-4">Combo Toàn Diện</div>
                <h3 className="text-4xl font-bold mb-6 italic font-serif leading-tight">Quản lý Cân nặng & Chăm sóc Chủ động</h3>
                <p className="text-stone-400 text-lg mb-8">Sự kết hợp giữa chế độ tập luyện và thực đơn dinh dưỡng cá nhân hóa. Đồng hành mỗi ngày để đạt mục tiêu vóc dáng bền vững.</p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="px-4 py-2 bg-stone-800 rounded-full text-sm">📅 Đồng hành hàng ngày</span>
                  <span className="px-4 py-2 bg-stone-800 rounded-full text-sm">🥗 Dinh dưỡng cá nhân</span>
                  <span className="px-4 py-2 bg-stone-800 rounded-full text-sm">💪 Hỗ trợ tập luyện</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-3xl font-bold">3.000.000đ<span className="text-sm font-normal text-stone-500"> /tháng</span></div>
                  <div className="text-amber-400 text-sm font-bold bg-amber-400/10 px-4 py-2 rounded-lg border border-amber-400/30 flex items-center gap-2">
                    <Star className="w-4 h-4 fill-amber-400" /> Tặng Khóa "24h Tỉnh Thức"
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-3xl overflow-hidden border-4 border-stone-800 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>

            {/* Premium 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-emerald-50 p-8 rounded-[3rem] border border-emerald-100 flex flex-col lg:flex-row items-center gap-12 transition"
            >
              <div className="lg:w-2/5 order-2 lg:order-1">
                <div className="rounded-3xl overflow-hidden h-96 shadow-xl">
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="lg:w-3/5 order-1 lg:order-2">
                <span className="text-emerald-700 font-bold uppercase tracking-tighter text-sm italic">Cấp độ cao nhất</span>
                <h3 className="text-4xl font-bold mt-2 mb-6 font-serif">Phục hồi Sức khỏe sau Chấn thương & Phẫu thuật</h3>
                <p className="text-stone-700 text-lg leading-relaxed mb-6">
                  Gói dịch vụ đặc biệt kết hợp giữa <strong>kiến thức khoa học sức khỏe</strong> và Yoga trị liệu. Đảm bảo an toàn tuyệt đối và đẩy nhanh tốc độ hồi phục chức năng vận động.
                </p>
                <div className="p-6 bg-white rounded-2xl border-l-8 border-emerald-700 mb-8 shadow-sm">
                  <p className="text-emerald-900 font-bold italic">"Lộ trình được thiết kế và giám sát bởi chuyên gia có chuyên môn khoa học sức khỏe."</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="text-5xl font-bold text-emerald-800">5.000.000đ<span className="text-lg text-stone-400 font-normal"> /tháng</span></div>
                  <button className="bg-emerald-700 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-800 transition shadow-xl shadow-emerald-700/20">Liên hệ Chuyên gia</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 italic font-serif">Khóa học "24h Tỉnh Thức"</h2>
              <p className="text-xl text-stone-400 mb-10 leading-relaxed">Xây dựng nền tảng tư duy đúng đắn về sức khỏe với 24 chủ đề chuyên sâu từ dinh dưỡng, quản lý giấc ngủ đến cảm xúc.</p>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Tư duy gốc rễ</h4>
                    <p className="text-stone-500">Giúp bạn trở thành người chăm sóc sức khỏe tốt nhất cho chính mình.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Áp dụng khoa học sức khỏe</h4>
                    <p className="text-stone-500">Dinh dưỡng đúng cách, quản lý giấc ngủ và làm chủ cảm xúc.</p>
                  </div>
                </div>
              </div>
              <div className="text-4xl font-bold mb-8">2.400.000đ<span className="text-lg text-stone-500 font-normal"> /khóa</span></div>
              <button className="bg-white text-stone-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-stone-200 transition">Tìm hiểu nội dung khóa học</button>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-square bg-emerald-900 rounded-3xl p-12 flex items-center justify-center border border-emerald-800/50 overflow-hidden group">
                <div className="text-center relative z-10">
                  <div className="text-8xl font-bold text-emerald-500 mb-4 group-hover:scale-110 transition duration-500">24</div>
                  <div className="text-3xl font-bold tracking-widest uppercase">Chủ đề chuyên sâu</div>
                  <div className="mt-8 px-6 py-2 bg-emerald-500 text-emerald-950 font-bold rounded-full text-sm inline-block uppercase">Health Coach Program</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "An Toàn & Khoa Học",
              desc: "Mọi bài tập đều dựa trên nền tảng khoa học sức khỏe, phù hợp với giới hạn của cơ thể."
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Chữa Lành & Tái Tạo",
              desc: "Giúp bạn giải tỏa tắc nghẽn, xoa dịu tâm trí và nạp lại năng lượng tự nhiên."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Đồng Hành Cá Nhân",
              desc: "Không chỉ là giáo viên, chúng tôi là người bạn đồng hành cùng sức khỏe của bạn."
            }
          ].map((val, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="text-center p-8 bg-white rounded-3xl shadow-sm border border-stone-100"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mx-auto mb-6">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{val.title}</h3>
              <p className="text-stone-500">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">Câu Hỏi Thường Gặp</h2>
            <p className="text-stone-500">Giải đáp những thắc mắc của bạn trước khi bắt đầu lộ trình.</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="Yoga phục hồi có khác gì so với Yoga thông thường không?"
              answer="Khác với các loại hình Yoga nặng về thể lực, Yoga phục hồi tại Bình An tập trung vào việc chữa lành, tái tạo năng lượng và giải tỏa các điểm tắc nghẽn trong cơ thể. Chúng tôi sử dụng các động tác nhẹ nhàng, kết hợp hơi thở để thư giãn hệ thần kinh, cực kỳ an toàn cho người mới bắt đầu hoặc người đang gặp vấn đề sức khỏe."
            />
            <FAQItem 
              question="Tại sao tôi nên chọn lớp Nhóm nhỏ (Semi-Private) thay vì lớp cộng đồng?"
              answer="Đây là gói dịch vụ có hiệu quả tối ưu nhất trên giá thành. Với sĩ số tối đa chỉ 5 người, giáo viên sẽ theo sát để chỉnh sửa từng kỹ thuật chuyên sâu, đảm bảo bạn tập đúng định tuyến và đạt kết quả trị liệu tốt nhất, gần như tập PT 1:1 nhưng với mức phí rất dễ tiếp cận."
            />
            <FAQItem 
              question="Tôi đang bị đau mỏi vai gáy và chưa từng tập Yoga, tôi nên bắt đầu từ đâu?"
              answer="Bạn nên bắt đầu với gói Yoga Phục Hồi Cơ Bản hoặc PT 1:1 để được thiết kế lộ trình riêng. HLV Khánh Linh sẽ dựa trên kiến thức khoa học sức khỏe để đưa ra các bài tập giúp giảm đau mỏi và sửa tư thế một cách từ từ, an toàn."
            />
            <FAQItem 
              question="Việc phục hồi sau phẫu thuật bằng Yoga có thực sự an toàn?"
              answer="An toàn là ưu tiên số 1. Gói phục hồi cao cấp được xây dựng trên sự kết hợp giữa kiến thức khoa học sức khỏe và Yoga trị liệu. Lộ trình được giám sát chặt chẽ bởi chuyên gia để đảm bảo phù hợp với tiến độ hồi phục chức năng vận động của từng người."
            />
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section id="contact" className="py-24 bg-[linear-gradient(135deg,#fdfcfb_0%,#e2d1c3_100%)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic font-serif">
              Bắt đầu hành trình <span className="text-emerald-700 underline decoration-emerald-200">Bình An</span> của bạn ngay hôm nay
            </h2>
            <p className="text-xl text-stone-600 mb-12">Đừng để những cơn đau mỏi hay áp lực cuộc sống cản trở bạn tận hưởng niềm vui trọn vẹn.</p>
            
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-stone-200 text-left">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-600 ml-1">Họ và tên</label>
                  <input type="text" placeholder="Nguyễn Văn A" className="w-full px-6 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-600 ml-1">Số điện thoại</label>
                  <input type="tel" placeholder="090x xxx xxx" className="w-full px-6 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <label className="text-sm font-bold text-stone-600 ml-1">Vấn đề sức khỏe bạn đang gặp phải...</label>
                <textarea rows={4} placeholder="Ví dụ: Đau mỏi vai gáy, mất ngủ, muốn giảm cân..." className="w-full px-6 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"></textarea>
              </div>
              <button className="w-full py-5 bg-emerald-700 text-white rounded-2xl font-bold text-xl hover:bg-emerald-800 transition shadow-xl shadow-emerald-700/20 uppercase tracking-widest flex items-center justify-center gap-3">
                Gửi yêu cầu tư vấn miễn phí <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 py-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-6">
            <img 
              src="https://drive.google.com/uc?export=view&id=1RQURzX869pkZ8PqUwoEMljO6KqR44Afj" 
              alt="Bình An Yoga Logo" 
              className="w-16 h-16 rounded-xl object-cover border border-stone-200 mb-4"
              referrerPolicy="no-referrer"
            />
            <div className="text-3xl font-bold text-emerald-800 font-serif italic">Bình An Yoga</div>
          </div>
          <p className="text-stone-500 mb-2">Huấn luyện viên Nguyễn Thị Khánh Linh - Health Coach Pro</p>
          <p className="text-stone-500 mb-8 flex items-center justify-center gap-2">
            <span className="font-medium">Địa chỉ:</span> 61-63 Cách mạng tháng Tám - Hương Trà - Thành phố Huế
          </p>
          <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 mb-12">
            <a href="https://facebook.com/BinhAnWellness" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-emerald-700 transition-colors flex items-center gap-2">
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            <a href="https://youtube.com/@BinhAnWellness" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-emerald-700 transition-colors flex items-center gap-2">
              <Youtube className="w-4 h-4" />
              <span>Youtube</span>
            </a>
            <a href="mailto:ngklinh2606@gmail.com" className="text-stone-400 hover:text-emerald-700 transition-colors flex items-center gap-2">
              <span>Email: ngklinh2606@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-stone-400">
              <Phone className="w-4 h-4" />
              <span>SĐT/Zalo: 0946000989</span>
            </div>
          </div>
          <div className="text-sm text-stone-400">
            © 2024 Bình An Yoga. All rights reserved. Designed with love and health science.
          </div>
        </div>
      </footer>
    </div>
  );
}
