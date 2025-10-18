import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  userAnswer: string;
  expectedAnswer: string;
  score: number;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    question: "Hãy giải thích nguyên tắc SOLID trong OOP và cung cấp ví dụ về Nguyên tắc Đóng/Mở (Open/Closed Principle).",
    userAnswer: "SOLID là tập hợp 5 nguyên tắc trong OOP giúp code dễ bảo trì và mở rộng...",
    expectedAnswer: "Câu trả lời chi tiết về SOLID principles...",
    score: 8,
  },
  {
    id: 2,
    question: "Sự khác biệt giữa ArrayList và LinkedList trong Java?",
    userAnswer: "ArrayList sử dụng mảng động, LinkedList sử dụng cấu trúc danh sách liên kết...",
    expectedAnswer: "Phân tích chi tiết về hiệu suất và cách sử dụng...",
    score: 9,
  },
];

export default function AIInterviewResult() {
  const [showDetails, setShowDetails] = useState(false);
  const overallScore = 8.5;

  const strengths = [
    "Hiểu rõ nguyên tắc OOP và SOLID",
    "Trả lời chi tiết về Java Collections (ArrayList vs LinkedList)",
    "Phong thái chuyên nghiệp, ngôn ngữ rõ ràng",
  ];

  const improvements = [
    "Phần giải thích về Thread Safety còn chung chung",
    "Thiếu ví dụ thực tế khi trả lời câu hỏi về Spring Transaction",
    "Sử dụng thuật ngữ tiếng Anh chưa hoàn toàn chính xác",
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-800">
          Kết quả Đánh giá Phỏng vấn AI
        </h1>
      </div>

      {/* Score Card */}
      <Card className="overflow-hidden rounded-3xl border-none shadow-lg">
        <CardContent className="space-y-6 p-12 text-center">
          <h2 className="text-3xl font-bold text-black">
            Phỏng vấn Kỹ sư Backend (Junior - Java)
          </h2>
          
          <div className="space-y-2">
            <p className="text-sm text-black">Điểm Tổng thể</p>
            <div className="text-5xl font-bold text-green-600">
              {overallScore}/10
            </div>
          </div>

          <Progress value={overallScore * 10} className="h-3" />

          <p className="text-xl leading-relaxed text-black">
            Kết luận: <strong>Rất Tốt</strong>. Bạn thể hiện kiến thức vững chắc về Java Core và OOP. 
            Cần cải thiện khả năng trả lời tình huống về Thread Safety và hiệu suất.
          </p>
        </CardContent>
      </Card>

      {/* Strengths and Improvements */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Strengths */}
        <Card className="overflow-hidden rounded-3xl border-l-[5px] border-l-green-600 shadow-lg">
          <CardContent className="space-y-6 p-8">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-bold text-black">Điểm Mạnh</h3>
            </div>
            <ul className="space-y-3">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-lg">👍</span>
                  <span className="text-sm text-black">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Improvements */}
        <Card className="overflow-hidden rounded-3xl border-l-[5px] border-l-yellow-400 shadow-lg">
          <CardContent className="space-y-6 p-8">
            <div className="flex items-center gap-2">
              <XCircle className="h-6 w-6 text-yellow-400" />
              <h3 className="text-lg font-bold text-black">Cần Cải thiện</h3>
            </div>
            <ul className="space-y-3">
              {improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-lg">👇</span>
                  <span className="text-sm text-black">{improvement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Questions Review Section */}
      {showDetails && (
        <Card className="rounded-3xl border-none shadow-lg">
          <CardContent className="space-y-6 p-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Chi tiết câu hỏi đã trả lời
            </h3>
            <div className="space-y-6">
              {mockQuestions.map((q) => (
                <Card key={q.id} className="border-gray-200">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          Câu {q.id}: {q.question}
                        </h4>
                      </div>
                      <Badge
                        variant={q.score >= 8 ? "default" : "secondary"}
                        className="shrink-0"
                      >
                        {q.score}/10
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <strong>Câu trả lời của bạn:</strong>
                      </p>
                      <p className="rounded-lg bg-slate-100 p-3 text-sm">
                        {q.userAnswer}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Button
          variant="outline"
          size="lg"
          onClick={() => setShowDetails(!showDetails)}
          className="rounded-lg"
        >
          {showDetails ? "Ẩn" : "Xem lại"} Câu hỏi đã trả lời
        </Button>
        <Link to="/ai-interview">
          <Button
            variant="default"
            size="lg"
            className="w-full rounded-lg bg-indigo-500 hover:bg-indigo-600 sm:w-auto"
          >
            Bắt đầu Buổi Phỏng vấn Mới
          </Button>
        </Link>
        <Link to="/overview">
          <Button
            variant="ghost"
            size="lg"
            className="w-full rounded-lg sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Về trang chủ
          </Button>
        </Link>
      </div>
    </div>
  );
}
