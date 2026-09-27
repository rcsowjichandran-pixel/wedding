// Comprehensive catalog data for Wed Knot Craft with exact local assets

// Local Asset Imports
import hinduWedImg from '../assets/hinduwed.png.png';
import luxuryImg from '../assets/Luxury.png.png';
import floralImg from '../assets/Floral.png.png';
import beachImg from '../assets/Beach.png.png';
import birdsImg from '../assets/birds.png.png';
import palaceImg from '../assets/palace.png.png';

// Simple & Affordable 6 cards from Image 2
import aff1Img from '../assets/Wedding_card_design_in_red_satin_cloth-removebg-preview.png';
import aff2Img from '../assets/Indian_Hindu_Wedding_Royal_Golden_Peacock_Maroon____Rahul_-removebg-preview.png';
import aff3Img from '../assets/Hindu_Low_Cost_Wedding_Invitation_Card_Design-removebg-preview.png';
import aff4Img from '../assets/download__5_-removebg-preview.png';
import aff5Img from '../assets/Hindu_Wedding_Cards_Online___Traditional_Designs_for_Sacred_Ceremonies-removebg-preview.png';
import aff6Img from '../assets/Premium Vector _ Indian wedding invitation card template design.jpg';

// Laser Cut Showcase
import laser1Img from '../assets/Premium Vector _ Vector wedding card laser cut template.jpg';
import laser2Img from '../assets/Gate_fold.png.png';
import laser3Img from '../assets/download__13_-removebg-preview.png';

// Community / Traditions (dedicated assets, normalized to identical 800x1000 4:5 portrait)
import comm1Img from '../assets/hindu-trad.jpg';
import comm2Img from '../assets/christian-trad.jpg';
import comm3Img from '../assets/muslim-trad.jpg';
import comm4Img from '../assets/interfaith-trad.png';

// Scroll, Rings, Digital, and others
import scrollAssetImg from '../assets/Buy_Scroll_Wedding_Invitations___Personalized___Vintage_Styles-removebg-preview.png';
import digitalPhoneAssetImg from '../assets/download__3_-removebg-preview.png';
import ringAssetImg from '../assets/ring.png.jpg';
import keralaAssetImg from '../assets/Elegant_Kerala.png.png';
import vintageAssetImg from '../assets/Elegant_Vintage.png.png';
import ganeshaAssetImg from '../assets/Ganesha_Invitatio.png.png';
import navyFoilAssetImg from '../assets/download__10_-removebg-preview.png';
import doliBoxAssetImg from '../assets/Doli_Themed_Book_Style_Semi_Box_Dulah_Dulhan_Themed_Flower_Themed_Hindu_Wedding_Sikh_Wedding_Padded_Wedding_invitation_Cards_-_EJ3003-removebg-preview.png';

// Promo Banners
import freeDigitalBannerImg from '../assets/Free_Digital_Image.png.png';
import earlyBirdBannerImg from '../assets/download__8_-removebg-preview.png';
import floralBouquetImg from '../assets/offers_print.png';

// Dedicated "-wedding" category images (each card uses the image named after it)
import hinduWeddingImg from '../assets/hindu-wedding.png';
import christianWeddingImg from '../assets/christian-wedding.png';
import muslimWeddingImg from '../assets/muslim-wedding.png';
import sikhWeddingImg from '../assets/sikh-wedding.png';
import interfaithWeddingImg from '../assets/interfaith-wedding.png';
import exclusiveWeddingImg from '../assets/exclusive-wedding.png';
import traditionalWeddingImg from '../assets/traditional-wedding.png';
import allWeddingImg from '../assets/all-wedding.png';
import newStyleWeddingImg from '../assets/newstyle-wedding.avif';
import envelopeWeddingImg from '../assets/envelop-wedding.png';
import elegantPastelWeddingImg from '../assets/elegant-pastel-wedding.png';
import royalWeddingImg from '../assets/nepali-wedding.png';

export const PROMO_BANNERS = {
  leftBannerImage: freeDigitalBannerImg,
  rightBannerImage: earlyBirdBannerImg,
  floralBouquet: floralBouquetImg
};

export const LASER_CUT_SHOWCASE = [
  {
    id: 'lc-1',
    title: 'Laser Cut Invitations',
    subtitle: 'Intricate die-cut lace borders with metallic gold shimmer insert & satin ribbon',
    tag: 'Premium Wedding Collection',
    price: 38.00,
    image: laser1Img,
    color: '#8b5a2b',
    badge: 'Bestseller'
  },
  {
    id: 'lc-2',
    title: 'Royal Gatefold Laser Cut',
    subtitle: 'Majestic floral gatefold pattern with personalized monogram seal & RSVP suite',
    tag: 'Handcrafted Elegance',
    price: 45.00,
    image: laser2Img,
    color: '#4a3b32',
    badge: 'Exclusive'
  },
  {
    id: 'lc-3',
    title: 'Rose Gold Filigree Suite',
    subtitle: 'Laser precision botanical filigree sleeve with blush pink foil stamping',
    tag: 'Modern Luxury',
    price: 42.50,
    image: laser3Img,
    color: '#654321',
    badge: 'Trending'
  }
];

