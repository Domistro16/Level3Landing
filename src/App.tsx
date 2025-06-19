// @ts-nocheck
// src/App.jsx for Level3Landing project

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"; // Assuming this component is in components/ui
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CreatorDomainSection from "@/components/CreatorDomainSection"; // Assuming this stays in components

// Import only landing-related pages for this project
import HomePage from "@/pages/HomePage";
const sharedCourses = [
  {
    id: "content-strategy-mastery",
    title: "Content Strategy Mastery",
    description: "Unlock the secrets to creating viral content...", // Keep a brief description
    icon: "Target",
    level: "Beginner",
    category: "Starter",
    duration: "4 weeks",
    image:
      "https://placehold.co/800x600/3B82F6/FFFFFF?text=Landing+Course+Preview+1", // Placeholder image
    instructor: "Alex Chen",
    rating: 4.8,
    students: 1200,
  },
  {
    id: "content-strategy-mastery",
    title: "Content Strategy Mastery",
    description: "Unlock the secrets to creating viral content...", // Keep a brief description
    icon: "Target",
    level: "Beginner",
    category: "Starter",
    duration: "4 weeks",
    image:
      "https://placehold.co/800x600/3B82F6/FFFFFF?text=Landing+Course+Preview+1", // Placeholder image
    instructor: "Alex Chen",
    rating: 4.8,
    students: 1200,
  },
  {
    id: "content-strategy-mastery",
    title: "Content Strategy Mastery",
    description: "Unlock the secrets to creating viral content...", // Keep a brief description
    icon: "Target",
    level: "Beginner",
    category: "Starter",
    duration: "4 weeks",
    image:
      "https://placehold.co/800x600/3B82F6/FFFFFF?text=Landing+Course+Preview+1", // Placeholder image
    instructor: "Alex Chen",
    rating: 4.8,
    students: 1200,
  },
];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background overflow-x-hidden font-gilroy subtle-bg-pattern">
        <Navbar />
        <main className="pt-20">
          {" "}
          {/* Add padding-top to main to avoid content being hidden by fixed navbar */}
          <Routes>
            <Route path="/" element={<HomePage courses={sharedCourses} />} />
            {/* Remove routes for course pages as they don't belong in the landing project */}
            <Route
              path="/mint-creator-domain"
              element={<CreatorDomainSection isPage={true} />}
            />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
