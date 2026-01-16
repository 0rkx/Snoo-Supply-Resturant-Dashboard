export interface KPIData {
  label: string;
  value: string;
  icon: string;
  trend: number;
  trendLabel: string;
  isPositive: boolean;
  subtext?: string;
  iconColorClass?: string;
}

export interface ReorderItem {
  id: string;
  name: string;
  image: string;
  suggestion: string;
  price: string;
  lastOrdered: string;
  badges?: {
    text: string;
    colorClass: string;
    bgClass: string;
  }[];
}

export interface OrderItem {
  id: string;
  supplier: string;
  status: 'Out for Delivery' | 'Processing' | 'Received';
  orderNumber: string;
  category: string;
  eta?: string;
  progress?: number;
  isCompleted?: boolean;
}

export interface StockAlert {
  id: string;
  name: string;
  quantity: string;
  severity: 'high' | 'medium' | 'low';
}

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  stockLevel: number;
  reorderPoint: number;
  maxStock: number;
  unit: string;
  status: 'In Stock' | 'Low Stock' | 'Critical';
}

export interface InvoiceItem {
  id: string;
  invoiceNumber: string;
  dateIssued: string;
  supplierName: string;
  supplierLogo?: string;
  amount: string;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
}

export interface MarketplaceItem {
  id: string;
  name: string;
  category: string;
  supplier: string;
  price: string;
  unit: string;
  image: string;
  rating: number;
  reviews: number;
  isOrganic?: boolean;
  isLocal?: boolean;
  discount?: string;
}

export interface DetailedOrder {
  id: string;
  orderNumber: string;
  date: string;
  supplier: string;
  supplierLogo?: string;
  status: 'Placed' | 'Confirmed' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: string;
  itemsCount: number;
  itemsSummary: string;
}

export interface SnoonuOrder {
  id: string;
  customerName: string;
  items: string;
  total: string;
  status: 'New' | 'Preparing' | 'Ready' | 'Picked Up';
  timeElapsed: string;
  driverStatus: string;
  isLate?: boolean;
}
