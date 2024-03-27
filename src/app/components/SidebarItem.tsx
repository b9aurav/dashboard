"use client";
import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type Props = {
  title: string;
  icon: React.ReactNode;
  href?: string;
  children?: Array<{ title: string; href: string }>;
};

const SidebarItem = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="my-2">
      <a
        onClick={handleToggle}
        className="flex items-center w-full relative p-2 rounded-md text-gray-700 hover:bg-gray-200 cursor-pointer"
      >
        <span className="mx-2">{props.icon}</span>
        <span className={isOpen ? 'text-black font-bold' : 'text-[grey]'}>{props.title}</span>
        {isOpen && props.children && (
          <div className="absolute right-2">
            <KeyboardArrowUpIcon />
          </div>
        )}
        {!isOpen && props.children && (
          <div className="absolute right-2">
            <KeyboardArrowDownIcon />
          </div>
        )}
      </a>
      {isOpen && props.children && (
        <div className="ml-4">
          {props.children.map((child, index) => (
            <a
              className="block p-2 ml-6 rounded-md text-gray-700 hover:bg-gray-300 my-2"
              key={index}
              href={child.href}
            >
              {child.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
