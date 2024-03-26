import GridViewIcon from '@mui/icons-material/GridView';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SupportIcon from '@mui/icons-material/Support';
import FolderIcon from '@mui/icons-material/Folder';

export const DashboardMenu = [
  {
    title: "Dashboard",
    icon: <GridViewIcon />,
    children: [
      {
        title: "Analytics",
        href: "/#",
      },
      {
        title: "Finance",
        href: "/#",
      },
      {
        title: "Job board",
        href: "/#",
      },
    ],
  },
  {
    title: "Message",
    icon: <EmailIcon />,
    children: [
      {
        title: "Item 1",
        href: "/#",
      },
      {
        title: "Item 2",
        href: "/#",
      },
      {
        title: "Item 3",
        href: "/#",
      },
    ],
  },
  {
    title: "Friends",
    icon: <PersonIcon />,
    children: [
      {
        title: "Item 1",
        href: "/#",
      },
      {
        title: "Item 2",
        href: "/#",
      },
      {
        title: "Item 3",
        href: "/#",
      },
    ],
  },
  {
    title: "Apps",
    icon: <GridViewIcon />,
    children: [
      {
        title: "Item 1",
        href: "/#",
      },
      {
        title: "Item 2",
        href: "/#",
      },
      {
        title: "Item 3",
        href: "/#",
      },
    ],
  },
];

export const PagesMenu = [
  {
    title: "HelpCenter",
    icon: <SupportIcon />,
    children: [
      {
        title: "Item 1",
        href: "/#",
      },
      {
        title: "Item 2",
        href: "/#",
      },
      {
        title: "Item 3",
        href: "/#",
      },
    ],
  },
  {
    title: "FileManager",
    icon: <FolderIcon />,
    children: [
      {
        title: "Item 1",
        href: "/#",
      },
      {
        title: "Item 2",
        href: "/#",
      },
      {
        title: "Item 3",
        href: "/#",
      },
    ],
  },
];
