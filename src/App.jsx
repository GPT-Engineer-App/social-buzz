import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ProfileChatDashboard from "./pages/ProfileChatDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/profile-chat" element={<ProfileChatDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
