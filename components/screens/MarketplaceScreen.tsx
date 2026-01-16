import React from "react";
import { MARKETPLACE_ITEMS } from "../../constants";

const MarketplaceScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 h-full">
      {/* Header with Search and Cart */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-main dark:text-white">
            Marketplace
          </h2>
          <p className="text-text-muted dark:text-gray-400 mt-1">
            Browse and order supplies from verified local and global vendors.
          </p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Search products, suppliers..."
              className="w-full pl-10 pr-4 py-2.5 bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 text-text-main dark:text-white shadow-sm"
            />
          </div>
          <button className="relative p-2.5 bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-xl text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white ring-2 ring-white dark:ring-background-dark">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Categories Horizontal Scroll */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
        {[
          { name: "All Categories", icon: "grid_view", active: true },
          { name: "Produce", icon: "nutrition" },
          { name: "Meat & Poultry", icon: "skillet" },
          { name: "Seafood", icon: "set_meal" },
          { name: "Dairy & Eggs", icon: "egg" },
          { name: "Dry Goods", icon: "grain" },
          { name: "Beverages", icon: "local_cafe" },
          { name: "Packaging", icon: "inventory_2" },
        ].map((cat, idx) => (
          <button
            key={idx}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-all ${
              cat.active
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-card-light dark:bg-card-dark border-gray-200 dark:border-gray-700 text-text-muted dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              {cat.icon}
            </span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6">
        {/* Promo Banner - Spans 2 columns on large screens */}
        <div className="sm:col-span-2 relative rounded-2xl overflow-hidden shadow-sm min-h-[280px] group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 p-8 flex flex-col justify-center">
            <span className="text-amber-400 font-bold tracking-wider text-xs uppercase mb-2">
              Limited Time Offer
            </span>
            <h3 className="text-3xl font-bold text-white mb-2 max-w-md">
              Get 20% off on all Organic Produce this week
            </h3>
            <p className="text-gray-200 mb-6 max-w-sm">
              Stock up on fresh, locally sourced fruits and vegetables.
            </p>
            <button className="w-fit bg-white text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Sale
            </button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" 
            alt="Produce Sale" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Product Cards */}
        {MARKETPLACE_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1">
                {item.isOrganic && (
                  <span className="px-2 py-1 bg-green-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wide rounded">
                    Organic
                  </span>
                )}
                {item.isLocal && (
                  <span className="px-2 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wide rounded">
                    Local
                  </span>
                )}
              </div>
              {item.discount && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wide rounded">
                  {item.discount}
                </div>
              )}
            </div>
            
            <div className="p-4 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs font-medium text-text-muted dark:text-gray-400">
                  {item.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                  {item.rating} <span className="text-gray-300 font-normal">({item.reviews})</span>
                </div>
              </div>
              
              <h3 className="text-base font-bold text-text-main dark:text-white mb-1 line-clamp-1">
                {item.name}
              </h3>
              <p className="text-xs text-text-muted dark:text-gray-500 mb-3">
                Sold by <span className="font-medium text-text-main dark:text-gray-300">{item.supplier}</span>
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-text-main dark:text-white">
                    {item.price}
                  </span>
                  <span className="text-xs text-text-muted dark:text-gray-500 ml-1">
                    / {item.unit}
                  </span>
                </div>
                <button className="size-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceScreen;
