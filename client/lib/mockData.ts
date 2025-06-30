import { AuctionItem, User, ClassifiedAd, BlacklistedUser } from "@shared/api";

const mockUsers: User[] = [
  {
    id: "1",
    name: "أحمد محمد السعيد",
    email: "ahmed@example.com",
    isVerified: true,
    depositPaid: true,
    profileImage: "/placeholder-avatar.png",
    trustScore: 95,
    membershipLevel: "vip",
    totalTransactions: 24,
    successfulTransactions: 23,
    walletBalance: 500000,
    isBlacklisted: false,
  },
  {
    id: "2",
    name: "فاطمة عبدالله",
    email: "fatima@example.com",
    isVerified: true,
    depositPaid: true,
    profileImage: "/placeholder-avatar.png",
    trustScore: 88,
    membershipLevel: "platinum",
    totalTransactions: 15,
    successfulTransactions: 14,
    walletBalance: 250000,
    isBlacklisted: false,
  },
  {
    id: "3",
    name: "محمد علي الأحمد",
    email: "mohammed@example.com",
    isVerified: true,
    depositPaid: true,
    profileImage: "/placeholder-avatar.png",
    trustScore: 72,
    membershipLevel: "gold",
    totalTransactions: 8,
    successfulTransactions: 7,
    walletBalance: 150000,
    isBlacklisted: false,
  },
];

