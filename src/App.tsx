import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

// Lazy load pages
const HomePage         = lazy(() => import("./pages/HomePage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const PrivacyPolicy    = lazy(() => import("./pages/PrivacyPolicy"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1, staleTime: 5 * 60 * 1000 },
  },
});

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Home + section scrolls */}
              <Route path="/"        element={<HomePage />} />
              <Route path="/home"    element={<Navigate to="/" replace />} />
              <Route path="/services" element={<HomePage />} />
              <Route path="/projects" element={<HomePage />} />
              <Route path="/about"   element={<HomePage />} />
              <Route path="/contact" element={<HomePage />} />

              {/* Slug-based detail pages */}
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />

              {/* Standalone pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              {/* Catch-all */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
