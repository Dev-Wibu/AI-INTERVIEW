import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, BookOpen, CheckCircle2, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
  completed?: boolean;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    question: "Giải thích sự khác biệt giữa ArrayList và LinkedList trong Java?",
    answer:
      "ArrayList sử dụng mảng động để lưu trữ elements, cung cấp truy cập nhanh O(1) nhưng thêm/xóa chậm O(n). LinkedList sử dụng danh sách liên kết đôi, truy cập chậm O(n) nhưng thêm/xóa nhanh O(1) ở đầu/cuối.",
    difficulty: "medium",
    completed: true,
  },
  {
    id: 2,
    question: "SOLID principles là gì? Giải thích từng nguyên tắc.",
    answer:
      "SOLID là 5 nguyên tắc thiết kế OOP: Single Responsibility (một class chỉ có một lý do để thay đổi), Open/Closed (mở để mở rộng, đóng để sửa đổi), Liskov Substitution (có thể thay thế bằng subclass), Interface Segregation (nhiều interface nhỏ hơn một interface lớn), Dependency Inversion (phụ thuộc vào abstraction).",
    difficulty: "hard",
  },
  {
    id: 3,
    question: "HashMap hoạt động như thế nào trong Java?",
    answer:
      "HashMap lưu trữ key-value pairs sử dụng hash table. Sử dụng hashCode() để tính index, equals() để so sánh keys. Xử lý collision bằng chaining (linked list) và từ Java 8+ chuyển sang tree structure khi bucket quá lớn.",
    difficulty: "hard",
  },
  {
    id: 4,
    question: "Sự khác biệt giữa == và equals() trong Java?",
    answer:
      "== so sánh tham chiếu (địa chỉ bộ nhớ) đối với objects, giá trị đối với primitives. equals() so sánh nội dung của objects. Có thể override equals() để tùy chỉnh logic so sánh.",
    difficulty: "easy",
    completed: true,
  },
  {
    id: 5,
    question: "Giải thích về Java Garbage Collection.",
    answer:
      "GC tự động quản lý bộ nhớ bằng cách giải phóng objects không còn được tham chiếu. Các thuật toán: Serial, Parallel, CMS, G1GC. GC chạy trong các generation: Young (Eden, Survivor), Old, Metaspace.",
    difficulty: "medium",
  },
];

export default function QuestionDetail() {
  const [completedQuestions, setCompletedQuestions] = useState<Set<number>>(
    new Set(mockQuestions.filter((q) => q.completed).map((q) => q.id))
  );

  const toggleComplete = (questionId: number) => {
    setCompletedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const progress = (completedQuestions.size / mockQuestions.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/question">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Trở về
          </Button>
        </Link>
      </div>

      {/* Title Card */}
      <Card className="overflow-hidden rounded-3xl border-none bg-gradient-to-br from-indigo-100 via-white to-white shadow-lg">
        <CardContent className="space-y-6 p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-indigo-500" />
                <h1 className="text-3xl font-bold text-indigo-500">
                  Java Backend Interview Questions
                </h1>
              </div>
              <p className="text-base text-gray-600">
                Bộ câu hỏi tổng hợp kiến thức về Java Core, OOP, Collection,
                Threading và Spring Framework
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-slate-200 text-indigo-600">
                  Java
                </Badge>
                <Badge variant="secondary" className="bg-slate-200 text-indigo-600">
                  Spring Boot
                </Badge>
                <Badge className="bg-green-600 text-white">Junior/Mid</Badge>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-gray-700">
                Tiến độ hoàn thành
              </span>
              <span className="font-bold text-indigo-600">
                {completedQuestions.size}/{mockQuestions.length} câu
              </span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Questions List */}
      <Card className="rounded-3xl border-none shadow-lg">
        <CardContent className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Danh sách câu hỏi</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>Dự kiến: {mockQuestions.length * 5} phút</span>
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {mockQuestions.map((question, index) => (
              <AccordionItem
                key={question.id}
                value={`question-${question.id}`}
                className="rounded-lg border bg-white shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex w-full items-center justify-between gap-4 text-left">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full font-semibold ${
                          completedQuestions.has(question.id)
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-900">
                        {question.question}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className={getDifficultyColor(question.difficulty)}
                      >
                        {question.difficulty}
                      </Badge>
                      {completedQuestions.has(question.id) && (
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 rounded-lg bg-slate-50 p-4">
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900">
                        Câu trả lời:
                      </h4>
                      <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
                        {question.answer}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant={
                          completedQuestions.has(question.id)
                            ? "outline"
                            : "default"
                        }
                        size="sm"
                        onClick={() => toggleComplete(question.id)}
                        className={
                          completedQuestions.has(question.id)
                            ? ""
                            : "bg-indigo-500 hover:bg-indigo-600"
                        }
                      >
                        {completedQuestions.has(question.id) ? (
                          <>
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Đã hoàn thành
                          </>
                        ) : (
                          "Đánh dấu hoàn thành"
                        )}
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link to="/question">
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-lg sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại danh sách
          </Button>
        </Link>
        {progress === 100 && (
          <Button
            size="lg"
            className="w-full rounded-lg bg-green-600 hover:bg-green-700 sm:w-auto"
          >
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Hoàn thành bộ câu hỏi
          </Button>
        )}
      </div>
    </div>
  );
}
