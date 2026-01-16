import React from "react";
import { OrderItem } from "../types";

interface IncomingOrdersProps {
  orders: OrderItem[];
}

const IncomingOrders: React.FC<IncomingOrdersProps> = ({ orders }) => {
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base font-bold text-text-main dark:text-white">
          Incoming Orders
        </h3>
        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[20px]">
            calendar_month
          </span>
        </button>
      </div>
      <div className="relative pl-2">
        {/* Vertical Line */}
        <div className="absolute top-2 left-[7px] bottom-4 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

        {orders.map((order, index) => {
          const isLast = index === orders.length - 1;
          const isActive = order.status === "Out for Delivery";
          const isReceived = order.status === "Received";

          return (
            <div key={order.id} className={`relative pl-8 ${!isLast ? 'pb-8' : ''}`}>
              <div
                className={`absolute left-0 top-1 size-4 rounded-full border-4 border-white dark:border-card-dark shadow-sm z-10 ${
                  isActive
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              ></div>
              <div className={`flex flex-col gap-1 ${isReceived ? 'opacity-60' : isActive ? 'opacity-100' : 'opacity-80'}`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-text-main dark:text-white">
                    {order.supplier}
                  </span>
                  <span
                    className={`text-xs ${
                      isActive ? "font-bold text-primary" : "text-text-muted dark:text-gray-400"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-xs text-text-muted dark:text-gray-400">
                  {order.orderNumber} • {order.category}
                </p>
                {isActive && order.progress && (
                  <div className="mt-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-primary h-1.5 rounded-full"
                      style={{ width: `${order.progress}%` }}
                    ></div>
                  </div>
                )}
                 {order.eta && (
                    <p className="text-[10px] text-text-muted dark:text-gray-500 mt-1 text-right">
                      {order.eta}
                    </p>
                 )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IncomingOrders;
