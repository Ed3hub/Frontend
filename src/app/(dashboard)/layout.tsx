'use client';

// import { ThemeProvider } from "@/components/ui/theme-provider";
import Sidebar from "@/components/ui/sidebar";
import TopNavbar from "@/components/TopNavbar";
import { Toaster } from 'react-hot-toast';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen md:pl-60 bg-gray-50 sm:pl-0">
      {/* Sidebar on the left */}
      <Sidebar activePage="account"/>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top navbar tabs (e.g. discussions, course groups, etc.) */}
        <TopNavbar />

        {/* The dynamic page content (like course groups page) */}
        <main className="p-6">
          <Toaster position="top-right" />
          {children}
          </main>
      </div>
    </div>
  );
}