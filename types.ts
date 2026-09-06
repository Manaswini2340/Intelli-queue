export type Page =
  | "landing"
  | "role-select"
  | "login"
  | "qr-scanner"
  | "locations"
  | "location-detail"
  | "book-token"
  | "order-select"
  | "token-confirm"
  | "live-queue"
  | "smart-token"
  | "token-countdown"
  | "notifications"
  | "my-order"
  | "cancel-refund"
  | "refund-status"
  | "profile"
  | "order-success"
  | "admin-dashboard"
  | "admin-live-queue"
  | "admin-orders"
  | "admin-kitchen"
  | "admin-qr"
  | "admin-refunds"
  | "admin-analytics"
  | "admin-settings";

export interface NavProps {
  navigate: (page: Page) => void;
  currentPage: Page;
}
