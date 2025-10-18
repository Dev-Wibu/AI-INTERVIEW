import "./index.css";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Overview from "./pages/user/Overview";
import AIInterviewList from "./pages/user/ai-interview/AIInterviewList";
import AIInterviewNew from "./pages/user/ai-interview/AIInterviewNew";
import AIInterviewSession from "./pages/user/ai-interview/AIInterviewSession";
import AIInterviewResult from "./pages/user/ai-interview/AIInterviewResult";
import MockInterviewList from "./pages/user/mock-interview/MockInterviewList";
import MockInterviewNew from "./pages/user/mock-interview/MockInterviewNew";
import AIChatList from "./pages/user/ai-chat/AIChatList";
import AIChatSession from "./pages/user/ai-chat/AIChatSession";
import QuestionList from "./pages/user/question/QuestionList";
import QuestionDetail from "./pages/user/question/QuestionDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<UserLayout />}>
            <Route path="/overview" element={<Overview />} />
            {/* AI Interview Routes */}
            <Route path="/ai-interview" element={<AIInterviewList />} />
            <Route path="/ai-interview/new" element={<AIInterviewNew />} />
            <Route path="/ai-interview/session" element={<AIInterviewSession />} />
            <Route path="/ai-interview/:id/result" element={<AIInterviewResult />} />
            {/* Mock Interview Routes */}
            <Route path="/mock-interview" element={<MockInterviewList />} />
            <Route path="/mock-interview/new" element={<MockInterviewNew />} />
            {/* AI Chat Routes */}
            <Route path="/ai-chat" element={<AIChatList />} />
            <Route path="/ai-chat/new" element={<AIChatSession />} />
            <Route path="/ai-chat/:id" element={<AIChatSession />} />
            {/* Question Routes */}
            <Route path="/question" element={<QuestionList />} />
            <Route path="/question/:id" element={<QuestionDetail />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

export { App };
