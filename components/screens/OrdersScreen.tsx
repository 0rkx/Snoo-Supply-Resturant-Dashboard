import React from "react";
import { ALL_ORDERS } from "../../constants";

const OrdersScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-text-muted mb-1">
            <span>Dashboard</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="font-medium text-text-main dark:text-white">
              Orders
            </span>
          </div>
          <h2 className="text-2xl font-bold text-text-main dark:text-white">
            Order History
          </h2>
          <p className="text-text-muted dark:text-gray-400 mt-1">
            Track active shipments and review past purchases.
          </p>
        </div>
        <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
            Export CSV
          </button>
          <button className="px-4 py-2 bg-primary hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Create Order
          </button>
        </div>
      </div>

      {/* Order Status Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-8">
            {['All Orders', 'Active', 'Delivered', 'Cancelled'].map((tab, idx) => (
                <button 
                    key={idx}
                    className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                        idx === 0 
                        ? "border-primary text-primary dark:text-red-400" 
                        : "border-transparent text-text-muted dark:text-gray-400 hover:text-text-main dark:hover:text-white"
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-card-light dark:bg-card-dark p-2 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative flex-1 w-full sm:max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
            search
          </span>
          <input
            type="text"
            placeholder="Search by Order # or Supplier..."
            className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-sm text-text-main dark:text-white"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-text-muted hover:text-text-main dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">
              filter_alt
            </span>
            Filter
          </button>
        </div>
      </div>

      {/* Orders List */}
      <div className="flex flex-col gap-4">
        {ALL_ORDERS.map((order) => {
             let statusColor = "";
             let icon = "";
             
             switch(order.status) {
                 case 'Delivered':
                     statusColor = "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-900";
                     icon = "check_circle";
                     break;
                 case 'Shipped':
                 case 'Confirmed':
                     statusColor = "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-900";
                     icon = "local_shipping";
                     break;
                 case 'Placed':
                     statusColor = "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 border-amber-200 dark:border-amber-900";
                     icon = "schedule";
                     break;
                 case 'Cancelled':
                     statusColor = "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-900";
                     icon = "cancel";
                     break;
             }

            return (
                <div key={order.id} className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:shadow-md transition-shadow">
                    
                    {/* Icon / Logo Area */}
                    <div className="size-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                         <span className="material-symbols-outlined text-gray-500">inventory_2</span>
                    </div>

                    {/* Order Details */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        <div>
                            <p className="text-sm font-bold text-text-main dark:text-white">{order.orderNumber}</p>
                            <p className="text-xs text-text-muted dark:text-gray-400 mt-1">{order.date}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-text-main dark:text-white">{order.supplier}</p>
                            <p className="text-xs text-text-muted dark:text-gray-400 mt-1 truncate max-w-[150px]">{order.itemsSummary}</p>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-text-main dark:text-white">{order.total}</p>
                            <p className="text-xs text-text-muted dark:text-gray-400 mt-1">{order.itemsCount} Items</p>
                        </div>
                        <div className="flex items-center sm:justify-end">
                            <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${statusColor}`}>
                                <span className="material-symbols-outlined text-[14px]">{icon}</span>
                                {order.status}
                            </span>
                        </div>
                    </div>

                    {/* Action */}
                    <div className="flex gap-2 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-gray-100 dark:border-gray-800">
                        <button className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                            Details
                        </button>
                        <button className="flex-1 sm:flex-none px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-text-main dark:text-white text-sm font-medium rounded-lg transition-colors">
                            Reorder
                        </button>
                    </div>
                </div>
            );
        })}
      </div>
    </div>
  );
};

export default OrdersScreen;
