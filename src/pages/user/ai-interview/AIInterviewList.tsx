import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Brain, Calendar, Clock, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const interviewHistory = [
  {
    id: 1,
    title: "Phỏng vấn Backend Developer",
    date: "25/10/2025",
    duration: "45 phút",
    score: "8.5/10",
    tags: ["Java", "Spring Boot", "Database"],
  },
  {
    id: 2,
    title: "Phỏng vấn Frontend Developer",
    date: "23/10/2025",
    duration: "60 phút",
    score: "7.8/10",
    tags: ["React", "TypeScript", "CSS"],
  },
  {
    id: 3,
    title: "Phỏng vấn System Design",
    date: "20/10/2025",
    duration: "90 phút",
    score: "9.2/10",
    tags: ["Microservices", "Scalability", "Architecture"],
  },
];

export default function AIInterviewList() {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <Card className="overflow-hidden rounded-3xl border-none bg-gradient-to-br from-[#E0E7FF] via-white to-white shadow-lg">
        <CardContent className="p-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-blue-800">
              Hãy thử luyện tập phỏng vấn với AI trước nhé
            </h1>
            <p className="text-base text-slate-600">
              Bạn làm rất tốt, hãy giữ vững phong độ nhé !
            </p>
            <div className="pt-4">
              <Link to="/ai-interview/new">
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
        {interviewHistory.map((interview) => (
          <Card
            key={interview.id}
            className="overflow-hidden rounded-2xl border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <span className="text-lg font-bold text-green-800">
                      {interview.id}
                    </span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {interview.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{interview.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{interview.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Brain className="h-4 w-4" />
                        <span>AI Assistant</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {interview.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-blue-100 text-blue-800"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-[20px] bg-emerald-100 px-4 py-2">
                    <span className="text-lg font-bold text-emerald-500">
                      {interview.score}
                    </span>
                  </div>
                  <Link to={`/ai-interview/${interview.id}/result`}>
                    <Button
                      variant="default"
                      className="rounded-lg bg-emerald-500 hover:bg-emerald-600"
                    >
                      Xem chi tiết
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create New Interview Card */}
      <Card className="overflow-hidden rounded-xl border-none bg-gradient-to-r from-indigo-500 to-purple-800 shadow-lg">
        <CardContent className="p-8 text-center text-white">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <Plus className="h-8 w-8" />
          </div>
          <h3 className="mb-2 text-2xl font-bold">Bắt đầu buổi phỏng vấn mới</h3>
          <p className="mb-6 text-base opacity-90">
            Luyện tập với AI để cải thiện kỹ năng phỏng vấn của bạn
          </p>
          <Link to="/ai-interview/new">
            <Button
              variant="default"
              size="lg"
              className="rounded-lg bg-white text-indigo-500 hover:bg-white/90"
            >
              Tạo phỏng vấn mới
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
