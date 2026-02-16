"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import './dashboard.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeTab, setActiveTab] = useState("Home");
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
          setActiveTab={setActiveTab}
        />
      </aside>
      <main className="main">
        {children}
      </main>
    </div>
  );
}