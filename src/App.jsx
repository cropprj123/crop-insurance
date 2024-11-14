import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "./pages/NotFound";
import Insurances from "./pages/Insurances";
import ProfilePage from "./pages/ProfilePage";
import AIFeatures from "./pages/AIFeatures";

function App() {
  const user = true;
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {user ? (
          <Route path="/dashboard" element={<ProfilePage />} />
        ) : (
          <Route path="/auth" element={<SignupPage />} />
        )}

        <Route path="/insurances" element={<Insurances />} />
        <Route path="/ai-features" element={<AIFeatures />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
