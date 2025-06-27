import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Shield,
  Award,
  Clock,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-8 border-b border-primary-foreground/20">
          <div className="flex items-center space-x-3 space-x-reverse">
            <Shield className="h-8 w-8 text-secondary" />
            <div>
              <h3 className="font-semibold">آمان مضمون</h3>
              <p className="text-sm text-primary-foreground/80">
                جميع المعاملات محمية ومؤمنة
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse">
            <Award className="h-8 w-8 text-secondary" />
            <div>
              <h3 className="font-semibold">منصة معتمدة</h3>
              <p className="text-sm text-primary-foreground/80">
                مرخصة من الجهات الرسمية
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse">
            <Clock className="h-8 w-8 text-secondary" />
            <div>
              <h3 className="font-semibold">دعم 24/7</h3>
              <p className="text-sm text-primary-foreground/80">
                خدمة عملاء متواصلة
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">م</span>
              </div>
              <span className="font-bold text-lg">لوينتار</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-sm leading-relaxed">
              منصة لوينتار الرائدة للمزادات. توفر بيئة آمنة وموثوقة للمزايدة على
              أفضل العقارات والسيارات والأراضي.
            </p>
            <div className="flex space-x-2 space-x-reverse">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-secondary"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-secondary"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-secondary"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/auctions"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  المزادات الحية
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  كيف يعمل الموقع
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  إنشاء حساب
                </Link>
              </li>
              <li>
                <Link
                  to="/verification"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  توثيق الهوية
                </Link>
              </li>
              <li>
                <Link
                  to="/payment"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  الدفع والتأمين
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">الفئات</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/auctions?category=cars"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  سيارات
                </Link>
              </li>
              <li>
                <Link
                  to="/auctions?category=houses"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  منازل
                </Link>
              </li>
              <li>
                <Link
                  to="/auctions?category=land"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  أراضي
                </Link>
              </li>
              <li>
                <Link
                  to="/auctions?category=commercial"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  عقارات تجارية
                </Link>
              </li>
              <li>
                <Link
                  to="/auctions?category=residential"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  عقارات سكنية
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">تواصل معنا</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">
                  +966 11 123 4567
                </span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-4 h-4 text-secondary">💬</div>
                <span className="text-primary-foreground/80">
                  واتس اب: +963 000 000 000
                </span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">
                  info@lonitar.com
                </span>
              </div>
              <div className="flex items-start space-x-2 space-x-reverse">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">
                  حلب. الجمهورية العربية السورية
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">اشترك في النشرة الإخبارية</h4>
              <div className="flex space-x-2 space-x-reverse">
                <Input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="text-sm bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button
                  size="sm"
                  className="gold-gradient text-primary-foreground whitespace-nowrap"
                >
                  اشتراك
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 لوينتار. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
              >
                سياسة الخصوصية
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
              >
                سياسة الاستخدام
              </Link>
              <Link
                to="/support"
                className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
              >
                الدعم الفني
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
