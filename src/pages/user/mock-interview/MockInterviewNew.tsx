import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, ArrowRight, Clock, MapPin, Search, Star, User, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  language: string;
  rating: number;
  sessions: number;
  skills: string[];
  highlighted?: boolean;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "NGUYỄN VĂN A",
    title: "Tech lead",
    company: "FPT Software",
    location: "Quận 9",
    language: "Tiếng Việt",
    rating: 4.5,
    sessions: 100,
    skills: ["Java", "ReactJs", "Spring"],
    highlighted: true,
  },
  {
    id: 2,
    name: "NGUYỄN VĂN B",
    title: "Tech lead",
    company: "FPT Software",
    location: "Quận 10",
    language: "Tiếng Việt",
    rating: 3.9,
    sessions: 120,
    skills: ["C#", ".NET", "Hacker"],
  },
];

const interviewTypes = [
  {
    id: "screening",
    duration: "45 phút",
    price: "200.000 VNĐ",
    title: "Sơ loại",
    description: "Giúp bạn nắm được khung sườn cơ bản...",
    icon: "🕓",
  },
  {
    id: "technical",
    duration: "90 phút",
    price: "500.000 VNĐ",
    title: "Kiến thức",
    description: "Kiểm tra kiến thức chuyên môn và kinh nghiệm...",
    icon: "⏱️",
    recommended: true,
  },
  {
    id: "behavioral",
    duration: "45 phút",
    price: "400.000 VNĐ",
    title: "Tình huống",
    description: "Đánh giá khả năng xử lý tình huống và tư duy...",
    icon: "⌚",
  },
  {
    id: "comprehensive",
    duration: "120 phút",
    price: "900.000 VNĐ",
    title: "Trọn gói",
    description: "Bao gồm sơ loại, kiến thức và tình huống...",
    icon: "⏳",
  },
];

export default function MockInterviewNew() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMentor, setSelectedMentor] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final step - complete booking
      navigate("/mock-interview");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/mock-interview");
    }
  };

  const canProceed = () => {
    if (currentStep === 1) return selectedMentor !== null;
    if (currentStep === 2) return selectedType !== null;
    return true;
  };

  return (
    <div className="space-y-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={handleBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Trở về
        </Button>
        <div className="flex flex-1 items-center justify-center gap-4 px-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center gap-4">
              <div
                className={`flex h-28 w-28 items-center justify-center rounded-full transition-colors ${
                  step === currentStep
                    ? "bg-gradient-to-l from-indigo-600 via-indigo-600 to-purple-600"
                    : step < currentStep
                      ? "bg-blue-800"
                      : "bg-neutral-200"
                }`}
              >
                <span className="text-3xl">
                  {step === 1 ? "👤" : step === 2 ? "📅" : "✅"}
                </span>
              </div>
              {step < 3 && (
                <div
                  className={`h-0.5 w-40 ${step < currentStep ? "bg-blue-800" : "bg-neutral-200"}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold text-black">
          {currentStep === 1
            ? "Chọn mentor"
            : currentStep === 2
              ? "Chọn loại phỏng vấn"
              : "Xác nhận"}
        </h1>
        <Progress value={progress} className="mx-auto mt-4 h-2 w-full max-w-2xl" />
      </div>

      {/* Step 1: Choose Mentor */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <Card className="rounded-3xl border-none bg-white shadow-lg">
            <CardContent className="space-y-4 p-6">
              <div>
                <h2 className="text-2xl font-bold text-zinc-800">
                  Tìm kiếm mentor phù hợp
                </h2>
                <p className="text-sm text-stone-500">
                  Để có buổi phỏng vấn giả lập chất lượng cao
                </p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm theo chuyên ngành"
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {mentors.map((mentor) => (
              <Card
                key={mentor.id}
                className={`cursor-pointer rounded-2xl border-2 transition-all ${
                  selectedMentor === mentor.id
                    ? "border-indigo-500 bg-indigo-100 shadow-lg"
                    : mentor.highlighted
                      ? "border-indigo-300 bg-indigo-50"
                      : "border-gray-200 bg-white hover:border-indigo-300"
                }`}
                onClick={() => setSelectedMentor(mentor.id)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14">
                        <AvatarFallback className="bg-stone-300">
                          <User className="h-7 w-7" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-zinc-800">
                          {mentor.name}
                        </h3>
                        <p className="text-sm text-stone-500">{mentor.title}</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                          <span>{mentor.company}</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {mentor.location}
                          </div>
                          <span>{mentor.language}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(mentor.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-stone-500">
                          ({mentor.rating})
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {mentor.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-slate-200 text-indigo-500"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-zinc-800" />
                        <span className="font-bold text-zinc-800">
                          {mentor.sessions} buổi
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Choose Interview Type */}
      {currentStep === 2 && (
        <Card className="rounded-3xl border-none bg-indigo-100 shadow-lg">
          <CardContent className="space-y-8 p-8">
            <h2 className="text-center text-xl font-bold text-zinc-800">
              Chọn loại phỏng vấn
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {interviewTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer rounded-lg transition-all ${
                    selectedType === type.id
                      ? "shadow-[0px_0px_0px_4px_rgba(93,93,219,0.20)] outline outline-2 outline-indigo-500"
                      : "shadow-md hover:shadow-lg"
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <CardContent className="space-y-4 p-5">
                    <div className="space-y-2 border-b border-neutral-200 pb-4 text-center">
                      <div className="text-2xl">{type.icon}</div>
                      <p className="text-sm font-bold text-zinc-800">
                        {type.duration}
                      </p>
                      <p className="text-xs font-bold text-indigo-500">
                        {type.price}
                      </p>
                    </div>
                    <div className="space-y-2 text-center">
                      <h4 className="text-base font-bold text-zinc-800">
                        {type.title}
                      </h4>
                      <p className="text-xs text-stone-500">
                        {type.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Schedule */}
      {currentStep === 3 && (
        <Card className="mx-auto max-w-2xl rounded-3xl border-none bg-white shadow-lg">
          <CardContent className="space-y-6 p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-zinc-800">
                Chọn ngày và giờ phỏng vấn
              </h2>
              <p className="mt-2 text-sm text-stone-500">
                Chọn thời gian phù hợp với lịch của bạn
              </p>
            </div>
            
            {/* Calendar placeholder - you can integrate a real calendar component */}
            <div className="rounded-lg border border-gray-200 p-8 text-center">
              <Clock className="mx-auto mb-4 h-12 w-12 text-indigo-500" />
              <p className="text-gray-600">Lịch đặt hẹn sẽ được hiển thị ở đây</p>
            </div>

            <div className="space-y-4 rounded-lg bg-slate-50 p-6">
              <h3 className="font-semibold text-gray-900">Thông tin đã chọn:</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Mentor:</strong> {mentors.find(m => m.id === selectedMentor)?.name}</p>
                <p><strong>Loại phỏng vấn:</strong> {interviewTypes.find(t => t.id === selectedType)?.title}</p>
                <p><strong>Thời gian:</strong> {interviewTypes.find(t => t.id === selectedType)?.duration}</p>
                <p><strong>Giá:</strong> {interviewTypes.find(t => t.id === selectedType)?.price}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          size="lg"
          onClick={handleBack}
          className="rounded-lg"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <Button
          size="lg"
          onClick={handleNext}
          disabled={!canProceed()}
          className="rounded-lg bg-indigo-500 hover:bg-indigo-600"
        >
          {currentStep === totalSteps ? "Xác nhận đặt lịch" : "Tiếp theo"}
          {currentStep < totalSteps && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