export const UNIQUE_EXCLUSIVE_CARDS = [
  {
    id: 'ue-1',
    title: 'Hindu Wedding Cards',
    desc: 'Traditional motifs with Lord Ganesha embossing, peacock feathers & golden foil accents.',
    image: hinduWedImg,
    link: '/wedding-cards?cat=hindu',
    badge: 'Traditional'
  },
  {
    id: 'ue-2',
    title: 'Luxury Cards',
    desc: 'Heavyweight acrylic & textured velvet with hot foil stamping and custom wax seals.',
    image: luxuryImg,
    link: '/wedding-cards?cat=exclusive',
    badge: 'High-End'
  },
  {
    id: 'ue-3',
    title: 'Floral Wedding Cards',
    desc: 'Hand-painted watercolor floral wreaths on handmade deckle-edge cotton rag paper.',
    image: floralImg,
    link: '/wedding-cards?cat=floral',
    badge: 'Bespoke'
  }
];

export const THEME_BASED_HOME = [
  {
    id: 'tb-1',
    title: 'Beach Theme Cards',
    desc: 'Tropical turquoise hues, starfish motifs, and soft sand texture cards for coastal weddings.',
    image: beachImg,
    link: '/themes?cat=beach'
  },
  {
    id: 'tb-2',
    title: 'Birds Theme Cards',
    desc: 'Delicate lovebirds resting on blossoming branches with subtle pastel background tones.',
    image: birdsImg,
    link: '/themes?cat=birds'
  },
  {
    id: 'tb-3',
    title: 'Palace Theme Cards',
    desc: 'Royal Rajasthani jharokha arches, regal elephant processions, and golden shimmer finish.',
    image: palaceImg,
    link: '/themes?cat=palace'
  }
];

export const SIMPLE_AFFORDABLE_CARDS = [
  {
    id: 'aff-1',
    title: 'Red Divine Card with Bride And Groom Names',
    price: 10.25,
    minQty: 100,
    rating: 4.9,
    category: 'Traditional',
    image: aff1Img,
    paperType: '280 GSM Gloss Metallic Board',
    dimensions: '18 x 12.5 cm'
  },
  {
    id: 'aff-2',
    title: 'Simple Red and Yellow Card Invite with Bride And Groom Names',
    price: 9.00,
    minQty: 100,
    rating: 4.8,
    category: 'Traditional',
    image: aff2Img,
    paperType: '260 GSM Shimmer Board',
    dimensions: '19 x 13 cm'
  },
  {
    id: 'aff-3',
    title: 'Royal Red Floral Personal Invite with Bride And Groom Names',
    price: 7.00,
    minQty: 100,
    rating: 4.7,
    category: 'Floral',
    image: aff3Img,
    paperType: '250 GSM Art Board',
    dimensions: '17.5 x 11.5 cm'
  },
  {
    id: 'aff-4',
    title: 'Pastel Wedding Personal Invite with Bride and Groom Names',
    price: 11.50,
    minQty: 100,
    rating: 5.0,
    category: 'Pastel',
    image: aff4Img,
    paperType: '300 GSM Textured Felt Card',
    dimensions: '20 x 14 cm'
  },
  {
    id: 'aff-5',
    title: 'Brown with Vinayagar Picture Invite with Bride and Groom Names',
    price: 7.00,
    minQty: 100,
    rating: 4.9,
    category: 'Traditional',
    image: aff5Img,
    paperType: '270 GSM Kraft Earth Card',
    dimensions: '18 x 12.5 cm'
  },
  {
    id: 'aff-6',
    title: 'Maroon Card with Rangoli Frame Personal Invite with Bride and Groom Names',
    price: 8.00,
    minQty: 100,
    rating: 4.8,
    category: 'Traditional',
    image: aff6Img,
    paperType: '280 GSM Velvet Finish Card',
    dimensions: '18.5 x 13 cm'
  }
];

export const COMMUNITY_COLLECTIONS = [
  {
    id: 'com-1',
    title: 'Hindu Invitation Collections',
    image: comm1Img,
    link: '/wedding-cards?cat=hindu'
  },
  {
    id: 'com-2',
    title: 'Christian Invitation Collections',
    image: comm2Img,
    link: '/wedding-cards?cat=christian'
  },
  {
    id: 'com-3',
    title: 'Muslim Invitation Collections',
    image: comm3Img,
    link: '/wedding-cards?cat=muslim'
  },
  {
    id: 'com-4',
    title: 'Interfaith Invitation Collections',
    image: comm4Img,
    link: '/wedding-cards?cat=interfaith'
  }
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'James',
    role: 'Bridegroom, Chennai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'Absolutely beautiful invites! We were blown away by the quality and elegance of our wedding invitations. The paper felt luxurious, and the printing was flawless. Everyone keeps asking where we got them!'
  },
  {
    id: 'test-2',
    name: 'Harshitha',
    role: 'Bride, Coimbatore',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'Customized to perfection. We wanted something simple yet unique, and they absolutely nailed it. Colors, fonts, wording - everything was exactly how we imagined. Fast turnaround too!'
  },
  {
    id: 'test-3',
    name: 'Santhosh',
    role: 'Client, Bangalore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: "Great quality at a great price. We were on a tight budget, but didn't want to compromise on style. These invites were not only affordable but looked premium. Arrived quickly and packaged beautifully."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Order Sample',
    desc: 'Browse design, select your favorites and order physical sample proof.',
    icon: '📝'
  },
  {
    step: 2,
    title: 'Get Sample Deliv in 5-days',
    desc: 'Feel the paper touch, textures and print finish at your doorstep.',
    icon: '📦'
  },
  {
    step: 3,
    title: 'Approve Digital Draft',
    desc: 'Share wedding wording, customize fonts and review digital PDF mockup.',
    icon: '✅'
  },
  {
    step: 4,
    title: 'Place Your Bulk Order',
    desc: 'Confirm your final quantity with exclusive volume slab discounts.',
    icon: '🛒'
  },
  {
    step: 5,
    title: 'Print & Delivery',
    desc: 'Carefully packaged and safely delivered across Chennai & worldwide.',
    icon: '🚚'
  }
];

