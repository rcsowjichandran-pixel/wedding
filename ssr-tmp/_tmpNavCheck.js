import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import fs from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { Link, MemoryRouter, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/Luxury.png.png
var Luxury_png_default = "/assets/Luxury.png-DfeUjhm5.png";
//#endregion
//#region src/assets/Beach.png.png
var Beach_png_default = "/assets/Beach.png-BugBpM2B.png";
//#endregion
//#region src/assets/birds.png.png
var birds_png_default = "/assets/birds.png-BYOqr0X2.png";
//#endregion
//#region src/assets/palace.png.png
var palace_png_default = "/assets/palace.png-D0yZAha-.png";
//#endregion
//#region src/assets/Wedding_card_design_in_red_satin_cloth-removebg-preview.png
var Wedding_card_design_in_red_satin_cloth_removebg_preview_default = "/assets/Wedding_card_design_in_red_satin_cloth-removebg-preview-Dquxgnxi.png";
//#endregion
//#region src/assets/Indian_Hindu_Wedding_Royal_Golden_Peacock_Maroon____Rahul_-removebg-preview.png
var Indian_Hindu_Wedding_Royal_Golden_Peacock_Maroon____Rahul__removebg_preview_default = "/assets/traditional-wedding-CR_1Kh9L.png";
//#endregion
//#region src/assets/Hindu_Low_Cost_Wedding_Invitation_Card_Design-removebg-preview.png
var Hindu_Low_Cost_Wedding_Invitation_Card_Design_removebg_preview_default = "/assets/Hindu_Low_Cost_Wedding_Invitation_Card_Design-removebg-preview-CNjmcLoL.png";
//#endregion
//#region src/assets/download__5_-removebg-preview.png
var download__5__removebg_preview_default = "/assets/download__5_-removebg-preview-7v_Xmj2I.png";
//#endregion
//#region src/assets/Hindu_Wedding_Cards_Online___Traditional_Designs_for_Sacred_Ceremonies-removebg-preview.png
var Hindu_Wedding_Cards_Online___Traditional_Designs_for_Sacred_Ceremonies_removebg_preview_default = "/assets/Hindu_Wedding_Cards_Online___Traditional_Designs_for_Sacred_Ceremonies-removebg-preview-CvsTmerL.png";
//#endregion
//#region src/assets/Premium Vector _ Indian wedding invitation card template design.jpg
var Premium_Vector___Indian_wedding_invitation_card_template_design_default = "/assets/Premium%20Vector%20_%20Indian%20wedding%20invitation%20card%20template%20design-BHFCeexq.jpg";
//#endregion
//#region src/assets/Buy_Scroll_Wedding_Invitations___Personalized___Vintage_Styles-removebg-preview.png
var Buy_Scroll_Wedding_Invitations___Personalized___Vintage_Styles_removebg_preview_default = "/assets/Buy_Scroll_Wedding_Invitations___Personalized___Vintage_Styles-removebg-preview-BNRDbwUD.png";
//#endregion
//#region src/assets/download__3_-removebg-preview.png
var download__3__removebg_preview_default = "/assets/download__3_-removebg-preview-CZMthyvH.png";
//#endregion
//#region src/assets/ring.png.jpg
var ring_png_default = "/assets/ring.png-G2CWz5ma.jpg";
//#endregion
//#region src/assets/Ganesha_Invitatio.png.png
var Ganesha_Invitatio_png_default = "/assets/Ganesha_Invitatio.png-BdnpQ2ag.png";
//#endregion
//#region src/assets/download__10_-removebg-preview.png
var download__10__removebg_preview_default = "/assets/exclusive-wedding-Dvgceq3a.png";
//#endregion
//#region src/assets/Doli_Themed_Book_Style_Semi_Box_Dulah_Dulhan_Themed_Flower_Themed_Hindu_Wedding_Sikh_Wedding_Padded_Wedding_invitation_Cards_-_EJ3003-removebg-preview.png
var Doli_Themed_Book_Style_Semi_Box_Dulah_Dulhan_Themed_Flower_Themed_Hindu_Wedding_Sikh_Wedding_Padded_Wedding_invitation_Cards___EJ3003_removebg_preview_default = "/assets/Doli_Themed_Book_Style_Semi_Box_Dulah_Dulhan_Themed_Flower_Themed_Hindu_Wedding_Sikh_Wedding_Padded_Wedding_invitation_Cards_-_EJ3003-removebg-preview-bYapGOJf.png";
//#endregion
//#region src/assets/hindu-wedding.png
var hindu_wedding_default = "/assets/hindu-wedding-BI4YRtpM.png";
//#endregion
//#region src/assets/christian-wedding.png
var christian_wedding_default = "/assets/christian-wedding-CC6oMdN-.png";
//#endregion
//#region src/assets/muslim-wedding.png
var muslim_wedding_default = "/assets/muslim-wedding-BmNwZgKE.png";
//#endregion
//#region src/assets/sikh-wedding.png
var sikh_wedding_default = "/assets/sikh-wedding-2RxHl3nV.png";
//#endregion
//#region src/assets/interfaith-wedding.png
var interfaith_wedding_default = "/assets/interfaith-wedding-BxgxkI83.png";
//#endregion
//#region src/assets/exclusive-wedding.png
var exclusive_wedding_default = "/assets/exclusive-wedding-Dvgceq3a.png";
//#endregion
//#region src/assets/traditional-wedding.png
var traditional_wedding_default = "/assets/traditional-wedding-CR_1Kh9L.png";
//#endregion
//#region src/assets/all-wedding.png
var all_wedding_default = "/assets/all-wedding-BoSknCkj.png";
//#endregion
//#region src/assets/newstyle-wedding.avif
var newstyle_wedding_default = "/assets/newstyle-wedding-B-WMRUV_.avif";
//#endregion
//#region src/assets/envelop-wedding.png
var envelop_wedding_default = "/assets/envelop-wedding-B5qcCOUW.png";
//#endregion
//#region src/assets/elegant-pastel-wedding.png
var elegant_pastel_wedding_default = "/assets/elegant-pastel-wedding-BniLkFS-.png";
//#endregion
//#region src/assets/nepali-wedding.png
var nepali_wedding_default = "/assets/nepali-wedding-ymrzY9_4.png";
//#endregion
//#region src/data/cardsData.js
var SIMPLE_AFFORDABLE_CARDS = [
	{
		id: "aff-1",
		title: "Red Divine Card with Bride And Groom Names",
		price: 10.25,
		minQty: 100,
		rating: 4.9,
		category: "Traditional",
		image: Wedding_card_design_in_red_satin_cloth_removebg_preview_default,
		paperType: "280 GSM Gloss Metallic Board",
		dimensions: "18 x 12.5 cm"
	},
	{
		id: "aff-2",
		title: "Simple Red and Yellow Card Invite with Bride And Groom Names",
		price: 9,
		minQty: 100,
		rating: 4.8,
		category: "Traditional",
		image: Indian_Hindu_Wedding_Royal_Golden_Peacock_Maroon____Rahul__removebg_preview_default,
		paperType: "260 GSM Shimmer Board",
		dimensions: "19 x 13 cm"
	},
	{
		id: "aff-3",
		title: "Royal Red Floral Personal Invite with Bride And Groom Names",
		price: 7,
		minQty: 100,
		rating: 4.7,
		category: "Floral",
		image: Hindu_Low_Cost_Wedding_Invitation_Card_Design_removebg_preview_default,
		paperType: "250 GSM Art Board",
		dimensions: "17.5 x 11.5 cm"
	},
	{
		id: "aff-4",
		title: "Pastel Wedding Personal Invite with Bride and Groom Names",
		price: 11.5,
		minQty: 100,
		rating: 5,
		category: "Pastel",
		image: download__5__removebg_preview_default,
		paperType: "300 GSM Textured Felt Card",
		dimensions: "20 x 14 cm"
	},
	{
		id: "aff-5",
		title: "Brown with Vinayagar Picture Invite with Bride and Groom Names",
		price: 7,
		minQty: 100,
		rating: 4.9,
		category: "Traditional",
		image: Hindu_Wedding_Cards_Online___Traditional_Designs_for_Sacred_Ceremonies_removebg_preview_default,
		paperType: "270 GSM Kraft Earth Card",
		dimensions: "18 x 12.5 cm"
	},
	{
		id: "aff-6",
		title: "Maroon Card with Rangoli Frame Personal Invite with Bride and Groom Names",
		price: 8,
		minQty: 100,
		rating: 4.8,
		category: "Traditional",
		image: Premium_Vector___Indian_wedding_invitation_card_template_design_default,
		paperType: "280 GSM Velvet Finish Card",
		dimensions: "18.5 x 13 cm"
	}
];
var WEDDING_CARD_CATEGORIES = [
	{
		id: "hindu",
		title: "Hindu Wedding Cards",
		desc: "Lord Vinayagar, Radha Krishna, temple gopuram and Vedic auspicious mantras.",
		count: "150+ Designs",
		priceRange: "₹8 - ₹120",
		image: hindu_wedding_default
	},
	{
		id: "christian",
		title: "Christian Wedding Cards",
		desc: "Holy Cross, cathedral arch, floral garlands with silver & gold foil accents.",
		count: "95+ Designs",
		priceRange: "₹12 - ₹140",
		image: christian_wedding_default
	},
	{
		id: "muslim",
		title: "Muslim Wedding Cards",
		desc: "Bismillah calligraphy, crescent moon motifs, ornate Islamic geometric jaali.",
		count: "80+ Designs",
		priceRange: "₹10 - ₹130",
		image: muslim_wedding_default
	},
	{
		id: "sikh",
		title: "Sikh Wedding Cards",
		desc: "Ek Onkar symbol, Anand Karaj ceremony cards with rich royal velvet packaging.",
		count: "60+ Designs",
		priceRange: "₹15 - ₹160",
		image: sikh_wedding_default
	},
	{
		id: "interfaith",
		title: "Interfaith Wedding Cards",
		desc: "Contemporary neutral designs honoring multiple cultural traditions beautifully.",
		count: "50+ Designs",
		priceRange: "₹14 - ₹150",
		image: interfaith_wedding_default
	},
	{
		id: "exclusive",
		title: "Exclusive Wedding Cards",
		desc: "Handmade artisanal boxes, acrylic glass inserts, and customized wax seals.",
		count: "45+ Designs",
		priceRange: "₹50 - ₹350",
		image: exclusive_wedding_default
	},
	{
		id: "traditional",
		title: "Traditional Wedding Cards",
		desc: "Heritage red and golden yellow turmeric cards with auspicious Tamil & Sanskrit verses.",
		count: "210+ Designs",
		priceRange: "₹6 - ₹45",
		image: traditional_wedding_default
	},
	{
		id: "all",
		title: "All Wedding Cards",
		desc: "Explore the complete master archive of over 800+ wedding invitation collections.",
		count: "800+ Designs",
		priceRange: "₹6 - ₹450",
		image: all_wedding_default
	},
	{
		id: "new-style",
		title: "New Style Wedding Cards",
		desc: "Modern minimalist typography, pastel gradients, and vellum translucent overlays.",
		count: "110+ Designs",
		priceRange: "₹18 - ₹125",
		image: newstyle_wedding_default
	},
	{
		id: "envelope",
		title: "Envelope Wedding Cards",
		desc: "Pocketfold envelopes, wax stamped closures, and coordinated liner artwork.",
		count: "130+ Designs",
		priceRange: "₹14 - ₹95",
		image: envelop_wedding_default
	},
	{
		id: "elegant-pastel",
		title: "Elegant faith Wedding Cards",
		desc: "Blush pink, sage green, dusty rose, and lavender watercolor card collections.",
		count: "90+ Designs",
		priceRange: "₹16 - ₹110",
		image: elegant_pastel_wedding_default
	},
	{
		id: "nepali-wedding",
		title: "Nepali Wedding Cards",
		desc: "Regal velvet rigid boxes, metallic crests, sweets box packaging, and silk tassels.",
		count: "70+ Designs",
		priceRange: "₹65 - ₹480",
		image: nepali_wedding_default
	}
];
var WEDDING_CARDS_PRODUCTS = [
	{
		id: "wc-p1",
		title: "Royal Shimmer Hindu Wedding Invite",
		category: "hindu",
		categoryName: "Hindu Wedding Cards",
		price: 18.5,
		rating: 4.9,
		image: hindu_wedding_default,
		paperType: "300 GSM Golden Shimmer Board",
		features: [
			"Embossed Ganesha",
			"Folded insert with RSVP",
			"Matching gold envelope"
		]
	},
	{
		id: "wc-p2",
		title: "Classic Christian Cathedral Arch Foil Card",
		category: "christian",
		categoryName: "Christian Wedding Cards",
		price: 22,
		rating: 4.8,
		image: christian_wedding_default,
		paperType: "350 GSM Pearl White Cotton Card",
		features: [
			"Silver hot foil cross",
			"Vellum paper sleeve",
			"Custom monogram seal"
		]
	},
	{
		id: "wc-p3",
		title: "Emerald Green Muslim Nikah Farman Invite",
		category: "muslim",
		categoryName: "Muslim Wedding Cards",
		price: 24.5,
		rating: 4.9,
		image: muslim_wedding_default,
		paperType: "300 GSM Emerald Shimmer Card",
		features: [
			"Arabic calligraphy Bismillah",
			"Laser jaali cut edges",
			"Matching invitation envelope"
		]
	},
	{
		id: "wc-p4",
		title: "Golden Anand Karaj Sikh Wedding Suite",
		category: "sikh",
		categoryName: "Sikh Wedding Cards",
		price: 29,
		rating: 5,
		image: sikh_wedding_default,
		paperType: "Heavy Rigid Velvet Box & Satin Inserts",
		features: [
			"Ek Onkar gold crest",
			"3 ceremony cards (Sangeet, Anand Karaj, Reception)",
			"Silk ribbon pull"
		]
	},
	{
		id: "wc-p5",
		title: "Minimalist Interfaith Botanical Invite",
		category: "interfaith",
		categoryName: "Interfaith Wedding Cards",
		price: 19,
		rating: 4.8,
		image: interfaith_wedding_default,
		paperType: "Deckle-edge handmade rag paper",
		features: [
			"Neutral floral border",
			"Bespoke ceremony wording",
			"Wax seal with initials"
		]
	},
	{
		id: "wc-p6",
		title: "Acrylic Glass Luxury Invitation with Box",
		category: "exclusive",
		categoryName: "Exclusive Wedding Cards",
		price: 125,
		rating: 5,
		image: exclusive_wedding_default,
		paperType: "2mm Frosted Acrylic + Suede Velvet Box",
		features: [
			"Screen printed gold ink",
			"Padded velvet presentation box",
			"Customizable envelope liners"
		]
	},
	{
		id: "wc-p7",
		title: "Heritage Turmeric Red & Gold Traditional Tamil Card",
		category: "traditional",
		categoryName: "Traditional Wedding Cards",
		price: 8.5,
		rating: 4.9,
		image: traditional_wedding_default,
		paperType: "280 GSM Board with Gold Foil",
		features: [
			"Auspicious Kalasam & Nadaswaram motif",
			"Tamil wording typesetting",
			"Affordable bulk pricing"
		]
	},
	{
		id: "wc-p8",
		title: "Vellum Translucent New Style Fold Card",
		category: "new-style",
		categoryName: "New Style Wedding Cards",
		price: 26,
		rating: 4.9,
		image: newstyle_wedding_default,
		paperType: "150 GSM Translucent Vellum + 300 GSM Base",
		features: [
			"Modern script typography",
			"Gold foil botanical leaf accents",
			"Rose gold eyelet binding"
		]
	},
	{
		id: "wc-p9",
		title: "Sage Green Pastel Floral Pocket Invitation",
		category: "elegant-pastel",
		categoryName: "Elegant Pastel Wedding Cards",
		price: 21,
		rating: 4.9,
		image: elegant_pastel_wedding_default,
		paperType: "300 GSM Textured Cotton Card",
		features: [
			"Blush & sage botanical artwork",
			"Tear-off RSVP postcard",
			"Hand-torn deckled edges"
		]
	},
	{
		id: "wc-p10",
		title: "Pocketfold Envelope Invitation with Insert Cards",
		category: "envelope",
		categoryName: "Envelope Wedding Cards",
		price: 25,
		rating: 4.7,
		image: envelop_wedding_default,
		paperType: "280 GSM Matte Metallic Card",
		features: [
			"Triple step-up pocket inserts",
			"Monogram belly band",
			"Matching guest mailing envelope"
		]
	},
	{
		id: "wc-p11",
		title: "Imperial Velvet & Gold Foil Royal Box Invite",
		category: "nepali-wedding",
		categoryName: "Nepali Wedding Cards",
		price: 185,
		rating: 5,
		image: nepali_wedding_default,
		paperType: "Deep Maroon Velvet Hardcover Box",
		features: [
			"Brass metallic initials emblem",
			"3 thick gold-gilded cards",
			"Dry-fruit compartment optional"
		]
	},
	{
		id: "wc-p12",
		title: "Grand Celebrations Complete Wedding Suite",
		category: "all",
		categoryName: "All Wedding Cards",
		price: 32,
		rating: 4.9,
		image: all_wedding_default,
		paperType: "320 GSM Imported Linen Card",
		features: [
			"Invitation + Reception + Mehndi cards",
			"Gold cord with tassel",
			"Custom envelope calligraphy"
		]
	}
];
var SPECIAL_OCCASIONS = [
	{
		id: "birthday",
		title: "Birthday Invitations",
		tagline: "Milestone 1st Birthday, Sweet 16, 21st, 50th & 60th Shashti Poorthi celebrations",
		desc: "Fun, colorful and vibrant cards with custom photo collage, cartoon themes, and gold foil accents.",
		priceRange: "₹5 - ₹45",
		image: download__5__removebg_preview_default,
		items: [
			{
				name: "1st Birthday Royal Prince / Princess Card",
				price: 9.5,
				rating: 4.8
			},
			{
				name: "Shashti Poorthi (60th Birthday) Traditional Card",
				price: 12,
				rating: 4.9
			},
			{
				name: "Sathabishekam (80th Birthday) Kalasa Card",
				price: 14,
				rating: 5
			},
			{
				name: "Sparkling Golden 50th Birthday Invite",
				price: 11,
				rating: 4.8
			}
		]
	},
	{
		id: "puberty",
		title: "Puberty Cards",
		tagline: "Manjal Neerattu Vizha / Ritu Kala Samskara / Half Saree Ceremony Invitations",
		desc: "Graceful floral and auspicious traditional yellow/gold motif cards designed for festive family gatherings.",
		priceRange: "₹6 - ₹38",
		image: Indian_Hindu_Wedding_Royal_Golden_Peacock_Maroon____Rahul__removebg_preview_default,
		items: [
			{
				name: "Yellow Floral Manjal Neerattu Vizha Invite",
				price: 7.5,
				rating: 4.9
			},
			{
				name: "Traditional Kuthu Vilakku Card with Photo",
				price: 8.5,
				rating: 4.8
			},
			{
				name: "Pink & Gold Half Saree Ceremony Card",
				price: 10.5,
				rating: 4.9
			},
			{
				name: "Peacock Feather Theme Puberty Function Card",
				price: 9,
				rating: 4.7
			}
		]
	},
	{
		id: "luxury",
		title: "Luxury Invitations",
		tagline: "Ultra-premium velvet, acrylic, woodcraft, and rigid boxes with gilded edges",
		desc: "Designed for elite events, VIP galas, and opulent weddings with personalized heraldry and seals.",
		priceRange: "₹65 - ₹550",
		image: Luxury_png_default,
		items: [
			{
				name: "Opulent Suede Box with Sweets Chamber",
				price: 195,
				rating: 5
			},
			{
				name: "Gilded Mirror Edge Glass Acrylic Card",
				price: 135,
				rating: 4.9
			},
			{
				name: "Hand-carved Woodcraft Keepsake Box Invite",
				price: 280,
				rating: 5
			},
			{
				name: "Pure Silk Brocade Royal Scroll Box",
				price: 210,
				rating: 4.9
			}
		]
	},
	{
		id: "ear-boring",
		title: "Ear Boring Cards",
		tagline: "Kadhani Vizha / Karnavedha traditional baby ceremony invitations",
		desc: "Heartwarming designs featuring auspicious temple motifs, cute cradle illustrations, and baby blessings.",
		priceRange: "₹6 - ₹32",
		image: Ganesha_Invitatio_png_default,
		items: [
			{
				name: "Cute Baby Elephant Motif Kadhani Vizha Card",
				price: 7,
				rating: 4.8
			},
			{
				name: "Lord Murugan & Vel Ear Boring Ceremony Card",
				price: 8,
				rating: 4.9
			},
			{
				name: "Traditional Banana Leaf & Cradle Invite",
				price: 7.5,
				rating: 4.7
			},
			{
				name: "Pastel Cartoon Theme Tonsure & Ear Boring Card",
				price: 9,
				rating: 4.9
			}
		]
	},
	{
		id: "engagement",
		title: "Engagement Cards",
		tagline: "Nichayathartham, Ring Ceremony, Roka & Betrothal invitations",
		desc: "Celebrate the promise of forever with interlocking rings, couple silhouettes, and romantic typography.",
		priceRange: "₹8 - ₹65",
		image: ring_png_default,
		items: [
			{
				name: "Diamond Ring Embossed Nichayathartham Card",
				price: 12.5,
				rating: 4.9
			},
			{
				name: "Rose Gold Shimmer Floral Engagement Invite",
				price: 14,
				rating: 5
			},
			{
				name: "Minimalist Couple Line Art Betrothal Card",
				price: 11.5,
				rating: 4.8
			},
			{
				name: "Traditional Betel Leaf & Coconut Engagement Card",
				price: 9,
				rating: 4.7
			}
		]
	},
	{
		id: "house-warming",
		title: "House Warming Cards",
		tagline: "Griha Pravesham, House Warming & Vastu Shanti invitations",
		desc: "Auspicious Kalasam, mango leaves, Kolam designs, and welcoming door illustrations for new home blessings.",
		priceRange: "₹6 - ₹35",
		image: Hindu_Wedding_Cards_Online___Traditional_Designs_for_Sacred_Ceremonies_removebg_preview_default,
		items: [
			{
				name: "Kalasam with Milk Boiling Pot Griha Pravesh Card",
				price: 7.5,
				rating: 4.9
			},
			{
				name: "Ornate Wooden Door Frame House Warming Invite",
				price: 9,
				rating: 4.8
			},
			{
				name: "Golden Rangoli Kolam New Home Invitation",
				price: 8,
				rating: 4.9
			},
			{
				name: "Modern House Sketch Warm Welcoming Card",
				price: 10,
				rating: 4.8
			}
		]
	},
	{
		id: "anniversary",
		title: "Anniversary Cards",
		tagline: "Silver Jubilee (25th), Golden Jubilee (50th) & yearly celebrations",
		desc: "Commemorate decades of love with shimmering silver foil, golden laurels, and photo throwback inserts.",
		priceRange: "₹8 - ₹55",
		image: download__10__removebg_preview_default,
		items: [
			{
				name: "Silver Jubilee 25th Wedding Anniversary Card",
				price: 14.5,
				rating: 4.9
			},
			{
				name: "Golden Jubilee 50th Anniversary Card with Photo",
				price: 16,
				rating: 5
			},
			{
				name: "Classic Wine & Rose Gold Anniversary Invite",
				price: 13,
				rating: 4.8
			},
			{
				name: "Romantic Heart Wreath Couple Celebration Card",
				price: 10.5,
				rating: 4.8
			}
		]
	}
];
var THEME_CARDS = [
	{
		id: "beach",
		title: "Beach Theme Cards",
		tagline: "Coastal, Destination & Tropical Seaside Weddings",
		desc: "Aquamarine watercolors, real sand textures, shell engravings, and breezy ocean color palettes.",
		priceRange: "₹14 - ₹75",
		image: Beach_png_default,
		items: [
			{
				name: "Ocean Wave Turquoise Foil Destination Card",
				price: 18,
				rating: 4.9
			},
			{
				name: "Starfish & Pearl Embossed Beach Card",
				price: 21,
				rating: 4.8
			},
			{
				name: "Pastel Sand & Sunset Watercolor Invite",
				price: 16.5,
				rating: 4.9
			}
		]
	},
	{
		id: "birds",
		title: "Birds Theme Cards",
		tagline: "Lovebirds, Peacock, Swan & Botanical Tree Motifs",
		desc: "Symbol of eternal companionship, featuring painted singing birds, floral vines, and nature-inspired elegance.",
		priceRange: "₹12 - ₹60",
		image: birds_png_default,
		items: [
			{
				name: "Twin Lovebirds on Magnolia Branch Card",
				price: 15,
				rating: 4.9
			},
			{
				name: "Royal Peacock Metallic Gold Foil Card",
				price: 19.5,
				rating: 5
			},
			{
				name: "Graceful Swan Lake Pastel Invitation",
				price: 17,
				rating: 4.8
			}
		]
	},
	{
		id: "box",
		title: "Box Cards",
		tagline: "Rigid Hardboard Boxes with Sweet / Dry-fruit Trays",
		desc: "Stately presentation boxes lined with silk or velvet, containing multi-event inserts and gift compartments.",
		priceRange: "₹55 - ₹350",
		image: Doli_Themed_Book_Style_Semi_Box_Dulah_Dulhan_Themed_Flower_Themed_Hindu_Wedding_Sikh_Wedding_Padded_Wedding_invitation_Cards___EJ3003_removebg_preview_default,
		items: [
			{
				name: "Royal Velvet Padded Box with Gold Lock",
				price: 85,
				rating: 5
			},
			{
				name: "Floral Hardboard Box with 4 Insert Cards",
				price: 68,
				rating: 4.9
			},
			{
				name: "Traditional Sweet Box Wedding Invitation Combo",
				price: 120,
				rating: 4.9
			}
		]
	},
	{
		id: "single-sheet",
		title: "Single Sheet Cards",
		tagline: "Modern, Budget-friendly & Sleek Minimalist Postcard Style",
		desc: "Heavyweight premium cardstock with front-and-back printing, gilded edges, and envelope pairing.",
		priceRange: "₹5 - ₹22",
		image: Hindu_Low_Cost_Wedding_Invitation_Card_Design_removebg_preview_default,
		items: [
			{
				name: "350 GSM Gold Gilded Single Sheet Card",
				price: 8.5,
				rating: 4.8
			},
			{
				name: "Double-sided Floral Wreath Single Page Invite",
				price: 6.5,
				rating: 4.7
			},
			{
				name: "Deckle-edge Cotton Rag Minimalist Single Card",
				price: 12,
				rating: 4.9
			}
		]
	},
	{
		id: "palace",
		title: "Palace Theme Cards",
		tagline: "Regal Rajasthan Forts, Heritage Haveli & Royal Darbar",
		desc: "Exquisite arched jharokhas, majestic elephant gates, and gold-leaf architectural grandeur.",
		priceRange: "₹22 - ₹110",
		image: palace_png_default,
		items: [
			{
				name: "Udaipur Palace Arch Laser Cut Gatefold Card",
				price: 34,
				rating: 5
			},
			{
				name: "Jaipur Haveli Pichwai Floral Theme Card",
				price: 28,
				rating: 4.9
			},
			{
				name: "Imperial Red Fort Gold Foil Royal Card",
				price: 30,
				rating: 4.9
			}
		]
	}
];
var SCROLL_INVITATIONS = [
	{
		id: "small-scroll",
		title: "Small Size Scroll",
		tagline: "Handy, Economical & Pocket Farman Scrolls",
		desc: "Compact satin or handmade paper scroll with wooden / metallic gold finial rods and matching sleeve.",
		priceRange: "₹25 - ₹65",
		image: Buy_Scroll_Wedding_Invitations___Personalized___Vintage_Styles_removebg_preview_default,
		items: [
			{
				name: "Mini Golden Rod Shimmer Paper Scroll",
				price: 28,
				rating: 4.8
			},
			{
				name: "Satin Ribbon Tied Pocket Farman Scroll",
				price: 32,
				rating: 4.9
			},
			{
				name: "Handmade Parchment Scroll with Jute Tie",
				price: 26.5,
				rating: 4.7
			}
		]
	},
	{
		id: "box-scroll",
		title: "Box Scroll",
		tagline: "Royal Scroll Housed in a Velvet / Hardboard Box",
		desc: "An authentic royal decree experience; opening a regal velvet box reveals a gold-tasseled invitation scroll.",
		priceRange: "₹75 - ₹280",
		image: Buy_Scroll_Wedding_Invitations___Personalized___Vintage_Styles_removebg_preview_default,
		items: [
			{
				name: "Maroon Velvet Box with Gold Finial Scroll",
				price: 110,
				rating: 5
			},
			{
				name: "Embossed Floral Hardboard Scroll Presentation Box",
				price: 85,
				rating: 4.9
			},
			{
				name: "Regal Blue Silk Scroll Box with Brass Lock",
				price: 145,
				rating: 5
			}
		]
	},
	{
		id: "only-scroll",
		title: "Only Scroll",
		tagline: "Stand-alone Silk / Vellum Scroll with Tassel",
		desc: "Clean, elegant scrolls supplied with matching protective postal cylinder mailing tubes.",
		priceRange: "₹35 - ₹95",
		image: Buy_Scroll_Wedding_Invitations___Personalized___Vintage_Styles_removebg_preview_default,
		items: [
			{
				name: "Pure White Silk Scroll with Golden Tassels",
				price: 45,
				rating: 4.9
			},
			{
				name: "Golden Shimmer Scroll with Metallic Mailing Tube",
				price: 55,
				rating: 4.8
			},
			{
				name: "Vintage Edge Handmade Parchment Scroll",
				price: 40,
				rating: 4.9
			}
		]
	},
	{
		id: "high-end-scroll",
		title: "High End Scroll",
		tagline: "Masterpiece Royal Farman with Brocade & Brass Rods",
		desc: "Heirloom craftsmanship featuring heavyweight Banarasi silk, carved brass finials, and custom seal embroidery.",
		priceRange: "₹160 - ₹650",
		image: Buy_Scroll_Wedding_Invitations___Personalized___Vintage_Styles_removebg_preview_default,
		items: [
			{
				name: "Mughal Darbar Carved Brass Antique Scroll Suite",
				price: 280,
				rating: 5
			},
			{
				name: "Gold-Zari Embroidered Brocade Scroll with Velvet Case",
				price: 340,
				rating: 5
			},
			{
				name: "Imperial Maharaja Large Velvet Scroll with Keepsake Chest",
				price: 450,
				rating: 5
			}
		]
	}
];
var DIGITAL_INVITATIONS = [{
	id: "whatsapp-cards",
	title: "WhatsApp Cards",
	tagline: "Instant High-Resolution Digital Invitations for WhatsApp, Email & Social Media",
	desc: "Mobile-optimized single page and multi-page carousel e-cards. Delivered within 24 hours with custom clickable RSVP and Google Maps location links.",
	priceRange: "₹499 - ₹1,499 per design",
	image: download__3__removebg_preview_default,
	items: [
		{
			name: "Tamil Traditional WhatsApp Wedding Invite (PDF/JPG)",
			price: 499,
			rating: 4.9,
			time: "24 Hours Delivery"
		},
		{
			name: "Pastel Floral Multi-Slide WhatsApp Wedding Card",
			price: 799,
			rating: 5,
			time: "24 Hours Delivery"
		},
		{
			name: "Royal Indian Caricature WhatsApp Invite",
			price: 999,
			rating: 4.9,
			time: "48 Hours Delivery"
		},
		{
			name: "Interactive PDF E-Card with Clickable Map & Calendar",
			price: 1299,
			rating: 5,
			time: "24 Hours Delivery"
		}
	]
}, {
	id: "save-the-date",
	title: "Save The Date Cards",
	tagline: "Announce Your Date in Style with Photo E-Cards & Short Motion Graphics",
	desc: "Share the big news early with customized couple photo layouts, countdown calendars, and modern romantic typography.",
	priceRange: "₹399 - ₹999 per design",
	image: download__3__removebg_preview_default,
	items: [
		{
			name: "Minimalist Couple Photo Save The Date E-Card",
			price: 399,
			rating: 4.8,
			time: "12 Hours Delivery"
		},
		{
			name: "Calendar Date Flip Animated WhatsApp Reel",
			price: 899,
			rating: 5,
			time: "24 Hours Delivery"
		},
		{
			name: "Destination Wedding Boarding Pass Save The Date",
			price: 599,
			rating: 4.9,
			time: "24 Hours Delivery"
		},
		{
			name: "Watercolor Portrait Save The Date Digital Card",
			price: 749,
			rating: 4.9,
			time: "24 Hours Delivery"
		}
	]
}];
var round2 = (value) => Math.round((Number(value) || 0) * 100) / 100;
var resolveCoupon = (items = []) => {
	const withCoupon = (items || []).find((item) => item && item.coupon);
	return withCoupon ? withCoupon.coupon : null;
};
var computeOrderTotals = (items = [], couponCode = null) => {
	const subtotal = round2((items || []).reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0));
	const shipping = 0;
	const discount = couponCode ? 5 : 0;
	return {
		subtotal,
		shipping,
		discount,
		coupon: couponCode,
		taxRate: `18%`,
		total: round2(Math.max(subtotal - discount, 0))
	};
};
var generateOrderId = () => String(Math.floor(1e8 + Math.random() * 899999999));
var ordinal = (day) => {
	if (day % 100 >= 11 && day % 100 <= 13) return `${day}th`;
	switch (day % 10) {
		case 1: return `${day}st`;
		case 2: return `${day}nd`;
		case 3: return `${day}rd`;
		default: return `${day}th`;
	}
};
var formatOrderDate = (date = /* @__PURE__ */ new Date()) => `${ordinal(date.getDate())} ${date.toLocaleString("en-US", { month: "short" })}`;
var formatOrderTime = (date = /* @__PURE__ */ new Date()) => {
	const hours = date.getHours();
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const suffix = hours >= 12 ? "pm" : "am";
	return `${hours % 12 === 0 ? 12 : hours % 12}.${minutes}${suffix}`;
};
//#endregion
//#region src/context/StoreContext.jsx
var StoreContext = createContext();
var readStorage = (key, fallback) => {
	try {
		const saved = localStorage.getItem(key);
		return saved ? JSON.parse(saved) : fallback;
	} catch {
		return fallback;
	}
};
var StoreProvider = ({ children }) => {
	const [wishlist, setWishlist] = useState(() => {
		try {
			const saved = localStorage.getItem("wedknot_wishlist");
			return saved ? JSON.parse(saved) : [];
		} catch {
			return [];
		}
	});
	const [cart, setCart] = useState(() => {
		try {
			const saved = localStorage.getItem("wedknot_cart");
			return saved ? JSON.parse(saved) : [{
				id: "aff-1",
				title: "Red Divine Card with Bride And Groom Names",
				price: 10.25,
				quantity: 150,
				image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80",
				paperType: "280 GSM Gloss Metallic Board"
			}];
		} catch {
			return [];
		}
	});
	const [searchQuery, setSearchQuery] = useState("");
	const [activeModalItem, setActiveModalItem] = useState(null);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isWishlistOpen, setIsWishlistOpen] = useState(false);
	const [isUserModalOpen, setIsUserModalOpen] = useState(false);
	const [notification, setNotification] = useState(null);
	const [buyNow, setBuyNow] = useState(null);
	const [checkoutQty, setCheckoutQty] = useState(2);
	const [weddingDetails, setWeddingDetails] = useState({});
	const [orders, setOrders] = useState(() => readStorage("wedknot_orders", []));
	const [lastOrder, setLastOrder] = useState(() => readStorage("wedknot_last_order", null));
	useEffect(() => {
		try {
			localStorage.setItem("wedknot_wishlist", JSON.stringify(wishlist));
		} catch (e) {
			console.error(e);
		}
	}, [wishlist]);
	useEffect(() => {
		try {
			localStorage.setItem("wedknot_cart", JSON.stringify(cart));
		} catch (e) {
			console.error(e);
		}
	}, [cart]);
	useEffect(() => {
		try {
			localStorage.setItem("wedknot_orders", JSON.stringify(orders));
		} catch (e) {
			console.error(e);
		}
	}, [orders]);
	useEffect(() => {
		try {
			localStorage.setItem("wedknot_last_order", JSON.stringify(lastOrder));
		} catch (e) {
			console.error(e);
		}
	}, [lastOrder]);
	const showToast = (message) => {
		setNotification(message);
		setTimeout(() => {
			setNotification(null);
		}, 3e3);
	};
	const toggleWishlist = (item) => {
		setWishlist((prev) => {
			if (prev.some((x) => x.id === item.id)) {
				showToast(`Removed "${item.title || item.name}" from Wishlist`);
				return prev.filter((x) => x.id !== item.id);
			} else {
				showToast(`Added "${item.title || item.name}" to Wishlist ❤️`);
				return [...prev, item];
			}
		});
	};
	const isWishlisted = (id) => wishlist.some((x) => x.id === id);
	const addToCart = (item, quantity = 100, options = {}) => {
		const opts = options && typeof options === "object" ? options : {};
		setCart((prev) => {
			const existingIndex = prev.findIndex((x) => x.id === item.id);
			if (existingIndex > -1) {
				if (opts.ifAbsent) return prev;
				const updated = [...prev];
				updated[existingIndex].quantity += quantity;
				if (!opts.silent) showToast(`Updated quantity for "${item.title || item.name}" in bag!`);
				return updated;
			} else {
				if (!opts.silent) showToast(`Added "${item.title || item.name}" to your bag! 🛍️`);
				return [...prev, {
					...item,
					quantity
				}];
			}
		});
	};
	const updateCartQuantity = (id, newQty) => {
		if (newQty <= 0) {
			removeFromCart(id);
			return;
		}
		setCart((prev) => prev.map((item) => item.id === id ? {
			...item,
			quantity: newQty
		} : item));
	};
	const removeFromCart = (id) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
		showToast("Item removed from bag");
	};
	const cartTotal = cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);
	const cartItemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
	const cartDistinctCount = cart.length;
	const saveWeddingDetails = (productId, details) => {
		if (!productId) return;
		setWeddingDetails((prev) => ({
			...prev,
			[productId]: details
		}));
	};
	const getWeddingDetails = (productId) => weddingDetails[productId] || null;
	const startBuyNow = (item, quantity = 2, details = null) => {
		if (!item) return;
		if (details) saveWeddingDetails(item.id, details);
		setCheckoutQty(quantity);
		setBuyNow({
			item,
			quantity
		});
	};
	const clearBuyNow = () => setBuyNow(null);
	const checkoutSource = buyNow ? "buy-now" : "cart";
	const checkoutItems = useMemo(() => {
		if (buyNow) return [{
			...buyNow.item,
			quantity: buyNow.quantity
		}];
		return cart;
	}, [buyNow, cart]);
	const checkoutTotals = useMemo(() => computeOrderTotals(checkoutItems, resolveCoupon(checkoutItems)), [checkoutItems]);
	const placeOrder = ({ paymentMethod = "UPI - Paytm" } = {}) => {
		const items = checkoutItems.map((item) => ({
			id: item.id,
			title: item.title || item.name,
			price: item.price || 0,
			quantity: item.quantity || 1,
			image: item.image,
			sku: item.sku || "KSN0054",
			sn: item.sn || "SN 54",
			compliment: item.compliment || "Hold Bag",
			coupon: item.coupon || null
		}));
		const totals = computeOrderTotals(items, resolveCoupon(items));
		const savedDetails = weddingDetails[items[0]?.id] || null;
		const now = /* @__PURE__ */ new Date();
		const order = {
			id: generateOrderId(),
			createdAt: now.getTime(),
			dateLabel: formatOrderDate(now),
			timeLabel: formatOrderTime(now),
			items,
			...totals,
			paymentMethod,
			couple: savedDetails ? {
				groom: savedDetails.groomName || "",
				bride: savedDetails.brideName || "",
				date: savedDetails.weddingDate || "",
				time: savedDetails.weddingTime || "",
				location: savedDetails.location || ""
			} : null,
			customer: {
				name: savedDetails?.groomName || "Jhon",
				email: "jhon057@gmail.com",
				phone: "+91 98765 43210",
				ordersCount: orders.length + 1
			},
			shippingAddress: {
				name: savedDetails?.groomName || "Jhon",
				line1: "123 Elm street",
				line2: "Anytown, ABC 12345",
				line3: "Anywhere."
			},
			billingAddress: "Same as Shipping address"
		};
		setOrders((prev) => [order, ...prev]);
		setLastOrder(order);
		if (!buyNow) setCart([]);
		setBuyNow(null);
		return order;
	};
	const removeOrderItem = (orderId, itemId, keepCoupon = true) => {
		const trim = (order) => {
			const items = order.items.filter((item) => item.id !== itemId);
			const totals = computeOrderTotals(items, keepCoupon ? resolveCoupon(items) : null);
			return {
				...order,
				items,
				...totals
			};
		};
		setOrders((prev) => prev.map((order) => order.id === orderId ? trim(order) : order));
		setLastOrder((prev) => prev && prev.id === orderId ? trim(prev) : prev);
	};
	const allSearchableItems = [
		...SIMPLE_AFFORDABLE_CARDS.map((x) => ({
			...x,
			type: "Affordable Wedding Card",
			link: "/wedding-cards"
		})),
		...WEDDING_CARDS_PRODUCTS.map((x) => ({
			...x,
			type: "Wedding Collection",
			link: "/wedding-cards"
		})),
		...WEDDING_CARD_CATEGORIES.map((x) => ({
			...x,
			type: "Wedding Category",
			link: x.id === "hindu" ? `/wedding-cards?cat=${x.id}` : "/wedding-cards"
		})),
		...SPECIAL_OCCASIONS.map((x) => ({
			...x,
			type: "Special Occasion",
			link: `/special-occasions?cat=${x.id}`
		})),
		...THEME_CARDS.map((x) => ({
			...x,
			type: "Theme Card",
			link: `/themes?cat=${x.id}`
		})),
		...SCROLL_INVITATIONS.map((x) => ({
			...x,
			type: "Scroll Invitation",
			link: `/scroll-invitations?cat=${x.id}`
		})),
		...DIGITAL_INVITATIONS.map((x) => ({
			...x,
			type: "Digital Invitation",
			link: `/digital-invitations?cat=${x.id}`
		}))
	];
	const searchResults = searchQuery.trim() === "" ? [] : allSearchableItems.filter((item) => {
		const q = searchQuery.toLowerCase();
		const titleMatch = (item.title || item.name || "").toLowerCase().includes(q);
		const descMatch = (item.desc || item.tagline || item.category || "").toLowerCase().includes(q);
		return titleMatch || descMatch;
	}).slice(0, 8);
	return /* @__PURE__ */ jsx(StoreContext.Provider, {
		value: {
			wishlist,
			toggleWishlist,
			isWishlisted,
			cart,
			addToCart,
			updateCartQuantity,
			removeFromCart,
			cartTotal,
			cartItemCount,
			cartDistinctCount,
			searchQuery,
			setSearchQuery,
			searchResults,
			activeModalItem,
			setActiveModalItem,
			isCartOpen,
			setIsCartOpen,
			isWishlistOpen,
			setIsWishlistOpen,
			isUserModalOpen,
			setIsUserModalOpen,
			notification,
			showToast,
			buyNow,
			checkoutQty,
			setCheckoutQty,
			startBuyNow,
			clearBuyNow,
			checkoutItems,
			checkoutSource,
			checkoutTotals,
			weddingDetails,
			saveWeddingDetails,
			getWeddingDetails,
			orders,
			lastOrder,
			placeOrder,
			removeOrderItem
		},
		children
	});
};
var useStore = () => {
	const context = useContext(StoreContext);
	if (!context) throw new Error("useStore must be used within a StoreProvider");
	return context;
};
//#endregion
//#region src/components/Icons.jsx
var SearchIcon = ({ size = 20, className = "" }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.8",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	className,
	children: [/* @__PURE__ */ jsx("circle", {
		cx: "11",
		cy: "11",
		r: "7.5"
	}), /* @__PURE__ */ jsx("line", {
		x1: "21",
		y1: "21",
		x2: "16.5",
		y2: "16.5"
	})]
});
var UserIcon = ({ size = 26, className = "" }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.7",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	className,
	children: [/* @__PURE__ */ jsx("circle", {
		cx: "12",
		cy: "7",
		r: "4.2"
	}), /* @__PURE__ */ jsx("path", { d: "M4 21v-1.5a6.5 6.5 0 0 1 13 0V21" })]
});
var HeartIcon = ({ size = 26, fill = "none", className = "" }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill,
	stroke: "currentColor",
	strokeWidth: "1.7",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	className,
	children: /* @__PURE__ */ jsx("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
});
var ShoppingCartIcon = ({ size = 26, className = "" }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.7",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	className,
	children: [
		/* @__PURE__ */ jsx("circle", {
			cx: "9",
			cy: "20",
			r: "1.5",
			fill: "currentColor"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "18",
			cy: "20",
			r: "1.5",
			fill: "currentColor"
		}),
		/* @__PURE__ */ jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
	]
});
var ChevronDownIcon = ({ size = 16, className = "" }) => /* @__PURE__ */ jsx("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	className,
	children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" })
});
var CloseIcon = ({ size = 22, className = "" }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	className,
	children: [/* @__PURE__ */ jsx("line", {
		x1: "18",
		y1: "6",
		x2: "6",
		y2: "18"
	}), /* @__PURE__ */ jsx("line", {
		x1: "6",
		y1: "6",
		x2: "18",
		y2: "18"
	})]
});
var MenuIcon = ({ size = 26, className = "" }) => /* @__PURE__ */ jsxs("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	className,
	children: [
		/* @__PURE__ */ jsx("line", {
			x1: "3",
			y1: "12",
			x2: "21",
			y2: "12"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "3",
			y1: "6",
			x2: "21",
			y2: "6"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "3",
			y1: "18",
			x2: "21",
			y2: "18"
		})
	]
});
//#endregion
//#region src/assets/download__23_-removebg-preview.png
var download__23__removebg_preview_default = "/assets/download__23_-removebg-preview-B2e53eyN.png";
//#endregion
//#region src/components/HeaderLogo.jsx
var BrandLogo = ({ className = "", size = "md" }) => {
	const big = size === "lg";
	const wreathClasses = big ? "w-28 h-28 sm:w-32 sm:h-32" : "w-20 h-20 sm:w-24 sm:h-24";
	const wordClasses = big ? "text-[16px] sm:text-[18px]" : "text-[11px] sm:text-[13.5px]";
	return /* @__PURE__ */ jsxs("div", {
		className: `flex items-center ${big ? "gap-3.5 sm:gap-4.5" : "gap-2.5 sm:gap-3.5"} select-none ${className}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: `relative ${wreathClasses} flex-shrink-0`,
			style: { containerType: "inline-size" },
			children: [
				/* @__PURE__ */ jsx("img", {
					src: download__23__removebg_preview_default,
					alt: "Cherish By Wedding Cards",
					className: "w-full h-full object-contain drop-shadow-xs"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center -translate-y-1 pointer-events-none",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-stone-900 leading-none font-normal",
						style: {
							fontFamily: "'Alex Brush', cursive",
							fontSize: "14cqw",
							lineHeight: 1
						},
						children: "Cherish"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-stone-900 leading-none font-normal",
						style: {
							fontFamily: "'Alex Brush', cursive",
							fontSize: "14cqw",
							lineHeight: 1,
							marginTop: "0.3cqw"
						},
						children: "By"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute left-0 right-0 top-[78.5%] -translate-y-1/2 flex justify-center pointer-events-none",
					children: /* @__PURE__ */ jsx("span", {
						className: "font-bold text-[#245235] uppercase",
						style: {
							fontFamily: "'Playfair Display', serif",
							fontSize: "4.5cqw",
							letterSpacing: "0.06em",
							whiteSpace: "nowrap"
						},
						children: "Wedding Cards"
					})
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col justify-center leading-none text-stone-950 select-none py-1",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: `${wordClasses} font-normal text-stone-900 tracking-wide`,
					style: { fontFamily: "'Alex Brush', cursive" },
					children: "Wed"
				}),
				/* @__PURE__ */ jsx("span", {
					className: `${wordClasses} font-normal text-stone-900 tracking-wide ${big ? "pl-2.5 sm:pl-3 -mt-1 sm:-mt-1" : "pl-1.5 sm:pl-2 -mt-1 sm:-mt-1"}`,
					style: { fontFamily: "'Alex Brush', cursive" },
					children: "Knot"
				}),
				/* @__PURE__ */ jsx("span", {
					className: `${wordClasses} font-normal text-stone-900 tracking-wide ${big ? "pl-5 sm:pl-6 -mt-1 sm:-mt-1" : "pl-3 sm:pl-4 -mt-1 sm:-mt-1"}`,
					style: { fontFamily: "'Alex Brush', cursive" },
					children: "Craft"
				})
			]
		})]
	});
};
//#endregion
//#region src/components/Navbar.jsx
var STATIC_NAV_ITEMS = [
	{
		id: "occasions",
		label: "Special occasions",
		heading: "Special Occasions Invitations",
		align: "center",
		width: "w-80",
		options: SPECIAL_OCCASIONS,
		meta: (option) => option.priceRange
	},
	{
		id: "themes",
		label: "Theme Cards",
		heading: "Thematic Invitations",
		align: "center",
		width: "w-72",
		options: THEME_CARDS,
		meta: (option) => option.priceRange
	},
	{
		id: "scrolls",
		label: "Scroll Invitation",
		heading: "Royal Farman Scrolls",
		align: "center",
		width: "w-72",
		options: SCROLL_INVITATIONS,
		meta: (option) => option.priceRange
	},
	{
		id: "digital",
		label: "Digital Invitation",
		heading: "E-Cards & Video Invites",
		align: "right",
		width: "w-64",
		options: DIGITAL_INVITATIONS,
		meta: () => "24h",
		pill: true
	}
];
var Navbar = () => {
	const navigate = useNavigate();
	const { wishlist, cartDistinctCount, searchQuery, setSearchQuery, searchResults, setIsWishlistOpen, setActiveModalItem } = useStore();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isSearchFocused, setIsSearchFocused] = useState(false);
	const [openMenu, setOpenMenu] = useState(null);
	const [openMobileMenu, setOpenMobileMenu] = useState(null);
	const navRef = useRef(null);
	const toggleMenu = (id) => setOpenMenu((prev) => prev === id ? null : id);
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) setOpenMenu(null);
		};
		const handleEscape = (event) => {
			if (event.key === "Escape") setOpenMenu(null);
		};
		document.addEventListener("mousedown", handleOutsideClick);
		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			document.removeEventListener("keydown", handleEscape);
		};
	}, []);
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			setIsSearchFocused(false);
			navigate(`/wedding-cards?search=${encodeURIComponent(searchQuery)}`);
		}
	};
	const handleResultClick = (item) => {
		setIsSearchFocused(false);
		setSearchQuery("");
		if (item.link) navigate(item.link);
		else setActiveModalItem(item);
	};
	return /* @__PURE__ */ jsxs("header", {
		className: "bg-[#E6E6FA]  ",
		children: [/* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
						className: "lg:hidden p-1.5 rounded-lg text-stone-700 hover:bg-stone-200/60 transition-colors",
						"aria-label": "Toggle menu",
						children: isMobileMenuOpen ? /* @__PURE__ */ jsx(CloseIcon, { size: 24 }) : /* @__PURE__ */ jsx(MenuIcon, { size: 24 })
					}), /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "cursor-pointer",
						children: /* @__PURE__ */ jsx(BrandLogo, { size: "lg" })
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center space-x-4 sm:space-x-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsxs("form", {
								onSubmit: handleSearchSubmit,
								className: "relative flex items-center",
								children: [/* @__PURE__ */ jsx("input", {
									type: "text",
									placeholder: "Search...",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									onFocus: () => setIsSearchFocused(true),
									onBlur: () => setTimeout(() => setIsSearchFocused(false), 250),
									className: "w-44 sm:w-60 md:w-72 pl-3.5 pr-9 py-1.5 text-xs sm:text-sm bg-transparent border border-stone-900 rounded-[8px] focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900 placeholder-stone-600 transition-all font-sans"
								}), /* @__PURE__ */ jsx("button", {
									type: "submit",
									"aria-label": "Search",
									className: "absolute right-2.5 text-stone-900 hover:text-amber-800 transition-colors",
									children: /* @__PURE__ */ jsx(SearchIcon, { size: 18 })
								})]
							}), isSearchFocused && searchResults.length > 0 && /* @__PURE__ */ jsxs("div", {
								className: "absolute right-0 mt-2 w-72 sm:w-80 bg-white border border-stone-200 rounded-xl shadow-xl z-50 overflow-hidden text-left",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "p-2.5 bg-stone-50 border-b border-stone-100 text-[11px] font-semibold text-stone-500 uppercase tracking-wider",
									children: [
										"Quick Results (",
										searchResults.length,
										")"
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "max-h-72 overflow-y-auto divide-y divide-stone-100",
									children: searchResults.map((item, idx) => /* @__PURE__ */ jsxs("div", {
										onMouseDown: () => handleResultClick(item),
										className: "p-2.5 hover:bg-amber-50/70 cursor-pointer flex items-center gap-3 transition-colors",
										children: [item.image && /* @__PURE__ */ jsx("img", {
											src: item.image,
											alt: "",
											className: "w-10 h-10 object-cover rounded-md border border-stone-200"
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-xs font-semibold text-stone-800 truncate",
												children: item.title || item.name
											}), /* @__PURE__ */ jsxs("p", {
												className: "text-[10px] text-amber-800",
												children: [
													item.type || item.category || "Invitation",
													" ",
													item.price ? `• ₹${item.price}` : ""
												]
											})]
										})]
									}, idx))
								})]
							})]
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => navigate("/login"),
							className: "text-stone-900 hover:text-amber-800 transition-colors p-1",
							title: "User Account",
							"aria-label": "User Account",
							children: /* @__PURE__ */ jsx(UserIcon, { size: 24 })
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setIsWishlistOpen(true),
							className: "text-stone-900 hover:text-rose-600 transition-colors p-1",
							title: "Wishlist",
							"aria-label": "Wishlist",
							children: /* @__PURE__ */ jsx(HeartIcon, {
								size: 24,
								fill: wishlist.length > 0 ? "#e11d48" : "none",
								className: wishlist.length > 0 ? "text-rose-600" : ""
							})
						}),
						/* @__PURE__ */ jsxs("button", {
							onClick: () => navigate("/cart"),
							className: "relative text-stone-900 hover:text-amber-800 transition-colors p-1",
							title: "Cart",
							"aria-label": "Shopping Cart",
							children: [/* @__PURE__ */ jsx(ShoppingCartIcon, { size: 24 }), /* @__PURE__ */ jsx("span", {
								className: "absolute -top-1 -right-2 bg-black text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center",
								children: cartDistinctCount > 0 ? cartDistinctCount : 1
							})]
						})
					]
				})]
			})
		}), /* @__PURE__ */ jsxs("nav", {
			ref: navRef,
			className: "bg-[#E6E6FA]",
			children: [/* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs("ul", {
					className: "hidden lg:flex items-center justify-center space-x-8 text-[13px] font-bold text-stone-800 py-1.5",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, {
							to: "/",
							onClick: () => setOpenMenu(null),
							className: ({ isActive }) => `transition-colors hover:text-amber-800 ${isActive ? "font-bold text-stone-950" : ""}`,
							children: "Home"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, {
							to: "/wedding-cards",
							onClick: () => setOpenMenu(null),
							className: ({ isActive }) => `transition-colors hover:text-amber-800 ${isActive ? "font-bold text-stone-950" : ""}`,
							children: "Wedding Invitation"
						}) }),
						STATIC_NAV_ITEMS.map((item) => /* @__PURE__ */ jsxs("li", {
							className: "relative",
							children: [/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => toggleMenu(item.id),
								"aria-haspopup": "true",
								"aria-expanded": openMenu === item.id,
								className: `font-bold text-stone-800 transition-colors hover:text-amber-800 cursor-pointer ${openMenu === item.id ? "text-amber-900" : ""}`,
								children: item.label
							}), openMenu === item.id && /* @__PURE__ */ jsxs("div", {
								className: `absolute top-full ${item.align === "right" ? "right-0" : "left-1/2 -translate-x-1/2"} ${item.width} bg-white border border-stone-200 rounded-xl shadow-2xl p-3 space-y-1 z-50 text-left font-normal`,
								children: [/* @__PURE__ */ jsx("div", {
									className: "pb-1.5 border-b border-stone-100 text-[11px] font-bold uppercase tracking-wider text-amber-900",
									children: item.heading
								}), item.options.map((option) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between p-2 text-xs text-stone-800 font-medium",
									children: [/* @__PURE__ */ jsx("span", { children: option.title }), item.pill ? /* @__PURE__ */ jsx("span", {
										className: "text-[10px] bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full font-normal",
										children: item.meta(option)
									}) : /* @__PURE__ */ jsx("span", {
										className: "text-[10px] text-stone-400 font-normal",
										children: item.meta(option)
									})]
								}, option.id))]
							})]
						}, item.id))
					]
				})
			}), isMobileMenuOpen && /* @__PURE__ */ jsxs("div", {
				className: "lg:hidden border-t border-stone-200 bg-white px-4 py-3 space-y-2",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						onClick: () => setIsMobileMenuOpen(false),
						className: "block py-2 text-sm font-semibold text-stone-800 hover:text-amber-800",
						children: "Home"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/wedding-cards",
						onClick: () => setIsMobileMenuOpen(false),
						className: "block py-1.5 text-sm font-semibold text-amber-900",
						children: "Wedding Invitation"
					}),
					STATIC_NAV_ITEMS.map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => setOpenMobileMenu((prev) => prev === item.id ? null : item.id),
						"aria-expanded": openMobileMenu === item.id,
						className: "w-full flex items-center justify-between py-1.5 text-sm font-semibold text-amber-900 cursor-pointer",
						children: [/* @__PURE__ */ jsx("span", { children: item.label }), /* @__PURE__ */ jsx(ChevronDownIcon, {
							size: 16,
							className: openMobileMenu === item.id ? "rotate-180 transition-transform" : "transition-transform"
						})]
					}), openMobileMenu === item.id && /* @__PURE__ */ jsxs("div", {
						className: "ml-1 pl-3 pb-1 border-l-2 border-[#FFE5B4] space-y-1",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[11px] font-bold uppercase tracking-wider text-amber-900",
							children: item.heading
						}), item.options.map((option) => /* @__PURE__ */ jsx("p", {
							className: "text-[12px] font-medium text-stone-700",
							children: option.title
						}, option.id))]
					})] }, `mobile-${item.id}`))
				]
			})]
		})]
	});
};
//#endregion
//#region scripts/_tmpNavCheck.jsx
globalThis.localStorage = {
	store: {},
	getItem(key) {
		return Object.prototype.hasOwnProperty.call(this.store, key) ? this.store[key] : null;
	},
	setItem(key, value) {
		this.store[key] = String(value);
	},
	removeItem(key) {
		delete this.store[key];
	}
};
var render = (path) => renderToStaticMarkup(/* @__PURE__ */ jsx(StoreProvider, { children: /* @__PURE__ */ jsx(MemoryRouter, {
	initialEntries: [path],
	children: /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsx(Route, {
		path: "*",
		element: /* @__PURE__ */ jsx(Navbar, {})
	}) })
}) }));
fs.writeFileSync("ssr-tmp/nav.html", render("/"));
fs.writeFileSync("ssr-tmp/options.txt", [
	...SPECIAL_OCCASIONS.map((o) => `Special occasions  | ${o.title} | ${o.priceRange}`),
	...THEME_CARDS.map((o) => `Theme Cards        | ${o.title} | ${o.priceRange}`),
	...SCROLL_INVITATIONS.map((o) => `Scroll Invitation  | ${o.title} | ${o.priceRange}`),
	...DIGITAL_INVITATIONS.map((o) => `Digital Invitation | ${o.title} | 24h`)
].join("\n"));
console.log("dump written");
//#endregion
export {};
