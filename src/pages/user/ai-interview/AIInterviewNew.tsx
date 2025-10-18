import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const jobPositions = [
  "Backend Developer",
  "Frontend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Data Engineer",
  "System Architect",
];

const experienceLevels = [
  "Fresher (0-1 năm)",
  "Junior (1-3 năm)",
  "Mid-level (3-5 năm)",
  "Senior (5+ năm)",
];

const technologies = [
  "Java", "Python", "JavaScript", "TypeScript", "React", "Angular", "Vue.js",
  "Node.js", "Spring Boot", "Django", "Flask", "Docker", "Kubernetes",
  "AWS", "Azure", "GCP", "SQL", "NoSQL", "Microservices",
];

export default function AIInterviewNew() {
  const navigate = useNavigate();
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    position: "",
    experience: "",
    description: "",
  });

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to interview session
    navigate("/ai-interview/session");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/ai-interview">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Trở về
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">
          Tạo Buổi Phỏng Vấn Mới với AI
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Form */}
        <Card className="lg:col-span-2 rounded-3xl border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Thông tin phỏng vấn</CardTitle>
            <CardDescription>
              Điền thông tin để AI có thể chuẩn bị câu hỏi phù hợp với bạn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Position */}
              <div className="space-y-2">
                <Label htmlFor="position">Vị trí phỏng vấn</Label>
                <Select
                  value={formData.position}
                  onValueChange={(value) =>
                    setFormData({ ...formData, position: value })
                  }
                >
                  <SelectTrigger id="position">
                    <SelectValue placeholder="Chọn vị trí..." />
                  </SelectTrigger>
                  <SelectContent>
                    {jobPositions.map((position) => (
                      <SelectItem key={position} value={position}>
                        {position}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Experience Level */}
              <div className="space-y-2">
                <Label htmlFor="experience">Cấp độ kinh nghiệm</Label>
                <Select
                  value={formData.experience}
                  onValueChange={(value) =>
                    setFormData({ ...formData, experience: value })
                  }
                >
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Chọn cấp độ..." />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <Label>Công nghệ liên quan (chọn tối đa 5)</Label>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant={selectedTechs.includes(tech) ? "default" : "outline"}
                      className="cursor-pointer transition-colors"
                      onClick={() => toggleTech(tech)}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {selectedTechs.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    Đã chọn: {selectedTechs.length}/5
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">
                  Mô tả thêm (tùy chọn)
                </Label>
                <Textarea
                  id="description"
                  placeholder="Ví dụ: Tôi muốn tập trung vào các câu hỏi về system design và scalability..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-2xl bg-indigo-500 hover:bg-indigo-600"
                disabled={!formData.position || !formData.experience}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Bắt đầu Phỏng vấn
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Tips Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-3xl border-none bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">💡 Mẹo để phỏng vấn tốt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-gray-700">
              <div className="space-y-2">
                <h4 className="font-semibold">Trước khi bắt đầu:</h4>
                <ul className="space-y-1 pl-4 list-disc">
                  <li>Chuẩn bị môi trường yên tĩnh</li>
                  <li>Kiểm tra kết nối internet</li>
                  <li>Chuẩn bị giấy và bút nếu cần</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Trong khi phỏng vấn:</h4>
                <ul className="space-y-1 pl-4 list-disc">
                  <li>Trả lời rõ ràng và có cấu trúc</li>
                  <li>Đưa ra ví dụ thực tế</li>
                  <li>Đừng ngại hỏi lại nếu không hiểu</li>
                  <li>Giải thích suy nghĩ của bạn</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">📊 Tiêu chí đánh giá</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <span>Kiến thức chuyên môn</span>
                <Badge variant="outline">40%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Tư duy logic</span>
                <Badge variant="outline">30%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Giao tiếp</span>
                <Badge variant="outline">20%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Giải quyết vấn đề</span>
                <Badge variant="outline">10%</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