// 12 Wedding Card Categories from Screenshot 5
export const WEDDING_CARD_CATEGORIES = [
  {
    id: 'hindu',
    title: 'Hindu Wedding Cards',
    desc: 'Lord Vinayagar, Radha Krishna, temple gopuram and Vedic auspicious mantras.',
    count: '150+ Designs',
    priceRange: '₹8 - ₹120',
    image: hinduWeddingImg
  },
  {
    id: 'christian',
    title: 'Christian Wedding Cards',
    desc: 'Holy Cross, cathedral arch, floral garlands with silver & gold foil accents.',
    count: '95+ Designs',
    priceRange: '₹12 - ₹140',
    image: christianWeddingImg
  },
  {
    id: 'muslim',
    title: 'Muslim Wedding Cards',
    desc: 'Bismillah calligraphy, crescent moon motifs, ornate Islamic geometric jaali.',
    count: '80+ Designs',
    priceRange: '₹10 - ₹130',
    image: muslimWeddingImg
  },
  {
    id: 'sikh',
    title: 'Sikh Wedding Cards',
    desc: 'Ek Onkar symbol, Anand Karaj ceremony cards with rich royal velvet packaging.',
    count: '60+ Designs',
    priceRange: '₹15 - ₹160',
    image: sikhWeddingImg
  },
  {
    id: 'interfaith',
    title: 'Interfaith Wedding Cards',
    desc: 'Contemporary neutral designs honoring multiple cultural traditions beautifully.',
    count: '50+ Designs',
    priceRange: '₹14 - ₹150',
    image: interfaithWeddingImg
  },
  {
    id: 'exclusive',
    title: 'Exclusive Wedding Cards',
    desc: 'Handmade artisanal boxes, acrylic glass inserts, and customized wax seals.',
    count: '45+ Designs',
    priceRange: '₹50 - ₹350',
    image: exclusiveWeddingImg
  },
  {
    id: 'traditional',
    title: 'Traditional Wedding Cards',
    desc: 'Heritage red and golden yellow turmeric cards with auspicious Tamil & Sanskrit verses.',
    count: '210+ Designs',
    priceRange: '₹6 - ₹45',
    image: traditionalWeddingImg
  },
  {
    id: 'all',
    title: 'All Wedding Cards',
    desc: 'Explore the complete master archive of over 800+ wedding invitation collections.',
    count: '800+ Designs',
    priceRange: '₹6 - ₹450',
    image: allWeddingImg
  },
  {
    id: 'new-style',
    title: 'New Style Wedding Cards',
    desc: 'Modern minimalist typography, pastel gradients, and vellum translucent overlays.',
    count: '110+ Designs',
    priceRange: '₹18 - ₹125',
    image: newStyleWeddingImg
  },
  {
    id: 'envelope',
    title: 'Envelope Wedding Cards',
    desc: 'Pocketfold envelopes, wax stamped closures, and coordinated liner artwork.',
    count: '130+ Designs',
    priceRange: '₹14 - ₹95',
    image: envelopeWeddingImg
  },
  {
    id: 'elegant-pastel',
    title: 'Elegant faith Wedding Cards',
    desc: 'Blush pink, sage green, dusty rose, and lavender watercolor card collections.',
    count: '90+ Designs',
    priceRange: '₹16 - ₹110',
    image: elegantPastelWeddingImg
  },
  {
    id: 'nepali-wedding',
    title: 'Nepali Wedding Cards',
    desc: 'Regal velvet rigid boxes, metallic crests, sweets box packaging, and silk tassels.',
    count: '70+ Designs',
    priceRange: '₹65 - ₹480',
    image: royalWeddingImg
  }
];

