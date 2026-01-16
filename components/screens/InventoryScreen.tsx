import React from "react";
import { INVENTORY_ITEMS } from "../../constants";

const InventoryScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-text-muted mb-1">
            <span>Dashboard</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="font-medium text-text-main dark:text-white">
              Inventory
            </span>
          </div>
          <h2 className="text-2xl font-bold text-text-main dark:text-white">
            Inventory Dashboard
          </h2>
          <p className="text-text-muted dark:text-gray-400 mt-1 text-sm max-w-2xl">
            Monitor real-time stock levels across all kitchen locations. AI-driven
            insights highlight critical restocking needs.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
            Export Report
          </button>
          <button className="px-4 py-2 bg-primary hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add New Item
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Items", value: "1,248" },
          {
            label: "Low Stock Alerts",
            value: "12",
            badge: "Needs Attention",
            badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
          },
          { label: "Total Value", value: "QAR 45,200" },
          { label: "Categories", value: "18" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm"
          >
            <p className="text-sm font-medium text-text-muted dark:text-gray-400 mb-2">
              {stat.label}
            </p>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-text-main dark:text-white">
                {stat.value}
              </h3>
              {stat.badge && (
                <span
                  className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${stat.badgeColor}`}
                >
                  {stat.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card-light dark:bg-card-dark p-2 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <div className="flex flex-1 gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:max-w-xs">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Search by Item Name, SKU..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 text-text-main dark:text-white"
            />
          </div>
          <button className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-text-muted hover:text-text-main dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">category</span>
            <span className="hidden sm:inline">Category</span>
          </button>
          <button className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-text-muted hover:text-text-main dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">local_shipping</span>
            <span className="hidden sm:inline">Supplier</span>
          </button>
          <button className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-text-muted hover:text-text-main dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            <span className="hidden sm:inline">More Filters</span>
          </button>
        </div>
        <button className="w-full sm:w-auto px-4 py-2 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[18px]">tune</span>
          Adjust Stock
        </button>
      </div>

      {/* Inventory Table */}
      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800 text-xs uppercase tracking-wider text-text-muted dark:text-gray-500 font-medium">
                <th className="p-4 w-12 text-center">
                  <div className="size-4 rounded border border-gray-300 dark:border-gray-600"></div>
                </th>
                <th className="p-4">Item Details</th>
                <th className="p-4">Category</th>
                <th className="p-4 w-1/4">Current Stock</th>
                <th className="p-4">Unit</th>
                <th className="p-4">Status</th>
                <th className="p-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {INVENTORY_ITEMS.map((item) => {
                const stockPercentage = Math.min(
                  (item.stockLevel / item.maxStock) * 100,
                  100
                );
                let barColor = "bg-green-500";
                if (item.status === "Critical") barColor = "bg-primary";
                else if (item.status === "Low Stock") barColor = "bg-amber-500";

                let statusBadge = "";
                if (item.status === "Critical")
                  statusBadge =
                    "bg-red-50 text-red-700 border border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30";
                else if (item.status === "Low Stock")
                  statusBadge =
                    "bg-amber-50 text-amber-700 border border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/30";
                else
                  statusBadge =
                    "bg-green-50 text-green-700 border border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30";

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                  >
                    <td className="p-4 text-center">
                      <div className="size-4 rounded border border-gray-300 dark:border-gray-600 mx-auto cursor-pointer"></div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-semibold text-text-main dark:text-white">
                        {item.name}
                      </p>
                      <p className="text-xs text-text-muted dark:text-gray-500 font-mono mt-0.5">
                        SKU: {item.sku}
                      </p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-2.5 py-1 rounded bg-gray-100 dark:bg-gray-800 text-xs font-medium text-text-muted dark:text-gray-400">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span
                          className={`font-bold ${
                            item.stockLevel <= item.reorderPoint
                              ? "text-primary dark:text-red-400"
                              : "text-text-main dark:text-white"
                          }`}
                        >
                          {item.stockLevel} left
                        </span>
                        <span className="text-text-muted dark:text-gray-500">
                          Reorder at {item.reorderPoint}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${barColor}`}
                          style={{ width: `${stockPercentage}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-text-muted dark:text-gray-400">
                        {item.unit}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${statusBadge}`}
                      >
                        {item.status === "Critical" ||
                        item.status === "Low Stock" ? (
                          <span className="mr-1.5 size-1.5 rounded-full bg-current opacity-70"></span>
                        ) : null}
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button className="text-gray-400 hover:text-text-main dark:hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <p className="text-xs text-text-muted dark:text-gray-500">
            Showing <span className="font-bold">1</span> to{" "}
            <span className="font-bold">5</span> of{" "}
            <span className="font-bold">1,248</span> results
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-medium text-text-muted hover:text-text-main dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-medium text-text-muted hover:text-text-main dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryScreen;