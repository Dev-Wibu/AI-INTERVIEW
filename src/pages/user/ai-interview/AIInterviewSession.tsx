import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      "Chào bạn! Tôi là AI phỏng vấn của Inblue. Hôm nay chúng ta sẽ bắt đầu với vai trò Kỹ sư Backend (Java). Bạn đã sẵn sàng chưa?",
    time: "10:28 AM",
  },
  {
    id: 2,
    sender: "user",
    content:
      "Tôi sẵn sàng. Bạn có thể bắt đầu với câu hỏi về Java Collections được không?",
    time: "10:30 AM",
  },
  {
    id: 3,
    sender: "ai",
    content:
      "Chắc chắn rồi. Bạn hãy giải thích sự khác biệt cơ bản giữa `ArrayList` và `LinkedList` trong Java, và khi nào nên sử dụng loại nào?",
    time: "10:32 AM",
  },
];

export default function AIInterviewSession() {
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
        content: "Câu trả lời rất tốt! Hãy tiếp tục với câu hỏi tiếp theo...",
        time: new Date().toLocaleTimeString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="rounded-3xl border-none bg-stone-50 shadow-sm">
        <CardContent className="flex items-center gap-4 p-6">
          <Link to="/ai-interview">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Trở về
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-zinc-800">
            Phỏng vấn Kỹ sư Backend (Java)
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
                    <p className="text-sm leading-relaxed">{message.content}</p>
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
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              placeholder="Nhập câu trả lời của bạn hoặc câu hỏi tiếp theo..."
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              className="rounded-lg bg-indigo-500 hover:bg-indigo-600"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
