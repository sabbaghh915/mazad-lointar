import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Eye, Heart, Phone, Clock, Star, Shield } from "lucide-react";
import { ClassifiedAd } from "@shared/api";
import { cn } from "@/lib/utils";

interface ClassifiedAdCardProps {
  ad: ClassifiedAd;
  className?: string;
}

export function ClassifiedAdCard({ ad, className }: ClassifiedAdCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ar-SY", {
      style: "currency",
      currency: "SYP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) return "منذ دقائق";
    if (diffInHours < 24) return `منذ ${Math.floor(diffInHours)} ساعة`;
    if (diffInHours < 48) return "منذ يوم";
    return `منذ ${Math.floor(diffInHours / 24)} أيام`;
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
    return (
      <Badge variant={config.variant} className="text-xs">
        {config.label}
      </Badge>
    );
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

  return (
    <Card
      className={cn(
        "group hover:shadow-lg transition-shadow duration-300",
        ad.isFeatured && "ring-2 ring-secondary/20",
        className,
      )}
    >
      <div className="relative">
        <Link to={`/classified/${ad.id}`}>
          <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
            <img
              src={ad.featuredImage}
              alt={ad.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Featured Badge */}
        {ad.isFeatured && (
          <div className="absolute top-3 right-3">
            <Badge variant="default" className="bg-secondary text-primary">
              مميز
            </Badge>
          </div>
        )}

        {/* Condition Badge */}
        <div className="absolute top-3 left-3">{getConditionBadge()}</div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute bottom-3 left-3 bg-background/80 hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Views Count */}
        <div className="absolute bottom-3 right-3 bg-black/60 rounded-lg px-2 py-1 text-white text-xs flex items-center">
          <Eye className="h-3 w-3 ml-1" />
          <span>{ad.viewsCount}</span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Title and Category */}
          <div>
            <Link to={`/classified/${ad.id}`}>
              <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-2">
                {ad.title}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              {getCategoryName()}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-600">
              {formatPrice(ad.price)}
            </span>
            <div className="flex items-center space-x-1 space-x-reverse text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{formatDate(ad.createdAt)}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{ad.location}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {ad.description}
          </p>

          {/* Seller Info */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src={ad.seller.profileImage}
                  alt={ad.seller.name}
                />
                <AvatarFallback className="text-xs">
                  {ad.seller.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">
                {ad.contactName}
              </span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              {ad.seller.isVerified && (
                <Badge variant="secondary" className="text-xs">
                  <Shield className="w-3 h-3 ml-1" />
                  موثق
                </Badge>
              )}
              <div className="flex items-center space-x-1 space-x-reverse">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">
                  {ad.seller.trustScore}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="w-full flex space-x-2 space-x-reverse">
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/classified/${ad.id}`}>عرض التفاصيل</Link>
          </Button>
          <Button
            variant="default"
            className="bg-green-600 hover:bg-green-700"
            onClick={() => window.open(`tel:${ad.contactPhone}`, "_self")}
          >
            <Phone className="h-4 w-4 ml-2" />
            اتصال
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
