import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertTriangle,
  Search,
  Shield,
  Ban,
  Calendar,
  User,
  FileText,
  Clock,
  Eye,
  XCircle,
  CheckCircle,
} from "lucide-react";
import { mockBlacklistedUsers } from "@/lib/mockData";
import { BlacklistReason } from "@shared/api";
import { cn } from "@/lib/utils";

export default function Blacklist() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReason, setSelectedReason] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [showActiveOnly, setShowActiveOnly] = useState(true);

  const reasonOptions = [
    { value: "all", label: "جميع الأسباب" },
    { value: "non-payment", label: "عدم السداد" },
    { value: "fake-bidding", label: "مزايدة وهمية" },
    { value: "identity-fraud", label: "انتحال شخصية" },
    { value: "fake-documents", label: "وثائق مزورة" },
    { value: "harassment", label: "إزعاج المستخدمين" },
    { value: "terms-violation", label: "مخالفة الشروط" },
    { value: "multiple-accounts", label: "حسابات متعددة" },
    { value: "price-manipulation", label: "تلاعب بالأسعار" },
    { value: "spam", label: "إزعام وسبام" },
    { value: "other", label: "أسباب أخرى" },
  ];

  const typeOptions = [
    { value: "all", label: "جميع الأنواع" },
    { value: "permanent", label: "حظر دائم" },
    { value: "temporary", label: "حظر مؤقت" },
  ];

  const filteredUsers = useMemo(() => {
    let filtered = mockBlacklistedUsers.filter((record) => {
      // Active filter
      if (showActiveOnly && !record.isActive) {
        return false;
      }

      // Search filter
      if (
        searchQuery &&
        !record.user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !record.user.email.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Reason filter
      if (selectedReason !== "all" && record.reason !== selectedReason) {
        return false;
      }

      // Type filter
      if (selectedType !== "all" && record.blacklistType !== selectedType) {
        return false;
      }

      return true;
    });

    // Sort by date (newest first)
    filtered.sort(
      (a, b) =>
        new Date(b.dateBlacklisted).getTime() -
        new Date(a.dateBlacklisted).getTime(),
    );

    return filtered;
  }, [searchQuery, selectedReason, selectedType, showActiveOnly]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ar-SA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getReasonLabel = (reason: BlacklistReason) => {
    const reasonMap = {
      "non-payment": "عدم السداد",
      "fake-bidding": "مزايدة ��همية",
      "identity-fraud": "انتحال شخصية",
      "fake-documents": "وثائق مزورة",
      harassment: "إزعاج المستخدمين",
      "terms-violation": "مخالفة الشروط",
      "multiple-accounts": "حسابات متعددة",
      "price-manipulation": "تلاعب بالأسعار",
      spam: "إزعام وسبام",
      other: "أسباب أخرى",
    };
    return reasonMap[reason] || reason;
  };

  const getReasonColor = (reason: BlacklistReason) => {
    const colorMap = {
      "non-payment": "destructive",
      "fake-bidding": "destructive",
      "identity-fraud": "destructive",
      "fake-documents": "destructive",
      harassment: "warning",
      "terms-violation": "secondary",
      "multiple-accounts": "destructive",
      "price-manipulation": "destructive",
      spam: "warning",
      other: "outline",
    };
    return colorMap[reason] || "outline";
  };

  const isExpired = (record: any) => {
    if (record.blacklistType === "permanent") return false;
    if (!record.expiryDate) return false;
    return new Date(record.expiryDate) < new Date();
  };

  const activeCount = mockBlacklistedUsers.filter((r) => r.isActive).length;
  const permanentCount = mockBlacklistedUsers.filter(
    (r) => r.blacklistType === "permanent" && r.isActive,
  ).length;
  const temporaryCount = mockBlacklistedUsers.filter(
    (r) => r.blacklistType === "temporary" && r.isActive,
  ).length;

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">القائمة السوداء</h1>
            <p className="text-xl text-white/90 mb-6">
              قائمة بالمستخدمين المخالفين لشروط وأحكام منصة لوينتار
            </p>
            <div className="flex justify-center space-x-6 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Ban className="w-5 h-5" />
                <span>{activeCount} مستخدم محظور</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <XCircle className="w-5 h-5" />
                <span>{permanentCount} حظر دائم</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Clock className="w-5 h-5" />
                <span>{temporaryCount} حظر مؤقت</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Warning Notice */}
        <Card className="mb-8 border-amber-200 bg-amber-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3 space-x-reverse">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">
                  تحذير للمستخدمين
                </h3>
                <p className="text-amber-700 mb-3">
                  هذه قائمة بالمستخدمين الذين خالفوا شروط وأحكام منصة لوينتار.
                  يُمنع التعامل معهم خارج المنصة، وننصح بالحذر الشديد.
                </p>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• تجنب التعامل المباشر مع المستخدمين المدرجين</li>
                  <li>• تأكد من هوية المشترين والبائعين</li>
                  <li>• استخدم آليات الحماية المتوفرة في المنصة</li>
                  <li>• أبلغ عن أي سلوك مشبوه أو مخالف</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="ابحث باسم المستخدم..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
              </div>

              <Select value={selectedReason} onValueChange={setSelectedReason}>
                <SelectTrigger>
                  <SelectValue placeholder="سبب الحظر" />
                </SelectTrigger>
                <SelectContent>
                  {reasonOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="نوع الحظر" />
                </SelectTrigger>
                <SelectContent>
                  {typeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant={showActiveOnly ? "default" : "outline"}
                onClick={() => setShowActiveOnly(!showActiveOnly)}
                className="w-full"
              >
                {showActiveOnly ? "المحظورين حالياً" : "جميع السجلات"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            النتائج ({filteredUsers.length})
          </h2>
        </div>

        {/* Blacklisted Users List */}
        {filteredUsers.length > 0 ? (
          <div className="space-y-4">
            {filteredUsers.map((record) => (
              <Card
                key={record.id}
                className={cn(
                  "border-l-4",
                  record.blacklistType === "permanent"
                    ? "border-l-red-500"
                    : "border-l-orange-500",
                  !record.isActive && "opacity-60",
                )}
              >
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    {/* User Info */}
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={record.user.profileImage}
                          alt={record.user.name}
                        />
                        <AvatarFallback>
                          {record.user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{record.user.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {record.user.email}
                        </p>
                        <div className="flex items-center space-x-1 space-x-reverse mt-1">
                          <span className="text-xs text-muted-foreground">
                            نقاط الثقة:
                          </span>
                          <span className="text-xs font-medium text-red-600">
                            {record.user.trustScore}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Violation Info */}
                    <div>
                      <div className="space-y-2">
                        <Badge
                          variant={getReasonColor(record.reason) as any}
                          className="text-xs"
                        >
                          {getReasonLabel(record.reason)}
                        </Badge>
                        <Badge
                          variant={
                            record.blacklistType === "permanent"
                              ? "destructive"
                              : "warning"
                          }
                          className="text-xs"
                        >
                          {record.blacklistType === "permanent"
                            ? "حظر دائم"
                            : "حظر مؤقت"}
                        </Badge>
                        <div className="text-xs text-muted-foreground">
                          {record.violationCount} مخالفة
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="font-medium text-sm mb-2">
                        تفاصيل المخالفة
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {record.description}
                      </p>
                    </div>

                    {/* Dates & Status */}
                    <div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>تاريخ الحظر:</span>
                        </div>
                        <p className="text-xs text-muted-foreground mr-6">
                          {formatDate(record.dateBlacklisted)}
                        </p>

                        {record.blacklistType === "temporary" &&
                          record.expiryDate && (
                            <>
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span>ينتهي في:</span>
                              </div>
                              <p className="text-xs text-muted-foreground mr-6">
                                {formatDate(record.expiryDate)}
                              </p>
                            </>
                          )}

                        <div className="flex items-center space-x-2 space-x-reverse mt-3">
                          {record.isActive ? (
                            <>
                              <XCircle className="w-4 h-4 text-red-500" />
                              <span className="text-xs text-red-600 font-medium">
                                محظور حالياً
                              </span>
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-xs text-green-600 font-medium">
                                انتهى الحظر
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Related Auction */}
                  {record.relatedAuctionId && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                        <FileText className="w-4 h-4" />
                        <span>المزاد المرتبط: #{record.relatedAuctionId}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Shield className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">لا توجد نتائج</h3>
            <p className="text-muted-foreground">
              لم نعثر على مستخدمين محظورين تطابق معايير البحث
            </p>
          </div>
        )}

        {/* Reporting Section */}
        <Card className="mt-12 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 space-x-reverse">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800">أبلغ عن مخالفة</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700 mb-4">
              إذا واجهت أي سلوك مخالف أو مشبوه من أحد المستخدمين، يرجى الإبلاغ
              عنه فوراً لفريق الدعم الفني.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <AlertTriangle className="w-4 h-4 ml-2" />
                إبلاغ عن مخالفة
              </Button>
              <Button variant="outline">تواصل مع الدعم الفني</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
