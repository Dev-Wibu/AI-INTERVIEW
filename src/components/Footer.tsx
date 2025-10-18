import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer-gradient py-12 lg:py-16">
      <div className="max-w-[1656px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-[#141414] mb-4">
              InBlue Interview
            </h3>
            <p className="font-display text-base font-semibold text-[#6F6C90] mb-6">
              Nền tảng chuẩn bị cho phỏng vấn
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#473BF5] hover:text-[#473BF5]/80 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#473BF5] hover:text-[#473BF5]/80 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#473BF5] hover:text-[#473BF5]/80 transition-colors">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/d2c9e82a1b10da55b564d688cffdf53df0d959f1?width=40" alt="Discord" className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#473BF5] hover:text-[#473BF5]/80 transition-colors">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/c1978c4d8f3ec589a278dad5e51a8774a0da20a7?width=40" alt="TikTok" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold text-[#170F49] mb-6">
              Product
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="font-display text-sm font-semibold text-[#6F6C90] hover:text-brand-purple transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="font-display text-sm font-semibold text-[#6F6C90] hover:text-brand-purple transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="font-display text-sm font-semibold text-[#6F6C90] hover:text-brand-purple transition-colors">
                  Questions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold text-[#170F49] mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="font-display text-sm font-semibold text-[#6F6C90] hover:text-brand-purple transition-colors">
                  Interview Guides
                </a>
              </li>
              <li>
                <a href="#" className="font-display text-sm font-semibold text-[#6F6C90] hover:text-brand-purple transition-colors">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold text-[#170F49] mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="font-display text-sm font-semibold text-[#6F6C90] hover:text-brand-purple transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="font-display text-sm font-semibold text-[#6F6C90] hover:text-brand-purple transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-display text-sm font-semibold text-[#6F6C90]">
              Copyright © 2025 INLUE AI
            </p>
            <p className="font-display text-sm font-semibold text-[#6F6C90]">
              All Rights Reserved | 
              <a href="#" className="text-[#5449F0] hover:underline ml-1">Terms and Conditions</a> | 
              <a href="#" className="text-[#5449F0] hover:underline ml-1">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
