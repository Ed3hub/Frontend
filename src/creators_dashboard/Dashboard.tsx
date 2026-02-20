import React, { useState } from "react";
import {
  Sidebar,
  Header,
  Selection,
  Profile,
  UploadCourses,
  QuizAssessment,
  Community,
  ScheduleSession,
  Pricing,
  CourseVisibility,
  PublishCourse,
  CourseProgress,
  Earnings,
  ResetPassword,
} from "../creators_dashboard_components";
import "./dashboard.css";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [selected, setSelected] = useState("Profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="dashboard">
      {isMobileMenuOpen && (
        <div
          className="mobile-overlay md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <header className="head">
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          activeTab={activeTab}
        />
      </header>
      <aside className={`side ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <Sidebar
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            if (tab === "Home") setSelected("Profile");
            if (tab === "Account") setSelected("Course Progress");
          }}
        />
      </aside>
      <section className="section">
        <Selection
          selected={selected}
          setSelected={setSelected}
          activeTab={activeTab}
        />
      </section>
      <main className="main ">
        {/* <div className="lg:hidden mb-4">
          <Selection selected={selected} setSelected={setSelected} />
        </div> */}
        {selected === "Profile" && <Profile />}
        {selected === "Upload courses" && <UploadCourses />}
        {selected === "Quiz and Assessment" && <QuizAssessment />}
        {selected === "Community and Interaction" && <Community />}
        {selected === "Schedule a Session" && <ScheduleSession />}
        {selected === "Pricing and Access Control" && <Pricing />}
        {selected === "Course Visibility" && <CourseVisibility />}
        {selected === "Publsh Course" && <PublishCourse />}
        {selected === "Course Progress" && <CourseProgress />}
        {selected === "Earnings" && <Earnings />}
        {selected === "Reset your password" && <ResetPassword />}
      </main>
    </div>
  );
};

export default Dashboard;
