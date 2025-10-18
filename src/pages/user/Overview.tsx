import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { format } from "date-fns";
import { CalendarDays, ClipboardList, MessageSquare, PlayCircle, Users } from "lucide-react";
import { useState } from "react";

const practiceModules = [
  {
    title: "Phỏng vấn Backend",
    description: "Tập trung vào cấu trúc dữ liệu và hệ thống phân tán",
    progress: 65,
    icon: ClipboardList,
  },
  {
    title: "Tình huống hành vi",
    description: "Rèn luyện phương pháp STAR cho câu hỏi hành vi",
    progress: 45,
    icon: Users,
  },
  {
    title: "Kỹ năng giao tiếp",
    description: "Tăng tốc phản xạ và cách trình bày rõ ràng",
    progress: 80,
    icon: MessageSquare,
  },
];

const upcomingSessions = [
  {
    title: "Mock Interview - Backend",
    time: "10:00 • 20/10/2025",
    type: "Mock Interview",
  },
  {
    title: "AI Coach - Behavioral",
    time: "19:30 • 22/10/2025",
    type: "AI Coach",
  },
  {
    title: "Practice Pack - Product Sense",
    time: "08:00 • 24/10/2025",
    type: "Practice Pack",
  },
];

export default function Overview() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-3">
        <Card className="col-span-1 overflow-hidden rounded-3xl border-none bg-gradient-to-br from-[#E0E7FF] via-white to-white shadow-lg lg:col-span-2">
          <CardHeader className="space-y-4 pb-2">
            <Badge className="w-fit bg-white/70 text-brand-purple">Lộ trình tuần này</Badge>
            <CardTitle className="text-3xl font-semibold text-[#1f1f2e]">
              Xin chào, hãy luyện tập để sẵn sàng chinh phục buổi phỏng vấn tiếp theo!
            </CardTitle>
            <CardDescription className="text-base text-slate-600">
              Hoàn thành ba nhiệm vụ trọng tâm để nhận phản hồi chi tiết từ AI Coach.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-4 pb-8">
            <Button variant="loginGradient" size="lg" className="rounded-2xl text-base font-semibold">
              Bắt đầu buổi luyện tập
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl border-brand-purple/50 text-brand-purple">
              Xem lịch trình
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-none bg-white shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold text-[#1f1f2e]">Hoạt động gần đây</CardTitle>
            <CardDescription className="text-sm text-slate-600">
              Cập nhật đến {selectedDate ? format(selectedDate, "dd/MM/yyyy") : format(new Date(), "dd/MM/yyyy")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 rounded-2xl bg-slate-100/70 p-4">
              <PlayCircle className="h-10 w-10 text-brand-purple" aria-hidden="true" />
              <div>
                <p className="text-base font-semibold text-[#1f1f2e]">3 buổi mock interview</p>
                <p className="text-sm text-slate-600">Hoàn thành trong tuần này</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-slate-100/70 p-4">
              <CalendarDays className="h-10 w-10 text-brand-purple" aria-hidden="true" />
              <div>
                <p className="text-base font-semibold text-[#1f1f2e]">12 giờ luyện tập</p>
                <p className="text-sm text-slate-600">Tích luỹ từ đầu tháng</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-5">
        <Card className="rounded-3xl border-none bg-white shadow-lg xl:col-span-3">
          <CardHeader className="flex flex-col gap-2 pb-2">
            <CardTitle className="text-2xl font-semibold text-[#1f1f2e]">Tiến độ học tập</CardTitle>
            <CardDescription className="text-sm text-slate-600">Theo dõi các mô-đun bạn đang luyện tập và mức độ hoàn thành.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {practiceModules.map(({ title, description, progress, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-slate-100 p-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-brand-purple/10 p-3 text-brand-purple">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-[#1f1f2e]">{title}</h3>
                      <span className="text-sm font-medium text-brand-purple">{progress}%</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{description}</p>
                    <div className="mt-4">
                      <Progress value={progress} className="h-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-none bg-white shadow-lg xl:col-span-2">
          <CardHeader className="flex flex-col gap-2 pb-4">
            <CardTitle className="text-2xl font-semibold text-[#1f1f2e]">Lịch luyện tập</CardTitle>
            <CardDescription className="text-sm text-slate-600">Chọn một ngày để xem các phiên luyện tập phù hợp.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="self-center rounded-2xl border border-slate-100 bg-white"
            />

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-[#1f1f2e]">Phiên luyện tập sắp tới</h3>
              <div className="space-y-3">
                {upcomingSessions.map(({ title, time, type }) => (
                  <div key={title} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-[#1f1f2e]">{title}</p>
                      <p className="text-xs text-slate-600">{time}</p>
                    </div>
                    <Badge variant="outline" className="border-brand-purple/40 text-brand-purple">
                      {type}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
