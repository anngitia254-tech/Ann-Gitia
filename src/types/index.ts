export interface Product {
  id: string;
  name: string;
  category: 'Lighting' | 'Body' | 'Mirrors';
  price: string;
  priceValue: number;
  description: string;
  condition: string;
  fitment: string;
  image: string;
  altText: string;
  features?: string[];
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  vehicleMake: string;
  partRequired: string;
  message: string;
}
