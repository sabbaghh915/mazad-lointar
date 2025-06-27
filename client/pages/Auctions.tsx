import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AuctionCard } from "@/components/auction/AuctionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Filter,
  Search,
  SlidersHorizontal,
  Grid3X3,
  List,
  TrendingUp,
  Clock,
  MapPin,
} from "lucide-react";
import { mockAuctions, categories } from "@/lib/mockData";
import { AuctionStatus, AuctionCategory } from "@shared/api";
import { cn } from "@/lib/utils";

export default function Auctions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("category") || "all",
  );
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("ending-soon");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<{
    min: string;
    max: string;
  }>({ min: "", max: "" });

  const statusOptions = [
    { value: "all", label: "جميع الحالات" },
    { value: "live", label: "مباشر الآن" },
    { value: "ending-soon", label: "ينتهي قريباً" },
    { value: "upcoming", label: "قادم" },
    { value: "ended", label: "منتهي" },
  ];

  const sortOptions = [
    { value: "ending-soon", label: "ينتهي قريباً" },
    { value: "newest", label: "الأحدث" },
    { value: "price-high", label: "السعر: الأعلى أولاً" },
    { value: "price-low", label: "السعر: الأقل أولاً" },
    { value: "most-bids", label: "الأكثر مزايدة" },
  ];

  const filteredAndSortedAuctions = useMemo(() => {
    let filtered = mockAuctions.filter((auction) => {
      // Search filter
      if (
        searchQuery &&
        !auction.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !auction.location.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "all" && auction.category !== selectedCategory) {
        return false;
      }

      // Status filter
      if (selectedStatus !== "all" && auction.status !== selectedStatus) {
        return false;
      }

      // Price filter
      if (priceRange.min && auction.currentBid < parseInt(priceRange.min)) {
        return false;
      }
      if (priceRange.max && auction.currentBid > parseInt(priceRange.max)) {
        return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "ending-soon":
          if (a.status === "live" && b.status !== "live") return -1;
          if (b.status === "live" && a.status !== "live") return 1;
          if (a.status === "ending-soon" && b.status !== "ending-soon")
            return -1;
          if (b.status === "ending-soon" && a.status !== "ending-soon")
            return 1;
          return new Date(a.endTime).getTime() - new Date(b.endTime).getTime();
        case "newest":
          return (
            new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
          );
        case "price-high":
          return b.currentBid - a.currentBid;
        case "price-low":
          return a.currentBid - b.currentBid;
        case "most-bids":
          return b.bids.length - a.bids.length;
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    searchQuery,
    selectedCategory,
    selectedStatus,
    sortBy,
    priceRange,
    mockAuctions,
  ]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedStatus("all");
    setPriceRange({ min: "", max: "" });
    setSearchParams({});
  };

  const activeFiltersCount = [
    selectedCategory !== "all",
    selectedStatus !== "all",
    priceRange.min,
    priceRange.max,
    searchQuery,
  ].filter(Boolean).length;

  const liveAuctionsCount = mockAuctions.filter(
    (a) => a.status === "live",
  ).length;
  const endingSoonCount = mockAuctions.filter(
    (a) => a.status === "ending-soon",
  ).length;

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-12 auction-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">المزادات</h1>
            <p className="text-xl text-white/90 mb-6">
              اكتشف أفضل العقارات والسيارات في سوريا عبر مزادات آمنة وموثوقة
            </p>
            <div className="flex justify-center space-x-6 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-3 h-3 bg-auction-live rounded-full animate-bid-pulse"></div>
                <span>{liveAuctionsCount} مزاد مباشر</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <span>{endingSoonCount} ينتهي قريباً</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters Bar */}
        <div className="mb-8">
          <Card className="p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="ابحث في المزادات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="الفئة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الفئات</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedStatus}
                  onValueChange={setSelectedStatus}
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="ترتيب حسب" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Advanced Filters */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="relative">
                      <SlidersHorizontal className="w-4 h-4 ml-2" />
                      فلاتر متقدمة
                      {activeFiltersCount > 0 && (
                        <Badge
                          variant="destructive"
                          className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                        >
                          {activeFiltersCount}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>فلاتر متقدمة</SheetTitle>
                      <SheetDescription>
                        اضبط الفلاتر للعثور على ما تبحث عنه بدقة
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 mt-6">
                      {/* Price Range */}
                      <div>
                        <h3 className="font-medium mb-3">نطاق السعر (ريال)</h3>
                        <div className="flex space-x-2 space-x-reverse">
                          <Input
                            placeholder="أدنى سعر"
                            value={priceRange.min}
                            onChange={(e) =>
                              setPriceRange((prev) => ({
                                ...prev,
                                min: e.target.value,
                              }))
                            }
                          />
                          <Input
                            placeholder="أعلى سعر"
                            value={priceRange.max}
                            onChange={(e) =>
                              setPriceRange((prev) => ({
                                ...prev,
                                max: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="w-full"
                      >
                        مسح جميع الفلاتر
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* View Mode Toggle */}
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-l-none"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-r-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {selectedCategory !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {categories.find((c) => c.id === selectedCategory)?.name}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="text-xs hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            {selectedStatus !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {statusOptions.find((s) => s.value === selectedStatus)?.label}
                <button
                  onClick={() => setSelectedStatus("all")}
                  className="text-xs hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            {(priceRange.min || priceRange.max) && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {priceRange.min && `من ${priceRange.min}`}
                {priceRange.min && priceRange.max && " - "}
                {priceRange.max && `إلى ${priceRange.max}`} ريال
                <button
                  onClick={() => setPriceRange({ min: "", max: "" })}
                  className="text-xs hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs"
            >
              مسح الكل
            </Button>
          </div>
        )}

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">
              النتائج ({filteredAndSortedAuctions.length})
            </h2>
            <p className="text-muted-foreground">
              {
                filteredAndSortedAuctions.filter((a) => a.status === "live")
                  .length
              }{" "}
              مزاد مباشر الآن
            </p>
          </div>
        </div>

        {/* Auctions Grid/List */}
        {filteredAndSortedAuctions.length > 0 ? (
          <div
            className={cn(
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4",
            )}
          >
            {filteredAndSortedAuctions.map((auction) => (
              <AuctionCard
                key={auction.id}
                auction={auction}
                className={viewMode === "list" ? "flex flex-row" : ""}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 text-muted-foreground">
              <Search className="w-full h-full" />
            </div>
            <h3 className="text-lg font-medium mb-2">لا توجد نتائج</h3>
            <p className="text-muted-foreground mb-4">
              لم نعثر على مزادات تطابق معايير البحث
            </p>
            <Button onClick={clearFilters}>مسح الفلاتر</Button>
          </div>
        )}

        {/* Load More */}
        {filteredAndSortedAuctions.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              تحميل المزيد
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
