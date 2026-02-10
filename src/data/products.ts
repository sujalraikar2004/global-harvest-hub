import tomatoImg from "@/assets/tomato.jpg";
import onionImg from "@/assets/onion.jpg";
import potatoImg from "@/assets/potato.jpg";
import greenChilliImg from "@/assets/green-chilli.jpg";
import carrotImg from "@/assets/carrot.jpg";
import cabbageImg from "@/assets/cabbage.jpg";
import okraImg from "@/assets/okra.jpg";
import beansImg from "@/assets/beans.jpg";

export type ProductCategory = "Fresh Vegetables" | "Organic Vegetables" | "Seasonal Vegetables";

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  origin: string;
  packaging: string;
  shelfLife: string;
  availability: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Red Tomato",
    category: "Fresh Vegetables",
    origin: "India (Maharashtra, Karnataka)",
    packaging: "5 kg / 10 kg Corrugated Carton",
    shelfLife: "7–10 Days",
    availability: "Year-round",
    image: tomatoImg,
  },
  {
    id: 2,
    name: "Red Onion",
    category: "Fresh Vegetables",
    origin: "India (Nashik, Rajasthan)",
    packaging: "25 kg / 50 kg Mesh Bags",
    shelfLife: "30–45 Days",
    availability: "Year-round",
    image: onionImg,
  },
  {
    id: 3,
    name: "Fresh Potato",
    category: "Fresh Vegetables",
    origin: "India (Uttar Pradesh, Gujarat)",
    packaging: "25 kg / 50 kg PP Bags",
    shelfLife: "60–90 Days",
    availability: "Year-round",
    image: potatoImg,
  },
  {
    id: 4,
    name: "Green Chilli",
    category: "Fresh Vegetables",
    origin: "India (Andhra Pradesh, Tamil Nadu)",
    packaging: "5 kg Corrugated Carton",
    shelfLife: "5–7 Days",
    availability: "Year-round",
    image: greenChilliImg,
  },
  {
    id: 5,
    name: "Organic Carrot",
    category: "Organic Vegetables",
    origin: "India (Ooty, Himachal Pradesh)",
    packaging: "10 kg Carton Box",
    shelfLife: "14–21 Days",
    availability: "October – March",
    image: carrotImg,
  },
  {
    id: 6,
    name: "Fresh Cabbage",
    category: "Fresh Vegetables",
    origin: "India (Punjab, West Bengal)",
    packaging: "20 kg Wooden Crate",
    shelfLife: "14–21 Days",
    availability: "Year-round",
    image: cabbageImg,
  },
  {
    id: 7,
    name: "Lady Finger (Okra)",
    category: "Seasonal Vegetables",
    origin: "India (Gujarat, Madhya Pradesh)",
    packaging: "5 kg Ventilated Carton",
    shelfLife: "3–5 Days",
    availability: "April – September",
    image: okraImg,
  },
  {
    id: 8,
    name: "French Beans",
    category: "Organic Vegetables",
    origin: "India (Karnataka, Kerala)",
    packaging: "5 kg Carton Box",
    shelfLife: "5–7 Days",
    availability: "Year-round",
    image: beansImg,
  },
  {
    id: 9,
    name: "Capsicum (Bell Pepper)",
    category: "Fresh Vegetables",
    origin: "India (Bangalore, Pune)",
    packaging: "5 kg Carton Box",
    shelfLife: "7–10 Days",
    availability: "Year-round",
    image: greenChilliImg,
  },
  {
    id: 10,
    name: "Organic Cauliflower",
    category: "Organic Vegetables",
    origin: "India (Punjab, Haryana)",
    packaging: "15 kg Crate",
    shelfLife: "7–10 Days",
    availability: "November – March",
    image: cabbageImg,
  },
  {
    id: 11,
    name: "Drumstick (Moringa)",
    category: "Seasonal Vegetables",
    origin: "India (Tamil Nadu, Andhra Pradesh)",
    packaging: "10 kg Bundle Pack",
    shelfLife: "7–10 Days",
    availability: "March – July",
    image: beansImg,
  },
  {
    id: 12,
    name: "Bitter Gourd",
    category: "Seasonal Vegetables",
    origin: "India (Uttar Pradesh, Bihar)",
    packaging: "10 kg Carton Box",
    shelfLife: "5–7 Days",
    availability: "April – August",
    image: okraImg,
  },
  {
    id: 13,
    name: "Fresh Cucumber",
    category: "Fresh Vegetables",
    origin: "India (Maharashtra, Gujarat)",
    packaging: "10 kg Carton Box",
    shelfLife: "5–7 Days",
    availability: "Year-round",
    image: beansImg,
  },
  {
    id: 14,
    name: "Baby Corn",
    category: "Seasonal Vegetables",
    origin: "India (Karnataka, Tamil Nadu)",
    packaging: "5 kg Ventilated Box",
    shelfLife: "3–5 Days",
    availability: "October – March",
    image: okraImg,
  },
  {
    id: 15,
    name: "Fresh Ginger",
    category: "Fresh Vegetables",
    origin: "India (Kerala, Karnataka)",
    packaging: "25 kg PP Bags",
    shelfLife: "30–45 Days",
    availability: "Year-round",
    image: carrotImg,
  },
  {
    id: 16,
    name: "Fresh Garlic",
    category: "Fresh Vegetables",
    origin: "India (Gujarat, Madhya Pradesh)",
    packaging: "20 kg Mesh Bags",
    shelfLife: "90–120 Days",
    availability: "Year-round",
    image: onionImg,
  },
  {
    id: 17,
    name: "Organic Spinach",
    category: "Organic Vegetables",
    origin: "India (Punjab, Haryana)",
    packaging: "5 kg Carton Box",
    shelfLife: "3–5 Days",
    availability: "October – March",
    image: cabbageImg,
  },
  {
    id: 18,
    name: "Fresh Pumpkin",
    category: "Seasonal Vegetables",
    origin: "India (Uttar Pradesh, Maharashtra)",
    packaging: "25 kg Wooden Crate",
    shelfLife: "30–60 Days",
    availability: "September – March",
    image: potatoImg,
  },
  {
    id: 19,
    name: "Fresh Eggplant (Brinjal)",
    category: "Fresh Vegetables",
    origin: "India (West Bengal, Odisha)",
    packaging: "10 kg Carton Box",
    shelfLife: "7–10 Days",
    availability: "Year-round",
    image: okraImg,
  },
  {
    id: 20,
    name: "Organic Beetroot",
    category: "Organic Vegetables",
    origin: "India (Tamil Nadu, Karnataka)",
    packaging: "10 kg Carton Box",
    shelfLife: "14–21 Days",
    availability: "Year-round",
    image: carrotImg,
  },
];

export const categories: ProductCategory[] = [
  "Fresh Vegetables",
  "Organic Vegetables",
  "Seasonal Vegetables",
];
