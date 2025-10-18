import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-header-gradient border-b border-gray-100">
      <div className="max-w-[1656px] mx-auto px-4 py-6 lg:py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <Link to="/" className="flex items-center gap-3 transition hover:opacity-80">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6461b0439a6134fa7a501a5565813acd5d9e7286?width=318"
                alt="INBLUE Logo"
                className="h-16 lg:h-20 w-auto"
              />
              <span className="font-family-orelega text-lg lg:text-2xl text-[#2B34B0] font-normal">AI INTERVIEW</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <button className="flex items-center gap-2 text-[#141414] font-heading text-lg lg:text-xl hover:text-brand-purple transition-colors">
                Câu hỏi
                <ChevronDown className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 text-[#141414] font-heading text-lg lg:text-xl hover:text-brand-purple transition-colors">
                Tính năng
                <ChevronDown className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 text-[#141414] font-heading text-lg lg:text-xl hover:text-brand-purple transition-colors">
                Tài nguyên
                <ChevronDown className="w-5 h-5" />
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
            <Button
              asChild
              variant="outline"
              className="hidden md:flex border border-gray-300 bg-white text-[#141414] font-heading text-lg lg:text-2xl px-6 lg:px-8 py-4 lg:py-6 rounded-2xl hover:bg-gray-50"
            >
              <Link to="/login">Đăng nhập</Link>
            </Button>
            <Button
              asChild
              className="bg-brand-purple text-white font-heading text-base lg:text-xl px-4 lg:px-8 py-4 lg:py-6 rounded-2xl hover:bg-brand-purple/90 shadow-md"
            >
              <Link to="/signup">Bắt đầu miễn phí</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
