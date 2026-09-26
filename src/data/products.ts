import { Product } from '../types';

export const BUSINESS_DETAILS = {
  name: 'BRADOH TECH AUTO SPARES',
  shortName: 'Bradoh Tech',
  phone1: '0726 976908',
  phone1Raw: '+254726976908',
  phone2: '0733 967387',
  phone2Raw: '+254733967387',
  whatsappNumber: '254726976908',
  email: 'bradohtechautospares@gmail.com',
  location: 'Industrial Area, Baricho Road, Nairobi',
  landmark: 'Opposite Carrefour, next to Robstar',
  googleMapsUrl: 'https://maps.google.com/?q=Baricho+Road+Industrial+Area+Nairobi',
};

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Toyota V8 200 Series Xenon Headlights',
    category: 'Lighting',
    price: '',
    priceValue: 0,
    description: 'Genuine xenon headlights for Toyota 200 Series.',
    condition: 'Ex-Japan / Pristine Condition',
    fitment: 'Toyota Land Cruiser V8 200 Series (2008 - 2015)',
    image: '/src/assets/images/v8_xenon_headlights_1790416431481.jpg',
    altText: 'Toyota V8 200 Series Xenon Headlights pair at Bradoh Tech Auto Spares',
    features: ['High-intensity discharge xenon projectors', 'Crystal clear UV-treated polycarbonate lens', 'Plug-and-play harness compatibility', 'Complete assembly with mounting brackets'],
  },
  {
    id: 'prod-2',
    name: 'Toyota Probox Tail Lights',
    category: 'Lighting',
    price: '',
    priceValue: 0,
    description: 'Original tail lights for Toyota Probox.',
    condition: 'Original OEM / Complete Set',
    fitment: 'Toyota Probox & Succeed (NCP50 / NCP51 / NCP55 / NCP160)',
    image: '/src/assets/images/probox_tail_lights_1790416446576.jpg',
    altText: 'Toyota Probox Tail Lights pair available at Bradoh Tech Auto Spares',
    features: ['OEM standard red and clear reverse lenses', 'Resistant to sun fading and moisture ingress', 'Direct bolt-on fitment', 'Sold as complete matching pair'],
  },
  {
    id: 'prod-3',
    name: 'Toyota Mark X GRX120 Tail Light',
    category: 'Lighting',
    price: '',
    priceValue: 0,
    description: 'High quality tail lights for Mark X GRX120.',
    condition: 'Top Grade / Ex-Japan OEM',
    fitment: 'Toyota Mark X GRX120 (2004 - 2009)',
    image: '/src/assets/images/markx_tail_light_1790416462037.jpg',
    altText: 'Toyota Mark X GRX120 Tail Light assembly at Bradoh Tech Auto Spares Nairobi',
    features: ['Signature round projector optical elements', 'Factory connector pins and seals', 'No yellowing, scratches, or fogging', 'High luminous output for night safety'],
  },
  {
    id: 'prod-4',
    name: 'Toyota Sienta Boot Lights',
    category: 'Lighting',
    price: '',
    priceValue: 0,
    description: 'Bright LED boot lights for Toyota Sienta.',
    condition: 'Ex-Japan Genuine OEM',
    fitment: 'Toyota Sienta (NCP81 / NCP85 / XP170)',
    image: '/src/assets/images/sienta_boot_lights_1790416472058.jpg',
    altText: 'Toyota Sienta Boot Lights pair at Bradoh Tech Auto Spares Baricho Road',
    features: ['High-efficiency bright LED technology', 'Distinctive ruby and crystal reverse casing', 'Waterproof rubber gasket included', 'Original Toyota fitment'],
  },
  {
    id: 'prod-5',
    name: 'Toyota V8 200 Series Side Mirror',
    category: 'Mirrors',
    price: '',
    priceValue: 0,
    description: 'Original side mirrors for Toyota 200 Series.',
    condition: 'Original Electric Folding / Flawless',
    fitment: 'Toyota Land Cruiser V8 200 Series (2008 - 2021)',
    image: '/src/assets/images/v8_side_mirror_1790416406170.jpg',
    altText: 'Toyota Land Cruiser V8 200 Series Side Mirror at Bradoh Tech Auto Spares',
    features: ['Power folding motor and mirror glass adjustment', 'Integrated amber LED turn signal repeater', 'Aerodynamic housing with anti-vibration mount', 'Factory wire harness pinout'],
  },
  {
    id: 'prod-6',
    name: 'Toyota Mark X Front Bumper',
    category: 'Body',
    price: '',
    priceValue: 0,
    description: 'Genuine front bumper for Mark X.',
    condition: 'Factory OEM Replacement',
    fitment: 'Toyota Mark X GRX120 / GRX130',
    image: '/src/assets/images/markx_front_bumper_1790416416928.jpg',
    altText: 'Toyota Mark X Front Bumper body part at Bradoh Tech Auto Spares',
    features: ['Impact-resistant high grade automotive ABS/PP', 'Factory mounting tabs and clip points intact', 'Ready for primer and color matching', 'Precise alignment with headlights and fenders'],
  },
];

export function getWhatsAppProductUrl(product: Product): string {
  const message = `Hello Bradoh Tech Auto Spares, I am interested in the ${product.name}. Please confirm availability and details.`;
  return `https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppCustomUrl(data: {
  fullName: string;
  phone: string;
  vehicleMake: string;
  partRequired: string;
  message: string;
}): string {
  const text = `Hello Bradoh Tech Auto Spares,
My Name: ${data.fullName || 'Customer'}
Phone: ${data.phone || 'N/A'}
Vehicle Make / Model: ${data.vehicleMake || 'Toyota'}
Part Required: ${data.partRequired || 'Auto Body Part / Lighting'}
Message: ${data.message || 'Please let me know availability and details.'}`;

  return `https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getGeneralWhatsAppUrl(): string {
  const text = `Hello Bradoh Tech Auto Spares, I would like to make an enquiry regarding automotive spare parts.`;
  return `https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
