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

export const DRAWER_WIDTH = 240;

// Paths are absolute (from app root) since Next.js routing doesn't nest
// relative to the sidebar the way react-router's <Link to="startworkout">
// nested under a parent route does. Adjust the "/dashboard" prefix if your
// routes live elsewhere.
export const NAV_SECTIONS: NavSection[] = [
  {
    label: "Main",
    links: [
      { path: "/dashboard", label: "Dashboard", icon: DashboardOutlinedIcon },
      { path: "/dashboard/startworkout", label: "Start Workout", icon: FitnessCenterOutlinedIcon },
      { path: "/dashboard/routine", label: "Gym Calendar", icon: CalendarMonthOutlinedIcon },
      { path: "/dashboard/notes", label: "My Fitness List", icon: ChecklistOutlinedIcon },
    ],
  },
  {
    label: "Track",
    links: [
      { path: "/dashboard/progress", label: "My Progress", icon: BarChartOutlinedIcon },
      { path: "/dashboard/gymloginhistory", label: "Gym Status", icon: HistoryOutlinedIcon },
      { path: "/dashboard/leaderboard", label: "Leaderboards", icon: EmojiEventsOutlinedIcon },
      { path: "/dashboard/community", label: "Community", icon: GroupsOutlinedIcon },
    ],
  },
  {
    label: "Account",
    links: [
      { path: "/dashboard/notifications", label: "Notifications", icon: NotificationsNoneOutlinedIcon },
      { path: "/dashboard/profile", label: "Profile", icon: PersonOutlineOutlinedIcon },
      { path: "/dashboard/settings", label: "Settings", icon: SettingsOutlinedIcon },
    ],
  },
];