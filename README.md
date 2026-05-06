# SnooSupply Restaurant Dashboard

SnooSupply is a frontend prototype of a restaurant inventory and order management dashboard, originally developed during the Snoonu Hackathon. The current implementation focuses on the client-side user interface, providing a view into how restaurant managers can track live orders, monitor stock levels, view invoices, and interact with a supplier marketplace.

The application is built as a single-page React application using Vite and TypeScript. It relies on local component state and static mock data to demonstrate the intended workflows before integrating with a persistent backend.

## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Folder Structure](#folder-structure)
- [Data Model](#data-model)
- [Main User Flows](#main-user-flows)
- [Setup Instructions](#setup-instructions)
- [Available Scripts](#available-scripts)
- [Configuration Notes](#configuration-notes)
- [Testing](#testing)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)

## About the Project

This project addresses the operational complexity of managing restaurant supplies, orders, and inventory. The intended users are restaurant managers or owners who need a centralized view of their business operations.

At this stage, the project is a prototype. The UI and data models are defined, but there is no connected backend or database. All interactions, such as viewing live Snoonu orders or checking stock alerts, rely on mock data defined in the application constants.

## Key Features

- **Dashboard View**: Displays key performance indicators (KPIs), live delivery orders, incoming supply deliveries, and low stock alerts.
- **Inventory Management**: A tabular view of current stock levels, including reorder points, SKUs, and categorization (e.g., Pantry, Dairy).
- **Invoice Tracking**: A screen listing recent invoices, their status (Paid, Pending, Overdue), and associated supplier details.
- **Marketplace Prototyping**: A grid view showing available supplier items with pricing, supplier names, and product imagery.
- **Order History**: A detailed list of past orders, including supplier names, order status, and total costs.
- **Smart Reordering Widget**: A UI component that suggests items to reorder based on mocked consumption history. The codebase mentions "AI-driven" logic, but the current implementation displays static suggestions defined in the frontend.

## Tech Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| Frontend | React 19 / TypeScript | Renders the component-based UI and ensures type safety for the domain models. |
| Styling | Tailwind CSS | Provides utility classes for rapid UI iteration (currently loaded via CDN in `index.html`). |
| Build Tool | Vite | Compiles the React application and provides a fast local development server. |
| State | React `useState` | Manages local UI state, such as screen navigation. |

## System Architecture

The application follows a simple client-side architecture suitable for rapid prototyping. The entry point, `App.tsx`, acts as a routing shell that maintains a `currentScreen` state. Depending on the selected state, it renders the appropriate screen component (e.g., `DashboardScreen`, `InventoryScreen`).

Data is stored locally in `constants.ts` and flows down into the screen and widget components via props or direct imports. There is no API layer or external state management library (like Redux) implemented at this time.

## Folder Structure

```txt
src/
  components/
    screens/            # High-level views (Dashboard, Inventory, etc.)
    IncomingOrders.tsx  # Dashboard widget for incoming supplier deliveries
    KPICard.tsx         # Reusable card component for metrics
    LiveSnoonuOrders.tsx # Dashboard widget showing outgoing customer orders
    LowStockAlerts.tsx  # Dashboard widget listing critical inventory items
    Sidebar.tsx         # Main navigation component
    SmartReordering.tsx # Dashboard widget displaying reorder suggestions
  App.tsx               # Main application shell and routing logic
  constants.ts          # Static mock data representing the database state
  index.html            # HTML template including Tailwind CDN configuration
  index.tsx             # React DOM rendering entry point
  types.ts              # TypeScript interfaces defining the domain models
```

## Important Code Concepts

The codebase utilizes several key concepts to manage state and rendering:

- **Local State Routing**: Navigation is handled purely by the `App.tsx` component using `useState`. This approach avoids the complexity of client-side routing libraries like React Router during the prototype phase.
- **Component Composition**: Dashboard widgets (like `KPICard` and `IncomingOrders`) are built as discrete components, allowing them to be composed flexibly on the main `DashboardScreen`.
- **TypeScript Type Safety**: Data models are strictly typed via interfaces in `types.ts`, ensuring that the mock data structure remains consistent throughout the UI components.

## Architectural Decisions

This section outlines the rationale behind several key structural choices:

- **Client-Side State for Rapid Prototyping**: The application relies entirely on React's local state and static mock data (`constants.ts`). This tradeoff makes sense at this stage because the main goal is to test the visual layout and role-specific screens without requiring a fully deployed backend or database.
- **Tailwind via CDN**: The project injects Tailwind CSS via a CDN script in `index.html`. While this is not optimal for production (due to larger payload sizes and runtime styling compilation), it is a pragmatic choice for a hackathon environment where fast iteration and minimal build configuration are prioritized.
- **Component-Based Architecture**: The application separates high-level views (`screens/`) from smaller, reusable widgets (`KPICard.tsx`, `Sidebar.tsx`). This decision ensures the UI is modular and easier to maintain or extend in the future.

## Data Model

The core data entities are defined in `types.ts` as TypeScript interfaces. These models dictate the structure of the mocked data and indicate how a future backend schema might be designed.

- **InventoryItem**: Represents a product in the restaurant's stock. Tracks fields like `sku`, `category`, `stockLevel`, `reorderPoint`, and `status`.
- **SnoonuOrder**: Represents an outgoing customer delivery order. Includes `customerName`, `items`, `total`, and `driverStatus`.
- **InvoiceItem**: Represents a billing document from a supplier, containing `invoiceNumber`, `amount`, `dueDate`, and `status`.
- **MarketplaceItem**: Represents an available product from a supplier in the marketplace view.

## Main User Flows

Because the app is in the prototype stage, the user flows consist primarily of navigating the UI and viewing the structured data.

1. **Dashboard Overview**: The user starts on the Dashboard. They can view aggregate KPIs (Total Cash Inflow, Operational Costs), incoming supply orders, and low stock warnings.
2. **Navigation**: The user clicks a link in the `Sidebar` component. The `App` component updates its `currentScreen` state and renders the selected view (e.g., clicking "Inventory" renders `InventoryScreen`).
3. **Checking Inventory**: On the Inventory screen, the user views a list of `InventoryItem` objects, allowing them to see which items are critically low based on the `reorderPoint` logic in the mock data.

## Setup Instructions

### Prerequisites

- Node.js (version 18 or newer recommended)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine.
2. Navigate to the repository root folder.
3. Install the required dependencies:

```bash
npm install
```

### Running Locally

Start the Vite development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000` (or the port specified in your terminal output).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local Vite development server. |
| `npm run build` | Compiles the TypeScript code and builds the production bundle. |
| `npm run preview` | Starts a local web server to preview the production build output. |

## Configuration Notes

- **`vite.config.ts`**: Configures the Vite build tool, including the React plugin. It also contains definitions for environment variables (`process.env.API_KEY` and `process.env.GEMINI_API_KEY`). However, these variables are not actively used for data fetching in the current source code.
- **`tsconfig.json`**: Standard TypeScript configuration defining compiler options for the React project.
- **`index.html`**: Contains the Tailwind CSS CDN script and the custom Tailwind configuration block used to theme the application.

## Testing

Automated tests (unit, integration, or end-to-end) are not currently included in the repository.

Realistic future test areas include:
- Component rendering tests for the dashboard widgets.
- Type checking and interface validation for the domain models in `types.ts`.
- Navigation state tests within `App.tsx`.

## Deployment

No deployment-specific configuration (like a Vercel or Netlify configuration file) was found in the repository. Since this is a static Vite-based frontend, it can generally be deployed to platforms such as Vercel, Netlify, or Cloudflare Pages by running `npm run build` and serving the resulting `dist` output folder.

## Future Improvements

The current implementation serves as a visual and structural foundation. Logical next steps include:

- **Backend Integration**: Replace `constants.ts` with real API calls to a database (like Supabase or PostgreSQL) to persist inventory and order data.
- **Real AI Implementation**: Connect the Smart Reordering widget to an actual AI service (like the Gemini API referenced in the Vite config) to provide dynamic, data-driven suggestions.
- **State Management**: Introduce a state management library (like Zustand or Redux) if the application complexity grows beyond basic screen routing.
- **Form Handling**: Implement functional forms for creating new orders, adding inventory items, and paying invoices.
- **Build Optimization**: Migrate away from the Tailwind CDN in `index.html` and install Tailwind CSS via npm to utilize PostCSS processing and reduce the production bundle size.

## Learning Outcomes

This project demonstrates the ability to structure a scalable React application for a specific domain (restaurant management). It shows a solid understanding of breaking a complex dashboard into manageable, reusable components, while employing TypeScript to enforce strict data contracts. The tradeoff of using mock data and local state highlights a pragmatic approach to rapidly prototyping workflows before committing to a final backend architecture.

## Screenshots

Screenshots can be added here to show the main dashboards, workflows, and role-specific views.

## License

License information has not been specified yet.
