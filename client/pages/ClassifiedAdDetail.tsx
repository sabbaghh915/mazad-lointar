import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Phone,
  MessageCircle,
  MapPin,
  Eye,
  Heart,
  Share2,
  Calendar,
  Star,
  Shield,
  ChevronLeft,
  CheckCircle,
} from "lucide-react";
import { mockClassifiedAds } from "@/lib/mockData";
import { ClassifiedAdCard } from "@/components/classified/ClassifiedAdCard";

export default function ClassifiedAdDetail() {
  const { id } = useParams();
  const ad = mockClassifiedAds.find((a) => a.id === id);

  if (!ad) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">الإعلان غير موجود</h1>
          <p className="text-muted-foreground mb-6">
            عذراً، لم نتمكن من العثور على الإعلان المطلوب
          </p>
          <Button asChild>
            <a href="/classified">العودة للإعلانات</a>
          </Button>
        </div>
      </Layout>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ar-SY", {
      style: "currency",
      currency: "SYP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ar-SA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getConditionBadge = () => {
    const conditionConfig = {
      new: { label: "جديد", variant: "default" as const },
      excellent: { label: "ممتاز", variant: "secondary" as const },
      good: { label: "جيد", variant: "outline" as const },
      fair: { label: "مقبول", variant: "outline" as const },
      used: { label: "مستعمل", variant: "outline" as const },
    };

    const config = conditionConfig[ad.condition];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getCategoryName = () => {
    const categoryNames = {
      cars: "سيارات",
      houses: "منازل",
      land: "أراضي",
      "commercial-real-estate": "عقارات تجارية",
      "residential-real-estate": "عقارات سكنية",
    };
    return categoryNames[ad.category] || ad.category;
  };

  const relatedAds = mockClassifiedAds
    .filter(
      (relatedAd) =>
        relatedAd.id !== ad.id && relatedAd.category === ad.category,
    )
    .slice(0, 3);

  return (
    <Layout>
      <div className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground mb-6">
            <a href="/classified" className="hover:text-primary">
              الإعلانات المجانية
            </a>
            <ChevronLeft className="w-4 h-4" />
            <span>{getCategoryName()}</span>
            <ChevronLeft className="w-4 h-4" />
            <span className="text-foreground">{ad.title}</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <Card>
                <CardContent className="p-0">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {ad.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-video overflow-hidden rounded-t-lg">
                            <img
                              src={image}
                              alt={`${ad.title} - صورة ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {ad.images.length > 1 && (
                      <>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </>
                    )}
                  </Carousel>
                </CardContent>
              </Card>

              {/* Ad Details */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        {ad.isFeatured && (
                          <Badge
                            variant="default"
                            className="bg-secondary text-primary"
                          >
                            مميز
                          </Badge>
                        )}
                        {getConditionBadge()}
                      </div>
                      <CardTitle className="text-2xl">{ad.title}</CardTitle>
                      <p className="text-muted-foreground">
                        {getCategoryName()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Price */}
                  <div className="text-3xl font-bold text-green-600">
                    {formatPrice(ad.price)}
                  </div>

                  {/* Basic Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{ad.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{formatDate(ad.createdAt)}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Eye className="w-4 h-4 text-muted-foreground" />
                      <span>{ad.viewsCount} مشاهدة</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Description */}
                  <div>
                    <h3 className="font-semibold mb-3">الوصف</h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {ad.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  {ad.specifications &&
                    Object.keys(ad.specifications).length > 0 && (
                      <>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-3">المواصفات</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {Object.entries(ad.specifications).map(
                              ([key, value]) => (
                                <div
                                  key={key}
                                  className="flex justify-between py-2 border-b border-border/50"
                                >
                                  <span className="text-muted-foreground">
                                    {key.replace("_", " ")}
                                  </span>
                                  <span className="font-medium">{value}</span>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </>
                    )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>تواصل مع المعلن</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Seller Info */}
                  <div className="flex items-center space-x-3 space-x-reverse p-3 bg-muted/30 rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={ad.seller.profileImage}
                        alt={ad.seller.name}
                      />
                      <AvatarFallback>
                        {ad.seller.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <p className="font-medium">{ad.contactName}</p>
                        {ad.seller.isVerified && (
                          <Badge variant="secondary" className="text-xs">
                            <Shield className="w-3 h-3 ml-1" />
                            موثق
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse text-sm text-muted-foreground">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{ad.seller.trustScore} نقطة ثقة</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      size="lg"
                      onClick={() =>
                        window.open(`tel:${ad.contactPhone}`, "_self")
                      }
                    >
                      <Phone className="w-4 h-4 ml-2" />
                      اتصال: {ad.contactPhone}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                      onClick={() =>
                        window.open(
                          `https://wa.me/${ad.contactPhone.replace(/[^0-9]/g, "")}`,
                          "_blank",
                        )
                      }
                    >
                      <MessageCircle className="w-4 h-4 ml-2" />
                      واتس اب
                    </Button>
                  </div>

                  {/* Safety Tips */}
                  <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-2 space-x-reverse">
                      <Shield className="w-4 h-4 text-blue-600 mt-0.5" />
                      <div className="text-xs text-blue-800">
                        <p className="font-medium mb-1">نصائح للأمان:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• قم بفحص السلعة قبل الدفع</li>
                          <li>• تجنب الدفع المسبق</li>
                          <li>• التق في مكان عام آمن</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ad Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>إحصائيات الإعلان</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">المشاهدات</span>
                    <span className="font-medium">{ad.viewsCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">تاريخ النشر</span>
                    <span className="font-medium">
                      {formatDate(ad.createdAt)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">معرف الإعلان</span>
                    <span className="font-medium">#{ad.id}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Ads */}
          {relatedAds.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">إعلانات مشابهة</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedAds.map((relatedAd) => (
                  <ClassifiedAdCard key={relatedAd.id} ad={relatedAd} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
