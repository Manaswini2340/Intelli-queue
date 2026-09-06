import { useState } from "react";
import { Page } from "./types";

import UserNav from "./components/UserNav";
import AdminNav from "./components/AdminNav";

import Landing from "./pages/Landing";
import RoleSelect from "./pages/RoleSelect";
import Login from "./pages/Login";
import QRScanner from "./pages/QRScanner";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import BookToken from "./pages/BookToken";
import OrderSelect from "./pages/OrderSelect";
import TokenConfirm from "./pages/TokenConfirm";
import LiveQueue from "./pages/LiveQueue";
import SmartToken from "./pages/SmartToken";
import TokenCountdown from "./pages/TokenCountdown";
import Notifications from "./pages/Notifications";
import MyOrder from "./pages/MyOrder";
import CancelRefund from "./pages/CancelRefund";
import RefundStatus from "./pages/RefundStatus";
import Profile from "./pages/Profile";
import OrderSuccess from "./pages/OrderSuccess";

import AdminDashboard from "./admin/Dashboard";
import AdminLiveQueue from "./admin/AdminLiveQueue";
import AdminOrders from "./admin/AdminOrders";
import AdminKitchen from "./admin/AdminKitchen";
import AdminQR from "./admin/AdminQR";
import AdminRefunds from "./admin/AdminRefunds";
import Analytics from "./admin/Analytics";
import SystemStatus from "./admin/SystemStatus";

const USER_PAGES: Page[] = [
  "locations", "location-detail", "book-token", "order-select",
  "token-confirm", "live-queue", "smart-token", "token-countdown",
  "notifications", "my-order", "cancel-refund", "refund-status",
  "profile", "order-success", "qr-scanner",
];

const ADMIN_PAGES: Page[] = [
  "admin-dashboard", "admin-live-queue", "admin-orders", "admin-kitchen",
  "admin-qr", "admin-refunds", "admin-analytics", "admin-settings",
];

function PageContent({ page, navigate }: { page: Page; navigate: (p: Page) => void }) {
  switch (page) {
    case "landing": return <Landing navigate={navigate} />;
    case "role-select": return <RoleSelect navigate={navigate} />;
    case "login": return <Login navigate={navigate} />;
    case "qr-scanner": return <QRScanner navigate={navigate} />;
    case "locations": return <Locations navigate={navigate} />;
    case "location-detail": return <LocationDetail navigate={navigate} />;
    case "book-token": return <BookToken navigate={navigate} />;
    case "order-select": return <OrderSelect navigate={navigate} />;
    case "token-confirm": return <TokenConfirm navigate={navigate} />;
    case "live-queue": return <LiveQueue navigate={navigate} />;
    case "smart-token": return <SmartToken navigate={navigate} />;
    case "token-countdown": return <TokenCountdown navigate={navigate} />;
    case "notifications": return <Notifications navigate={navigate} />;
    case "my-order": return <MyOrder navigate={navigate} />;
    case "cancel-refund": return <CancelRefund navigate={navigate} />;
    case "refund-status": return <RefundStatus navigate={navigate} />;
    case "profile": return <Profile navigate={navigate} />;
    case "order-success": return <OrderSuccess navigate={navigate} />;
    case "admin-dashboard": return <AdminDashboard navigate={navigate} />;
    case "admin-live-queue": return <AdminLiveQueue navigate={navigate} />;
    case "admin-orders": return <AdminOrders navigate={navigate} />;
    case "admin-kitchen": return <AdminKitchen navigate={navigate} />;
    case "admin-qr": return <AdminQR navigate={navigate} />;
    case "admin-refunds": return <AdminRefunds navigate={navigate} />;
    case "admin-analytics": return <Analytics navigate={navigate} />;
    case "admin-settings": return <SystemStatus navigate={navigate} />;
    default: return <Landing navigate={navigate} />;
  }
}

export default function App() {
  const [page, setPage] = useState<Page>("landing");

  const showUserNav = USER_PAGES.includes(page);
  const showAdminNav = ADMIN_PAGES.includes(page);

  return (
    <div
      className="size-full flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)" }}
    >
      {/* Desktop: phone frame */}
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width: "min(390px, 100vw)",
          height: "min(844px, 100dvh)",
          background: "#fff",
          borderRadius: "clamp(0px, 4vw, 40px)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {/* Status bar simulation */}
        {(showUserNav || showAdminNav) && (
          <div
            className="flex items-center justify-between px-5 shrink-0"
            style={{
              height: 44,
              background: ADMIN_PAGES.includes(page) ? "#0F172A" : "#fff",
              borderBottom: ADMIN_PAGES.includes(page) ? "1px solid #1E293B" : "none",
            }}
          >
            <span className="text-xs font-semibold" style={{ color: ADMIN_PAGES.includes(page) ? "#475569" : "#0F172A", fontFamily: "JetBrains Mono, monospace" }}>
              1:15 PM
            </span>
            <div className="flex items-center gap-1">
              <div className="w-10 h-3.5 rounded-full flex items-center justify-end pr-0.5" style={{ background: ADMIN_PAGES.includes(page) ? "#334155" : "#E2E8F0" }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#10B981" }} />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs" style={{ color: ADMIN_PAGES.includes(page) ? "#475569" : "#94A3B8" }}>📶 🔋</span>
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto" key={page}>
            <PageContent page={page} navigate={setPage} />
          </div>
        </div>

        {/* Navigation */}
        {showUserNav && <UserNav navigate={setPage} currentPage={page} />}
        {showAdminNav && <AdminNav navigate={setPage} currentPage={page} />}

        {/* Home indicator */}
        <div className="flex justify-center pb-2 pt-1 shrink-0" style={{ background: ADMIN_PAGES.includes(page) ? "#1E293B" : "#fff" }}>
          <div className="w-28 h-1 rounded-full" style={{ background: ADMIN_PAGES.includes(page) ? "#334155" : "#E2E8F0" }} />
        </div>
      </div>

      {/* Desktop hint — hidden on mobile */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-center pointer-events-none"
        style={{ color: "rgba(255,255,255,0.2)", fontFamily: "Inter, sans-serif" }}
      >
        SmartQueue Prototype · Use bottom nav to explore all flows
      </div>
    </div>
  );
}
