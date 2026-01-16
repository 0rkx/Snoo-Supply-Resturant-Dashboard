import React from "react";
import { KPIData } from "../types";

const KPICard: React.FC<{ data: KPIData }> = ({ data }) => {
  return (
    <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-text-muted dark:text-gray-400 text-sm font-medium mb-1">
            {data.label}
          </p>
          <h3 className="text-2xl font-bold text-primary dark:text-red-500 tracking-tight">
            {data.value}
          </h3>
        </div>
        <div className="bg-primary/5 dark:bg-primary/10 p-2 rounded-lg text-primary">
          <span className="material-symbols-outlined">{data.icon}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1 text-xs font-medium">
        {data.trend !== 0 && (
          <span
            className={`flex items-center gap-1 ${
              data.trend > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {data.trend > 0 ? "trending_up" : "trending_down"}
            </span>
            <span>
              {data.trend > 0 ? "+" : ""}
              {data.trend}% {data.trendLabel}
            </span>
          </span>
        )}
        {data.trend === 0 && data.subtext && (
          <span className="text-text-muted dark:text-gray-500">
            {data.subtext}
          </span>
        )}
      </div>
    </div>
  );
};

export default KPICard;
