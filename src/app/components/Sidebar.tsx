"use client";
import React, { useState } from "react";
import { DashboardMenu, PagesMenu } from "../constant/Menu";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import TuneIcon from "@mui/icons-material/Tune";
import LogoutIcon from "@mui/icons-material/Logout";
import LanguageIcon from "@mui/icons-material/Language";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

type Props = {};

const Sidebar = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {/* For Mobile Device */}
      <IconButton
        className="md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Sidebar"
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        className="md:hidden overflow-hidden"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 256 }} role="presentation">
          <div className="w-64 h-screen p-4 bg-white flex flex-col relative">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="mb-8"
            />
            <div className=" overflow-scroll max-h-[85vh]">
              <text className="text-[grey] m-4">D A S H B O A R D</text>
              {DashboardMenu.map((item, index) => (
                <SidebarItem key={index} {...item} />
              ))}
              <text className="text-[grey] m-4">P A G E S</text>
              {PagesMenu.map((item, index) => (
                <SidebarItem key={index} {...item} />
              ))}
            </div>
            <div className="absolute bottom-2 w-full pr-10">
              <div className="border-t border-gray-300 w-full absolute top-0 mb-2 right-4"></div>
              <div className="flex justify-between mt-2">
                <IconButton aria-label="Settings">
                  <TuneIcon />
                </IconButton>
                <IconButton aria-label="Logout">
                  <LogoutIcon />
                </IconButton>
                <IconButton aria-label="Language">
                  <LanguageIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </Box>
      </Drawer>

      {/* For Desktop Device */}
      <div className="w-64 h-screen p-4 bg-white flex-col relative hidden md:flex">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="mb-8"
        />
        <div className=" overflow-auto scroll-auto max-h-[85vh]">
          <text className="text-[grey] m-4">D A S H B O A R D</text>
          <div className="my-4">
            {DashboardMenu.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </div>
          <text className="text-[grey] m-4">P A G E S</text>
          <div className="my-4">
            {PagesMenu.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-2 w-full pr-10">
          <div className="border-t border-gray-300 w-full absolute top-0 mb-2 right-4"></div>
          <div className="flex justify-between mt-2">
            <IconButton aria-label="Settings">
              <TuneIcon />
            </IconButton>
            <IconButton aria-label="Logout">
              <LogoutIcon />
            </IconButton>
            <IconButton aria-label="Language">
              <LanguageIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
