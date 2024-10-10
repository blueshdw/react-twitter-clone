import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import NotificationsPage from "./pages/NotificationsPage";
import MessagesPage from "./pages/MessagesPage";
import GrokPage from "./pages/GrokPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import CommunitiesPage from "./pages/CommunitiesPage";

function App() {
  return (
    <div className="max-w-[1265px] h-full mx-auto flex justify-between">
      <Sidebar />
      <main className="border-x border-[#2f3336] flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/grok" element={<GrokPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/:username/communities/explore" element={<CommunitiesPage />} /> 
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <RightSidebar />
    </div>
  );
}

export default App;
