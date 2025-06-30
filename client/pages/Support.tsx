import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Headphones,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  HelpCircle,
  Shield,
  CreditCard,
  User,
  FileText,
  Send,
} from "lucide-react";

export default function Support() {
  const supportTopics = [
    {
      icon: User,
      title: "إدارة الحساب",
      description: "مساعدة في التسجيل وإدارة الملف الشخصي",
      items: [
        "إنشاء حساب جديد",
        "استرداد كلمة المرور",
        "تحديث بيانات الملف الشخصي",
        "حذف الحساب",
      ],
    },
    {
      icon: CreditCard,
      title: "الدفع والمالية",
      description: "مساعدة في المدفوعات والتأمينات",
      items: [
        "دفع التأمين (2,000,000 ل.س)",
        "استرداد المبالغ",
        "مشاكل في الدفع",
        "الفواتير والإيصالات",
      ],
    },
    {
      icon: Shield,
      title: "الأمان والتوثيق",
      description: "مساعدة في توثيق الهوية والأمان",
      items: [
        "توثيق الهوية",
        "مشاكل في التحقق",
        "الإبلاغ عن مخالفات",
        "حماية الحساب",
      ],
    },
    {
      icon: FileText,
      title: "المزادات والإعلانات",
      description: "مساعدة في استخدام المنصة",
      items: [
        "إنشاء مزاد",
        "المشاركة في المزايدة",
        "نشر إعلان مجاني",
        "إدارة الإعلانات",
      ],
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Headphones className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">الدعم الفني</h1>
            <p className="text-xl text-white/90">
              نحن هنا لمساعدتك على مدار الساعة
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">اتصل بنا</h3>
              <p className="text-sm text-muted-foreground mb-4">
                خدمة العملاء متاحة 24/7
              </p>
              <p className="font-medium">+966 11 123 4567</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">واتس اب</h3>
              <p className="text-sm text-muted-foreground mb-4">
                تواصل سريع ومباشر
              </p>
              <p className="font-medium">+966 50 123 4567</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">البريد الإلكتروني</h3>
              <p className="text-sm text-muted-foreground mb-4">
                للاستفسارات والشكاوى
              </p>
              <p className="font-medium">support@lewinter.com</p>
            </CardContent>
          </Card>
        </div>

        {/* Operating Hours */}
        <Card className="mb-12 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <Clock className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold text-blue-800">ساعات العمل</h3>
                <p className="text-blue-700">
                  خدمة العملاء متاحة 24 ساعة، 7 أيام في الأسبوع
                </p>
                <p className="text-sm text-blue-600">
                  متوسط وقت الاستجابة: أقل من ساعة واحدة
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Support Topics */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">المواضيع الشائعة</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {supportTopics.map((topic, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 space-x-reverse">
                      <topic.icon className="w-5 h-5 text-primary" />
                      <span>{topic.title}</span>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {topic.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {topic.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-sm flex items-center space-x-2 space-x-reverse"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse">
                  <HelpCircle className="w-5 h-5" />
                  <span>تواصل معنا</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  أرسل استفسارك وسنرد عليك في أسرع وقت
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      الاسم
                    </label>
                    <Input placeholder="اكتب اسمك" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      البريد الإلكتروني
                    </label>
                    <Input type="email" placeholder="example@email.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      نوع الاستفسار
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر نوع الاستفسار" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">إدارة الحساب</SelectItem>
                        <SelectItem value="payment">الدفع والمالية</SelectItem>
                        <SelectItem value="security">
                          الأمان والتوثيق
                        </SelectItem>
                        <SelectItem value="auctions">المزادات</SelectItem>
                        <SelectItem value="ads">الإعلانات</SelectItem>
                        <SelectItem value="technical">مشكلة تقنية</SelectItem>
                        <SelectItem value="other">أخرى</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      الرسالة
                    </label>
                    <Textarea placeholder="اكتب استفسارك هنا..." rows={4} />
                  </div>

                  <Button className="w-full">
                    <Send className="w-4 h-4 ml-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="mt-6">
              <CardContent className="p-4">
                <h4 className="font-medium mb-2">لم تجد ما تبحث عنه؟</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  راجع الأسئلة الشائعة أو شروط الاستخدام
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    الأسئلة الشائعة
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a href="/terms">شروط ال��ستخدام</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
