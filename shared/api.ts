/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Auction Platform Types
 */

export interface User {
  id: string;
  name: string;
  email: string;
  isVerified: boolean;
  depositPaid: boolean;
  profileImage?: string;
  trustScore: number; // نقاط الثقة من 0 إلى 100
  membershipLevel: "standard" | "gold" | "platinum" | "vip";
  totalTransactions: number;
  successfulTransactions: number;
  walletBalance: number; // رصيد المحفظة الداخلية
  isBlacklisted: boolean;
  blacklistReason?: string;
}

export interface AuctionItem {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  category: AuctionCategory;
  images: string[];
  startingPrice: number;
  currentBid: number;
  minimumBid: number;
  currency: string;
  status: AuctionStatus;
  startTime: string;
  endTime: string;
  location: string;
  locationEn?: string;
  seller: User;
  bids: Bid[];
  featuredImage: string;
  specifications?: Record<string, string>;
}

export interface Bid {
  id: string;
  amount: number;
  bidder: User;
  timestamp: string;
  isWinning: boolean;
}

export type AuctionCategory =
  | "cars"
  | "houses"
  | "land"
  | "commercial-real-estate"
  | "residential-real-estate"
  | "other";

export type AuctionStatus =
  | "upcoming"
  | "live"
  | "ending-soon"
  | "ended"
  | "sold";

export interface AuctionFilters {
  category?: AuctionCategory;
  minPrice?: number;
  maxPrice?: number;
  status?: AuctionStatus;
  location?: string;
  search?: string;
}

export interface AuctionResponse {
  auctions: AuctionItem[];
  total: number;
  page: number;
  limit: number;
}

export interface PlaceBidRequest {
  auctionId: string;
  amount: number;
}

export interface PlaceBidResponse {
  success: boolean;
  bid?: Bid;
  error?: string;
}

/**
 * Classified Ads Types
 */

export interface ClassifiedAd {
  id: string;
  title: string;
  description: string;
  category: AuctionCategory;
  images: string[];
  featuredImage: string;
  price: number;
  currency: string;
  condition: "new" | "used" | "excellent" | "good" | "fair";
  location: string;
  contactPhone: string;
  contactName: string;
  seller: User;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  viewsCount: number;
  isFeatured: boolean;
  specifications?: Record<string, string>;
}

export interface CreateAdRequest {
  title: string;
  description: string;
  category: AuctionCategory;
  images: string[];
  price: number;
  condition: "new" | "used" | "excellent" | "good" | "fair";
  location: string;
  contactPhone: string;
  contactName: string;
  specifications?: Record<string, string>;
}

export interface ClassifiedAdsResponse {
  ads: ClassifiedAd[];
  total: number;
  page: number;
  limit: number;
}

export interface ClassifiedAdFilters {
  category?: AuctionCategory;
  minPrice?: number;
  maxPrice?: number;
  condition?: "new" | "used" | "excellent" | "good" | "fair";
  location?: string;
  search?: string;
}

/**
 * Auction Creation Types
 */

export interface CreateAuctionRequest {
  title: string;
  description: string;
  category: AuctionCategory;
  images: string[];
  startingPrice: number;
  minimumIncrement: number;
  reservePrice?: number;
  startTime: string;
  endTime: string;
  location: string;
  specifications?: Record<string, string>;
  auctionType: "standard" | "reserve" | "featured";
  duration: number; // in hours
}

export interface CreateAuctionResponse {
  success: boolean;
  auction?: AuctionItem;
  error?: string;
}
