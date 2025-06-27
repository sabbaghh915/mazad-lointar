import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  UserCheck,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  Shield,
} from "lucide-react";

export default function Verification() {
  const steps = [
    {
      icon: Upload,
      title: "رفع الوثائق",
      description: "قم برفع صورة من الهوية الوطنية أو جواز السفر",
      status: "completed" as const,
    },
    {
      icon: UserCheck,
      title: "التحقق من الهوية",
      description: "سيتم مراجعة وثائقك من قبل فريقنا المختص",
      status: "pending" as const,
    },
    {
      icon: Shield,
      title: "التفعيل",
      description: "بعد الموافقة، سيتم تفعيل حسابك للمشاركة في المزادات",
      status: "waiting" as const,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <UserCheck className="w-4 h-4 ml-2" />
            توثيق الهوية
          </Badge>
          <h1 className="text-4xl font-bold mb-4">توثيق الهوية</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            لضمان الأمان والثقة، نحتاج للتحقق من هويتك قبل المشاركة في المزادات
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card
                key={index}
                className={`text-center p-6 ${
                  step.status === "completed"
                    ? "border-green-500 bg-green-50"
                    : step.status === "pending"
                      ? "border-warning bg-warning/5"
                      : "border-muted"
                }`}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      step.status === "completed"
                        ? "bg-green-500 text-white"
                        : step.status === "pending"
                          ? "bg-warning text-white"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <CheckCircle className="w-8 h-8" />
                    ) : step.status === "pending" ? (
                      <Clock className="w-8 h-8" />
                    ) : (
                      <step.icon className="w-8 h-8" />
                    )}
                  </div>
                  <div className="w-8 h-8 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                  {step.status === "completed" && (
                    <Badge variant="secondary" className="mt-2">
                      مكتمل
                    </Badge>
                  )}
                  {step.status === "pending" && (
                    <Badge variant="outline" className="mt-2">
                      قيد المراجعة
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Form */}
            <Card>
              <CardHeader>
                <CardTitle>رفع الوثائق</CardTitle>
                <p className="text-muted-foreground">
                  قم برفع صور واضحة من وثائق الهوية
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>الهوية الوطنية (الوجه الأمامي)</Label>
                  <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                    <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      اسحب الملف هنا أو انقر للرفع
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>الهوية الوطنية (الوجه الخلفي)</Label>
                  <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                    <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      اسحب الملف هنا أو انقر للرفع
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="id-number">رقم الهوية</Label>
                  <Input id="id-number" placeholder="أدخل رقم الهوية الوطنية" />
                </div>

                <Button className="w-full">رفع الوثائق</Button>
              </CardContent>
            </Card>

            {/* Status & Info */}
            <div className="space-y-6">
              {/* Current Status */}
              <Card>
                <CardHeader>
                  <CardTitle>حالة التوثيق</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 space-x-reverse p-4 bg-warning/10 rounded-lg">
                    <Clock className="w-6 h-6 text-warning" />
                    <div>
                      <p className="font-medium">قيد المراجعة</p>
                      <p className="text-sm text-muted-foreground">
                        سيتم الرد خلال 24-48 ساعة
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>متطلبات التوثيق</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">صور واضحة</p>
                      <p className="text-sm text-muted-foreground">
                        تأكد من وضوح جميع البيانات في الصور
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">وثائق سارية</p>
                      <p className="text-sm text-muted-foreground">
                        يجب أن تكون الوثائق غير منتهية الصلاحية
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">معلومات صحيحة</p>
                      <p className="text-sm text-muted-foreground">
                        تطابق البيانات مع معلومات الحساب
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Help */}
              <Card>
                <CardHeader>
                  <CardTitle>تحتاج مساعدة؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    إذا واجهت أي مشكلة في عملية التوثيق، تواصل معنا
                  </p>
                  <Button variant="outline" className="w-full">
                    تواصل مع الدعم الفني
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
