import React from "react";
import KPICard from "../KPICard";
import SmartReordering from "../SmartReordering";
import IncomingOrders from "../IncomingOrders";
import LowStockAlerts from "../LowStockAlerts";
import LiveSnoonuOrders from "../LiveSnoonuOrders";
import { KPI_STATS, REORDER_ITEMS, INCOMING_ORDERS, STOCK_ALERTS, LIVE_SNOONU_ORDERS } from "../../constants";

const DashboardScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-bold text-text-main dark:text-white">
          Dashboard
        </h2>
        <p className="text-text-muted dark:text-gray-400 mt-1">
          Welcome back, here is what's happening at your restaurant today.
        </p>
      </div>

      {/* KPI Strip */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI_STATS.map((stat, index) => (
          <KPICard key={index} data={stat} />
        ))}
      </section>

      {/* Live Snoonu Orders Section */}
      <section>
        <LiveSnoonuOrders orders={LIVE_SNOONU_ORDERS} />
      </section>

      {/* Dashboard Grid (Bento Box) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Column: Smart Reordering */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <SmartReordering items={REORDER_ITEMS} />
        </div>

        {/* Right Column: Timeline & Alerts */}
        <div className="flex flex-col gap-6">
          <IncomingOrders orders={INCOMING_ORDERS} />
          <LowStockAlerts alerts={STOCK_ALERTS} />
        </div>
      </section>
    </div>
  );
};

export default DashboardScreen;
