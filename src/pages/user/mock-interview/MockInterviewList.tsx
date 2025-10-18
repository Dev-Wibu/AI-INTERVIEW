import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Clock, Plus, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const mockInterviews = [
  {
    id: 1,
    title: "Phỏng vấn Backend",
    date: "20/09/2025",
    time: "14:00",
    mentor: "Nguyễn Văn A",
    status: "completed" as const,
  },
  {
    id: 2,
    title: "Phỏng vấn Backend",
    date: "20/10/2025",
    time: "14:00",
    mentor: "Nguyễn Văn B",
    status: "upcoming" as const,
  },
];

export default function MockInterviewList() {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <Card className="overflow-hidden rounded-3xl border-none bg-gradient-to-br from-indigo-50 via-white to-white shadow-lg">
        <CardContent className="p-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-blue-800">
              Bạn đã hoàn thành 1 buổi phỏng vấn giả lập với mentor
            </h1>
            <p className="text-base text-slate-600">
              Bạn làm rất tốt, hãy giữ vững phong độ nhé !
            </p>
            <div className="pt-4">
              <Link to="/mock-interview/new">
                <Button
                  variant="loginGradient"
                  size="lg"
                  className="rounded-2xl text-base font-semibold"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  Bắt đầu phỏng vấn
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter Section */}
      <Card className="rounded-3xl border-none bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Lịch sử phỏng vấn</h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1 sm:w-80">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Tìm kiếm theo tên, vị trí..."
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interview History List */}
      <div className="space-y-4">
        {mockInterviews.map((interview) => (
          <Card
            key={interview.id}
            className="overflow-hidden rounded-[20px] border-gray-200 bg-white/50 shadow-sm transition-shadow hover:shadow-md"
          >
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-br from-indigo-100 to-purple-100">
                      <User className="h-6 w-6 text-indigo-600" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-3xl font-semibold text-black">
                      {interview.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-black">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-5 w-5" />
                        <span>{interview.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-5 w-5" />
                        <span>{interview.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-5 w-5" />
                        <span>{interview.mentor}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {interview.status === "completed" ? (
                    <Badge className="rounded-[30px] bg-green-500/80 px-6 py-3 text-sm font-semibold text-green-900 hover:bg-green-500/90">
                      Đã hoàn thành
                    </Badge>
                  ) : (
                    <Badge className="rounded-[30px] bg-blue-100/80 px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100/90">
                      Sắp diễn ra
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create New Interview Card */}
      <Card className="overflow-hidden rounded-3xl border-none bg-gradient-to-r from-indigo-500 to-purple-800 shadow-lg">
        <CardContent className="p-8 text-center text-white">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <Plus className="h-8 w-8" />
          </div>
          <h3 className="mb-2 text-2xl font-bold">Đặt lịch phỏng vấn giả lập mới</h3>
          <p className="mb-6 text-base opacity-90">
            Luyện tập với mentor chuyên nghiệp để cải thiện kỹ năng phỏng vấn
          </p>
          <Link to="/mock-interview/new">
            <Button
              variant="default"
              size="lg"
              className="rounded-lg bg-white text-indigo-500 hover:bg-white/90"
            >
              Tìm mentor phù hợp
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
