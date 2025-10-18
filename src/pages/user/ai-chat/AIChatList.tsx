import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const conversations = [
  {
    id: 1,
    title: "Phỏng vấn Kỹ sư Backend (Java)",
    lastMessage: "AI: Tuyệt vời! Bạn đã sẵn sàng chưa?...",
    time: "10:30 AM",
  },
  {
    id: 2,
    title: "Thảo luận về Design Pattern",
    lastMessage: "Bạn: Em thấy Factory Pattern khá hữu ích...",
    time: "Hôm qua",
  },
  {
    id: 3,
    title: "Tổng hợp kinh nghiệm ReactJS",
    lastMessage: "AI: Hãy nói về Hooks trong React...",
    time: "20/09/2025",
  },
];

export default function AIChatList() {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <Card className="overflow-hidden rounded-3xl border-none bg-gradient-to-br from-[#E0E7FF] via-white to-white shadow-lg">
        <CardContent className="p-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-blue-800">AI Chat</h1>
            <p className="text-base text-slate-600">
              Bạn làm rất tốt, hãy giữ vững phong độ nhé !
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-zinc-800">AI Chat</h2>
          <Link to="/ai-chat/new">
            <Button
              variant="default"
              className="rounded-lg bg-indigo-500 hover:bg-indigo-600"
            >
              <Plus className="mr-2 h-4 w-4" />
              Bắt đầu Cuộc trò chuyện Mới
            </Button>
          </Link>
        </div>

        {/* Conversations List */}
        <Card className="rounded-3xl border-none shadow-lg">
          <CardContent className="divide-y p-0">
            {conversations.map((conversation) => (
              <Link
                key={conversation.id}
                to={`/ai-chat/${conversation.id}`}
                className="block transition-colors hover:bg-slate-50"
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-indigo-500" />
                      <h3 className="text-base font-bold text-zinc-800">
                        {conversation.title}
                      </h3>
                    </div>
                    <p className="line-clamp-1 text-sm text-stone-500">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  <Badge variant="secondary" className="ml-4 shrink-0">
                    {conversation.time}
                  </Badge>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Empty State or Tips */}
        {conversations.length === 0 && (
          <Card className="rounded-3xl border-none bg-gradient-to-br from-slate-50 to-white shadow-lg">
            <CardContent className="space-y-6 p-12 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
                <MessageSquare className="h-10 w-10 text-indigo-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Chưa có cuộc trò chuyện nào
                </h3>
                <p className="text-gray-600">
                  Bắt đầu cuộc trò chuyện mới với AI để được tư vấn và hỗ trợ
                </p>
              </div>
              <Link to="/ai-chat/new">
                <Button
                  size="lg"
                  className="rounded-2xl bg-indigo-500 hover:bg-indigo-600"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  Tạo cuộc trò chuyện đầu tiên
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Tips Card */}
        <Card className="rounded-3xl border-none bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
          <CardContent className="space-y-4 p-8">
            <h3 className="text-lg font-bold text-gray-900">
              💡 Bạn có thể hỏi AI về:
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-white/80 p-4">
                <h4 className="mb-1 font-semibold text-gray-900">
                  Kiến thức kỹ thuật
                </h4>
                <p className="text-sm text-gray-600">
                  Hỏi về các khái niệm, design patterns, best practices
                </p>
              </div>
              <div className="rounded-lg bg-white/80 p-4">
                <h4 className="mb-1 font-semibold text-gray-900">
                  Chuẩn bị phỏng vấn
                </h4>
                <p className="text-sm text-gray-600">
                  Tư vấn cách trả lời, tips và tricks cho phỏng vấn
                </p>
              </div>
              <div className="rounded-lg bg-white/80 p-4">
                <h4 className="mb-1 font-semibold text-gray-900">
                  Giải đáp thắc mắc
                </h4>
                <p className="text-sm text-gray-600">
                  Giải thích các vấn đề kỹ thuật phức tạp một cách dễ hiểu
                </p>
              </div>
              <div className="rounded-lg bg-white/80 p-4">
                <h4 className="mb-1 font-semibold text-gray-900">
                  Phát triển career
                </h4>
                <p className="text-sm text-gray-600">
                  Lời khuyên về lộ trình học tập và phát triển sự nghiệp
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
