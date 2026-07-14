import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { NavSection } from "../types/types.sideNav";

export const DRAWER_WIDTH = 240;          // expanded (hover) width
export const DRAWER_WIDTH_COLLAPSED = 76; // icon-only rail width
export const DRAWER_TRANSITION_MS = 200;

export const NAV_SECTIONS: NavSection[] = [
  {
    label: "Main",
    links: [
      { path: "/home", label: "Dashboard", icon: DashboardOutlinedIcon },
      { path: "/workout", label: "Start Workout", icon: FitnessCenterOutlinedIcon },
      { path: "/gymcalendar", label: "Gym Calendar", icon: CalendarMonthOutlinedIcon },
      { path: "/fitnesslist", label: "My Fitness List", icon: ChecklistOutlinedIcon },
    ],
  },
  {
    label: "Track",
    links: [
      { path: "/progress", label: "My Progress", icon: BarChartOutlinedIcon },
      { path: "/gymstatus", label: "Gym Status", icon: HistoryOutlinedIcon },
      { path: "/leaderboard", label: "Leaderboards", icon: EmojiEventsOutlinedIcon },
      { path: "/community", label: "Community", icon: GroupsOutlinedIcon },
    ],
  },
  {
    label: "Account",
    links: [
      { path: "/notifications", label: "Notifications", icon: NotificationsNoneOutlinedIcon },
      { path: "/profile", label: "Profile", icon: PersonOutlineOutlinedIcon },
      { path: "/settings", label: "Settings", icon: SettingsOutlinedIcon },
    ],
  },
];