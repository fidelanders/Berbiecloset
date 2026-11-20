export interface Product {
  id: number;
  name: string;
  category: 'Outfits' | 'Jackets' | 'Denim' | 'Tops' | 'Co-ords';
  note: string;
  sizes?: string;
  price?: number;
  ig: string;
  image: string;
  instagramUrl: string;
}

export const WHATSAPP_PHONE = '2347030107401';
export const DISPLAY_PHONE = '+234 703 010 7401';
export const INSTAGRAM_URL = 'https://www.instagram.com/berbiecloset?dlrf=ODZiajFpN3gyOGZr';
export const TIKTOK_URL = 'https://www.tiktok.com/@berbiecloset?_r=1&_t=ZS-9BEc3LLAMEb';
export const LOCATION_LABEL = 'Lagos, Nigeria';

const IG_BASE = 'https://www.instagram.com/reel/';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Everyday Statement Look',
    category: 'Outfits',
    note: 'Outfit available in sizes 10–16',
    sizes: '10–16',
    ig: 'DdHVCugAzyx',
    image: 'assets/img/collection/look-01.jpg',
    instagramUrl: `${IG_BASE}DdHVCugAzyx/`
  },
  {
    id: 2,
    name: 'Printed Jacket',
    category: 'Jackets',
    note: 'Statement tailored printed jacket',
    sizes: '10–14',
    ig: 'DdHVf2BAh3R',
    image: 'assets/img/collection/look-02.jpg',
    instagramUrl: `${IG_BASE}DdHVf2BAh3R/`
  },
  {
    id: 3,
    name: 'Denim Jeans 01',
    category: 'Denim',
    note: 'Premium sculpted high-waist denim',
    sizes: '10–18',
    ig: 'DdZKMw9AUkE',
    image: 'assets/img/collection/look-03.jpg',
    instagramUrl: `${IG_BASE}DdZKMw9AUkE/`
  },
  {
    id: 4,
    name: 'Denim Jeans 02',
    category: 'Denim',
    note: 'Relaxed tailored denim cut',
    sizes: '10–14',
    ig: 'DdZMQpZAGoJ',
    image: 'assets/img/collection/look-04.jpg',
    instagramUrl: `${IG_BASE}DdZMQpZAGoJ/`
  },
  {
    id: 5,
    name: 'Classic Shirt',
    category: 'Tops',
    note: 'Crisp architectural button-down',
    sizes: '10–14',
    ig: 'DdZMeI-A-Kt',
    image: 'assets/img/collection/look-05.jpg',
    instagramUrl: `${IG_BASE}DdZMeI-A-Kt/`
  },
  {
    id: 6,
    name: 'Signature Outfit',
    category: 'Outfits',
    note: 'Effortless ready-to-wear ensemble',
    sizes: '10–14',
    ig: 'DdZMpblAtXp',
    image: 'assets/img/collection/look-06.jpg',
    instagramUrl: `${IG_BASE}DdZMpblAtXp/`
  },
  {
    id: 7,
    name: 'Denim Jeans 03',
    category: 'Denim',
    note: 'Structured statement denim silhouette',
    sizes: '10–14',
    ig: 'DdZk4oWAT5m',
    image: 'assets/img/collection/look-07.jpg',
    instagramUrl: `${IG_BASE}DdZk4oWAT5m/`
  },
  {
    id: 8,
    name: 'Short Set',
    category: 'Co-ords',
    note: 'Contemporary two-piece coordinated set',
    sizes: '10–14',
    ig: 'DdbkHY4hZt5',
    image: 'assets/img/collection/look-08.jpg',
    instagramUrl: `${IG_BASE}DdbkHY4hZt5/`
  },
  {
    id: 9,
    name: 'Beaded Two-Piece',
    category: 'Co-ords',
    price: 75000,
    note: 'Artisanal hand-beaded luxury two-piece',
    sizes: '10–14',
    ig: 'Dev2d0DgUAp',
    image: 'assets/img/collection/look-09.jpg',
    instagramUrl: `${IG_BASE}Dev2d0DgUAp/`
  }
];

export const formatPrice = (price?: number): string => {
  if (typeof price === 'number') {
    return '₦' + price.toLocaleString('en-NG');
  }
  return 'Price on request';
};

export const getWhatsAppUrl = (text: string): string => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
};

export const createProductEnquiryUrl = (product: Product, size?: string): string => {
  const sizeNote = size ? ` in size ${size}` : '';
  const message = `Hello BERBIECLOSET, I would like to make an enquiry about the ${product.name}${sizeNote}. Is it currently available? Please share size details and confirm the price.`;
  return getWhatsAppUrl(message);
};
