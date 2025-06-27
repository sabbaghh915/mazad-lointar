import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Wallet,
  History,
  Heart,
  Settings,
  CheckCircle,
  Shield,
} from "lucide-react";

export default function Profile() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-avatar.png" alt="أحمد محمد" />
                <AvatarFallback>أم</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-right flex-1">
                <h1 className="text-2xl font-bold mb-2">أحمد محمد السعيد</h1>
                <p className="text-muted-foreground mb-4">
                  ahmed@example.com • عضو منذ يناير 2024
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <CheckCircle className="w-3 h-3" />
                    موثق الهوية
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Shield className="w-3 h-3" />
                    تأمين مدفوع
                  </Badge>
                </div>
              </div>
              <Button variant="outline">تعديل الملف الشخصي</Button>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="bids">مزايداتي</TabsTrigger>
            <TabsTrigger value="wallet">المحفظة</TabsTrigger>
            <TabsTrigger value="favorites">المفضلة</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <User className="w-8 h-8 mx-auto text-primary mb-2" />
                  <CardTitle>المزايدات النشطة</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <p className="text-sm text-muted-foreground">مزايدات جارية</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <History className="w-8 h-8 mx-auto text-primary mb-2" />
                  <CardTitle>المزايدات المكتملة</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary">12</div>
                  <p className="text-sm text-muted-foreground">مزايدة سابقة</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Wallet className="w-8 h-8 mx-auto text-primary mb-2" />
                  <CardTitle>رصيد المحفظة</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    25,000 ريال
                  </div>
                  <p className="text-sm text-muted-foreground">متاح للمزايدة</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bids">
            <Card>
              <CardHeader>
                <CardTitle>مزايداتي</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  لا توجد مزايدات نشطة حالياً
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wallet">
            <Card>
              <CardHeader>
                <CardTitle>إدارة المحفظة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  إدارة المحفظة والمدفوعات
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>المزادات المفضلة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  لا توجد مزادات مفضلة
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>إعدادات الحساب</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  إعدادات الحساب والإشعارات
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
