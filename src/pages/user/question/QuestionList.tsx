import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";

const questionSets = [
  {
    id: 1,
    title: "Java Backend Interview Questions",
    tags: ["Java", "Spring Boot"],
    level: "Junior/Mid",
    levelColor: "bg-green-600",
    description:
      "Bộ câu hỏi tổng hợp kiến thức về Java Core, OOP, Collection, Threading và Spring Framework.",
    count: 50,
    category: "Phát triển Phần mềm",
  },
  {
    id: 2,
    title: "ReactJS Fundamentals & Hooks",
    tags: ["ReactJS", "Redux"],
    level: "Mid-level",
    levelColor: "bg-yellow-400",
    description:
      "Tập trung vào kiến thức React Hooks, State Management và tối ưu hiệu suất ứng dụng Frontend.",
    count: 40,
    category: "Phát triển Phần mềm",
  },
  {
    id: 3,
    title: "SQL & Database Concepts",
    tags: ["SQL", "Database"],
    level: "Fresher",
    levelColor: "bg-blue-600",
    description:
      "Các câu hỏi cơ bản về truy vấn SQL, Normalization, và Transaction Management.",
    count: 35,
    category: "Dữ liệu & AI",
  },
];

export default function QuestionList() {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <Card className="overflow-hidden rounded-3xl border-none bg-gradient-to-br from-[#E0E7FF] via-white to-white shadow-lg">
        <CardContent className="p-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-blue-800">
              Hãy thử luyện tập trước với bộ câu hỏi trước nhé !
            </h1>
            <p className="text-base text-slate-600">
              Bạn làm rất tốt, hãy giữ vững phong độ nhé !
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter Section */}
      <Card className="rounded-3xl border-none bg-white shadow-lg">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-3xl font-bold text-zinc-800">Bộ Câu Hỏi</h2>
          
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                <Input
                  placeholder="Tìm kiếm bộ câu hỏi, ví dụ: Java, React, SQL..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-600">
                  Lọc theo Ngành:
                </label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả Ngành</SelectItem>
                    <SelectItem value="software">Phát triển Phần mềm</SelectItem>
                    <SelectItem value="data">Dữ liệu & AI</SelectItem>
                    <SelectItem value="devops">DevOps</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-600">
                  Lọc theo Cấp độ:
                </label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-36">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả Cấp độ</SelectItem>
                    <SelectItem value="fresher">Fresher</SelectItem>
                    <SelectItem value="junior">Junior/Mid</SelectItem>
                    <SelectItem value="mid">Mid-level</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Question Sets Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {questionSets.map((set) => (
          <Card
            key={set.id}
            className="overflow-hidden rounded-2xl border-none shadow-lg transition-shadow hover:shadow-xl"
          >
            <CardContent className="space-y-4 p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold leading-normal text-indigo-500">
                    {set.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {set.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-slate-200 text-indigo-600"
                      >
                        {tag}
                      </Badge>
                    ))}
                    <Badge
                      className={`${set.levelColor} text-white hover:${set.levelColor}/90`}
                    >
                      {set.level}
                    </Badge>
                  </div>
                </div>
                <BookOpen className="h-6 w-6 shrink-0 text-indigo-500" />
              </div>

              {/* Description */}
              <p className="text-sm text-stone-500">{set.description}</p>

              {/* Meta Info */}
              <div className="flex items-center justify-between border-t border-zinc-100 pt-4 text-xs text-neutral-400">
                <span>Số lượng: {set.count} câu</span>
                <span>Ngành: {set.category}</span>
              </div>

              {/* Action Button */}
              <Link to={`/question/${set.id}`}>
                <Button className="w-full rounded-md bg-indigo-500 hover:bg-indigo-600">
                  Xem Chi tiết
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tips Card */}
      <Card className="rounded-3xl border-none bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
        <CardContent className="space-y-4 p-8">
          <h3 className="text-lg font-bold text-gray-900">
            💡 Mẹo luyện tập hiệu quả:
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">
                Chia nhỏ thời gian
              </h4>
              <p className="text-sm text-gray-600">
                Luyện tập 30-45 phút mỗi ngày thay vì học dồn
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Ghi chú</h4>
              <p className="text-sm text-gray-600">
                Ghi chép lại các câu trả lời và giải thích
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Thực hành</h4>
              <p className="text-sm text-gray-600">
                Áp dụng kiến thức vào dự án thực tế
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Ôn tập</h4>
              <p className="text-sm text-gray-600">
                Xem lại các câu hỏi khó định kỳ
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