// Detailed products for Wedding Cards
export const WEDDING_CARDS_PRODUCTS = [
  {
    id: 'wc-p1',
    title: 'Royal Shimmer Hindu Wedding Invite',
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    price: 18.50,
    rating: 4.9,
    image: hinduWeddingImg,
    paperType: '300 GSM Golden Shimmer Board',
    features: ['Embossed Ganesha', 'Folded insert with RSVP', 'Matching gold envelope']
  },
  {
    id: 'wc-p2',
    title: 'Classic Christian Cathedral Arch Foil Card',
    category: 'christian',
    categoryName: 'Christian Wedding Cards',
    price: 22.00,
    rating: 4.8,
    image: christianWeddingImg,
    paperType: '350 GSM Pearl White Cotton Card',
    features: ['Silver hot foil cross', 'Vellum paper sleeve', 'Custom monogram seal']
  },
  {
    id: 'wc-p3',
    title: 'Emerald Green Muslim Nikah Farman Invite',
    category: 'muslim',
    categoryName: 'Muslim Wedding Cards',
    price: 24.50,
    rating: 4.9,
    image: muslimWeddingImg,
    paperType: '300 GSM Emerald Shimmer Card',
    features: ['Arabic calligraphy Bismillah', 'Laser jaali cut edges', 'Matching invitation envelope']
  },
  {
    id: 'wc-p4',
    title: 'Golden Anand Karaj Sikh Wedding Suite',
    category: 'sikh',
    categoryName: 'Sikh Wedding Cards',
    price: 29.00,
    rating: 5.0,
    image: sikhWeddingImg,
    paperType: 'Heavy Rigid Velvet Box & Satin Inserts',
    features: ['Ek Onkar gold crest', '3 ceremony cards (Sangeet, Anand Karaj, Reception)', 'Silk ribbon pull']
  },
  {
    id: 'wc-p5',
    title: 'Minimalist Interfaith Botanical Invite',
    category: 'interfaith',
    categoryName: 'Interfaith Wedding Cards',
    price: 19.00,
    rating: 4.8,
    image: interfaithWeddingImg,
    paperType: 'Deckle-edge handmade rag paper',
    features: ['Neutral floral border', 'Bespoke ceremony wording', 'Wax seal with initials']
  },
  {
    id: 'wc-p6',
    title: 'Acrylic Glass Luxury Invitation with Box',
    category: 'exclusive',
    categoryName: 'Exclusive Wedding Cards',
    price: 125.00,
    rating: 5.0,
    image: exclusiveWeddingImg,
    paperType: '2mm Frosted Acrylic + Suede Velvet Box',
    features: ['Screen printed gold ink', 'Padded velvet presentation box', 'Customizable envelope liners']
  },
  {
    id: 'wc-p7',
    title: 'Heritage Turmeric Red & Gold Traditional Tamil Card',
    category: 'traditional',
    categoryName: 'Traditional Wedding Cards',
    price: 8.50,
    rating: 4.9,
    image: traditionalWeddingImg,
    paperType: '280 GSM Board with Gold Foil',
    features: ['Auspicious Kalasam & Nadaswaram motif', 'Tamil wording typesetting', 'Affordable bulk pricing']
  },
  {
    id: 'wc-p8',
    title: 'Vellum Translucent New Style Fold Card',
    category: 'new-style',
    categoryName: 'New Style Wedding Cards',
    price: 26.00,
    rating: 4.9,
    image: newStyleWeddingImg,
    paperType: '150 GSM Translucent Vellum + 300 GSM Base',
    features: ['Modern script typography', 'Gold foil botanical leaf accents', 'Rose gold eyelet binding']
  },
  {
    id: 'wc-p9',
    title: 'Sage Green Pastel Floral Pocket Invitation',
    category: 'elegant-pastel',
    categoryName: 'Elegant Pastel Wedding Cards',
    price: 21.00,
    rating: 4.9,
    image: elegantPastelWeddingImg,
    paperType: '300 GSM Textured Cotton Card',
    features: ['Blush & sage botanical artwork', 'Tear-off RSVP postcard', 'Hand-torn deckled edges']
  },
  {
    id: 'wc-p10',
    title: 'Pocketfold Envelope Invitation with Insert Cards',
    category: 'envelope',
    categoryName: 'Envelope Wedding Cards',
    price: 25.00,
    rating: 4.7,
    image: envelopeWeddingImg,
    paperType: '280 GSM Matte Metallic Card',
    features: ['Triple step-up pocket inserts', 'Monogram belly band', 'Matching guest mailing envelope']
  },
  {
    id: 'wc-p11',
    title: 'Imperial Velvet & Gold Foil Royal Box Invite',
    category: 'nepali-wedding',
    categoryName: 'Nepali Wedding Cards',
    price: 185.00,
    rating: 5.0,
    image: royalWeddingImg,
    paperType: 'Deep Maroon Velvet Hardcover Box',
    features: ['Brass metallic initials emblem', '3 thick gold-gilded cards', 'Dry-fruit compartment optional']
  },
  {
    id: 'wc-p12',
    title: 'Grand Celebrations Complete Wedding Suite',
    category: 'all',
    categoryName: 'All Wedding Cards',
    price: 32.00,
    rating: 4.9,
    image: allWeddingImg,
    paperType: '320 GSM Imported Linen Card',
    features: ['Invitation + Reception + Mehndi cards', 'Gold cord with tassel', 'Custom envelope calligraphy']
  }
];

