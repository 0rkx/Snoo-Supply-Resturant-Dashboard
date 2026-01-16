import React from "react";
import { ReorderItem } from "../types";

interface SmartReorderingProps {
  items: ReorderItem[];
}

const SmartReordering: React.FC<SmartReorderingProps> = ({ items }) => {
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-wrap justify-between items-center gap-2">
        <div>
          <h2 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              auto_awesome
            </span>
            Smart Reordering
          </h2>
          <p className="text-sm text-text-muted dark:text-gray-400 mt-1">
            AI-suggested quantities based on your consumption history.
          </p>
        </div>
        <button className="text-sm font-medium text-primary hover:text-red-700 transition-colors whitespace-nowrap">
          View All Suggestions
        </button>
      </div>

      <div className="flex-1 p-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors group"
          >
            <div className="relative size-14 shrink-0 rounded-lg overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base font-semibold text-text-main dark:text-white">
                    {item.name}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    {item.badges?.map((badge, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-medium px-2 py-0.5 rounded ${badge.colorClass} ${badge.bgClass}`}
                      >
                        {badge.text}
                      </span>
                    ))}
                    <span className="text-xs text-text-muted dark:text-gray-500">
                      {item.suggestion}
                    </span>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold dark:text-gray-200">
                    {item.price}
                  </p>
                  <p className="text-xs text-text-muted dark:text-gray-500">
                    {item.lastOrdered}
                  </p>
                </div>
              </div>
            </div>
            <button className="shrink-0 bg-primary hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                add_shopping_cart
              </span>
              <span className="hidden sm:inline">Add to Cart</span>
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-700 text-center">
        <p className="text-xs text-text-muted dark:text-gray-500">
          Ordering these suggestions will save you approximately{" "}
          <span className="font-bold text-text-main dark:text-white">
            QAR 45.00
          </span>{" "}
          this week.
        </p>
      </div>
    </div>
  );
};

export default SmartReordering;