import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Send } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Message {
  id: number;
  sender: "ai" | "user";
  content: string;
  time: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "ai",
    content:
      "Xin chào! Tôi là AI assistant của Inblue. Tôi có thể giúp gì cho bạn hôm nay?",
    time: "10:00 AM",
  },
];

export default function AIChatSession() {
  const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      content: inputValue,
      time: new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        sender: "ai",
        content:
          "Cảm ơn bạn đã đặt câu hỏi! Đây là câu trả lời của tôi...",
        time: new Date().toLocaleTimeString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="rounded-3xl border-none bg-stone-50 shadow-sm">
        <CardContent className="flex items-center gap-4 p-6">
          <Link to="/ai-chat">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Trở về
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-zinc-800">
            {id ? `Cuộc trò chuyện #${id}` : "Cuộc trò chuyện mới"}
          </h1>
        </CardContent>
      </Card>

      {/* Chat Container */}
      <Card className="overflow-hidden rounded-3xl border-none shadow-lg">
        <ScrollArea className="h-[600px] p-6">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] space-y-2 ${message.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`rounded-[20px] px-5 py-4 ${
                      message.sender === "user"
                        ? "rounded-br-sm bg-indigo-500 text-white"
                        : "rounded-bl-sm bg-slate-200 text-zinc-800"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                  <p
                    className={`text-xs text-neutral-400 ${message.sender === "user" ? "text-right" : "text-left"}`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Section */}
        <div className="border-t border-neutral-200 bg-white p-6">
          <div className="flex gap-3">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Nhập câu hỏi của bạn..."
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="rounded-lg bg-indigo-500 hover:bg-indigo-600"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Nhấn Enter để gửi, Shift + Enter để xuống dòng
          </p>
        </div>
      </Card>

      {/* Suggested Questions */}
      <Card className="rounded-3xl border-none bg-gradient-to-br from-slate-50 to-white shadow-lg">
        <CardContent className="space-y-4 p-6">
          <h3 className="text-sm font-semibold text-gray-700">
            Câu hỏi gợi ý:
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Giải thích về SOLID principles",
              "So sánh REST và GraphQL",
              "Best practices cho React Hooks",
              "Cách chuẩn bị phỏng vấn Backend",
            ].map((suggestion) => (
              <Button
                key={suggestion}
                variant="outline"
                size="sm"
                className="rounded-full text-xs"
                onClick={() => setInputValue(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
