"use client";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <main className="bg-[#f2f4f7] flex">
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-col w-full md:ml-64">
        <Navbar setOpen={setOpenSidebar} />
        <Dashboard />
      </div>
    </main>
  );
}
