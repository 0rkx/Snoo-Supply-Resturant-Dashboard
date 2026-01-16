import React from "react";
import { SnoonuOrder } from "../types";

interface LiveSnoonuOrdersProps {
  orders: SnoonuOrder[];
}

const LiveSnoonuOrders: React.FC<LiveSnoonuOrdersProps> = ({ orders }) => {
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 flex flex-col w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">
                moped
            </span>
            <h3 className="text-lg font-bold text-text-main dark:text-white">
            Live Snoonu Orders
            </h3>
        </div>
        <div className="flex gap-2">
             <button className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-bold flex items-center gap-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Live
             </button>
             <button className="text-text-muted hover:text-text-main dark:text-gray-400 dark:hover:text-white transition-colors">
                <span className="material-symbols-outlined">more_horiz</span>
             </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {orders.map((order) => {
            let statusColor = "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
            if (order.status === 'New') statusColor = "bg-primary text-white animate-pulse";
            if (order.status === 'Preparing') statusColor = "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
            if (order.status === 'Ready') statusColor = "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";

            return (
                <div key={order.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col gap-3 bg-white dark:bg-card-dark shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="font-bold text-lg text-text-main dark:text-white">{order.id}</span>
                            <p className="text-xs text-text-muted dark:text-gray-400">{order.customerName}</p>
                        </div>
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${statusColor}`}>
                            {order.status}
                        </span>
                    </div>
                    
                    <div className="flex-1">
                        <p className="text-sm font-medium text-text-main dark:text-white line-clamp-2">{order.items}</p>
                        <p className="text-xs text-text-muted dark:text-gray-500 mt-1">{order.total}</p>
                    </div>

                    <div className="border-t border-gray-100 dark:border-gray-700 pt-3 flex justify-between items-center">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-text-muted dark:text-gray-400">
                             <span className="material-symbols-outlined text-[16px]">schedule</span>
                             <span className={order.isLate ? "text-red-500 font-bold" : ""}>{order.timeElapsed}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-text-muted dark:text-gray-400">
                            <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                            <span className="truncate max-w-[100px]">{order.driverStatus}</span>
                        </div>
                    </div>
                    
                    {order.status === 'New' && (
                        <button className="w-full mt-1 bg-primary hover:bg-red-700 text-white text-xs font-bold py-2 rounded-lg transition-colors">
                            Accept Order
                        </button>
                    )}
                     {order.status === 'Preparing' && (
                        <button className="w-full mt-1 bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2 rounded-lg transition-colors">
                            Mark Ready
                        </button>
                    )}
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default LiveSnoonuOrders;
