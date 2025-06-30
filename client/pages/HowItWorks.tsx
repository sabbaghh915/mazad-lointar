import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  UserCheck,
  CreditCard,
  Gavel,
  Trophy,
  Shield,
  Clock,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserCheck,
      title: "إنشاء حساب وتوثيق الهوية",
      description: "قم بإنشاء حساب مجاني وتوثيق هويتك للتأكد من صحة المعلومات",
    },
    {
      icon: CreditCard,
      title: "دفع مبلغ التأمين",
      description: "ادفع مبلغ التأمين المطلوب للمشاركة في المزايدة",
    },
    {
      icon: Gavel,
      title: "المشاركة في المزايدة",
      description: "شارك في المزايدة الحية وقدم أفضل عروضك",
    },
    {
      icon: Trophy,
      title: "الفوز والشراء",
      description: "إذا فزت، أكمل عملية الشراء واستلم العنصر",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "أمان مضمون",
      description: "جميع المعاملات محمية بأعلى معايير الأمان",
    },
    {
      icon: Clock,
      title: "مزايدة مباشرة",
      description: "تابع المزايدة لحظة بلحظة مع التحديثات الفورية",
    },
  ];

  return (
    <Layout>
      <div className="py-12">
        {/* Hero Section */}
        <section className="auction-gradient text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">
              دليل الاستخدام
            </Badge>
            <h1 className="text-4xl font-bold mb-4">كيف يعمل مزاد العرب</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              تعرف على الخطوات البسيطة للمشاركة في المزادات والفوز بأفضل العروض
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">خطوات المشاركة</h2>
              <p className="text-lg text-muted-foreground">
                اتبع هذه الخطوات البسيطة للبدء
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="text-center p-6">
                  <CardHeader>
                    <div className="w-16 h-16 auction-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">مميزاتنا</h2>
              <p className="text-lg text-muted-foreground">
                لماذا تختار مزاد العرب
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <CardHeader>
                    <div className="w-12 h-12 auction-gradient rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">ابدأ الآن</h2>
            <p className="text-lg text-muted-foreground mb-8">
              انضم إلى آلاف المستخدمين واحصل على أفضل العروض
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-gradient text-primary">
                إنشاء حساب
              </Button>
              <Button variant="outline" size="lg">
                تصفح المزادات
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
