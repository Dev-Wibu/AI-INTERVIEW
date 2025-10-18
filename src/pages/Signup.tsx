import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { defaultAccount, setActiveAccount, setStoredAccount } from "@/lib/fake-auth";
import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!agreed) {
      toast({
        variant: "destructive",
        title: "Bạn chưa đồng ý điều khoản",
        description: "Vui lòng đồng ý với điều khoản sử dụng trước khi tiếp tục.",
      });
      return;
    }

    if (!fullName || !email || !password) {
      toast({
        variant: "destructive",
        title: "Thông tin chưa đầy đủ",
        description: "Vui lòng hoàn tất các trường cần thiết để tiếp tục.",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Mật khẩu không khớp",
        description: "Vui lòng kiểm tra lại mật khẩu xác nhận.",
      });
      return;
    }

    const account = {
      email,
      password,
      fullName,
      phone,
      dob,
    };

    setStoredAccount(account);
    setActiveAccount(account);

    toast({
      title: "Đăng ký thành công",
      description: "Bạn đã sẵn sàng khám phá InBlue Interview!",
    });

    navigate("/overview");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-[720px]">
          {/* Title */}
          <h1 style={{ fontFamily: "Markazi Text, serif" }} className="text-center text-indigo-600 text-5xl font-semibold mb-6">
            Đăng ký
          </h1>

          {/* Subtitle */}
          <p style={{ fontFamily: "Markazi Text, serif" }} className="text-center text-black/70 text-2xl font-normal mb-8">
            Chào mừng đến với InBlue. Vui lòng điền thông tin
          </p>

          <p className="mb-6 text-center text-base text-gray-500">
            Bạn có thể dùng thử tài khoản demo: <span className="font-semibold text-indigo-600">{`${defaultAccount.email}`}</span> /{" "}
            <span className="font-semibold text-indigo-600">{defaultAccount.password}</span>
          </p>

          {/* Google Sign In Button */}
          <button className="w-full h-16 rounded-[20px] border border-black/40 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 mb-8">
            <img
              src="https://c8.alamy.com/comp/2H3EJRX/google-logo-icon-isolated-on-white-background-vector-editorial-illustration-vinnisia-ukraine-january-27-2021-2H3EJRX.jpg"
              alt="Google"
              className="w-8 h-8"
            />
            <span style={{ fontFamily: "Markazi Text, serif" }} className="text-black text-3xl font-medium">
              Tiếp tục với Google
            </span>
          </button>

          <form onSubmit={handleSubmit} className="bg-white/40 rounded-[30px] border border-black/60 p-8 space-y-6">
            {/* Full Name Field */}
            <div>
              <label style={{ fontFamily: "Markazi Text, serif" }} className="block text-black/60 text-3xl font-medium mb-2">
                Họ và tên
              </label>
              <Input placeholder="Nhập họ và tên" value={fullName} onChange={(event) => setFullName(event.target.value)} required />
            </div>

            {/* Email Field */}
            <div>
              <label style={{ fontFamily: "Markazi Text, serif" }} className="block text-black/60 text-3xl font-medium mb-2">
                Email
              </label>
              <Input type="email" placeholder="Nhập email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </div>

            {/* Phone Field */}
            <div>
              <label style={{ fontFamily: "Markazi Text, serif" }} className="block text-black/60 text-3xl font-medium mb-2">
                Số điện thoại
              </label>
              <Input type="tel" placeholder="Nhập số điện thoại" value={phone} onChange={(event) => setPhone(event.target.value)} />
            </div>

            {/* Date of Birth Field */}
            <div>
              <label style={{ fontFamily: "Markazi Text, serif" }} className="block text-black/60 text-3xl font-medium mb-2">
                Ngày sinh
              </label>
              <Input type="date" value={dob} onChange={(event) => setDob(event.target.value)} />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Password Field */}
              <div>
                <label style={{ fontFamily: "Markazi Text, serif" }} className="block text-black/60 text-3xl font-medium mb-2">
                  Mật khẩu
                </label>
                <Input type="password" placeholder="Tạo mật khẩu" value={password} onChange={(event) => setPassword(event.target.value)} required />
              </div>

              {/* Confirm Password Field */}
              <div>
                <label style={{ fontFamily: "Markazi Text, serif" }} className="block text-black/60 text-3xl font-medium mb-2">
                  Xác nhận mật khẩu
                </label>
                <Input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <Checkbox id="agreement" className="mt-2 h-5 w-5" checked={agreed} onCheckedChange={(checked) => setAgreed(Boolean(checked))} />
              <label htmlFor="agreement" style={{ fontFamily: "Markazi Text, serif" }} className="text-black/60 text-2xl font-medium leading-relaxed">
                Tôi đồng ý với các điều khoản của InBlue
              </label>
            </div>

            {/* Sign Up Button */}
            <Button type="submit" variant="loginGradient" size="input" className="w-full">
              <span style={{ fontFamily: "Markazi Text, serif" }} className="text-3xl font-normal">
                Đăng ký
              </span>
            </Button>
          </form>

          {/* Login Link */}
          <p style={{ fontFamily: "Markazi Text, serif" }} className="text-center text-2xl mt-8">
            <span className="text-black font-normal">Bạn đã có tài khoản ? </span>
            <Link to="/login" className="text-indigo-600 font-normal hover:underline cursor-pointer">
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