export const HINDU_WEDDING_PRODUCTS = [
  {
    id: 'hindu-blue',
    title: 'The blue Wedding Cards',
    sku: 'KSN0054',
    sn: 'SN 54',
    price: 72.25,
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    image: navyFoilAssetImg,
    gallery: [navyFoilAssetImg, laser1Img, laser3Img, aff1Img],
    description: 'The blue wedding card has embossed floral design with customized initial acrylic nameplate. This invitation card has holding insert and an envelope',
    comments: 'Discounts are applied based on quantity at checkout',
    height: '27.5 cms',
    width: '21 cms',
    weight: '110 grams',
    compliment: 'Hold Bag',
    coupon: 'MAR0057'
  },
  {
    id: 'hindu-ganesha',
    title: 'Ganesha Wedding Cards',
    sku: 'KSN0055',
    sn: 'SN 55',
    price: 25.25,
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    image: ganeshaAssetImg,
    gallery: [ganeshaAssetImg, hinduWeddingImg, aff5Img],
    description: 'Traditional Ganesha motif invitation with gold foil accents, matching insert and envelope.',
    comments: 'Discounts are applied based on quantity at checkout',
    height: '24 cms',
    width: '18 cms',
    weight: '90 grams',
    compliment: 'Hold Bag',
    coupon: 'MAR0057'
  },
  {
    id: 'hindu-favour',
    title: 'Wedding Cards Favour Box',
    sku: 'KSN0056',
    sn: 'SN 56',
    price: 39.45,
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    image: doliBoxAssetImg,
    gallery: [doliBoxAssetImg, exclusiveWeddingImg],
    description: 'Favour box wedding invitation with keepsake packaging and personalized names.',
    comments: 'Discounts are applied based on quantity at checkout',
    height: '20 cms',
    width: '20 cms',
    weight: '180 grams',
    compliment: 'Hold Bag',
    coupon: 'MAR0057'
  },
  {
    id: 'hindu-theme',
    title: 'Theme Wedding Cards',
    sku: 'KSN0057',
    sn: 'SN 57',
    price: 30.00,
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    image: newStyleWeddingImg,
    gallery: [newStyleWeddingImg, floralImg],
    description: 'Illustrated theme wedding card with couple portrait layout and event timeline.',
    comments: 'Discounts are applied based on quantity at checkout',
    height: '26 cms',
    width: '18 cms',
    weight: '95 grams',
    compliment: 'Hold Bag',
    coupon: 'MAR0057'
  },
  {
    id: 'hindu-vintage',
    title: 'Vintage Wedding Cards',
    sku: 'KSN0058',
    sn: 'SN 58',
    price: 30.15,
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    image: vintageAssetImg,
    gallery: [vintageAssetImg, palaceImg],
    description: 'Vintage arch design with heritage motifs and classic wording layout.',
    comments: 'Discounts are applied based on quantity at checkout',
    height: '27 cms',
    width: '19 cms',
    weight: '100 grams',
    compliment: 'Hold Bag',
    coupon: 'MAR0057'
  },
  {
    id: 'hindu-peacock',
    title: 'Elegant peacock WeddingCards',
    sku: 'KSN0059',
    sn: 'SN 59',
    price: 15.00,
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    image: birdsImg,
    gallery: [birdsImg, aff2Img],
    description: 'Elegant peacock feather artwork on a compact invite with matching envelope.',
    comments: 'Discounts are applied based on quantity at checkout',
    height: '22 cms',
    width: '16 cms',
    weight: '70 grams',
    compliment: 'Hold Bag',
    coupon: 'MAR0057'
  },
  {
    id: 'hindu-unique',
    title: 'Unique Wedding Cards',
    sku: 'KSN0060',
    sn: 'SN 60',
    price: 22.50,
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    image: floralImg,
    gallery: [floralImg, aff6Img],
    description: 'Unique floral script invitation with customized couple names and ceremony details.',
    comments: 'Discounts are applied based on quantity at checkout',
    height: '25 cms',
    width: '18 cms',
    weight: '85 grams',
    compliment: 'Hold Bag',
    coupon: 'MAR0057'
  },
  {
    id: 'hindu-wardrobe',
    title: 'Wardrope Wedding Cards',
    sku: 'KSN0061',
    sn: 'SN 61',
    price: 59.75,
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    image: exclusiveWeddingImg,
    gallery: [exclusiveWeddingImg, keralaAssetImg],
    description: 'Wardrobe-style illustrated card showcasing outfits and ceremony looks.',
    comments: 'Discounts are applied based on quantity at checkout',
    height: '28 cms',
    width: '20 cms',
    weight: '120 grams',
    compliment: 'Hold Bag',
    coupon: 'MAR0057'
  },
  {
    id: 'hindu-editable',
    title: 'Editable Wedding Cards',
    sku: 'KSN0062',
    sn: 'SN 62',
    price: 35.55,
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    image: hinduWeddingImg,
    gallery: [hinduWeddingImg, aff3Img],
    description: 'Editable wording template with traditional red and gold floral frame.',
    comments: 'Discounts are applied based on quantity at checkout',
    height: '24 cms',
    width: '17 cms',
    weight: '88 grams',
    compliment: 'Hold Bag',
    coupon: 'MAR0057'
  },
  {
    id: 'hindu-traditional',
    title: 'Traditional Wedding Cards',
    sku: 'KSN0063',
    sn: 'SN 63',
    price: 25.00,
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    image: traditionalWeddingImg,
    gallery: [traditionalWeddingImg, aff5Img],
    description: 'Traditional multi-card set with envelope and gold-edge inserts.',
    comments: 'Discounts are applied based on quantity at checkout',
    height: '23 cms',
    width: '16 cms',
    weight: '110 grams',
    compliment: 'Hold Bag',
    coupon: 'MAR0057'
  },
  {
    id: 'hindu-scroll',
    title: 'Royal Scroll Wedding Cards',
    sku: 'KSN0064',
    sn: 'SN 64',
    price: 75.00,
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    image: scrollAssetImg,
    gallery: [scrollAssetImg, doliBoxAssetImg],
    description: 'Royal velvet box with scroll invitation and gold plaque personalization.',
    comments: 'Discounts are applied based on quantity at checkout',
    height: '30 cms',
    width: '22 cms',
    weight: '320 grams',
    compliment: 'Hold Bag',
    coupon: 'MAR0057'
  },
  {
    id: 'hindu-gatefold',
    title: 'Gate Fold Wedding Cards',
    sku: 'KSN0065',
    sn: 'SN 65',
    price: 43.20,
    category: 'hindu',
    categoryName: 'Hindu Wedding Cards',
    image: laser2Img,
    gallery: [laser2Img, envelopeWeddingImg],
    description: 'Laser-cut gate fold invitation with monogram seal and matching envelope.',
    comments: 'Discounts are applied based on quantity at checkout',
    height: '26 cms',
    width: '18 cms',
    weight: '105 grams',
    compliment: 'Hold Bag',
    coupon: 'MAR0057'
  }
];

