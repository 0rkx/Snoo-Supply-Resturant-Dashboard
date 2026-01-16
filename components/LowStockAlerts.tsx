import React from "react";
import { StockAlert } from "../types";

interface LowStockAlertsProps {
  alerts: StockAlert[];
}

const LowStockAlerts: React.FC<LowStockAlertsProps> = ({ alerts }) => {
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 flex-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-bold text-text-main dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-amber-500">
            warning
          </span>
          Low Stock
        </h3>
        <button className="text-xs font-medium text-text-muted hover:text-text-main dark:text-gray-400 dark:hover:text-white transition-colors">
          See all
        </button>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => {
          let containerClass = "";
          let dotClass = "";
          let textClass = "";
          let btnText = "Restock";
          let btnClass =
            "text-primary hover:bg-primary/5 p-1.5 rounded transition-colors text-xs font-bold uppercase tracking-wide";

          if (alert.severity === "high") {
            containerClass =
              "bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30";
            dotClass = "bg-amber-500";
            textClass = "text-amber-700 dark:text-amber-400";
          } else if (alert.severity === "medium") {
            containerClass =
              "bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30";
            dotClass = "bg-red-500";
            textClass = "text-red-700 dark:text-red-400";
          } else {
            containerClass =
              "hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent";
            dotClass = "bg-gray-300 dark:bg-gray-600";
            textClass = "text-text-muted dark:text-gray-500";
            btnText = "View";
            btnClass =
              "text-text-muted hover:text-primary transition-colors text-xs font-medium";
          }

          return (
            <div
              key={alert.id}
              className={`flex items-center justify-between p-3 rounded-lg ${containerClass}`}
            >
              <div className="flex items-center gap-3">
                <div className={`size-2 rounded-full ${dotClass}`}></div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-text-main dark:text-white">
                    {alert.name}
                  </span>
                  <span className={`text-xs ${textClass}`}>{alert.quantity}</span>
                </div>
              </div>
              <button className={btnClass}>{btnText}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LowStockAlerts;
