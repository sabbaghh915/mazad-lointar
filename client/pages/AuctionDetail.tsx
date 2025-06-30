import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockAuctions } from "@/lib/mockData";
import { Gavel, Clock, MapPin, User, Eye, Heart } from "lucide-react";

export default function AuctionDetail() {
  const { id } = useParams();
  const auction = mockAuctions.find((a) => a.id === id);

  if (!auction) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">المزاد غير موجود</h1>
          <p className="text-muted-foreground">
            عذراً، لم نتمكن من العثور على المزاد المطلوب
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge
                variant={
                  auction.status === "live" ? "destructive" : "secondary"
                }
              >
                {auction.status === "live" ? "مباشر الآن" : "قادم"}
              </Badge>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Button variant="ghost" size="sm">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                  <span className="mr-1">1,247</span>
                </Button>
              </div>
            </div>
            <CardTitle className="text-3xl">{auction.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={auction.featuredImage}
                alt={auction.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">تفاصيل المزاد</h3>
                <p className="text-muted-foreground">{auction.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{auction.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span>{auction.seller.name}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>ينتهي في 2 أيام و 4 ساعات</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">معلومات المزايدة</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      المزايدة الحالية
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      {new Intl.NumberFormat("ar-SA", {
                        style: "currency",
                        currency: "SAR",
                        minimumFractionDigits: 0,
                      }).format(auction.currentBid)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">السعر الأساسي</span>
                    <span>
                      {new Intl.NumberFormat("ar-SA", {
                        style: "currency",
                        currency: "SAR",
                        minimumFractionDigits: 0,
                      }).format(auction.startingPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">عدد المزايدات</span>
                    <span>{auction.bids.length}</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-auction-live hover:bg-auction-live/90"
                  disabled={auction.status !== "live"}
                >
                  <Gavel className="w-4 h-4 ml-2" />
                  {auction.status === "live"
                    ? "مزايدة الآن"
                    : "المزاد لم يبدأ بعد"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
