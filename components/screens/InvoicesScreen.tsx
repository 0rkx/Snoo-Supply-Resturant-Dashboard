import React from "react";
import { INVOICES } from "../../constants";

const InvoicesScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-text-muted mb-1">
            <span>Home</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span>Financials</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="font-medium text-text-main dark:text-white">
              Invoices
            </span>
          </div>
          <h2 className="text-2xl font-bold text-text-main dark:text-white">
            Invoices
          </h2>
          <p className="text-text-muted dark:text-gray-400 mt-1 text-sm">
            Manage your B2B invoices and financial documents
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
            New Invoice
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Due */}
        <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-text-muted dark:text-gray-400 font-medium">
                Total Due
              </p>
              <h3 className="text-3xl font-bold text-text-main dark:text-white mt-2">
                QAR 14,250.00
              </h3>
              <div className="mt-3 inline-flex items-center px-2.5 py-1 rounded bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-xs font-bold">
                3 Overdue
                <span className="ml-1 font-normal text-red-600 dark:text-red-300">
                  requiring attention
                </span>
              </div>
            </div>
            <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-[24px]">
                warning
              </span>
            </div>
          </div>
        </div>

        {/* Paid */}
        <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-text-muted dark:text-gray-400 font-medium">
                Paid (Last 30 Days)
              </p>
              <h3 className="text-3xl font-bold text-text-main dark:text-white mt-2">
                QAR 52,100.00
              </h3>
              <div className="mt-3 flex items-center gap-1 text-green-600 dark:text-green-400 text-xs font-medium">
                <span className="material-symbols-outlined text-[16px]">
                  trending_up
                </span>
                <span>+12% vs previous month</span>
              </div>
            </div>
            <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-[24px]">
                payments
              </span>
            </div>
          </div>
        </div>

        {/* Pending Approval */}
        <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-text-muted dark:text-gray-400 font-medium">
                Pending Approval
              </p>
              <h3 className="text-3xl font-bold text-text-main dark:text-white mt-2">
                5
              </h3>
              <p className="mt-3 text-xs text-text-muted dark:text-gray-400">
                Est. value: <span className="font-bold text-text-main dark:text-white">QAR 3,400.00</span>
              </p>
            </div>
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-[24px]">
                fact_check
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-card-light dark:bg-card-dark p-2 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative flex-1 w-full sm:max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
            search
          </span>
          <input
            type="text"
            placeholder="Filter by Supplier, ID or Amount..."
            className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-sm text-text-main dark:text-white"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-text-muted hover:text-text-main dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">
              calendar_today
            </span>
            Date Range
          </button>
          <button className="flex-1 sm:flex-none px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-text-muted hover:text-text-main dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">
              filter_list
            </span>
            Status
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800 text-xs uppercase tracking-wider text-text-muted dark:text-gray-500 font-medium">
                <th className="p-4">Invoice #</th>
                <th className="p-4">Date Issued</th>
                <th className="p-4">Supplier / Merchant</th>
                <th className="p-4">Total Amount</th>
                <th className="p-4">Due Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {INVOICES.map((inv) => {
                let statusStyles = "";
                let dueDateStyles = "text-text-main dark:text-white";

                if (inv.status === "Paid") {
                  statusStyles = "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400";
                } else if (inv.status === "Pending") {
                  statusStyles = "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400";
                } else if (inv.status === "Overdue") {
                  statusStyles = "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400";
                  dueDateStyles = "text-red-600 dark:text-red-400 font-semibold";
                }

                // Generates a nice colored icon based on name
                const initial = inv.supplierName.charAt(0);
                const colors = ["bg-orange-100 text-orange-600", "bg-blue-100 text-blue-600", "bg-purple-100 text-purple-600", "bg-emerald-100 text-emerald-600", "bg-indigo-100 text-indigo-600"];
                const colorClass = colors[inv.supplierName.length % colors.length];

                return (
                  <tr
                    key={inv.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="p-4">
                      <span className="text-sm font-semibold text-text-main dark:text-white">
                        {inv.invoiceNumber}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-text-muted dark:text-gray-400">
                        {inv.dateIssued}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`size-8 rounded-lg flex items-center justify-center text-xs font-bold ${colorClass}`}>
                          {initial}
                        </div>
                        <span className="text-sm font-medium text-text-main dark:text-white">
                          {inv.supplierName}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-bold text-text-main dark:text-white">
                        {inv.amount}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`text-sm ${dueDateStyles}`}>
                        {inv.dueDate}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded text-xs font-medium ${statusStyles}`}
                      >
                        {inv.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-text-main dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                        </button>
                        {inv.status !== 'Paid' && (
                            <button className="px-3 py-1.5 bg-primary hover:bg-red-700 text-white text-xs font-medium rounded transition-colors">
                                Pay Now
                            </button>
                        )}
                      </div>
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
            <span className="font-bold">24</span> results
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

export default InvoicesScreen;