export const getHinduProduct = (id) => HINDU_WEDDING_PRODUCTS.find((p) => p.id === id);

// Special Occasions from Prompt:
export const SPECIAL_OCCASIONS = [
  {
    id: 'birthday',
    title: 'Birthday Invitations',
    tagline: 'Milestone 1st Birthday, Sweet 16, 21st, 50th & 60th Shashti Poorthi celebrations',
    desc: 'Fun, colorful and vibrant cards with custom photo collage, cartoon themes, and gold foil accents.',
    priceRange: '₹5 - ₹45',
    image: aff4Img,
    items: [
      { name: '1st Birthday Royal Prince / Princess Card', price: 9.50, rating: 4.8 },
      { name: 'Shashti Poorthi (60th Birthday) Traditional Card', price: 12.00, rating: 4.9 },
      { name: 'Sathabishekam (80th Birthday) Kalasa Card', price: 14.00, rating: 5.0 },
      { name: 'Sparkling Golden 50th Birthday Invite', price: 11.00, rating: 4.8 }
    ]
  },
  {
    id: 'puberty',
    title: 'Puberty Cards',
    tagline: 'Manjal Neerattu Vizha / Ritu Kala Samskara / Half Saree Ceremony Invitations',
    desc: 'Graceful floral and auspicious traditional yellow/gold motif cards designed for festive family gatherings.',
    priceRange: '₹6 - ₹38',
    image: aff2Img,
    items: [
      { name: 'Yellow Floral Manjal Neerattu Vizha Invite', price: 7.50, rating: 4.9 },
      { name: 'Traditional Kuthu Vilakku Card with Photo', price: 8.50, rating: 4.8 },
      { name: 'Pink & Gold Half Saree Ceremony Card', price: 10.50, rating: 4.9 },
      { name: 'Peacock Feather Theme Puberty Function Card', price: 9.00, rating: 4.7 }
    ]
  },
  {
    id: 'luxury',
    title: 'Luxury Invitations',
    tagline: 'Ultra-premium velvet, acrylic, woodcraft, and rigid boxes with gilded edges',
    desc: 'Designed for elite events, VIP galas, and opulent weddings with personalized heraldry and seals.',
    priceRange: '₹65 - ₹550',
    image: luxuryImg,
    items: [
      { name: 'Opulent Suede Box with Sweets Chamber', price: 195.00, rating: 5.0 },
      { name: 'Gilded Mirror Edge Glass Acrylic Card', price: 135.00, rating: 4.9 },
      { name: 'Hand-carved Woodcraft Keepsake Box Invite', price: 280.00, rating: 5.0 },
      { name: 'Pure Silk Brocade Royal Scroll Box', price: 210.00, rating: 4.9 }
    ]
  },
  {
    id: 'ear-boring',
    title: 'Ear Boring Cards',
    tagline: 'Kadhani Vizha / Karnavedha traditional baby ceremony invitations',
    desc: 'Heartwarming designs featuring auspicious temple motifs, cute cradle illustrations, and baby blessings.',
    priceRange: '₹6 - ₹32',
    image: ganeshaAssetImg,
    items: [
      { name: 'Cute Baby Elephant Motif Kadhani Vizha Card', price: 7.00, rating: 4.8 },
      { name: 'Lord Murugan & Vel Ear Boring Ceremony Card', price: 8.00, rating: 4.9 },
      { name: 'Traditional Banana Leaf & Cradle Invite', price: 7.50, rating: 4.7 },
      { name: 'Pastel Cartoon Theme Tonsure & Ear Boring Card', price: 9.00, rating: 4.9 }
    ]
  },
  {
    id: 'engagement',
    title: 'Engagement Cards',
    tagline: 'Nichayathartham, Ring Ceremony, Roka & Betrothal invitations',
    desc: 'Celebrate the promise of forever with interlocking rings, couple silhouettes, and romantic typography.',
    priceRange: '₹8 - ₹65',
    image: ringAssetImg,
    items: [
      { name: 'Diamond Ring Embossed Nichayathartham Card', price: 12.50, rating: 4.9 },
      { name: 'Rose Gold Shimmer Floral Engagement Invite', price: 14.00, rating: 5.0 },
      { name: 'Minimalist Couple Line Art Betrothal Card', price: 11.50, rating: 4.8 },
      { name: 'Traditional Betel Leaf & Coconut Engagement Card', price: 9.00, rating: 4.7 }
    ]
  },
  {
    id: 'house-warming',
    title: 'House Warming Cards',
    tagline: 'Griha Pravesham, House Warming & Vastu Shanti invitations',
    desc: 'Auspicious Kalasam, mango leaves, Kolam designs, and welcoming door illustrations for new home blessings.',
    priceRange: '₹6 - ₹35',
    image: aff5Img,
    items: [
      { name: 'Kalasam with Milk Boiling Pot Griha Pravesh Card', price: 7.50, rating: 4.9 },
      { name: 'Ornate Wooden Door Frame House Warming Invite', price: 9.00, rating: 4.8 },
      { name: 'Golden Rangoli Kolam New Home Invitation', price: 8.00, rating: 4.9 },
      { name: 'Modern House Sketch Warm Welcoming Card', price: 10.00, rating: 4.8 }
    ]
  },
  {
    id: 'anniversary',
    title: 'Anniversary Cards',
    tagline: 'Silver Jubilee (25th), Golden Jubilee (50th) & yearly celebrations',
    desc: 'Commemorate decades of love with shimmering silver foil, golden laurels, and photo throwback inserts.',
    priceRange: '₹8 - ₹55',
    image: navyFoilAssetImg,
    items: [
      { name: 'Silver Jubilee 25th Wedding Anniversary Card', price: 14.50, rating: 4.9 },
      { name: 'Golden Jubilee 50th Anniversary Card with Photo', price: 16.00, rating: 5.0 },
      { name: 'Classic Wine & Rose Gold Anniversary Invite', price: 13.00, rating: 4.8 },
      { name: 'Romantic Heart Wreath Couple Celebration Card', price: 10.50, rating: 4.8 }
    ]
  }
];

