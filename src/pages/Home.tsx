import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Building2, ClipboardList, Cpu, Megaphone, Palette, Star } from "lucide-react";

export default function Home() {
  const featuredRoles = [
    { icon: Building2, title: "Kỹ sư phần\nmềm" },
    { icon: Cpu, title: "Nhà khoa học\ndữ liệu" },
    { icon: Megaphone, title: "Marketing" },
    { icon: ClipboardList, title: "Giám đốc\nsản phẩm" },
    { icon: Palette, title: "Thiết kế\nUI/UX" },
    { icon: BarChart3, title: "Phân tích\nTài chính" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-hero-gradient py-12 lg:py-20">
        <div className="max-w-[1728px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full border border-[#B9AFFF] bg-white/50 backdrop-blur-sm">
                <p className="font-display text-base lg:text-lg font-bold text-[#141414]">
                  Hơn 30.000 lời mời nhận được | Hơn 160.000 cuộc phỏng vấn thành công
                </p>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#6C65CD] via-[#4A44AE] to-[#29228F] bg-clip-text text-transparent">
                Phỏng vấn Ace với
                <br />
                <span className="bg-gradient-to-r from-[#6C65CD] to-[#29228F] bg-clip-text text-transparent">Chuyên gia AI</span>
              </h1>

              <p className="font-display text-base lg:text-lg font-semibold text-gray-500 max-w-md">
                Chuẩn bị thông minh với các câu hỏi phỏng vấn thực tế, hình đại diện AI chân thực và phản hồi hữu ích, được hỗ trợ bởi các mô hình AI
                do các nhà nghiên cứu Stanford đào tạo.
              </p>

              <Button className="bg-brand-purple text-white font-display text-base font-semibold px-8 py-6 rounded-full hover:bg-brand-purple/90 shadow-lg">
                Hãy thử một cuộc phỏng vấn thử miễn phí ngay bây giờ
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a9c419db9d434b46a5c7876771c14a3aab958a5d?width=1490"
                alt="AI Interview"
                className="w-full h-auto rounded-2xl opacity-80 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-[#F1F8FE] to-[#E4E8FF] py-12 lg:py-20">
        <div className="max-w-[1711px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-12">
            {featuredRoles.map(({ icon: Icon, title }, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
              >
                <Icon className="h-10 w-10 text-brand-purple" aria-hidden="true" />
                <p className="font-heading text-sm lg:text-base font-bold text-[#141414] text-center whitespace-pre-line">{title}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3">
            <span className="font-heading text-base font-bold text-[#141414]">
              Xem tất cả
              <br />
              vai trò
            </span>
            <ArrowRight className="w-6 h-6 text-[#141414]" />
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="bg-gradient-to-b from-[#F6FAFF] to-[#FDFDFD] py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-heading text-lg font-semibold text-center text-[#030712] mb-8">
            Hơn 1000 câu hỏi phỏng vấn thực tế - Từ hơn 530 công ty và công ty khởi nghiệp hàng đầu!
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6d755dd8e522905b9d87ead988c9ca329e4ed474?width=367"
              alt="Tesla"
              className="h-8 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f32bd37111ef0fdc600faa7fd1566a5e4e1f2fbc?width=226"
              alt="Google"
              className="h-8 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/329cd47ee58f0baa85541a23b3d2ef56bd87dfd8?width=390"
              alt="OpenAI"
              className="h-8 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/afb097f0df03f5d756a868f304a62694fe047398?width=331"
              alt="Microsoft"
              className="h-8 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/32e6157b53285c0bc3cdfe5470d2b59992f68c11?width=298"
              alt="Adobe"
              className="h-8 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/963cd8c658c8b55a5e1d049574c9edc2585c5a14?width=432"
              alt="Bloomberg"
              className="h-8 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <Star className="w-9 h-9 text-yellow-400 mx-auto mb-4" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold bg-purple-gradient bg-clip-text text-transparent mb-8">
              Nhận được lời mời làm việc mơ ước nhanh hơn gấp 3,5 lần
              <br />
              với INBLUE Interview
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: "3,000+", label: "Lời đề nghị" },
              { value: "Tiết kiệm 70%", label: "Chi phí huấn luyện" },
              { value: "90% Độ chính xác", label: "AI Phản hồi tức thì" },
              { value: "24/7 Truy cập", label: "Với hỗ trợ khách hàng" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="font-display text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#9867FF] via-[#B5C0F8] to-[#005DFF] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="font-display text-base lg:text-lg text-[#030712]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1276px] mx-auto px-6 lg:px-12 space-y-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2fb909dbd6897be00746f14d23b017c594023caa?width=1382"
                  alt="Mock Interview"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="font-display text-lg font-semibold text-brand-purple">Phỏng vấn mô phỏng AI</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#141414]">Trải nghiệm cá nhân hóa</h2>
              <p className="font-display text-base text-black">
                Điều chỉnh buổi phỏng vấn sao cho phù hợp với hoàn cảnh và nhu cầu của bạn. Mô phỏng với hình đại diện AI tiên tiến để có một buổi
                phỏng vấn chân thực như thật.
              </p>
              <Button className="bg-button-gradient text-white font-display text-base font-semibold px-8 py-6 rounded-full hover:opacity-90">
                Bắt đầu một cuộc phỏng vấn thử
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <p className="font-display text-lg font-semibold text-brand-purple">Câu hỏi xu hướng</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#141414]">Làm chủ các câu hỏi thực tế</h2>
              <p className="font-display text-base text-black">
                Khám phá những câu hỏi phỏng vấn thực tế mà các công ty hàng đầu thường hỏi. Nhận câu trả lời do AI tạo ra, phù hợp với thành công của
                bạn.
              </p>
              <Button className="bg-button-gradient text-white font-display text-base font-semibold px-8 py-6 rounded-full hover:opacity-90">
                Bắt đầu luyện tập ngay
              </Button>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/01d89bbee9cad7b3d8e6e07cc83c262b496fbac4?width=1050"
                alt="Questions"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3f2e82ed534d9d4fb5b91861eef698aa78a69e8e?width=1048"
                alt="LinkedIn Integration"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <p className="font-display text-lg font-semibold text-brand-purple">Tích hợp với LinkedIn</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#141414]">Thực hành từ LinkedIn</h2>
              <p className="font-display text-base text-black">
                Bắt đầu buổi phỏng vấn thử của bạn từ một bài đăng tuyển dụng trên LinkedIn. Phân tích sở thích của người phỏng vấn để điều chỉnh câu
                trả lời.
              </p>
              <Button className="bg-button-gradient text-white font-display text-base font-semibold px-8 py-6 rounded-full hover:opacity-90">
                Thử ngay
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Modes Section */}
      <section className="bg-gray-50/30 py-12 lg:py-20">
        <div className="max-w-[1656px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-display text-2xl lg:text-4xl font-semibold text-brand-purple mb-4">Luyện tập theo cách của bạn</p>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-black mb-6">Chọn phong cách phỏng vấn của bạn</h2>
            <p className="font-manjari text-xl lg:text-3xl text-black/60 max-w-5xl mx-auto">
              Thực hành phỏng vấn theo cách phù hợp nhất với bạn. Tất cả các chế độ đều cung cấp phản hồi chất lượng và chấm điểm cá nhân hóa như
              nhau.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-3xl border border-gray-200 p-8 space-y-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/876453e158a5d460a1ec402f3314554351f4e499?width=216"
                alt="Text Mode"
                className="w-24 h-20 rounded-2xl"
              />
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-black">Chế độ văn bản</h3>
              <p className="font-display text-lg lg:text-xl text-black leading-relaxed">
                Hoàn hảo để tạo ra những câu trả lời chu đáo và có cấu trúc tốt. Hãy dành thời gian để phát triển những câu trả lời hấp dẫn bằng cách
                sử dụng các khuôn khổ đã được chứng minh.
                <br />
                <br />
                • Tạo ra những câu trả lời hoàn hảo
                <br />
                • Làm chủ các khuôn khổ đã được chứng minh
                <br />• Xây dựng niềm tin có hệ thống
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-8 space-y-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a9f3c29553d5ca0a28131152436cf68e6c391b4a?width=197"
                alt="Voice Mode"
                className="w-24 h-20 rounded-2xl"
              />
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-black">Chế độ giọng nói</h3>
              <p className="font-display text-lg lg:text-xl text-black leading-relaxed">
                Luyện tập nói to câu trả lời để nắm vững cách truyền đạt, giọng điệu và nhịp độ. Vượt qua nỗi lo lắng khi nói và tự tin hơn.
                <br />
                <br />
                • Hoàn thiện cách truyền đạt và giọng điệu của bạn
                <br />
                • Vượt qua nỗi lo lắng khi nói
                <br />• Luyện tập thời gian thực tế
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-8 space-y-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/876453e158a5d460a1ec402f3314554351f4e499?width=216"
                alt="Conversation Mode"
                className="w-24 h-20 rounded-2xl"
              />
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-black">Chế độ cuộc hội thoại</h3>
              <p className="font-display text-lg lg:text-xl text-black leading-relaxed">
                Trải nghiệm phỏng vấn chân thực nhất hiện có. Tham gia vào các cuộc trò chuyện năng động, tương tác với AI, có khả năng thích ứng như
                người phỏng vấn thực sự.
                <br />
                <br />
                • Trải nghiệm thực tế nhất
                <br />
                • Xử lý các câu hỏi bất ngờ
                <br />• Xây dựng kỹ năng tư duy nhanh
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <ArrowRight className="w-16 h-16 text-[#1E1E1E]" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-sans text-3xl lg:text-5xl font-bold text-black text-center mb-12">Mọi người nói gì về chúng tôi</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gradient-to-b from-[#FBFDFF]/80 to-[#E0F1FF]/80 rounded-3xl p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#FBD6E3] flex items-center justify-center text-2xl">👤</div>
                  <div className="flex-1">
                    <h4 className="font-inknut text-lg font-bold text-[#030712] mb-2">Nguyễn Phạm Thu Hà</h4>
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#030712]/70 font-sans text-lg">Software Engineering</p>
                <p className="text-black font-sans text-lg leading-relaxed">
                  I always felt confident about coding, but behavioral questions were a different story. AMA Interview helped me practice clear,
                  impactful answers using the STAR method. It gave me the confidence to handle even the toughest behavioral rounds.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
