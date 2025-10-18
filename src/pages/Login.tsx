import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { defaultAccount, getStoredAccount, setActiveAccount } from "@/lib/fake-auth";
import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState(defaultAccount.email);
  const [password, setPassword] = useState(defaultAccount.password);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const storedAccount = getStoredAccount();

    if (email.trim() === storedAccount.email && password === storedAccount.password) {
      setActiveAccount(storedAccount);
      toast({
        title: "Đăng nhập thành công",
        description: "Chào mừng bạn trở lại InBlue Interview!",
      });
      navigate("/overview");
      return;
    }

    toast({
      variant: "destructive",
      title: "Thông tin không chính xác",
      description: "Vui lòng kiểm tra lại email và mật khẩu.",
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-[582px]">
          {/* Title */}
          <h1 style={{ fontFamily: "Markazi Text, serif" }} className="text-center text-indigo-600 text-5xl font-semibold mb-6">
            Đăng nhập
          </h1>

          {/* Subtitle */}
          <p style={{ fontFamily: "Markazi Text, serif" }} className="text-center text-black/70 text-2xl font-normal mb-8">
            Chào mừng quay trở lại. Vui lòng điền thông tin đăng nhập
          </p>

          <p className="mb-6 text-center text-base text-gray-500">
            Tài khoản demo: <span className="font-semibold text-indigo-600">{`${defaultAccount.email}`}</span> /{" "}
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

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label style={{ fontFamily: "Markazi Text, serif" }} className="block text-black text-3xl font-medium mb-2">
                Email
              </label>
              <Input type="email" placeholder="Nhập email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </div>

            {/* Password Field */}
            <div>
              <label style={{ fontFamily: "Markazi Text, serif" }} className="block text-black text-3xl font-medium mb-2">
                Mật khẩu
              </label>
              <Input type="password" placeholder="Nhập mật khẩu" value={password} onChange={(event) => setPassword(event.target.value)} required />
            </div>

            {/* Forgot Password Link */}
            <div className="text-left">
              <button
                type="button"
                style={{ fontFamily: "Markazi Text, serif" }}
                className="text-violet-600 text-2xl font-normal hover:underline"
                onClick={() =>
                  toast({
                    title: "Chức năng đang phát triển",
                    description: "Vui lòng thử lại sau bạn nhé!",
                  })
                }
              >
                Quên mật khẩu?
              </button>
            </div>

            {/* Login Button */}
            <Button type="submit" variant="loginGradient" size="input" className="w-full">
              <span style={{ fontFamily: "Markazi Text, serif" }} className="text-3xl font-normal">
                Đăng nhập
              </span>
            </Button>
          </form>

          {/* Sign Up Link */}
          <p style={{ fontFamily: "Markazi Text, serif" }} className="text-center text-2xl mt-6">
            <span className="text-black font-normal">Bạn có tài khoản chưa? </span>
            <Link to="/signup" className="text-indigo-600 font-normal hover:underline cursor-pointer">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
