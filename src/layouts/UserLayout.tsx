import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getActiveAccount, resetToDefaultAccount } from "@/lib/fake-auth";
import { Brain, ChartPie, ClipboardList, LogOut, MessageSquare, Settings, Sparkles } from "lucide-react";
import { type PropsWithChildren, useMemo } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const sidebarItems = [
  { label: "Tổng quan", icon: Sparkles, to: "/overview" },
  { label: "Phỏng vấn giả lập", icon: ClipboardList, to: "/mock-interview" },
  { label: "Phỏng vấn với AI", icon: Brain, to: "/ai-interview" },
  { label: "AI Chat", icon: MessageSquare, to: "/ai-chat" },
  { label: "Bộ câu hỏi", icon: ChartPie, to: "/question" },
  { label: "Tài khoản", icon: Settings },
  { label: "Đăng xuất", icon: LogOut, action: "logout" as const },
];

type UserLayoutProps = PropsWithChildren;

export default function UserLayout({ children }: UserLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const account = useMemo(() => getActiveAccount(), []);
  const content = children ?? <Outlet />;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <div className="flex-1">
        <div className="mx-auto flex max-w-[1680px] gap-6 px-4 py-8 md:px-8">
          <aside className="hidden w-72 shrink-0 rounded-3xl bg-white p-6 shadow-sm lg:flex lg:flex-col lg:gap-8">
            <div className="text-sm text-muted-foreground">
              Xin chào,
              <div className="text-xl font-semibold text-[#1f1f2e]">{account.fullName ?? "Người dùng"}</div>
            </div>

            <nav className="flex flex-1 flex-col gap-2">
              {sidebarItems.map(({ label, icon: Icon, to, action }) => {
                const isActive = Boolean(to && location.pathname.startsWith(to));

                if (action === "logout") {
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => {
                        resetToDefaultAccount();
                        navigate("/login");
                      }}
                      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-base font-medium transition hover:border-brand-purple/60 hover:text-brand-purple ${
                        isActive
                          ? "border-brand-purple/80 bg-gradient-to-r from-[#F1F5FF] to-[#E5ECFF] text-brand-purple"
                          : "border-transparent bg-white text-[#1f1f2e]"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      <span>{label}</span>
                    </button>
                  );
                }

                if (!to) {
                  return (
                    <button
                      key={label}
                      type="button"
                      className="flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-left text-base font-medium text-[#1f1f2e] transition hover:border-brand-purple/60 hover:text-brand-purple"
                      disabled
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      <span>{label}</span>
                    </button>
                  );
                }

                return (
                  <Link
                    key={label}
                    to={to}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-base font-medium transition hover:border-brand-purple/60 hover:text-brand-purple ${
                      isActive
                        ? "border-brand-purple/80 bg-gradient-to-r from-[#F1F5FF] to-[#E5ECFF] text-brand-purple"
                        : "border-transparent bg-white text-[#1f1f2e]"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                );
              })}
            </nav>

            <Card className="border-dashed bg-gradient-to-br from-[#EEF4FF] via-white to-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#1f1f2e]">Kế hoạch hôm nay</CardTitle>
                <CardDescription className="text-sm text-slate-600">Sẵn sàng để trang bị cho hành trình mới cùng INBLUE Interview.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full rounded-2xl bg-brand-purple text-base font-semibold text-white shadow-md hover:bg-brand-purple/90">
                  Bắt đầu luyện tập
                </Button>
              </CardContent>
            </Card>
          </aside>

          <main className="flex-1 pb-16">{content}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
