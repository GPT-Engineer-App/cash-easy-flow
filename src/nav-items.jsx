import { Home, CreditCard, PiggyBank, Settings as SettingsIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Transactions from "./pages/Transactions.jsx";
import Savings from "./pages/Savings.jsx";
import Settings from "./pages/Settings.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Transactions",
    to: "/transactions",
    icon: <CreditCard className="h-4 w-4" />,
    page: <Transactions />,
  },
  {
    title: "Savings",
    to: "/savings",
    icon: <PiggyBank className="h-4 w-4" />,
    page: <Savings />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <SettingsIcon className="h-4 w-4" />,
    page: <Settings />,
  },
];
