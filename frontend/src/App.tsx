import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/Services";
import CareersPage from "./pages/Careers";

// Query client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

/**
 * Main Application Component
 * Provides routing, state management, and UI components
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter 
        basename={import.meta.env.BASE_URL}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/about" element={<HomePage />} />
              <Route path="/contact" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Layout>
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
