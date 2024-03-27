import { SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Image from "next/image";

type Props = {
  setOpen: (value: boolean) => void;
};

const Navbar = (props: Props) => {
  return (
    <div className="relative border">
      {/* For Desktop Devices */}
      <div className="bg-white p-4 space-x-2 hidden md:flex">
        <div className=" border border-gray-400 p-2 rounded-md w-full flex space-x-2">
          <SearchOutlined />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none"
          />
        </div>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <CalendarTodayIcon />
        </IconButton>
        <IconButton>
          <GridViewIcon />
        </IconButton>

        <Avatar sx={{ bgcolor: "orange" }}>G</Avatar>
      </div>

      {/* For Mobile Devices */}
      <div className="flex justify-center items-center md:hidden">
        <IconButton onClick={() => props.setOpen(true)} aria-label="Sidebar">
          <MenuIcon />
        </IconButton>
      </div>

      <div className="bg-white px-2 flex justify-between items-center md:hidden">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
        <IconButton>
          <Avatar sx={{ bgcolor: "orange" }}>G</Avatar>
        </IconButton>
      </div>
      <div className="p-2 bg-white md:hidden">
        <div className=" border border-gray-400 p-2 rounded-md flex space-x-2 md:hidden bg-white w-full">
          <SearchOutlined />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