// Theme Cards from Prompt:
export const THEME_CARDS = [
  {
    id: 'beach',
    title: 'Beach Theme Cards',
    tagline: 'Coastal, Destination & Tropical Seaside Weddings',
    desc: 'Aquamarine watercolors, real sand textures, shell engravings, and breezy ocean color palettes.',
    priceRange: '₹14 - ₹75',
    image: beachImg,
    items: [
      { name: 'Ocean Wave Turquoise Foil Destination Card', price: 18.00, rating: 4.9 },
      { name: 'Starfish & Pearl Embossed Beach Card', price: 21.00, rating: 4.8 },
      { name: 'Pastel Sand & Sunset Watercolor Invite', price: 16.50, rating: 4.9 }
    ]
  },
  {
    id: 'birds',
    title: 'Birds Theme Cards',
    tagline: 'Lovebirds, Peacock, Swan & Botanical Tree Motifs',
    desc: 'Symbol of eternal companionship, featuring painted singing birds, floral vines, and nature-inspired elegance.',
    priceRange: '₹12 - ₹60',
    image: birdsImg,
    items: [
      { name: 'Twin Lovebirds on Magnolia Branch Card', price: 15.00, rating: 4.9 },
      { name: 'Royal Peacock Metallic Gold Foil Card', price: 19.50, rating: 5.0 },
      { name: 'Graceful Swan Lake Pastel Invitation', price: 17.00, rating: 4.8 }
    ]
  },
  {
    id: 'box',
    title: 'Box Cards',
    tagline: 'Rigid Hardboard Boxes with Sweet / Dry-fruit Trays',
    desc: 'Stately presentation boxes lined with silk or velvet, containing multi-event inserts and gift compartments.',
    priceRange: '₹55 - ₹350',
    image: doliBoxAssetImg,
    items: [
      { name: 'Royal Velvet Padded Box with Gold Lock', price: 85.00, rating: 5.0 },
      { name: 'Floral Hardboard Box with 4 Insert Cards', price: 68.00, rating: 4.9 },
      { name: 'Traditional Sweet Box Wedding Invitation Combo', price: 120.00, rating: 4.9 }
    ]
  },
  {
    id: 'single-sheet',
    title: 'Single Sheet Cards',
    tagline: 'Modern, Budget-friendly & Sleek Minimalist Postcard Style',
    desc: 'Heavyweight premium cardstock with front-and-back printing, gilded edges, and envelope pairing.',
    priceRange: '₹5 - ₹22',
    image: aff3Img,
    items: [
      { name: '350 GSM Gold Gilded Single Sheet Card', price: 8.50, rating: 4.8 },
      { name: 'Double-sided Floral Wreath Single Page Invite', price: 6.50, rating: 4.7 },
      { name: 'Deckle-edge Cotton Rag Minimalist Single Card', price: 12.00, rating: 4.9 }
    ]
  },
  {
    id: 'palace',
    title: 'Palace Theme Cards',
    tagline: 'Regal Rajasthan Forts, Heritage Haveli & Royal Darbar',
    desc: 'Exquisite arched jharokhas, majestic elephant gates, and gold-leaf architectural grandeur.',
    priceRange: '₹22 - ₹110',
    image: palaceImg,
    items: [
      { name: 'Udaipur Palace Arch Laser Cut Gatefold Card', price: 34.00, rating: 5.0 },
      { name: 'Jaipur Haveli Pichwai Floral Theme Card', price: 28.00, rating: 4.9 },
      { name: 'Imperial Red Fort Gold Foil Royal Card', price: 30.00, rating: 4.9 }
    ]
  }
];

