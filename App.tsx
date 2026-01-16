import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardScreen from "./components/screens/DashboardScreen";
import InventoryScreen from "./components/screens/InventoryScreen";
import InvoicesScreen from "./components/screens/InvoicesScreen";
import MarketplaceScreen from "./components/screens/MarketplaceScreen";
import OrdersScreen from "./components/screens/OrdersScreen";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState("dashboard");

  const renderScreen = () => {
    switch (currentScreen) {
      case "dashboard":
        return <DashboardScreen />;
      case "inventory":
        return <InventoryScreen />;
      case "invoices":
        return <InvoicesScreen />;
      case "marketplace":
        return <MarketplaceScreen />;
      case "orders":
        return <OrdersScreen />;
      default:
        // Fallback for unknown screens
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-10 opacity-60">
            <h2 className="text-xl font-bold text-text-main dark:text-white">
              Page Not Found
            </h2>
            <button 
                onClick={() => setCurrentScreen("dashboard")}
                className="mt-6 text-primary font-medium hover:underline"
            >
                Return to Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100">
      <Sidebar currentScreen={currentScreen} onNavigate={setCurrentScreen} />

      <main className="flex-1 overflow-y-auto h-full p-4 lg:p-10 relative">
        <div className="max-w-[1400px] mx-auto h-full">
          
          {/* Header Mobile - Only visible on small screens */}
          <div className="flex lg:hidden items-center justify-between mb-6">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl">soup_kitchen</span>
                <h2 className="text-xl font-bold text-text-main dark:text-white">
                SnooSupply
                </h2>
            </div>
            <button className="text-gray-500">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>

          {renderScreen()}
          
        </div>
      </main>
    </div>
  );
};

export default App;
