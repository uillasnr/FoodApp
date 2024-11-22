import React from "react";
import Index from "./src/routes";
import { AuthProvider } from "./src/Context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Index />
    </AuthProvider>
  );
}
