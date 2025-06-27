import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CreditCard,
  Wallet,
  Shield,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Clock,
  Lock,
} from "lucide-react";

export default function Payment() {
  const depositAmount = 2000000; // 2,000,000 ليرة

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ar-SA", {
      style: "currency",
      currency: "SYP",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const paymentMethods = [
    {
      id: "wallet",
      icon: Wallet,
      title: "المحفظة الداخلية",
      description: "استخدم رصيد محفظتك الحالي",
      available: true,
      balance: 1500000,
    },
    {
      id: "card",
      icon: CreditCard,
      title: "بطاقة ائتمانية",
      description: "فيزا، ماستركارد، أو أمريكان إكسبريس",
      available: true,
    },
    {
      id: "bank",
      icon: DollarSign,
      title: "تحويل بنكي",
      description: "تحويل مباشر من البن��",
      available: true,
    },
  ];

  return (
    <Layout>
      <div className="py-12">
        {/* Hero Section */}
        <section className="auction-gradient text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">
              <CreditCard className="w-4 h-4 ml-2" />
              الدفع والتأمين
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              دفع مبلغ التأمين للمشاركة في المزادات
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              للمشاركة في المزادات، يُرجى دفع مبلغ التأمين المطلوب لضمان الجدية
              ومنع المزايدات الوهمية
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Deposit Amount Card */}
            <Card className="mb-8 bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    مبلغ التأمين المطلوب
                  </h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {formatCurrency(depositAmount)}
                  </div>
                  <p className="text-muted-foreground">
                    (أو ما يعادلها بالعملة المحلية أو الدولار)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>اختر طريقة الدفع</CardTitle>
                    <p className="text-muted-foreground">
                      اختر الطريقة المناسبة لك لدفع مبلغ التأمين
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {paymentMethods.map((method) => (
                      <Card
                        key={method.id}
                        className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-primary"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3 space-x-reverse">
                            <div className="w-10 h-10 auction-gradient rounded-lg flex items-center justify-center">
                              <method.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{method.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {method.description}
                              </p>
                              {method.id === "wallet" && (
                                <div className="mt-2">
                                  <Badge
                                    variant={
                                      method.balance >= depositAmount
                                        ? "secondary"
                                        : "destructive"
                                    }
                                  >
                                    الرصيد: {formatCurrency(method.balance)}
                                  </Badge>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center">
                              {method.available ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <Clock className="w-5 h-5 text-yellow-500" />
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>

                {/* Payment Form */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>تفاصيل الدفع</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">المبلغ</Label>
                      <Input
                        id="amount"
                        value={formatCurrency(depositAmount)}
                        disabled
                        className="font-bold text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-number">رقم ال��طاقة</Label>
                      <Input
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">تاريخ الانتهاء</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">اسم حامل البطاقة</Label>
                      <Input
                        id="name"
                        placeholder="الاسم كما يظهر على البطاقة"
                      />
                    </div>
                    <Button className="w-full gold-gradient text-primary">
                      <Lock className="w-4 h-4 ml-2" />
                      دفع مبلغ التأمين
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                {/* Security Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 space-x-reverse">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span>معلومات مهمة</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">استرداد كامل</p>
                        <p className="text-sm text-muted-foreground">
                          يُسترد المبلغ كاملاً في حال عدم الفوز بالمزاد
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">معاملات آمنة</p>
                        <p className="text-sm text-muted-foreground">
                          جميع المعاملات محمية بأعلى معايير الأمان
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">استرداد سريع</p>
                        <p className="text-sm text-muted-foreground">
                          يتم الاسترداد خلال أيام الأسبوع
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Refund Policy */}
                <Card>
                  <CardHeader>
                    <CardTitle>سياسة الاسترداد</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        في حال الفوز وعدم السداد خلال 48 ساعة، يتم مصادرة مبلغ
                        التأمين
                      </p>
                    </div>
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        يُسترد التأمين تلقائياً بعد انتهاء المزاد دون فوز
                      </p>
                    </div>
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        لا توجد رسوم خفية أو عمولات إضافية
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Support */}
                <Card>
                  <CardHeader>
                    <CardTitle>تحتاج مساعدة؟</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      فريق الدعم متاح لمساعدتك في عملية الدفع
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-4 h-4 text-primary">💬</div>
                        <span>واتس اب: +963 000 000 000</span>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <CreditCard className="w-4 h-4 text-primary" />
                        <span>support@lewinter.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
