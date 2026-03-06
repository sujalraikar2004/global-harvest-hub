export type ProductCategory = "Whole Spices" | "Powdered Spices";

export interface Product {
  id: number;
  name: string;
  botanicalName: string;
  category: ProductCategory;
  origin: string;
  hsCode: string;
  packaging: string;
  shelfLife: string;
  purity: string;
  moisture: string;
  availability: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cumin Seeds",
    botanicalName: "Cuminum cyminum",
    category: "Whole Spices",
    origin: "India (Rajasthan, Gujarat)",
    hsCode: "090931",
    packaging: "25 kg / 50 kg PP Bags",
    shelfLife: "24 Months",
    purity: "≥ 99%",
    moisture: "≤ 8%",
    availability: "Year-round",
    image: "public/cumin1_1000x.webp",
  },
  {
    id: 2,
    name: "Coriander Seeds",
    botanicalName: "Coriandrum sativum",
    category: "Whole Spices",
    origin: "India (Rajasthan, Madhya Pradesh)",
    hsCode: "090921",
    packaging: "25 kg / 50 kg PP Bags",
    shelfLife: "24 Months",
    purity: "≥ 98%",
    moisture: "≤ 9%",
    availability: "Year-round",
    image: "public/coriender.webp",
  },
  {
    id: 3,
    name: "Turmeric Whole",
    botanicalName: "Curcuma longa",
    category: "Whole Spices",
    origin: "India (Andhra Pradesh, Tamil Nadu)",
    hsCode: "091030",
    packaging: "25 kg / 50 kg PP Bags",
    shelfLife: "24 Months",
    purity: "≥ 98%",
    moisture: "≤ 10%",
    availability: "Year-round",
    image: "public/Turmeric-Whole.jpg",
  },
  {
    id: 4,
    name: "Turmeric Powder",
    botanicalName: "Curcuma longa",
    category: "Powdered Spices",
    origin: "India (Andhra Pradesh, Tamil Nadu)",
    hsCode: "091030",
    packaging: "25 kg / 50 kg PP Bags",
    shelfLife: "24 Months",
    purity: "≥ 98%",
    moisture: "≤ 10%",
    availability: "Year-round",
    image: "public/turmeric_powder.jpg",
  },
  {
    id: 5,
    name: "Paprika Powder",
    botanicalName: "Capsicum annuum",
    category: "Powdered Spices",
    origin: "India (Andhra Pradesh, Karnataka)",
    hsCode: "090422",
    packaging: "25 kg / 50 kg PP Bags",
    shelfLife: "18–24 Months",
    purity: "≥ 98%",
    moisture: "≤ 11%",
    availability: "Year-round",
    image: "public/PaprikaPowder.webp",
  },
  {
    id: 6,
    name: "Black Pepper",
    botanicalName: "Piper nigrum",
    category: "Whole Spices",
    origin: "India (Kerala, Karnataka)",
    hsCode: "090411",
    packaging: "25 kg / 50 kg PP Bags",
    shelfLife: "24 Months",
    purity: "≥ 99%",
    moisture: "≤ 12%",
    availability: "Year-round",
    image: "public/iStock-469858939.jpg",
  },
  {
    id: 7,
    name: "Cinnamon",
    botanicalName: "Cinnamomum verum",
    category: "Whole Spices",
    origin: "India (Kerala, Tamil Nadu)",
    hsCode: "090611",
    packaging: "25 kg / 50 kg PP Bags",
    shelfLife: "24 Months",
    purity: "≥ 98%",
    moisture: "≤ 12%",
    availability: "Year-round",
    image: "public/Cinnamon.jpg",
  },
  {
    id: 8,
    name: "Dry Ginger",
    botanicalName: "Zingiber officinale",
    category: "Whole Spices",
    origin: "India (Kerala, Karnataka)",
    hsCode: "091011",
    packaging: "25 kg / 50 kg PP Bags",
    shelfLife: "24 Months",
    purity: "≥ 98%",
    moisture: "≤ 10%",
    availability: "Year-round",
    image: "public/DryGinger.webp",
  },
  {
    id: 9,
    name: "Mustard Seeds",
    botanicalName: "Brassica juncea",
    category: "Whole Spices",
    origin: "India (Rajasthan, Madhya Pradesh)",
    hsCode: "120750",
    packaging: "25 kg / 50 kg PP Bags",
    shelfLife: "18–24 Months",
    purity: "≥ 99%",
    moisture: "≤ 8%",
    availability: "Year-round",
    image: "public/MustardSeeds.jpeg",
  },
  {
    id: 10,
    name: "Dry Red Chili",
    botanicalName: "Capsicum annuum",
    category: "Whole Spices",
    origin: "India (Andhra Pradesh, Karnataka)",
    hsCode: "090421",
    packaging: "25 kg / 50 kg PP Bags",
    shelfLife: "18–24 Months",
    purity: "≥ 98%",
    moisture: "≤ 12%",
    availability: "Year-round",
    image: "public/Dry Red Chili.jpg",
  },
];

export const categories: ProductCategory[] = [
  "Whole Spices",
  "Powdered Spices",
];
