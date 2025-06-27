import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Clock,
  MapPin,
  Gavel,
  Users,
  Eye,
  Heart,
  TrendingUp,
  Star,
  Shield,
} from "lucide-react";
import { AuctionItem } from "@shared/api";
import { cn } from "@/lib/utils";

interface AuctionCardProps {
  auction: AuctionItem;
  className?: string;
}

export function AuctionCard({ auction, className }: AuctionCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ar-SY", {
      style: "currency",
      currency: "SYP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatTimeLeft = (endTime: string) => {
    const end = new Date(endTime);
    const now = new Date();
    const diff = end.getTime() - now.getTime();

    if (diff <= 0) return "انتهى";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) return `${days}د ${hours}س`;
    if (hours > 0) return `${hours}س ${minutes}ق`;
    return `${minutes}ق`;
  };

  const getStatusBadge = () => {
    const statusConfig = {
      live: { label: "مباشر", variant: "destructive" as const, pulse: true },
      "ending-soon": {
        label: "ينتهي قريباً",
        variant: "warning" as const,
        pulse: true,
      },
      upcoming: { label: "قريباً", variant: "secondary" as const },
      ended: { label: "انتهى", variant: "outline" as const },
      sold: { label: "مُباع", variant: "outline" as const },
    };

    const config = statusConfig[auction.status];
    return (
      <Badge
        variant={config.variant}
        className={cn(config.pulse && "animate-bid-pulse")}
      >
        {config.label}
      </Badge>
    );
  };

  const timeLeft = formatTimeLeft(auction.endTime);
  const isLive = auction.status === "live";
  const isEndingSoon = auction.status === "ending-soon";

  return (
    <Card
      className={cn(
        "group hover:shadow-lg transition-shadow duration-300",
        isLive && "ring-2 ring-auction-live/20",
        className,
      )}
    >
      <div className="relative">
        <Link to={`/auction/${auction.id}`}>
          <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
            <img
              src={auction.featuredImage}
              alt={auction.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">{getStatusBadge()}</div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 left-3 bg-background/80 hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Stats */}
        <div className="absolute bottom-3 left-3 right-3 bg-black/60 rounded-lg p-2 text-white text-xs flex items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Eye className="h-3 w-3" />
            <span>1.2ك مشاهدة</span>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Users className="h-3 w-3" />
            <span>{auction.bids.length} مزايد</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Title and Category */}
          <div>
            <Link to={`/auction/${auction.id}`}>
              <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-2">
                {auction.title}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              {auction.category === "cars" && "سيارات"}
              {auction.category === "houses" && "منازل"}
              {auction.category === "land" && "أراضي"}
              {auction.category === "commercial-real-estate" && "عقارات تجارية"}
              {auction.category === "residential-real-estate" && "عقارات سكنية"}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{auction.location}</span>
          </div>

          {/* Price Information */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                المزايدة الحالية
              </span>
              <div className="flex items-center space-x-1 space-x-reverse">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="font-bold text-lg text-green-600">
                  {formatPrice(auction.currentBid)}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">السعر الأساسي</span>
              <span className="text-muted-foreground">
                {formatPrice(auction.startingPrice)}
              </span>
            </div>
          </div>

          {/* Seller Info */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src={auction.seller.profileImage}
                  alt={auction.seller.name}
                />
                <AvatarFallback className="text-xs">
                  {auction.seller.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">
                {auction.seller.name}
              </span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              {auction.seller.isVerified && (
                <Badge variant="secondary" className="text-xs">
                  <Shield className="w-3 h-3 ml-1" />
                  موثق
                </Badge>
              )}
              <div className="flex items-center space-x-1 space-x-reverse">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">
                  {auction.seller.trustScore}
                </span>
              </div>
              <Badge
                variant="outline"
                className={cn(
                  "text-xs",
                  auction.seller.membershipLevel === "vip" &&
                    "border-purple-500 text-purple-600",
                  auction.seller.membershipLevel === "platinum" &&
                    "border-gray-400 text-gray-600",
                  auction.seller.membershipLevel === "gold" &&
                    "border-yellow-500 text-yellow-600",
                )}
              >
                {auction.seller.membershipLevel === "vip" && "VIP"}
                {auction.seller.membershipLevel === "platinum" && "بلاتيني"}
                {auction.seller.membershipLevel === "gold" && "ذهبي"}
                {auction.seller.membershipLevel === "standard" && "عادي"}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="w-full space-y-3">
          {/* Time Left */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Clock
                className={cn(
                  "h-4 w-4",
                  isEndingSoon
                    ? "text-warning"
                    : isLive
                      ? "text-auction-live"
                      : "text-muted-foreground",
                )}
              />
              <span
                className={cn(
                  "text-sm font-medium",
                  isEndingSoon
                    ? "text-warning"
                    : isLive
                      ? "text-auction-live"
                      : "text-muted-foreground",
                )}
              >
                {timeLeft === "انتهى" ? "انتهى المزاد" : `متبقي ${timeLeft}`}
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex space-x-2 space-x-reverse">
            <Button
              asChild
              variant={isLive ? "default" : "outline"}
              className={cn(
                "flex-1",
                isLive && "bg-auction-live hover:bg-auction-live/90",
              )}
            >
              <Link to={`/auction/${auction.id}`}>
                <Gavel className="h-4 w-4 ml-2" />
                {isLive ? "مزايدة الآن" : "عرض التفاصيل"}
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
