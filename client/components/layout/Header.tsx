import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  Search,
  Menu,
  User,
  LogOut,
  Settings,
  Wallet,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state

  const categories = [
    { id: "cars", label: "سيارات", labelEn: "Cars" },
    { id: "real-estate", label: "عقارات", labelEn: "Real Estate" },
  ];

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 auction-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">م</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">لوينتار</span>
              <span className="text-xs text-muted-foreground">
                منصة المزادات الرائدة
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>الفئات</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/auctions?category=${category.id}`}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {category.label}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {category.labelEn}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/auctions"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  المزادات الحية
                  <Badge
                    variant="destructive"
                    className="mr-2 animate-bid-pulse"
                  >
                    مباشر
                  </Badge>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/classified"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  الإعلانات المجانية
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/how-it-works"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  كيف يعمل
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2 space-x-reverse flex-1 max-w-sm mx-4">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="ابحث عن المزادات..."
                className="w-full pl-4 pr-10 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2 space-x-reverse">
            {/* Post Auction Button */}
            <Button
              asChild
              size="sm"
              className="gold-gradient text-primary hover:scale-105 transition-transform"
            >
              <Link to="/post-auction">
                <Plus className="h-4 w-4 ml-2" />
                إضافة مزاد
              </Link>
            </Button>

            {/* Post Ad Button */}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Link to="/post-ad">
                <Plus className="h-4 w-4 ml-2" />
                إضافة إعلان
              </Link>
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                3
              </Badge>
            </Button>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="/placeholder-avatar.png"
                        alt="المستخدم"
                      />
                      <AvatarFallback>أح</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        أحمد محمد
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        ahmed@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="ml-2 h-4 w-4" />
                    <span>الملف الشخصي</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Wallet className="ml-2 h-4 w-4" />
                    <span>المحفظة</span>
                    <Badge variant="secondary" className="mr-auto">
                      مُفعّل
                    </Badge>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="ml-2 h-4 w-4" />
                    <span>الإعدادات</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    <LogOut className="ml-2 h-4 w-4" />
                    <span>تسجيل الخروج</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2 space-x-reverse">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLoggedIn(true)}
                >
                  تسجيل الدخول
                </Button>
                <Button
                  size="sm"
                  className="gold-gradient text-primary-foreground"
                >
                  إنشاء حساب
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="space-y-2">
              <Link
                to="/auctions"
                className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                المزادات الحية
              </Link>
              <Link
                to="/classified"
                className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                الإعلانات المجانية
              </Link>
              <Link
                to="/post-auction"
                className="block px-4 py-2 text-sm hover:bg-accent rounded-md font-medium text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                إضافة مزاد
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/auctions?category=${category.id}`}
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.label}
                </Link>
              ))}
              <Link
                to="/how-it-works"
                className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                كيف يعمل
              </Link>
              <Link
                to="/blacklist"
                className="block px-4 py-2 text-sm hover:bg-accent rounded-md text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                القائمة السوداء
              </Link>
            </div>

            {/* Mobile Search */}
            <div className="mt-4 px-4">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="ابحث عن المزادات..."
                  className="w-full pl-4 pr-10 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
