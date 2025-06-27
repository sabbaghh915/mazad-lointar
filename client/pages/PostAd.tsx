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
  Phone,
  Tag,
  FileText,
  Camera,
  CheckCircle,
} from "lucide-react";
import { AuctionCategory } from "@shared/api";

export default function PostAd() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "" as AuctionCategory | "",
    price: "",
    condition: "",
    location: "",
    contactName: "",
    contactPhone: "",
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

  const conditions = [
    { id: "new", label: "جديد" },
    { id: "excellent", label: "ممتاز" },
    { id: "good", label: "جيد" },
    { id: "fair", label: "مقبول" },
    { id: "used", label: "مستعمل" },
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
          if (e.target?.result && images.length < 8) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { formData, specifications, images });
    // Here you would typically send the data to your API
  };

  return (
    <Layout>
      <div className="py-12">
        {/* Hero Section */}
        <section className="auction-gradient text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">
              <Plus className="w-4 h-4 ml-2" />
              إضافة إعلان مجاني
            </Badge>
            <h1 className="text-4xl font-bold mb-4">أضف إعلانك المجاني</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              انشر إعلانك للسيارات والعقارات مجاناً وتواصل مع آلاف المهتمين
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
                    <span>المعلومات الأساسية</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">عنوان الإعلان *</Label>
                      <Input
                        id="title"
                        placeholder="مثال: تويوتا كامري 2020 للبيع"
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
                    <Label htmlFor="description">الوصف *</Label>
                    <Textarea
                      id="description"
                      placeholder="اكتب وصفاً مفصلاً عن السيارة أو العقار..."
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

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="price">السعر (ليرة سورية) *</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="15000000"
                        value={formData.price}
                        onChange={(e) =>
                          setFormData({ ...formData, price: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="condition">الحالة *</Label>
                      <Select
                        value={formData.condition}
                        onValueChange={(value) =>
                          setFormData({ ...formData, condition: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="اختر الحالة" />
                        </SelectTrigger>
                        <SelectContent>
                          {conditions.map((condition) => (
                            <SelectItem key={condition.id} value={condition.id}>
                              {condition.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">المدينة *</Label>
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
                  </div>
                </CardContent>
              </Card>

              {/* Images Upload */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse">
                    <Camera className="w-5 h-5" />
                    <span>الصور ({images.length}/8)</span>
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
                      يمكن رفع حتى 8 صور (PNG, JPG, JPEG)
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
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

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse">
                    <Phone className="w-5 h-5" />
                    <span>معلومات التواصل</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">اسم المعلن *</Label>
                      <Input
                        id="contactName"
                        placeholder="الاسم الكامل"
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">رقم الهاتف *</Label>
                      <Input
                        id="contactPhone"
                        placeholder="+963 991 234 567"
                        value={formData.contactPhone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactPhone: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse">
                    <Tag className="w-5 h-5" />
                    <span>المواصفات الإضافية</span>
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

              {/* Submit Button */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>الإعلان مجاني تماماً</span>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full max-w-sm gold-gradient text-primary"
                    >
                      <Plus className="w-5 h-5 ml-2" />
                      نشر الإعلان المجاني
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      بالنقر على "نشر الإعلان" فإنك توافق على شروط الاستخدام
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
