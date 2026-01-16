import React from "react";

interface SidebarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentScreen, onNavigate }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "marketplace", label: "Marketplace", icon: "storefront" },
    { id: "inventory", label: "Inventory", icon: "inventory_2" },
    { id: "orders", label: "Orders", icon: "receipt_long" },
    { id: "invoices", label: "Invoices", icon: "description" },
  ];

  return (
    <aside className="hidden lg:flex w-64 flex-shrink-0 flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1d21] transition-all duration-300 h-screen sticky top-0">
      {/* Brand */}
      <div className="p-6 pb-2">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 flex items-center justify-center rounded-xl size-10 shrink-0">
            <span className="material-symbols-outlined text-primary text-2xl">
              soup_kitchen
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-text-main dark:text-white text-lg font-bold tracking-tight leading-none">
              SnooSupply
            </h1>
            <p className="text-text-muted dark:text-gray-400 text-xs font-medium mt-1">
              Restaurant Dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary dark:text-red-400 font-medium"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 text-text-main dark:text-gray-300"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${
                  isActive
                    ? "text-primary dark:text-red-400"
                    : "text-text-muted group-hover:text-text-main dark:text-gray-400 dark:group-hover:text-white"
                }`}
              >
                {item.icon}
              </span>
              <span className={`text-sm ${isActive ? "" : "font-medium"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <button className="flex items-center gap-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors text-left">
          <div
            className="size-9 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-gray-700"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100')",
            }}
          ></div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-semibold text-text-main dark:text-white truncate">
              Ahmed Al-Snoo
            </p>
            <p className="text-xs text-text-muted dark:text-gray-400 truncate">
              Manager
            </p>
          </div>
          <span className="material-symbols-outlined text-gray-400 ml-auto text-[20px]">
            expand_more
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
