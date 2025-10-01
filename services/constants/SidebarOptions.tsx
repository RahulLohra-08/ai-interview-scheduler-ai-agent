import { Calendar, LayoutDashboard, List, Settings, WalletCards } from "lucide-react";

export const SidebarOptions = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "Scheduled Interview",
    icon: Calendar,
    path: "/scheduled-interview",
  },
  {
    label: "All Interview",
    icon: List,
    path: "/all-interview",
  },
  {
    label: "Billing",
    icon: WalletCards,
    path: "/billing",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  }
];  