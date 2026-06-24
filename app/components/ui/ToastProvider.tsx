"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 4000,
        style: {
          background: "#ffffff",
          color: "#192c42",
          borderRadius: "12px",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow: "0 10px 30px rgba(24, 45, 50, 0.08)",
          border: "1px solid #e2e8f0",
        },
        success: {
          iconTheme: {
            primary: "#1b6fa8",
            secondary: "#ffffff",
          },
        },
        error: {
          iconTheme: {
            primary: "#f43f5e",
            secondary: "#ffffff",
          },
        },
      }}
    />
  );
}