export const mockAuctions: AuctionItem[] = [
  // دمشق - العاصمة
  {
    id: "1",
    title: "فيلا فاخرة في دمشق - المزة",
    titleEn: "Luxury Villa in Damascus - Mazzeh",
    description:
      "فيلا رائعة في منطقة المزة المميزة، تتكون من 5 غرف نوم، 4 حمامات، صالون كبير، غرفة طعام، مطبخ حديث، حديقة واسعة مع مسبح",
    descriptionEn:
      "Beautiful villa in premium Mazzeh area with 5 bedrooms, 4 bathrooms, large living room, dining room, modern kitchen, spacious garden with pool",
    category: "houses",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    startingPrice: 45000000,
    currentBid: 52000000,
    minimumBid: 52500000,
    currency: "SYP",
    status: "live",
    startTime: "2024-01-15T10:00:00Z",
    endTime: "2024-01-25T18:00:00Z",
    location: "دمشق - المزة",
    locationEn: "Damascus - Mazzeh",
    seller: mockUsers[0],
    bids: [
      {
        id: "b1",
        amount: 52000000,
        bidder: mockUsers[1],
        timestamp: "2024-01-18T14:30:00Z",
        isWinning: true,
      },
      {
        id: "b2",
        amount: 48000000,
        bidder: mockUsers[2],
        timestamp: "2024-01-18T13:15:00Z",
        isWinning: false,
      },
    ],
    specifications: {
      المساحة: "400 متر مربع",
      "عدد الغرف": "5 غرف نوم",
      "عدد الحمامات": "4 حمامات",
      العمر: "10 سنوات",
      الموقف: "مرآب لسيارتين",
    },
  },
  {
    id: "2",
    title: "BMW X6 2023 - فل كامل",
    titleEn: "BMW X6 2023 - Fully Loaded",
    description:
      "سيارة BMW X6 موديل 2023، فل كامل، لون أزرق معدني، جلد أسود، شاشة لمس، كاميرا 360، حالة ممتازة",
    descriptionEn:
      "BMW X6 2023, fully loaded, metallic blue, black leather, touchscreen, 360 camera, excellent condition",
    category: "cars",
    images: [
      "https://images.unsplash.com/photo-1617195920950-1145bf9a9c72?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1617195920950-1145bf9a9c72?w=800&q=80",
    startingPrice: 25000000,
    currentBid: 28500000,
    minimumBid: 29000000,
    currency: "SYP",
    status: "ending-soon",
    startTime: "2024-01-16T09:00:00Z",
    endTime: "2024-01-20T20:00:00Z",
    location: "دمشق - أبو رمانة",
    locationEn: "Damascus - Abu Rummaneh",
    seller: mockUsers[1],
    bids: [
      {
        id: "b3",
        amount: 28500000,
        bidder: mockUsers[2],
        timestamp: "2024-01-18T16:45:00Z",
        isWinning: true,
      },
    ],
    specifications: {
      الموديل: "2023",
      الماركة: "BMW",
      الفئة: "X6",
      المحرك: "V8 تيربو",
      الممشى: "15,000 كم",
      اللون: "أزرق معدني",
    },
  },

  // حلب
  {
    id: "3",
    title: "شقة حديثة في حلب - الفرقان",
    titleEn: "Modern Apartment in Aleppo - Al Furqan",
    description:
      "شقة حديثة في منطقة الفرقان، 3 غرف نوم، صالون واسع، مطبخ أمريكي، بلكونة كبيرة، تشطيب فاخر",
    descriptionEn:
      "Modern apartment in Al Furqan area, 3 bedrooms, spacious living room, American kitchen, large balcony, luxury finishing",
    category: "residential-real-estate",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    startingPrice: 18000000,
    currentBid: 21000000,
    minimumBid: 21500000,
    currency: "SYP",
    status: "live",
    startTime: "2024-01-17T11:00:00Z",
    endTime: "2024-01-27T17:00:00Z",
    location: "حلب - الفرقان",
    locationEn: "Aleppo - Al Furqan",
    seller: mockUsers[0],
    bids: [
      {
        id: "b4",
        amount: 21000000,
        bidder: mockUsers[1],
        timestamp: "2024-01-18T12:00:00Z",
        isWinning: true,
      },
    ],
    specifications: {
      المساحة: "150 متر مربع",
      "عدد الغرف": "3 غرف نوم",
      الطابق: "الرابع",
      الفرش: "غير مفروشة",
      الإطلالة: "إطلالة على الحديقة",
    },
  },
  {
    id: "4",
    title: "مرسيدس E200 2022 - وارد الوكالة",
    titleEn: "Mercedes E200 2022 - Agency Import",
    description:
      "سيارة مرسيدس E200 موديل 2022، وارد الوكالة، لون فضي، جلد بيج، فل أوتوماتيك، سيرفس منتظم",
    descriptionEn:
      "Mercedes E200 2022, agency import, silver color, beige leather, full automatic, regular service",
    category: "cars",
    images: [
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&q=80",
    startingPrice: 22000000,
    currentBid: 22000000,
    minimumBid: 22500000,
    currency: "SYP",
    status: "upcoming",
    startTime: "2024-01-24T14:00:00Z",
    endTime: "2024-01-29T20:00:00Z",
    location: "حلب - الموكامبو",
    locationEn: "Aleppo - Al Mokambo",
    seller: mockUsers[1],
    bids: [],
    specifications: {
      الموديل: "2022",
      الماركة: "مرسيدس",
      الفئة: "E200",
      المحرك: "4 سلندر",
      الممشى: "30,000 كم",
      اللون: "فضي",
    },
  },

  // حمص
  {
    id: "5",
    title: "معرض تجاري في حمص - الخالدية",
    titleEn: "Commercial Showroom in Homs - Al Khalidiyah",
    description:
      "معرض تجاري في منطقة الخالدية التجارية، واجهة زجاجية، مساحة 250 متر مربع، موقع استراتيجي",
    descriptionEn:
      "Commercial showroom in Al Khalidiyah business area, glass facade, 250 sqm, strategic location",
    category: "commercial-real-estate",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    startingPrice: 35000000,
    currentBid: 35000000,
    minimumBid: 36000000,
    currency: "SYP",
    status: "upcoming",
    startTime: "2024-01-26T10:00:00Z",
    endTime: "2024-02-01T18:00:00Z",
    location: "حمص - الخالدية",
    locationEn: "Homs - Al Khalidiyah",
    seller: mockUsers[2],
    bids: [],
    specifications: {
      المساحة: "250 متر مربع",
      "نوع العقار": "معرض تجاري",
      الموقع: "شارع تجاري رئيسي",
      الواجهة: "واجهة زجاجية",
      "مواقف السيارات": "5 مواقف",
    },
  },
  {
    id: "6",
    title: "تويوتا كامري 2021 - حالة ممتازة",
    titleEn: "Toyota Camry 2021 - Excellent Condition",
    description:
      "سيارة تويوتا كامري موديل 2021، فل أوبشن، لون أبيض لؤلؤي، جلد بني، كاميرا خلفية، حالة ممتازة",
    descriptionEn:
      "Toyota Camry 2021, full option, pearl white, brown leather, rear camera, excellent condition",
    category: "cars",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    startingPrice: 16000000,
    currentBid: 17200000,
    minimumBid: 17500000,
    currency: "SYP",
    status: "live",
    startTime: "2024-01-18T08:00:00Z",
    endTime: "2024-01-23T20:00:00Z",
    location: "حمص - الوعر",
    locationEn: "Homs - Al Waer",
    seller: mockUsers[0],
    bids: [
      {
        id: "b5",
        amount: 17200000,
        bidder: mockUsers[2],
        timestamp: "2024-01-19T10:30:00Z",
        isWinning: true,
      },
    ],
    specifications: {
      الموديل: "2021",
      الماركة: "تويوتا",
      الفئة: "كامري",
      المحرك: "4 سلندر",
      الممشى: "45,000 كم",
      اللون: "أبيض لؤلؤي",
    },
  },

  // اللاذقية
  {
    id: "7",
    title: "شاليه على البحر في اللاذقية - الكورنيش",
    titleEn: "Beach Chalet in Lattakia - Corniche",
    description:
      "شاليه رائع على شاطئ البحر مباشرة، 4 غرف نوم، تراس واسع، إطلالة بحرية خلابة، مفروش بالكامل",
    descriptionEn:
      "Beautiful beachfront chalet, 4 bedrooms, spacious terrace, stunning sea view, fully furnished",
    category: "houses",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    startingPrice: 38000000,
    currentBid: 42000000,
    minimumBid: 42500000,
    currency: "SYP",
    status: "ending-soon",
    startTime: "2024-01-12T09:00:00Z",
    endTime: "2024-01-21T19:00:00Z",
    location: "اللاذقية - الكورنيش الشمالي",
    locationEn: "Lattakia - North Corniche",
    seller: mockUsers[1],
    bids: [
      {
        id: "b6",
        amount: 42000000,
        bidder: mockUsers[0],
        timestamp: "2024-01-19T15:20:00Z",
        isWinning: true,
      },
      {
        id: "b7",
        amount: 40000000,
        bidder: mockUsers[2],
        timestamp: "2024-01-19T14:15:00Z",
        isWinning: false,
      },
    ],
    specifications: {
      المساحة: "200 متر مربع",
      "عدد الغرف": "4 غرف نوم",
      الموقع: "على البحر مباشرة",
      الفرش: "مفروش بالكامل",
      الإطلالة: "إطلالة بحرية",
    },
  },
  {
    id: "8",
    title: "هيونداي توسان 2020 - كليان",
    titleEn: "Hyundai Tucson 2020 - Clean",
    description:
      "سيارة هيونداي توسان موديل 2020، فل أوبشن، لون أحمر، جلد أسود، نظام ملاحة، كاميرا 360 درجة",
    descriptionEn:
      "Hyundai Tucson 2020, full option, red color, black leather, navigation system, 360 camera",
    category: "cars",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    startingPrice: 13000000,
    currentBid: 13000000,
    minimumBid: 13500000,
    currency: "SYP",
    status: "upcoming",
    startTime: "2024-01-25T12:00:00Z",
    endTime: "2024-01-30T18:00:00Z",
    location: "اللاذقية - الزراعة",
    locationEn: "Lattakia - Al Ziraa",
    seller: mockUsers[2],
    bids: [],
    specifications: {
      الموديل: "2020",
      الماركة: "هيوندا��",
      الفئة: "توسان",
      المحرك: "4 سلندر",
      الممشى: "60,000 كم",
      اللون: "أحمر",
    },
  },

  // طرطوس
  {
    id: "9",
    title: "أرض زراعية في طرطوس - الشيخ بدر",
    titleEn: "Agricultural Land in Tartus - Sheikh Badr",
    description:
      "أرض زراعية خصبة، مساحة 5000 متر مربع، مزروعة ب��شجار الزيتون والحمضيات، بئر ماء، موقع ممتاز",
    descriptionEn:
      "Fertile agricultural land, 5000 sqm, planted with olive and citrus trees, water well, excellent location",
    category: "land",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    startingPrice: 15000000,
    currentBid: 16800000,
    minimumBid: 17000000,
    currency: "SYP",
    status: "live",
    startTime: "2024-01-14T10:00:00Z",
    endTime: "2024-01-24T16:00:00Z",
    location: "ط��طوس - الشيخ بدر",
    locationEn: "Tartus - Sheikh Badr",
    seller: mockUsers[0],
    bids: [
      {
        id: "b8",
        amount: 16800000,
        bidder: mockUsers[1],
        timestamp: "2024-01-19T09:45:00Z",
        isWinning: true,
      },
    ],
    specifications: {
      المساحة: "5000 متر مربع",
      "نوع الأرض": "زراعية",
      المزروعات: "زيتون وحمضيات",
      المياه: "بئر ماء خاص",
      الموقع: "على الطريق العام",
    },
  },

  // حماة
  {
    id: "10",
    title: "منزل تراثي في حماة - المدينة القديمة",
    titleEn: "Heritage House in Hama - Old City",
    description:
      "منزل تراثي أصيل في المدينة القديمة، حوش واسع، إيوان تراثي، 6 غرف، تراث معماري عريق",
    descriptionEn:
      "Authentic heritage house in old city, spacious courtyard, traditional iwan, 6 rooms, ancient architectural heritage",
    category: "houses",
    images: [
      "https://images.unsplash.com/photo-1594736797933-d0b22e28ff8a?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1594736797933-d0b22e28ff8a?w=800&q=80",
    startingPrice: 25000000,
    currentBid: 25000000,
    minimumBid: 26000000,
    currency: "SYP",
    status: "upcoming",
    startTime: "2024-01-27T11:00:00Z",
    endTime: "2024-02-03T17:00:00Z",
    location: "حماة - المدينة القديمة",
    locationEn: "Hama - Old City",
    seller: mockUsers[2],
    bids: [],
    specifications: {
      المساحة: "300 متر مربع",
      النمط: "تراثي أصيل",
      "عدد الغ��ف": "6 غرف",
      الحوش: "حوش واسع مفتوح",
      العمر: "أكثر من 100 سنة",
    },
  },
  {
    id: "11",
    title: "كيا سبورتاج 2019 - نظيفة جداً",
    titleEn: "Kia Sportage 2019 - Very Clean",
    description:
      "سيارة كيا سبورتاج موديل 2019، حالة ممتازة، لون أسود، جلد رمادي، شاشة تاتش، سنسور خلفي",
    descriptionEn:
      "Kia Sportage 2019, excellent condition, black color, gray leather, touch screen, rear sensor",
    category: "cars",
    images: [
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&q=80",
    startingPrice: 11000000,
    currentBid: 12100000,
    minimumBid: 12300000,
    currency: "SYP",
    status: "live",
    startTime: "2024-01-16T13:00:00Z",
    endTime: "2024-01-22T19:00:00Z",
    location: "حماة - كازو",
    locationEn: "Hama - Kazo",
    seller: mockUsers[1],
    bids: [
      {
        id: "b9",
        amount: 12100000,
        bidder: mockUsers[0],
        timestamp: "2024-01-19T11:20:00Z",
        isWinning: true,
      },
    ],
    specifications: {
      الموديل: "2019",
      الماركة: "كيا",
      الفئة: "سبورتاج",
      المحرك: "4 سلندر",
      الممشى: "70,000 كم",
      اللون: "أسود",
    },
  },

  // درعا
  {
    id: "12",
    title: "مزرعة كاملة في درعا - الصنمين",
    titleEn: "Complete Farm in Daraa - As Sanamein",
    description:
      "مزرعة متكاملة مع منزل ريفي، حظائر للماشية، مساحة 10 دونمات، بئرين ماء، آلات زراعية",
    descriptionEn:
      "Complete farm with rural house, livestock barns, 10 dunums area, two water wells, agricultural machinery",
    category: "land",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    startingPrice: 30000000,
    currentBid: 33000000,
    minimumBid: 33500000,
    currency: "SYP",
    status: "ending-soon",
    startTime: "2024-01-13T08:00:00Z",
    endTime: "2024-01-21T20:00:00Z",
    location: "درعا - الصنمين",
    locationEn: "Daraa - As Sanamein",
    seller: mockUsers[0],
    bids: [
      {
        id: "b10",
        amount: 33000000,
        bidder: mockUsers[2],
        timestamp: "2024-01-19T16:30:00Z",
        isWinning: true,
      },
    ],
    specifications: {
      المساحة: "10 دونمات",
      النوع: "مزرعة متكاملة",
      المباني: "منزل ريفي وحظائر",
      المياه: "بئرين ماء",
      المعدات: "آلات زراعية",
    },
  },

  // السويداء
  {
    id: "13",
    title: "شقة دوبلكس في السويداء - الكرامة",
    titleEn: "Duplex Apartment in As Suwayda - Al Karama",
    description:
      "��قة دوبلكس فاخرة، طابقي��، 4 غرف نوم، 3 حمامات، تراس علوي، تشطيب حديث، موقع هادئ",
    descriptionEn:
      "Luxury duplex apartment, two floors, 4 bedrooms, 3 bathrooms, upper terrace, modern finishing, quiet location",
    category: "residential-real-estate",
    images: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    startingPrice: 22000000,
    currentBid: 22000000,
    minimumBid: 22500000,
    currency: "SYP",
    status: "upcoming",
    startTime: "2024-01-28T09:00:00Z",
    endTime: "2024-02-04T15:00:00Z",
    location: "السويداء - الكرامة",
    locationEn: "As Suwayda - Al Karama",
    seller: mockUsers[1],
    bids: [],
    specifications: {
      المساحة: "220 متر مربع",
      النوع: "دوبلكس",
      "عدد الغرف": "4 غرف نوم",
      "عدد الحمامات": "3 حمامات",
      التراس: "تراس علوي واسع",
    },
  },
  {
    id: "14",
    title: "نيسان سنترا 2020 - اقتصادية",
    titleEn: "Nissan Sentra 2020 - Economical",
    description:
      "سيارة نيسان سنترا موديل 2020، اقتصادية في الوقود، لون رمادي، قماش، أوتوماتيك، صيا��ة دورية",
    descriptionEn:
      "Nissan Sentra 2020, fuel economical, gray color, fabric seats, automatic, regular maintenance",
    category: "cars",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    startingPrice: 9500000,
    currentBid: 10200000,
    minimumBid: 10400000,
    currency: "SYP",
    status: "live",
    startTime: "2024-01-17T07:00:00Z",
    endTime: "2024-01-24T18:00:00Z",
    location: "السويداء - المتوسطة",
    locationEn: "As Suwayda - Al Mutawassita",
    seller: mockUsers[2],
    bids: [
      {
        id: "b11",
        amount: 10200000,
        bidder: mockUsers[0],
        timestamp: "2024-01-19T13:15:00Z",
        isWinning: true,
      },
    ],
    specifications: {
      الموديل: "2020",
      الماركة: "نيسان",
      الفئة: "سنترا",
      المحرك: "4 سلندر",
      الممشى: "80,000 كم",
      اللون: "رمادي",
    },
  },

  // الرقة
  {
    id: "15",
    title: "محل تجاري في الرقة - المركز",
    titleEn: "Commercial Shop in Ar Raqqah - Center",
    description:
      "م��ل تجاري في وسط المدينة، واجهة مزدوجة، مساحة 80 متر مربع، موقع حيوي، مناسب لجميع الأنشطة",
    descriptionEn:
      "Commercial shop in city center, double frontage, 80 sqm, vital location, suitable for all activities",
    category: "commercial-real-estate",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    startingPrice: 12000000,
    currentBid: 13200000,
    minimumBid: 13500000,
    currency: "SYP",
    status: "live",
    startTime: "2024-01-15T10:30:00Z",
    endTime: "2024-01-25T16:30:00Z",
    location: "الرقة - وسط المدينة",
    locationEn: "Ar Raqqah - City Center",
    seller: mockUsers[0],
    bids: [
      {
        id: "b12",
        amount: 13200000,
        bidder: mockUsers[1],
        timestamp: "2024-01-19T14:45:00Z",
        isWinning: true,
      },
    ],
    specifications: {
      المساحة: "80 متر مربع",
      النوع: "محل تجاري",
      الواجهة: "واجهة مزدوجة",
      الموقع: "شارع تجاري رئيسي",
      المدخل: "مدخل واسع",
    },
  },

  // دير الزور
  {
    id: "16",
    title: "فيلا على نهر الفرات - دير الزور",
    titleEn: "Villa on Euphrates River - Deir ez-Zor",
    description:
      "فيلا رائعة مطلة على نهر الفرات، 5 غرف نوم، حديقة واسعة، إطلالة نهرية خلابة، هواء نقي",
    descriptionEn:
      "Beautiful villa overlooking Euphrates River, 5 bedrooms, spacious garden, stunning river view, fresh air",
    category: "houses",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    startingPrice: 28000000,
    currentBid: 28000000,
    minimumBid: 29000000,
    currency: "SYP",
    status: "upcoming",
    startTime: "2024-01-26T11:00:00Z",
    endTime: "2024-02-02T19:00:00Z",
    location: "دير الزور - ضفاف الفرات",
    locationEn: "Deir ez-Zor - Euphrates Banks",
    seller: mockUsers[1],
    bids: [],
    specifications: {
      المساحة: "350 متر مربع",
      "عدد الغرف": "5 غرف نوم",
      الموقع: "على نهر الفرات",
      الحديقة: "حديقة واسعة",
      الإطلالة: "إطلالة نهرية",
    },
  },
  {
    id: "17",
    title: "شيفروليه كروز 2018 - نظيفة",
    titleEn: "Chevrolet Cruze 2018 - Clean",
    description:
      "سيارة شيفروليه كروز موديل 2018، حالة جيدة، لون أبيض، قماش، تكييف بارد، استهلاك وقود قليل",
    descriptionEn:
      "Chevrolet Cruze 2018, good condition, white color, fabric seats, cold AC, low fuel consumption",
    category: "cars",
    images: [
      "https://images.unsplash.com/photo-1617195920632-f9bb9e671e8a?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1617195920632-f9bb9e671e8a?w=800&q=80",
    startingPrice: 8000000,
    currentBid: 8600000,
    minimumBid: 8800000,
    currency: "SYP",
    status: "live",
    startTime: "2024-01-18T14:00:00Z",
    endTime: "2024-01-26T20:00:00Z",
    location: "دير الزور - المواساة",
    locationEn: "Deir ez-Zor - Al Mawasah",
    seller: mockUsers[2],
    bids: [
      {
        id: "b13",
        amount: 8600000,
        bidder: mockUsers[0],
        timestamp: "2024-01-19T15:30:00Z",
        isWinning: true,
      },
    ],
    specifications: {
      الموديل: "2018",
      الماركة: "شيفروليه",
      الفئة: "كروز",
      المحرك: "4 سلندر",
      الممشى: "95,000 كم",
      اللون: "أبيض",
    },
  },

  // الحسكة
  {
    id: "18",
    title: "أرض سكنية في الحسكة - غويران",
    titleEn: "Residential Land in Al Hasakah - Gweiran",
    description:
      "أرض سكنية في منطقة غويران، مساحة 500 متر مربع، موقع ممتاز، كافة الخدمات متوفرة، سند ملكية",
    descriptionEn:
      "Residential land in Gweiran area, 500 sqm, excellent location, all services available, ownership deed",
    category: "land",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    startingPrice: 8000000,
    currentBid: 8900000,
    minimumBid: 9100000,
    currency: "SYP",
    status: "ending-soon",
    startTime: "2024-01-14T12:00:00Z",
    endTime: "2024-01-22T18:00:00Z",
    location: "الحسكة - غويران",
    locationEn: "Al Hasakah - Gweiran",
    seller: mockUsers[0],
    bids: [
      {
        id: "b14",
        amount: 8900000,
        bidder: mockUsers[1],
        timestamp: "2024-01-19T17:10:00Z",
        isWinning: true,
      },
    ],
    specifications: {
      المساحة: "500 متر مربع",
      "نوع الأرض": "سكنية",
      الخدمات: "كهرباء وماء ومجاري",
      السند: "سند ملكية رسمي",
      الموقع: "منطقة هادئة",
    },
  },

  // القنيطرة
  {
    id: "19",
    title: "منزل ريفي في القنيطرة - مسعدة",
    titleEn: "Rural House in Quneitra - Masada",
    description:
      "منزل ريفي هادئ، محاط بالخضرة، 3 غرف نوم، حديقة كبيرة، هواء جبلي منعش، مكان مثالي للراحة",
    descriptionEn:
      "Quiet rural house, surrounded by greenery, 3 bedrooms, large garden, fresh mountain air, perfect place for relaxation",
    category: "houses",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    startingPrice: 15000000,
    currentBid: 15000000,
    minimumBid: 15500000,
    currency: "SYP",
    status: "upcoming",
    startTime: "2024-01-29T10:00:00Z",
    endTime: "2024-02-05T16:00:00Z",
    location: "القنيطرة - مسعدة",
    locationEn: "Quneitra - Masada",
    seller: mockUsers[2],
    bids: [],
    specifications: {
      المساحة: "150 متر مربع",
      النمط: "ريفي تقليدي",
      "عدد الغرف": "3 غرف نوم",
      الحديقة: "حديقة كبيرة",
      الموقع: "منطقة جبلية",
    },
  },

  // إدلب
  {
    id: "20",
    title: "معمل ��غير في إدلب - الفوعة",
    titleEn: "Small Factory in Idlib - Al Fouaa",
    description:
      "معمل صغير للصناعات الغذائية، مساحة 300 متر مربع، معدات حديثة، تراخيص كاملة، موقع صناعي",
    descriptionEn:
      "Small food industry factory, 300 sqm, modern equipment, full licenses, industrial location",
    category: "commercial-real-estate",
    images: [
      "https://images.unsplash.com/photo-1581092795442-750253d82b7b?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1581092795442-750253d82b7b?w=800&q=80",
    startingPrice: 20000000,
    currentBid: 22000000,
    minimumBid: 22500000,
    currency: "SYP",
    status: "live",
    startTime: "2024-01-16T08:00:00Z",
    endTime: "2024-01-28T17:00:00Z",
    location: "إدلب - المنطقة الصناعية",
    locationEn: "Idlib - Industrial Zone",
    seller: mockUsers[1],
    bids: [
      {
        id: "b15",
        amount: 22000000,
        bidder: mockUsers[0],
        timestamp: "2024-01-19T18:25:00Z",
        isWinning: true,
      },
    ],
    specifications: {
      المساحة: "300 متر مربع",
      النوع: "معمل غذائي",
      المعدات: "معدات حديثة",
      التراخيص: "تراخيص كاملة",
      الموقع: "منطقة صناعية",
    },
  },

  // مزادات إضافية متنوعة
  {
    id: "21",
    title: "فولكس واغن جولف 2019 - حالة ممتازة",
    titleEn: "Volkswagen Golf 2019 - Excellent Condition",
    description:
      "سيارة فولكس واغن جولف موديل 2019، تيربو، لون أزرق، جلد أسود، فل أوبشن، حالة الوكالة",
    descriptionEn:
      "Volkswagen Golf 2019, turbo, blue color, black leather, full option, agency condition",
    category: "cars",
    images: [
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&q=80",
    startingPrice: 14000000,
    currentBid: 15400000,
    minimumBid: 15700000,
    currency: "SYP",
    status: "live",
    startTime: "2024-01-19T09:00:00Z",
    endTime: "2024-01-27T21:00:00Z",
    location: "دمشق - جرمانا",
    locationEn: "Damascus - Jaramana",
    seller: mockUsers[0],
    bids: [
      {
        id: "b16",
        amount: 15400000,
        bidder: mockUsers[2],
        timestamp: "2024-01-20T08:30:00Z",
        isWinning: true,
      },
    ],
    specifications: {
      الموديل: "2019",
      الماركة: "فولكس واغن",
      الفئة: "جولف",
      المحرك: "تيربو 4 سلندر",
      الممشى: "55,000 كم",
      اللون: "أزرق",
    },
  },
  {
    id: "22",
    title: "شقة في حلب - الشهباء الجديدة",
    titleEn: "Apartment in Aleppo - New Shahba",
    description:
      "شقة حديثة في مدينة الشهباء الجديدة، 2 غرف نوم، صالون، مطبخ، بلكونة، تشط��ب فاخر، موقع حيوي",
    descriptionEn:
      "Modern apartment in New Shahba city, 2 bedrooms, living room, kitchen, balcony, luxury finishing, vital location",
    category: "residential-real-estate",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    startingPrice: 16000000,
    currentBid: 16000000,
    minimumBid: 16500000,
    currency: "SYP",
    status: "upcoming",
    startTime: "2024-01-30T12:00:00Z",
    endTime: "2024-02-06T18:00:00Z",
    location: "حلب - الشهباء الجديدة",
    locationEn: "Aleppo - New Shahba",
    seller: mockUsers[1],
    bids: [],
    specifications: {
      المساحة: "120 متر مربع",
      "عدد الغرف": "2 غرف نوم",
      الطابق: "الثالث",
      التشطيب: "تشطيب فاخر",
      البلكونة: "بلكونة واسعة",
    },
  },
];

export const featuredAuctions = mockAuctions.filter(
  (auction) => auction.status === "live" || auction.status === "ending-soon",
);

export const upcomingAuctions = mockAuctions.filter(
  (auction) => auction.status === "upcoming",
);

export const categories = [
  {
    id: "cars",
    name: "سيارات",
    nameEn: "Cars",
    description: "سيارات فاخرة ومستعملة",
    image:
      "https://images.unsplash.com/photo-1617195920950-1145bf9a9c72?w=400&q=80",
    count: mockAuctions.filter((a) => a.category === "cars").length,
  },
  {
    id: "real-estate",
    name: "عقارات",
    nameEn: "Real Estate",
    description: "فلل، شقق، أراضي، عقارات تجارية",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80",
    count: mockAuctions.filter(
      (a) =>
        a.category === "houses" ||
        a.category === "land" ||
        a.category === "commercial-real-estate" ||
        a.category === "residential-real-estate",
    ).length,
  },
];

// Classified Ads Mock Data
export const mockClassifiedAds: ClassifiedAd[] = [
  {
    id: "ad1",
    title: "تويوتا كامري 2020 للبيع",
    description:
      "سيارة تويوتا كامري موديل 2020، فل أوبشن، حالة ممتازة، صيانة دورية، بدون حوادث. السيارة نظيفة جداً ومفحوصة بالكامل.",
    category: "cars",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
      "https://images.unsplash.com/photo-1617195920632-f9bb9e671e8a?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    price: 15500000,
    currency: "SYP",
    condition: "excellent",
    location: "دمشق - جرمانا",
    contactPhone: "+963 991 234 567",
    contactName: "أحمد محمد",
    seller: mockUsers[0],
    createdAt: "2024-01-20T10:00:00Z",
    updatedAt: "2024-01-20T10:00:00Z",
    isActive: true,
    viewsCount: 156,
    isFeatured: true,
    specifications: {
      الموديل: "2020",
      الماركة: "تويوتا",
      الفئة: "كامري",
      الممشى: "45,000 كم",
      اللون: "أبيض لؤلؤي",
      ناقل_الحركة: "أوتوماتيك",
    },
  },
  {
    id: "ad2",
    title: "شقة للبيع في حلب - الفرقان",
    description:
      "شقة حديثة البناء، 3 غرف نوم وصالون واسع، مطبخ حديث، 2 حمام، بلكونة كبيرة، موقع مميز قريب من الخدمات.",
    category: "residential-real-estate",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    price: 18000000,
    currency: "SYP",
    condition: "new",
    location: "حلب - الفرقان",
    contactPhone: "+963 988 765 432",
    contactName: "فاطمة الحلبية",
    seller: mockUsers[1],
    createdAt: "2024-01-19T14:30:00Z",
    updatedAt: "2024-01-19T14:30:00Z",
    isActive: true,
    viewsCount: 203,
    isFeatured: false,
    specifications: {
      المساحة: "130 متر مربع",
      عدد_الغرف: "3 غرف نوم",
      عدد_الحمامات: "2 حمام",
      الطابق: "الثالث",
      العمر: "حديث البناء",
    },
  },
  {
    id: "ad3",
    title: "هيونداي إلنترا 2019 بحالة ممتازة",
    description:
      "سيارة هيونداي إلنترا م��ديل 2019، اقتصادية في الوقود، حالة ممتازة، جميع القطع أصلية، مكيف بارد.",
    category: "cars",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    price: 12000000,
    currency: "SYP",
    condition: "excellent",
    location: "حمص - الوعر",
    contactPhone: "+963 932 111 222",
    contactName: "محمد الحمصي",
    seller: mockUsers[2],
    createdAt: "2024-01-18T09:15:00Z",
    updatedAt: "2024-01-18T09:15:00Z",
    isActive: true,
    viewsCount: 89,
    isFeatured: false,
    specifications: {
      الموديل: "2019",
      الماركة: "هيونداي",
      الفئة: "إلنترا",
      الممشى: "65,000 كم",
      اللون: "فضي",
      ناقل_الحركة: "أوتوماتيك",
    },
  },
  {
    id: "ad4",
    title: "محل تجاري للبيع في اللاذقية",
    description:
      "محل تجاري في موقع حيوي وسط مدينة اللاذقية، مناسب لجميع الأنشطة التجارية، واجهة زجاجية عريضة.",
    category: "commercial-real-estate",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    price: 25000000,
    currency: "SYP",
    condition: "good",
    location: "اللاذقية - وسط المدينة",
    contactPhone: "+963 987 654 321",
    contactName: "علي اللاذقاني",
    seller: mockUsers[0],
    createdAt: "2024-01-17T16:20:00Z",
    updatedAt: "2024-01-17T16:20:00Z",
    isActive: true,
    viewsCount: 134,
    isFeatured: true,
    specifications: {
      المساحة: "85 متر مربع",
      نوع_العقار: "محل تجاري",
      الواجهة: "واجهة زجاجية",
      الموقع: "شارع تجاري رئيسي",
    },
  },
  {
    id: "ad5",
    title: "كيا سيراتو 2018 للبيع",
    description:
      "سيارة كيا سيراتو موديل 2018، حالة جيدة، صيانة منتظمة، كفالة على المحرك، سعر مناسب للبيع السريع.",
    category: "cars",
    images: [
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&q=80",
    price: 9800000,
    currency: "SYP",
    condition: "good",
    location: "دمشق - دوما",
    contactPhone: "+963 944 333 444",
    contactName: "سارة أحمد",
    seller: mockUsers[1],
    createdAt: "2024-01-16T11:45:00Z",
    updatedAt: "2024-01-16T11:45:00Z",
    isActive: true,
    viewsCount: 67,
    isFeatured: false,
    specifications: {
      الموديل: "2018",
      الماركة: "كيا",
      الفئة: "سيراتو",
      الممشى: "78,000 كم",
      اللون: "أحمر",
      ناقل_الحركة: "أوتوماتيك",
    },
  },
  {
    id: "ad6",
    title: "منزل للبيع في طرطوس",
    description:
      "منزل مستقل في طرطوس، حديقة واسعة، 4 غرف نوم، موقع هادئ قريب من البحر، مناسب للعائلات الكبيرة.",
    category: "houses",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    price: 32000000,
    currency: "SYP",
    condition: "good",
    location: "طرطوس - الحميدية",
    contactPhone: "+963 966 777 888",
    contactName: "خالد الطرطوسي",
    seller: mockUsers[2],
    createdAt: "2024-01-15T13:10:00Z",
    updatedAt: "2024-01-15T13:10:00Z",
    isActive: true,
    viewsCount: 178,
    isFeatured: true,
    specifications: {
      المساحة: "280 متر مربع",
      عدد_الغرف: "4 غرف نوم",
      الحديقة: "حديقة واسعة",
      الموقع: "قريب من البحر",
      نوع_البناء: "منزل مستقل",
    },
  },
];

export const featuredClassifiedAds = mockClassifiedAds.filter(
  (ad) => ad.isFeatured,
);
export const recentClassifiedAds = mockClassifiedAds
  .sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
  .slice(0, 6);
export const popularClassifiedAds = mockClassifiedAds
  .sort((a, b) => b.viewsCount - a.viewsCount)
  .slice(0, 6);
export const bestPriceClassifiedAds = mockClassifiedAds.filter(
  (ad) => ad.category === "cars" && ad.price < 12000000,
);

// Blacklisted Users Mock Data
const blacklistedUsers: User[] = [
  {
    id: "bl1",
    name: "سامر المخالف",
    email: "samer.violator@example.com",
    isVerified: false,
    depositPaid: false,
    profileImage: "/placeholder-avatar.png",
    trustScore: 12,
    membershipLevel: "standard",
    totalTransactions: 5,
    successfulTransactions: 1,
    walletBalance: 0,
    isBlacklisted: true,
    blacklistReason: "لم يسدد قيمة المزاد بعد الفوز",
  },
  {
    id: "bl2",
    name: "أحمد المزايد الوهمي",
    email: "fake.bidder@example.com",
    isVerified: true,
    depositPaid: false,
    profileImage: "/placeholder-avatar.png",
    trustScore: 8,
    membershipLevel: "standard",
    totalTransactions: 12,
    successfulTransactions: 0,
    walletBalance: 0,
    isBlacklisted: true,
    blacklistReason: "مزايدة وهمية ورفع الأسعار عمداً",
  },
  {
    id: "bl3",
    name: "محمد المزور",
    email: "fake.docs@example.com",
    isVerified: false,
    depositPaid: false,
    profileImage: "/placeholder-avatar.png",
    trustScore: 5,
    membershipLevel: "standard",
    totalTransactions: 3,
    successfulTransactions: 0,
    walletBalance: 0,
    isBlacklisted: true,
    blacklistReason: "استخدام وثائق مزورة",
  },
  {
    id: "bl4",
    name: "علي المتلاعب",
    email: "manipulator@example.com",
    isVerified: true,
    depositPaid: true,
    profileImage: "/placeholder-avatar.png",
    trustScore: 15,
    membershipLevel: "standard",
    totalTransactions: 8,
    successfulTransactions: 2,
    walletBalance: 0,
    isBlacklisted: true,
    blacklistReason: "تلاعب في أسعار المزادات والتنسيق مع آخرين",
  },
  {
    id: "bl5",
    name: "خالد المزعج",
    email: "harasser@example.com",
    isVerified: false,
    depositPaid: false,
    profileImage: "/placeholder-avatar.png",
    trustScore: 3,
    membershipLevel: "standard",
    totalTransactions: 2,
    successfulTransactions: 0,
    walletBalance: 0,
    isBlacklisted: true,
    blacklistReason: "إزعاج وتحرش بالمستخدمين الآخرين",
  },
];

export const mockBlacklistedUsers: BlacklistedUser[] = [
  {
    id: "bl_record_1",
    user: blacklistedUsers[0],
    reason: "non-payment",
    description:
      "فاز في مزاد فيلا بقيمة 45 مليون ليرة سورية ولم يسدد المبلغ خلال 48 ساعة المحددة. تم مصادرة مبلغ التأمين وإعادة طرح المزاد.",
    dateBlacklisted: "2024-01-10T14:30:00Z",
    blacklistType: "permanent",
    reportedBy: mockUsers[0],
    relatedAuctionId: "1",
    violationCount: 3,
    isActive: true,
  },
  {
    id: "bl_record_2",
    user: blacklistedUsers[1],
    reason: "fake-bidding",
    description:
      "مزايدة وهمية ورفع الأسعار عمداً بدون نية الشراء. تم اكتشافه من خلال أنماط المزايدة المشبوهة في عدة مزادات.",
    dateBlacklisted: "2024-01-15T09:15:00Z",
    blacklistType: "permanent",
    reportedBy: mockUsers[1],
    violationCount: 5,
    isActive: true,
  },
  {
    id: "bl_record_3",
    user: blacklistedUsers[2],
    reason: "fake-documents",
    description:
      "استخدام وثائق هوية مزورة أثناء عملية التحقق. تم اكتشاف التزوير من قبل فريق التحقق من الهوية.",
    dateBlacklisted: "2024-01-08T16:45:00Z",
    blacklistType: "permanent",
    reportedBy: mockUsers[2],
    violationCount: 1,
    isActive: true,
  },
  {
    id: "bl_record_4",
    user: blacklistedUsers[3],
    reason: "price-manipulation",
    description:
      "التنسيق مع مستخدمين آخرين لرفع أسعار المزادات بشكل مصطنع. تم اكتشاف شبكة تلاعب من خلال تحليل أنماط المزايدة.",
    dateBlacklisted: "2024-01-12T11:20:00Z",
    blacklistType: "temporary",
    expiryDate: "2024-07-12T11:20:00Z",
    reportedBy: mockUsers[0],
    violationCount: 2,
    isActive: true,
  },
  {
    id: "bl_record_5",
    user: blacklistedUsers[4],
    reason: "harassment",
    description:
      "إزعاج وتحرش بالمستخدمين الآخرين عبر الرسائل والتعليقات غير اللائقة. تم الإبلاغ عنه من قبل عدة مستخدمين.",
    dateBlacklisted: "2024-01-18T13:10:00Z",
    blacklistType: "temporary",
    expiryDate: "2024-04-18T13:10:00Z",
    reportedBy: mockUsers[1],
    violationCount: 4,
    isActive: true,
  },
  {
    id: "bl_record_6",
    user: {
      ...blacklistedUsers[0],
      id: "bl6",
      name: "يوسف المسبب",
      email: "spammer@example.com",
    },
    reason: "spam",
    description:
      "نشر إعلانات مزعجة ومكررة، وإرسال رسائل سبام للمستخدمين. مخالفة سياسة الاستخدام المتعلقة بالمحتوى.",
    dateBlacklisted: "2024-01-05T08:30:00Z",
    blacklistType: "temporary",
    expiryDate: "2024-03-05T08:30:00Z",
    reportedBy: mockUsers[2],
    violationCount: 6,
    isActive: false, // انتهت فترة الحظر
  },
  {
    id: "bl_record_7",
    user: {
      ...blacklistedUsers[1],
      id: "bl7",
      name: "نادر متعدد الحسابات",
      email: "multiple@example.com",
    },
    reason: "multiple-accounts",
    description:
      "إنشاء حسابات متعددة للتلاعب في المزادات والمزايدة على نفسه. تم اكتشاف 4 حسابات مرتبطة بنفس الشخص.",
    dateBlacklisted: "2024-01-20T15:00:00Z",
    blacklistType: "permanent",
    reportedBy: mockUsers[0],
    violationCount: 1,
    isActive: true,
  },
];
