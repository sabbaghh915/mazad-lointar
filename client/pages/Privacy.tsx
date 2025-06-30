import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  Cookie,
  Share2,
  AlertTriangle,
  FileText,
  Mail,
} from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      icon: Database,
      title: "المعلومات التي نجمعها",
      content: [
        "بيانات الحساب الشخصي (الاسم، البريد الإلكتروني، رقم الهاتف)",
        "معلومات التحقق من الهوية (نسخ من الهوية الشخصية أو جواز السفر)",
        "بيانات المعاملات المالية والمزادات",
        "سجل النشاط على المنصة (المزادات، العروض، التفاعلات)",
        "عنوان IP وبيانات المتصفح لأغراض الأمان",
      ],
    },
    {
      icon: Eye,
      title: "كيف نستخدم معلوماتك",
      content: [
        "التحقق من هوية المستخدمين لضمان أمان المعاملات",
        "تسهيل عمليات المزايدة والبيع والشراء",
        "منع الاحتيال وحماية المنصة من الاستخدام المسيء",
        "تحسين خدماتنا وتطوير ميزات جديدة",
        "التواصل معك بخصوص حسابك أو المعاملات",
        "الامتثال للمتطلبات القانونية والتنظيمية",
      ],
    },
    {
      icon: Share2,
      title: "مشاركة المعلومات",
      content: [
        "لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة",
        "قد نشارك معلومات محدودة مع:",
        "- موفري خدمات الدفع المعتمدين",
        "- الجهات القانونية عند الضرورة",
        "- شركاء التقنية لتحسين الخدمة",
        "جميع المشاركات تتم وفقاً لاتفاقيات سرية صارمة",
      ],
    },
    {
      icon: Lock,
      title: "حماية بياناتك",
      content: [
        "تشفير جميع البيانات الحساسة باستخدام معايير SSL/TLS",
        "حماية متعددة الطبقات للخوادم والقواعد البيانات",
        "مراقبة أمنية مستمرة على مدار الساعة",
        "نسخ احتياطية آمنة ومشفرة للبيانات",
        "تدريب فريق العمل على أفضل ممارسات الأمان",
        "تحديثات أمنية منتظمة للأنظمة",
      ],
    },
    {
      icon: Cookie,
      title: "ملفات تعريف الارتباط (Cookies)",
      content: [
        "نستخدم ملفات تعريف الارتباط لتحسين تجربة الاستخدام",
        "حفظ تفضيلات المستخدم وإعدادات الحساب",
        "تتبع الأداء وتحليل استخدام الموقع",
        "منع الاحتيال وتعزيز الأمان",
        "يمكنك إدارة إعدادات ملفات تعريف الارتباط من المتصفح",
      ],
    },
    {
      icon: UserCheck,
      title: "حقوقك",
      content: [
        "الوصول إلى بياناتك الشخصية وطلب نسخة منها",
        "تحديث أو تصحيح المعلومات غير الدقيقة",
        "طلب حذف بياناتك (وفقاً للقوانين المعمول بها)",
        "سحب الموافقة على معالجة بيانات معينة",
        "تقديم شكوى إلى السلطات المختصة",
        "طلب تقييد معالجة بياناتك في حالات محددة",
      ],
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">سياسة الخصوصية</h1>
            <p className="text-xl text-white/90 mb-6">
              نحن ملتزمون بحماية خصوصيتك وأمان بياناتك
            </p>
            <p className="text-sm text-white/80">آخر تحديث: ديسمبر 2024</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3 space-x-reverse">
              <FileText className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">مقدمة</h3>
                <p className="text-blue-700 leading-relaxed">
                  في منصة لوينتار، نتفهم أهمية خصوصيتك وحماية بياناتك الشخصية.
                  هذه السياسة توضح كيفية جمع واستخدام وحماية معلوماتك عند
                  استخدام منصتنا للمزادات. نحن ملتزمون بالشفافية الكاملة وحماية
                  حقوقك في الخصوصية.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 space-x-reverse">
                  <section.icon className="w-6 h-6 text-primary" />
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start space-x-3 space-x-reverse"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Data Retention */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 space-x-reverse">
              <Database className="w-6 h-6 text-primary" />
              <span>الاحتفاظ بالبيانات</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                نحتفظ بمعلوماتك الشخصية للمدة اللازمة لتحقيق الأغراض المذكورة في
                هذه السياسة:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">بيانات الحساب</h4>
                  <p className="text-sm text-muted-foreground">
                    طوال فترة نشاط الحساب + 3 سنوات للمتطلبات القانونية
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">سجل المعاملات</h4>
                  <p className="text-sm text-muted-foreground">
                    7 سنوات لأغراض المحاسبة والامتثال القانوني
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">بيانات الأمان</h4>
                  <p className="text-sm text-muted-foreground">
                    6 أشهر للسجلات الأمنية وتتبع النشاط المشبوه
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">ملفات تعريف الارتباط</h4>
                  <p className="text-sm text-muted-foreground">
                    من 30 يوم إلى سنتين حسب نوع البيانات المحفوظة
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* International Transfers */}
        <Card className="mt-8 border-amber-200 bg-amber-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3 space-x-reverse">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">
                  نقل البيانات دولياً
                </h3>
                <p className="text-amber-700 mb-3">
                  قد تتم معالجة بياناتك في دول أخرى لأغراض تقنية أو تشغيلية.
                  نضمن نفس مستوى الحماية عبر:
                </p>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• اتفاقيات حماية البيانات مع جميع الشركاء</li>
                  <li>• استخدام آليات الحماية المعتمدة دولياً</li>
                  <li>• تشفير البيانات أثناء النقل والتخزين</li>
                  <li>• مراجعة دورية لممارسات الأمان</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 space-x-reverse">
              <Mail className="w-6 h-6 text-primary" />
              <span>التواصل معنا</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية أو تريد ممارسة حقوقك،
              يرجى التواصل معنا:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">معلومات التواصل</h4>
                <div className="space-y-2 text-sm">
                  <p>البريد الإلكتروني: privacy@lewinter.com</p>
                  <p>الهاتف: +966 11 123 4567</p>
                  <p>العنوان: الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">أوقات الاستجابة</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• طلبات الوصول للبيانات: خلال 30 يوم</p>
                  <p>• طلبات الحذف: خلال 15 يوم</p>
                  <p>• الاستفسارات العامة: خلال 48 ساعة</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates Notice */}
        <Card className="mt-8 bg-green-50 border-green-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-green-800 mb-2">
              تحديثات السياسة
            </h3>
            <p className="text-green-700">
              قد نقوم بتحديث هذه السياسة من وقت لآخر. سنخطرك بأي تغييرات جوهرية
              عبر البريد الإلكتروني أو إشعار على المنصة. يُعتبر استمرارك في
              استخدام الم��صة موافقة على السياسة المحدثة.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
