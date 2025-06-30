import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Upload,
  Image as ImageIcon,
  Plus,
  X,
  MapPin,
  Clock,
  Tag,
  FileText,
  Camera,
  Gavel,
  DollarSign,
  Calendar,
  AlertTriangle,
  Info,
} from "lucide-react";
import { AuctionCategory } from "@shared/api";

export default function PostAuction() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "" as AuctionCategory | "",
    startingPrice: "",
    minimumIncrement: "",
    reservePrice: "",
    location: "",
    auctionType: "standard",
    duration: "24", // in hours
    startTime: "",
    endTime: "",
  });

  const [specifications, setSpecifications] = useState<Record<string, string>>(
    {},
  );
  const [images, setImages] = useState<string[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const categories = [
    { id: "cars", label: "سيارات" },
    { id: "houses", label: "منازل" },
    { id: "residential-real-estate", label: "عقارات سكنية" },
    { id: "commercial-real-estate", label: "عقارات تجارية" },
    { id: "land", label: "أراضي" },
  ];

  const auctionTypes = [
    {
      id: "standard",
      label: "مزاد عادي",
      description: "مزاد عادي بدون حد أدنى",
      price: "مجاني",
    },
    {
      id: "reserve",
      label: "مزاد بحد أدنى",
      description: "مزاد مع حد أدنى للسعر المقبول",
      price: "500,000 ل.س",
    },
    {
      id: "featured",
      label: "مزاد مميز",
      description: "مزاد مميز في الصفحة الرئيسية",
      price: "1,000,000 ل.س",
    },
  ];

  const durationOptions = [
    { value: "12", label: "12 ساعة" },
    { value: "24", label: "24 ساعة" },
    { value: "48", label: "48 ساعة" },
    { value: "72", label: "3 أيام" },
    { value: "168", label: "أسبوع" },
    { value: "336", label: "أسبوعين" },
  ];

  const syrianCities = [
    "دمشق",
    "حلب",
    "حمص",
    "حماة",
    "اللاذقية",
    "طرطوس",
    "درعا",
    "السويداء",
    "القنيطرة",
    "الرقة",
    "دير الزور",
    "الحسكة",
    "إدلب",
  ];

  const handleImageUpload = (files: FileList | null) => {
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result && images.length < 10) {
            setImages((prev) => [...prev, e.target?.result as string]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files) {
      handleImageUpload(e.dataTransfer.files);
    }
  };

  const addSpecification = (key: string, value: string) => {
    if (key && value) {
      setSpecifications((prev) => ({ ...prev, [key]: value }));
    }
  };

  const removeSpecification = (key: string) => {
    setSpecifications((prev) => {
      const newSpecs = { ...prev };
      delete newSpecs[key];
      return newSpecs;
    });
  };

  const calculateEndTime = () => {
    if (formData.startTime && formData.duration) {
      const startDate = new Date(formData.startTime);
      const endDate = new Date(
        startDate.getTime() + parseInt(formData.duration) * 60 * 60 * 1000,
      );
      setFormData({
        ...formData,
        endTime: endDate.toISOString().slice(0, 16),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Auction submitted:", { formData, specifications, images });
    // Here you would typically send the data to your API
  };

  const getSelectedAuctionType = () => {
    return auctionTypes.find((type) => type.id === formData.auctionType);
  };

  return (
    <Layout>
      <div className="py-12">
        {/* Hero Section */}
        <section className="auction-gradient text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">
              <Gavel className="w-4 h-4 ml-2" />
              إضافة مزاد جديد
            </Badge>
            <h1 className="text-4xl font-bold mb-4">أضف مزادك الخاص</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              ضع سيارتك أو عقارك في مزاد وحصل على أفضل سعر من آلاف المزايدين
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse">
                    <FileText className="w-5 h-5" />
                    <span>معلومات المزاد</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">عنوان المزاد *</Label>
                      <Input
                        id="title"
                        placeholder="مثال: مرسيدس S500 2022 للمزاد"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">الفئة *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value: AuctionCategory) =>
                          setFormData({ ...formData, category: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="اختر الفئة" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">وصف المزاد *</Label>
                    <Textarea
                      id="description"
                      placeholder="اكتب وصفاً مفصلاً عن السيارة أو العقار، حالته، مميزاته..."
                      className="min-h-[120px]"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">الموقع *</Label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) =>
                        setFormData({ ...formData, location: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المدينة" />
                      </SelectTrigger>
                      <SelectContent>
                        {syrianCities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Auction Type */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse">
                    <Gavel className="w-5 h-5" />
                    <span>نوع المزاد</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    {auctionTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          formData.auctionType === type.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() =>
                          setFormData({ ...formData, auctionType: type.id })
                        }
                      >
                        <div className="text-center space-y-2">
                          <h3 className="font-semibold">{type.label}</h3>
                          <p className="text-sm text-muted-foreground">
                            {type.description}
                          </p>
                          <div className="text-lg font-bold text-primary">
                            {type.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {formData.auctionType === "reserve" && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start space-x-2 space-x-reverse">
                        <Info className="w-4 h-4 text-blue-600 mt-0.5" />
                        <div className="text-sm text-blue-800">
                          <p className="font-medium mb-1">مزاد بحد أدنى:</p>
                          <p>
                            يتم بيع العنصر فقط إذا وصل أعلى عرض للحد الأدنى
                            المحدد. إذا لم يتم الوصول للحد الأدنى، لا يتم البيع.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse">
                    <DollarSign className="w-5 h-5" />
                    <span>تسعير المزاد</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="startingPrice">
                        السعر الابتدائي (ليرة سورية) *
                      </Label>
                      <Input
                        id="startingPrice"
                        type="number"
                        placeholder="10000000"
                        value={formData.startingPrice}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            startingPrice: e.target.value,
                          })
                        }
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        السعر الذي يبدأ منه المزاد
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="minimumIncrement">
                        الحد الأدنى للزيادة *
                      </Label>
                      <Input
                        id="minimumIncrement"
                        type="number"
                        placeholder="100000"
                        value={formData.minimumIncrement}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            minimumIncrement: e.target.value,
                          })
                        }
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        أقل مبلغ يمكن زيادته في كل مزايدة
                      </p>
                    </div>
                  </div>

                  {formData.auctionType === "reserve" && (
                    <div className="space-y-2">
                      <Label htmlFor="reservePrice">
                        الحد الأدنى المقبول (سعر الحجز)
                      </Label>
                      <Input
                        id="reservePrice"
                        type="number"
                        placeholder="15000000"
                        value={formData.reservePrice}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            reservePrice: e.target.value,
                          })
                        }
                      />
                      <p className="text-xs text-muted-foreground">
                        أقل سعر تقبل به لبيع العنصر
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Timing */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse">
                    <Clock className="w-5 h-5" />
                    <span>توقيت المزاد</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="startTime">تاريخ ووقت البداية *</Label>
                      <Input
                        id="startTime"
                        type="datetime-local"
                        value={formData.startTime}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            startTime: e.target.value,
                          });
                        }}
                        onBlur={calculateEndTime}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">مدة المزاد *</Label>
                      <Select
                        value={formData.duration}
                        onValueChange={(value) => {
                          setFormData({ ...formData, duration: value });
                          calculateEndTime();
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="اختر المدة" />
                        </SelectTrigger>
                        <SelectContent>
                          {durationOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {formData.endTime && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Calendar className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-800">
                          سينتهي المزاد في:{" "}
                          {new Date(formData.endTime).toLocaleString("ar-SA")}
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Images Upload */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse">
                    <Camera className="w-5 h-5" />
                    <span>صور المزاد ({images.length}/10)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive
                        ? "border-primary bg-primary/5"
                        : "border-muted"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-lg font-medium mb-2">
                      اسحب الصور هنا أو انقر للرفع
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      يمكن رفع حتى 10 صور عالية الجودة (PNG, JPG, JPEG)
                    </p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e.target.files)}
                      className="hidden"
                      id="image-upload"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        document.getElementById("image-upload")?.click()
                      }
                    >
                      <ImageIcon className="w-4 h-4 ml-2" />
                      اختر الصور
                    </Button>
                  </div>

                  {/* Image Preview */}
                  {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image}
                            alt={`صورة ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                          {index === 0 && (
                            <Badge
                              variant="secondary"
                              className="absolute bottom-1 left-1 text-xs"
                            >
                              صورة رئيسية
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse">
                    <Tag className="w-5 h-5" />
                    <span>المواصفات والتفاصيل</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="مثال: الموديل" id="spec-key" />
                    <div className="flex space-x-2 space-x-reverse">
                      <Input placeholder="مثال: 2020" id="spec-value" />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          const key = (
                            document.getElementById(
                              "spec-key",
                            ) as HTMLInputElement
                          )?.value;
                          const value = (
                            document.getElementById(
                              "spec-value",
                            ) as HTMLInputElement
                          )?.value;
                          if (key && value) {
                            addSpecification(key, value);
                            (
                              document.getElementById(
                                "spec-key",
                              ) as HTMLInputElement
                            ).value = "";
                            (
                              document.getElementById(
                                "spec-value",
                              ) as HTMLInputElement
                            ).value = "";
                          }
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Specifications List */}
                  {Object.keys(specifications).length > 0 && (
                    <div className="space-y-2">
                      <Label>المواصفات المضافة:</Label>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(specifications).map(([key, value]) => (
                          <Badge
                            key={key}
                            variant="secondary"
                            className="flex items-center space-x-1 space-x-reverse"
                          >
                            <span>
                              {key}: {value}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeSpecification(key)}
                              className="text-xs hover:text-destructive"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Fees and Terms */}
              <Card>
                <CardHeader>
                  <CardTitle>الرسوم والشروط</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start space-x-2 space-x-reverse">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <div className="text-sm text-amber-800">
                        <p className="font-medium mb-2">رسوم المزاد:</p>
                        <ul className="space-y-1">
                          <li>
                            • نوع المزاد المحدد:{" "}
                            <strong>{getSelectedAuctionType()?.price}</strong>
                          </li>
                          <li>• عمولة 3% من سعر البيع النهائي</li>
                          <li>• مبلغ التأمين: 2,000,000 ليرة سورية</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <input type="checkbox" id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        أوافق على{" "}
                        <a
                          href="/terms"
                          className="text-primary hover:underline"
                        >
                          شروط وأحكام
                        </a>{" "}
                        منصة لوينتار للمزادات
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <input type="checkbox" id="fees" required />
                      <Label htmlFor="fees" className="text-sm">
                        ��وافق على دفع الرسوم والعمولات المذكورة أعلاه
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full max-w-sm auction-gradient text-white"
                    >
                      <Gavel className="w-5 h-5 ml-2" />
                      إنشاء المزاد
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      سيتم مراجعة المزاد قبل النشر (24-48 ساعة)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
}
