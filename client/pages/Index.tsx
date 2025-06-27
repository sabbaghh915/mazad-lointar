import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AuctionCard } from "@/components/auction/AuctionCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Gavel,
  Shield,
  Users,
  TrendingUp,
  Clock,
  Award,
  CheckCircle,
  ArrowLeft,
  Star,
  Timer,
  Eye,
  Play,
  Plus,
} from "lucide-react";
import {
  featuredAuctions,
  upcomingAuctions,
  categories,
  recentClassifiedAds,
  bestPriceClassifiedAds,
  popularClassifiedAds,
} from "@/lib/mockData";
import { ClassifiedAdCard } from "@/components/classified/ClassifiedAdCard";
import { cn } from "@/lib/utils";

export default function Index() {
  const stats = [
    {
      icon: Gavel,
      value: "3,240",
      label: "مزاد مكتمل",
      sublabel: "في آخر سنة",
    },
    {
      icon: Users,
      value: "2,850+",
      label: "مشترك نشط",
      sublabel: "موثق الهوية",
    },
    {
      icon: TrendingUp,
      value: "850 مليون",
      label: "ليرة قيمة المبيعات",
      sublabel: "إجمالي المعاملات",
    },
    {
      icon: Award,
      value: "96%",
      label: "نسبة الرضا",
      sublabel: "تقييم العملاء",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "نظام تقييم المصداقية",
      description: "نظام نقاط ثقة متقدم لضمان التعامل مع أشخاص موثوقين",
    },
    {
      icon: CheckCircle,
      title: "محفظة داخلية آمنة",
      description: "شحن الرصيد مسبقاً للمزايدة السريعة والآمنة",
    },
    {
      icon: Clock,
      title: "تمديد تلقائي للمزادات",
      description: "نظام التمديد التلقائي يضمن عدالة المزايدة",
    },
    {
      icon: Users,
      title: "مزادات VIP حصرية",
      description: "مزادات خاصة للأعضاء ذوي التقييم العالي",
    },
  ];

  const testimonials = [
    {
      name: "أحمد الشامي",
      role: "مستثمر عقاري - دمشق",
      content:
        "منصة لوينتار غيرت طريقة تعاملي مع العقارات في سوريا. اشتريت فيلا في المزة ��سعر ممتاز والمعاملة كانت شفافة تماماً.",
      rating: 5,
    },
    {
      name: "ليلى الحل��ية",
      role: "تاجرة سيارات - حلب",
      content:
        "بعت سيارتي BMW عبر المنصة وحصلت على سعر أفضل من السوق المحلي. فريق الدعم متعاون جداً والتحويل تم بسرعة.",
      rating: 5,
    },
    {
      name: "محمود اللاذقاني",
      role: "مطور عقاري - اللاذقية",
      content:
        "أفضل منصة مزادات في سوريا. نظام التقييم والثقة يعطي ضمانات حقيقية للمتعاملين. أنصح بها بقوة.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden auction-gradient text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-secondary/20 text-white border-secondary/30"
                >
                  <Timer className="w-4 h-4 ml-2" />
                  مزادات حية الآن
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  لوينتار
                  <br />
                  <span className="text-secondary">منصة المزادات الرائدة</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  اكتشف أفضل العقارات والسيارات في مزادات آمنة وموثوقة. منصة
                  متخصصة حصرياً في العقارات والسيارات مع نظام تقييم متقدم.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="gold-gradient text-primary hover:scale-105 transition-transform"
                >
                  <Link to="/auctions">
                    <Gavel className="w-5 h-5 ml-2" />
                    تصفح المزادات الحية
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/post-auction">
                    <Plus className="w-5 h-5 ml-2" />
                    أضف مزادك
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/how-it-works">
                    <Play className="w-5 h-5 ml-2" />
                    كيف يعمل الموقع
                  </Link>
                </Button>
              </div>

              {/* Live Stats */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">12</div>
                  <div className="text-sm text-white/80">مزاد مباشر</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">68</div>
                  <div className="text-sm text-white/80">مزايد نشط</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">
                    25 مليون ل.س
                  </div>
                  <div className="text-sm text-white/80">متوسط المبيعات</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80"
                  alt="مزاد حي"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <Badge
                      variant="destructive"
                      className="mb-2 animate-bid-pulse"
                    >
                      مباشر الآن
                    </Badge>
                    <h3 className="text-xl font-bold">فيلا فاخرة في الرياض</h3>
                    <p className="text-white/80">
                      المزايدة الحالية: 1.45 مليون ريال
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Eye className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">1,247 مشاهد</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">23 مزايد</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 auction-gradient rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Auctions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              المزادات المميزة
            </Badge>
            <h2 className="text-4xl font-bold mb-4">المزادات الحية الآن</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اكتشف أفضل العروض المتاحة حالياً وشارك في المزايدة على العناصر
              المختارة بعناية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredAuctions.slice(0, 3).map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/auctions">
                عرض جميع المزادات
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              تصفح حسب الفئة
            </Badge>
            <h2 className="text-4xl font-bold mb-4">فئات المزادات</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اختر الفئة التي تهمك واكتشف أفضل العروض المتاحة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/auctions?category=${category.id}`}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-lg mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {category.description}
                    </p>
                    <Badge variant="secondary">{category.count} مزاد</Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              لماذا نحن الأفضل
            </Badge>
            <h2 className="text-4xl font-bold mb-4">مميزات منصة لوينتار</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نوفر لك تجربة مزايدة آمنة وسهلة مع أحدث التقنيات
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 auction-gradient rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Auctions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              المزادات القادمة
            </Badge>
            <h2 className="text-4xl font-bold mb-4">لا تفوت الفرصة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              تابع المزادات القادمة واستعد للمشاركة
            </p>
          </div>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {upcomingAuctions.map((auction) => (
                <CarouselItem
                  key={auction.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <AuctionCard auction={auction} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              آراء عملائنا
            </Badge>
            <h2 className="text-4xl font-bold mb-4">ماذا يقول عملاؤنا</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              تجارب حقيقية من عملائنا الذين حققوا أهدافهم معنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Classified Ads Sections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              الإعلانات المجانية
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              تصفح آلاف الإعلانات المجانية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ابحث عن السيارات والعقارات المناسبة لك أو أضف إعلانك مجاناً
            </p>
          </div>

          {/* Recent Ads */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">الإعلانات الحديثة</h3>
              <Button asChild variant="outline">
                <Link to="/classified">
                  عرض الكل
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentClassifiedAds.slice(0, 3).map((ad) => (
                <ClassifiedAdCard key={ad.id} ad={ad} />
              ))}
            </div>
          </div>

          {/* Best Price */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">أفضل الأسعار</h3>
              <Button asChild variant="outline">
                <Link to="/classified?filter=best-price">
                  عرض الكل
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestPriceClassifiedAds.slice(0, 3).map((ad) => (
                <ClassifiedAdCard key={ad.id} ad={ad} />
              ))}
            </div>
          </div>

          {/* Popular Ads */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">الإعلانات الشائعة</h3>
              <Button asChild variant="outline">
                <Link to="/classified?filter=popular">
                  عرض الكل
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularClassifiedAds.slice(0, 3).map((ad) => (
                <ClassifiedAdCard key={ad.id} ad={ad} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Auction Creation CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <Gavel className="w-4 h-4 ml-2" />
              للبائعين والمالكين
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              أضف مزادك واحصل على أفضل سعر
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              ضع سيارتك أو عقارك في مزاد واتركه للمزايدين لتحديد القيمة
              الحقيقية. نظام شفاف وآمن مع ضمان الحصول على أفضل سعر.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <div className="w-12 h-12 auction-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Gavel className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">مزاد حقيقي</h3>
                <p className="text-sm text-muted-foreground">
                  مزايدة حقيقية من مشترين موثوقين
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <div className="w-12 h-12 auction-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">ضمان الأمان</h3>
                <p className="text-sm text-muted-foreground">
                  جميع المشترين مدفوعي التأمين وموثقي الهوية
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <div className="w-12 h-12 auction-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">أفضل سعر</h3>
                <p className="text-sm text-muted-foreground">
                  الحصول على أعلى ��عر ممكن عبر المنافسة
                </p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="auction-gradient text-white hover:scale-105 transition-transform"
            >
              <Link to="/post-auction">
                <Plus className="w-5 h-5 ml-2" />
                أضف مزادك مجاناً
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 auction-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            ابدأ رحلتك مع لوينتار اليوم
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف العملاء الراضين واحصل على أفضل العروض في المزادات
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="gold-gradient text-primary hover:scale-105 transition-transform"
            >
              <Link to="/register">
                <Users className="w-5 h-5 ml-2" />
                إنشاء حساب مجاني
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link to="/how-it-works">تعرف على المزيد</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
