import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Enrollment from "./pages/Enrollment";
import IdIssuance from "./pages/IdIssuance";
import Search from "./pages/Search";
import Duplicates from "./pages/Duplicates";
import Audit from "./pages/Audit";
import Locations from "./pages/Locations";
import Security from "./pages/Security";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/id-issuance" element={<IdIssuance />} />
          <Route path="/search" element={<Search />} />
          <Route path="/duplicates" element={<Duplicates />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/security" element={<Security />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