// Scroll Invitations from Prompt:
export const SCROLL_INVITATIONS = [
  {
    id: 'small-scroll',
    title: 'Small Size Scroll',
    tagline: 'Handy, Economical & Pocket Farman Scrolls',
    desc: 'Compact satin or handmade paper scroll with wooden / metallic gold finial rods and matching sleeve.',
    priceRange: '₹25 - ₹65',
    image: scrollAssetImg,
    items: [
      { name: 'Mini Golden Rod Shimmer Paper Scroll', price: 28.00, rating: 4.8 },
      { name: 'Satin Ribbon Tied Pocket Farman Scroll', price: 32.00, rating: 4.9 },
      { name: 'Handmade Parchment Scroll with Jute Tie', price: 26.50, rating: 4.7 }
    ]
  },
  {
    id: 'box-scroll',
    title: 'Box Scroll',
    tagline: 'Royal Scroll Housed in a Velvet / Hardboard Box',
    desc: 'An authentic royal decree experience; opening a regal velvet box reveals a gold-tasseled invitation scroll.',
    priceRange: '₹75 - ₹280',
    image: scrollAssetImg,
    items: [
      { name: 'Maroon Velvet Box with Gold Finial Scroll', price: 110.00, rating: 5.0 },
      { name: 'Embossed Floral Hardboard Scroll Presentation Box', price: 85.00, rating: 4.9 },
      { name: 'Regal Blue Silk Scroll Box with Brass Lock', price: 145.00, rating: 5.0 }
    ]
  },
  {
    id: 'only-scroll',
    title: 'Only Scroll',
    tagline: 'Stand-alone Silk / Vellum Scroll with Tassel',
    desc: 'Clean, elegant scrolls supplied with matching protective postal cylinder mailing tubes.',
    priceRange: '₹35 - ₹95',
    image: scrollAssetImg,
    items: [
      { name: 'Pure White Silk Scroll with Golden Tassels', price: 45.00, rating: 4.9 },
      { name: 'Golden Shimmer Scroll with Metallic Mailing Tube', price: 55.00, rating: 4.8 },
      { name: 'Vintage Edge Handmade Parchment Scroll', price: 40.00, rating: 4.9 }
    ]
  },
  {
    id: 'high-end-scroll',
    title: 'High End Scroll',
    tagline: 'Masterpiece Royal Farman with Brocade & Brass Rods',
    desc: 'Heirloom craftsmanship featuring heavyweight Banarasi silk, carved brass finials, and custom seal embroidery.',
    priceRange: '₹160 - ₹650',
    image: scrollAssetImg,
    items: [
      { name: 'Mughal Darbar Carved Brass Antique Scroll Suite', price: 280.00, rating: 5.0 },
      { name: 'Gold-Zari Embroidered Brocade Scroll with Velvet Case', price: 340.00, rating: 5.0 },
      { name: 'Imperial Maharaja Large Velvet Scroll with Keepsake Chest', price: 450.00, rating: 5.0 }
    ]
  }
];

// Digital Invitations from Prompt:
export const DIGITAL_INVITATIONS = [
  {
    id: 'whatsapp-cards',
    title: 'WhatsApp Cards',
    tagline: 'Instant High-Resolution Digital Invitations for WhatsApp, Email & Social Media',
    desc: 'Mobile-optimized single page and multi-page carousel e-cards. Delivered within 24 hours with custom clickable RSVP and Google Maps location links.',
    priceRange: '₹499 - ₹1,499 per design',
    image: digitalPhoneAssetImg,
    items: [
      { name: 'Tamil Traditional WhatsApp Wedding Invite (PDF/JPG)', price: 499, rating: 4.9, time: '24 Hours Delivery' },
      { name: 'Pastel Floral Multi-Slide WhatsApp Wedding Card', price: 799, rating: 5.0, time: '24 Hours Delivery' },
      { name: 'Royal Indian Caricature WhatsApp Invite', price: 999, rating: 4.9, time: '48 Hours Delivery' },
      { name: 'Interactive PDF E-Card with Clickable Map & Calendar', price: 1299, rating: 5.0, time: '24 Hours Delivery' }
    ]
  },
  {
    id: 'save-the-date',
    title: 'Save The Date Cards',
    tagline: 'Announce Your Date in Style with Photo E-Cards & Short Motion Graphics',
    desc: 'Share the big news early with customized couple photo layouts, countdown calendars, and modern romantic typography.',
    priceRange: '₹399 - ₹999 per design',
    image: digitalPhoneAssetImg,
    items: [
      { name: 'Minimalist Couple Photo Save The Date E-Card', price: 399, rating: 4.8, time: '12 Hours Delivery' },
      { name: 'Calendar Date Flip Animated WhatsApp Reel', price: 899, rating: 5.0, time: '24 Hours Delivery' },
      { name: 'Destination Wedding Boarding Pass Save The Date', price: 599, rating: 4.9, time: '24 Hours Delivery' },
      { name: 'Watercolor Portrait Save The Date Digital Card', price: 749, rating: 4.9, time: '24 Hours Delivery' }
    ]
  }
];
