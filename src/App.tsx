// @ts-nocheck
// src/App.jsx for Level3Landing project

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // IMPORTANT: Imported useLocation
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CreatorDomainSection from "@/components/CreatorDomainSection";

// Import only landing-related pages for this project
import HomePage from "@/pages/HomePage";
import ComingSoonPage from "@/pages/ComingSoonPage";

const sharedCourses = [
  {
    id: "content-strategy-mastery-1",
    title: "Content Strategy Mastery",
    description: "Unlock the secrets to creating viral content...",
    icon: "Target",
    level: "Beginner",
    category: "Starter",
    duration: "4 weeks",
    image:
      "https://placehold.co/800x600/3B82F6/FFFFFF?text=Landing+Course+Preview+1",
    instructor: "Alex Chen",
    rating: 4.8,
    students: 1200,
  },
  {
    id: "content-creation-pro-2",
    title: "Content Creation Pro",
    description: "Master the art of high-quality content creation...",
    icon: "BookOpen",
    level: "Intermediate",
    category: "Growth",
    duration: "6 weeks",
    image:
      "https://placehold.co/800x600/6B4BF6/FFFFFF?text=Landing+Course+Preview+2",
    instructor: "Maya Singh",
    rating: 4.9,
    students: 1500,
  },
  {
    id: "marketing-automation-3",
    title: "Marketing Automation Fundamentals",
    description: "Automate your marketing for maximum impact...",
    icon: "Zap",
    level: "Advanced",
    category: "Scaling",
    duration: "8 weeks",
    image:
      "https://placehold.co/800x600/F64B3B/FFFFFF?text=Landing+Course+Preview+3",
    instructor: "Chris Miller",
    rating: 4.7,
    students: 1000,
  },
];

// We create a new component here to wrap the main content
// because useLocation must be used inside a Router context.
const AppContent = () => {
  const location = useLocation(); // Get the current URL location

  // Determine if the footer should be visible.
  // It will show ONLY if the current path is exactly "/" (the homepage).
  // The "About" link is an anchor on the homepage, so it's covered by checking for "/".
  const showFooter = location.pathname === '/';

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-gilroy subtle-bg-pattern">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage courses={sharedCourses} />} />
          <Route
            path="/mint-creator-domain"
            element={<CreatorDomainSection isPage={true} />}
          />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
        </Routes>
      </main>
      {showFooter && <Footer />} {/* Conditionally render the Footer based on showFooter */}
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* We render AppContent inside Router so it can use useLocation */}
      <AppContent />
    </Router>
  );
}

export default App;