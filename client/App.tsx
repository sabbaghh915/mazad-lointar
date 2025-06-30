import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auctions from "./pages/Auctions";
import AuctionDetail from "./pages/AuctionDetail";
import HowItWorks from "./pages/HowItWorks";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Verification from "./pages/Verification";
import Terms from "./pages/Terms";
import Payment from "./pages/Payment";
import PostAd from "./pages/PostAd";
import Classified from "./pages/Classified";
import ClassifiedAdDetail from "./pages/ClassifiedAdDetail";
import PostAuction from "./pages/PostAuction";
import Blacklist from "./pages/Blacklist";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
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
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/auction/:id" element={<AuctionDetail />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/post-ad" element={<PostAd />} />
          <Route path="/classified" element={<Classified />} />
          <Route path="/classified/:id" element={<ClassifiedAdDetail />} />
          <Route path="/post-auction" element={<PostAuction />} />
          <Route path="/blacklist" element={<Blacklist />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
