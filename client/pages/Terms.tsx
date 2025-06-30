import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  FileText,
  Shield,
  UserCheck,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Ban,
  HeadphonesIcon,
  Clock,
} from "lucide-react";

export default function Terms() {
  const sections = [
    {
      id: 1,
      icon: UserCheck,
      title: "التسجيل والموافقة",
      content: [
        "يشترط للتسجيل في التطبيق تقديم معلومات صحيحة وكاملة.",
        "يشترط توثيق الحساب للدخول الى المزاد.",
        "إلزام المستخدمين الجدد برفع وثائق ثبوتية (مثل الهوية أو رخصة قيادة) قبل أول مشاركة.",
        "يعتبر المستخدم موافقًا على هذه السياسة عند استخدامه للتطبيق.",
        "الموقع متاح للتصفح للجميع لكن المشاركة في المزادات تتطلب اشتراك مدفوع.",
      ],
    },
    {
      id: 2,
      icon: CreditCard,
      title: "نظام التأمين (الضمان)",
      content: [
        "يجب على الراغبين في المشاركة بالمزادات دفع مبلغ تأمين (2.000.000 ليرة أو ما يعادلها بالعملة المحلية أو الدولار).",
        "يُستخدم هذا التأمين لضمان الجدية ومنع المزايدات الوهمية.",
        "يُسترد مبلغ التأمين في حال عد�� الفوز بالمزاد أو في حال عدم وجود مخالفات.",
        "خلال مدة أقصاها خلال أيام الأسبوع.",
      ],
    },
    {
      id: 3,
      icon: Shield,
      title: "شروط المشاركة في المزاد",
      content: [
        "لا يحق للمستخدم سحب العرض بعد تقديمه.",
        "يجب دفع كامل قيمة المزاد خلال مدة أقصاها 48 ساعة من لحظة الفوز.",
        "في حال عدم السداد، يتم مصادرة مبلغ التأمين، ويُعاد عرض السلعة بالمزاد مرة أخرى.",
      ],
    },
    {
      id: 4,
      icon: CheckCircle,
      title: "الشفافية والمصداقية",
      content: [
        "التطبيق يلتزم بعرض معلومات دقيقة عن المنتجات أو العقارات المعروضة.",
        "البائع مسؤول عن صحة المعلومات والصور.",
      ],
    },
    {
      id: 5,
      icon: AlertTriangle,
      title: "السلوك غير المشروع",
      content: [
        "يُمنع استخدام حسابات وهمية أو التنسيق بين مستخدمين لرفع الأسعار عمدًا.",
        "في حال ثبوت أي تلاعب، يتم حظر المستخدم ومصادرة التأمين.",
      ],
    },
    {
      id: 6,
      icon: CreditCard,
      title: "إعادة المبلغ",
      content: [
        "يُعاد مبلغ التأمين تلقائيًا بعد انتهاء المزاد في حال عدم الفوز أو بعد تسليم المبلغ في حالة الفوز دون مخالفات.",
      ],
    },
    {
      id: 7,
      icon: Ban,
      title: "إدراج المخالف للقوانين في القائمة السوداء",
      content: [
        "في حال مخالفة القوانين، يتم إدراج المستخدم في القائمة السوداء.",
        "قد يكون الحظر مؤقت أو دائم حسب طبيعة وخطورة المخالفة.",
        "يتم نشر القائمة السوداء علناً لحماية المستخدمين الآخرين.",
        "المخالفات تشمل: عدم السداد، المزايدة الوهمية، الوثائق المزورة، التلاعب بالأسعار، والإزعاج.",
        "يحق للمنصة حظر المستخدم فوراً دون إنذار مسبق في حالات المخالفات الجسيمة.",
      ],
    },
    {
      id: 8,
      icon: FileText,
      title: "شروط للبائعين",
      content: [
        "إلزام البائع بتوفير صور واضحة + تقرير فني أو وصف دقيق للسلعة.",
        "فرض عمولة على البائع فقط عند نجاح المزاد.",
      ],
    },
    {
      id: 9,
      icon: Shield,
      title: "تصنيف المستخدمين حسب المصداقية",
      content: [
        "نظام تقييم (نقاط ثقة) للمستخدمين بناءً على التزامهم بالسداد والمشاركة الجدية.",
        "أصحاب التقييم المنخفض يخضعون لقيود أو تأمين أعلى.",
        "المستخدمون ذوو التقييم العالي يحصلون على امتيازات خاصة ومزادات حصرية (VIP).",
      ],
    },
    {
      id: 10,
      icon: Clock,
      title: "وقت المزاد المرن",
      content: [
        "ميزة 'التمديد التلقائي' للمزاد (2 أو 5 دقائق) إذا تم تقديم عرض جديد في آخر دقيقة.",
        "هذا يضمن عدالة المزايدة ويمنع المزايدة في اللحظة الأخيرة.",
      ],
    },
    {
      id: 11,
      icon: CreditCard,
      title: "المحفظة الداخلية",
      content: [
        "يستطيع المستخدم شحن ��صيده مسبقاً للمزايدة السريعة.",
        "يُخصم من الرصيد تلقائيًا عند الفوز بالمزاد.",
        "يمكن السحب أو الاسترجاع من الرصيد خلال مدة محددة.",
        "الرصيد آمن ومحمي بأعلى معايير الأمان.",
      ],
    },
    {
      id: 12,
      icon: AlertTriangle,
      title: "نطاق المحتوى",
      content: [
        "المنصة مخصصة حصرياً للعقارات والسيارات فقط.",
        "جميع العناصر الأخرى غير مسموحة ويتم رفضها.",
      ],
    },
    {
      id: 13,
      icon: HeadphonesIcon,
      title: "دعم العمل��ء والتواصل",
      content: [
        "يوجد قسم خاص للدعم الفني يمكن التواصل معه للاستفسارات أو تقديم الشكاوى.",
        "رقم وات�� اب مخصص للتواصل المباشر مع فريق الدعم: +966 50 123 4567",
        "إشعارات تلقائية لحظية عند وجود مزادات جديدة أو قرب انتهاء مزاد مهتم به المستخدم.",
      ],
    },
  ];

  return (
    <Layout>
      <div className="py-12">
        {/* Hero Section */}
        <section className="auction-gradient text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">
              <FileText className="w-4 h-4 ml-2" />
              الشروط والأحكام
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              سياسة استخدام تطبيق لوينتار
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              اقرأ هذه الشروط والأحكام بعناية قبل استخدام منصة لوينتار للمزادات.
              باستخدامك للمنصة، فإنك توافق على الالتزام بهذه الشروط.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Important Notice */}
            <Card className="mb-8 border-warning bg-warning/5">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <AlertTriangle className="w-6 h-6 text-warning mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      إشعار مهم للمستخدمين
                    </h3>
                    <p className="text-muted-foreground">
                      هذه الشروط والأحكام ملزمة قانونياً لجميع مستخدمي منصة
                      لوينتار. يُرجى قراءتها بعناية قبل البدء في استخدام المنصة.
                      استخدامك للمنصة يعني موافقتك الكاملة على هذه الشروط.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <Card key={section.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 auction-gradient rounded-lg flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          المادة {section.id}
                        </Badge>
                        <CardTitle className="text-xl">
                          {section.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start space-x-3 space-x-reverse"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  {index < sections.length - 1 && <Separator />}
                </Card>
              ))}
            </div>

            {/* Security Highlight */}
            <Card className="mt-12 bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    مبلغ التأمين: 2,000,000 ليرة
                  </h3>
                  <p className="text-muted-foreground">
                    مبلغ التأمين المطلوب للمشاركة في المزادات يضمن جدية
                    المشاركين ويحمي النظام من المزايدات الوهمية
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-center">
                  هل لديك استفسارات حول الشروط والأحكام؟
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  فريق الدعم ال��ني متاح للإجابة على جميع استفساراتك
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <HeadphonesIcon className="w-4 h-4 text-primary" />
                    <span>support@lewinter.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <HeadphonesIcon className="w-4 h-4 text-primary" />
                    <span>+966 11 123 4567</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <div className="w-4 h-4 text-primary">💬</div>
                    <span>واتس اب: +966 50 123 4567</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <div className="text-center mt-8 text-sm text-muted-foreground">
              آخر تح��يث: {new Date().toLocaleDateString("ar-SA")}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
