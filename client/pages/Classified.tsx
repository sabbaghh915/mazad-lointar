import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ClassifiedAdCard } from "@/components/classified/ClassifiedAdCard";
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
  Plus,
  Tag,
  MapPin,
} from "lucide-react";
import { mockClassifiedAds, categories } from "@/lib/mockData";
import { AuctionCategory } from "@shared/api";
import { cn } from "@/lib/utils";

export default function Classified() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("category") || "all",
  );
  const [selectedCondition, setSelectedCondition] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<{
    min: string;
    max: string;
  }>({ min: "", max: "" });

  const conditionOptions = [
    { value: "all", label: "جميع الحالات" },
    { value: "new", label: "جديد" },
    { value: "excellent", label: "ممتاز" },
    { value: "good", label: "جيد" },
    { value: "fair", label: "مقبول" },
    { value: "used", label: "مستعمل" },
  ];

  const locationOptions = [
    { value: "all", label: "جميع المدن" },
    { value: "دمشق", label: "دمشق" },
    { value: "حلب", label: "حلب" },
    { value: "حمص", label: "حمص" },
    { value: "حماة", label: "حماة" },
    { value: "اللاذقية", label: "اللاذقية" },
    { value: "طرطوس", label: "طرطوس" },
  ];

  const sortOptions = [
    { value: "newest", label: "الأحدث" },
    { value: "oldest", label: "الأقدم" },
    { value: "price-high", label: "السعر: الأعلى أولاً" },
    { value: "price-low", label: "السعر: الأقل أولاً" },
    { value: "most-viewed", label: "الأكثر مشاهدة" },
  ];

  const filteredAndSortedAds = useMemo(() => {
    let filtered = mockClassifiedAds.filter((ad) => {
      // Search filter
      if (
        searchQuery &&
        !ad.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !ad.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "all" && ad.category !== selectedCategory) {
        return false;
      }

      // Condition filter
      if (selectedCondition !== "all" && ad.condition !== selectedCondition) {
        return false;
      }

      // Location filter
      if (
        selectedLocation !== "all" &&
        !ad.location.includes(selectedLocation)
      ) {
        return false;
      }

      // Price filter
      if (priceRange.min && ad.price < parseInt(priceRange.min)) {
        return false;
      }
      if (priceRange.max && ad.price > parseInt(priceRange.max)) {
        return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case "oldest":
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        case "price-high":
          return b.price - a.price;
        case "price-low":
          return a.price - b.price;
        case "most-viewed":
          return b.viewsCount - a.viewsCount;
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    searchQuery,
    selectedCategory,
    selectedCondition,
    selectedLocation,
    sortBy,
    priceRange,
  ]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedCondition("all");
    setSelectedLocation("all");
    setPriceRange({ min: "", max: "" });
    setSearchParams({});
  };

  const activeFiltersCount = [
    selectedCategory !== "all",
    selectedCondition !== "all",
    selectedLocation !== "all",
    priceRange.min,
    priceRange.max,
    searchQuery,
  ].filter(Boolean).length;

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-12 auction-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">الإعلانات المجانية</h1>
            <p className="text-xl text-white/90 mb-6">
              تصفح آلاف الإعلانات للسيارات والعقارات في سوريا
            </p>
            <Button
              asChild
              size="lg"
              className="gold-gradient text-primary hover:scale-105 transition-transform"
            >
              <a href="/post-ad">
                <Plus className="w-5 h-5 ml-2" />
                أضف إعلانك المجاني
              </a>
            </Button>
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
                  placeholder="ابحث في الإعلانات..."
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
                  value={selectedCondition}
                  onValueChange={setSelectedCondition}
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    {conditionOptions.map((option) => (
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
                      {/* Location Filter */}
                      <div>
                        <h3 className="font-medium mb-3">المدينة</h3>
                        <Select
                          value={selectedLocation}
                          onValueChange={setSelectedLocation}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="اختر المدينة" />
                          </SelectTrigger>
                          <SelectContent>
                            {locationOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Price Range */}
                      <div>
                        <h3 className="font-medium mb-3">نطاق السعر (ليرة)</h3>
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
            {selectedCondition !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {
                  conditionOptions.find((c) => c.value === selectedCondition)
                    ?.label
                }
                <button
                  onClick={() => setSelectedCondition("all")}
                  className="text-xs hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            {selectedLocation !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {selectedLocation}
                <button
                  onClick={() => setSelectedLocation("all")}
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
              النتائج ({filteredAndSortedAds.length})
            </h2>
            <p className="text-muted-foreground">
              إعلانات مجانية للسيارات والعقارات
            </p>
          </div>
        </div>

        {/* Ads Grid/List */}
        {filteredAndSortedAds.length > 0 ? (
          <div
            className={cn(
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4",
            )}
          >
            {filteredAndSortedAds.map((ad) => (
              <ClassifiedAdCard
                key={ad.id}
                ad={ad}
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
              لم نعثر على إعلانات تطابق معايير البحث
            </p>
            <Button onClick={clearFilters}>مسح الفلاتر</Button>
          </div>
        )}

        {/* Load More */}
        {filteredAndSortedAds.length > 0 && (
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
