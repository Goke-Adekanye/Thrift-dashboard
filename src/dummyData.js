import faker from "faker";
import { fDate } from "./utils/formatTime";

export const userData = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3000,
  },
  {
    name: "Mar",
    "Active User": 5000,
  },
  {
    name: "Apr",
    "Active User": 4000,
  },
  {
    name: "May",
    "Active User": 3000,
  },
  {
    name: "Jun",
    "Active User": 2000,
  },
  {
    name: "Jul",
    "Active User": 4000,
  },
  {
    name: "Agu",
    "Active User": 3000,
  },
  {
    name: "Sep",
    "Active User": 4000,
  },
  {
    name: "Oct",
    "Active User": 1000,
  },
  {
    name: "Nov",
    "Active User": 4000,
  },
  {
    name: "Dec",
    "Active User": 3000,
  },
];

export const productData = [
  {
    name: "Jan",
    Sales: 4000,
  },
  {
    name: "Feb",
    Sales: 3000,
  },
  {
    name: "Mar",
    Sales: 5000,
  },
];

export const userRows = [
  {
    id: 1,
    name: "ABC Savings",
    category: "periodical",
    creatorName: "Emeka Susan",
    email: "jon@gmail.com",
    TotalEstates: 9,
    status: "Incomplete",
    phone: "08068357789",
    createdAt: fDate(faker.date.past()),
  },
  {
    id: 2,
    name: "XYZ Savings",
    category: "annual",
    creatorName: "Emeka John",
    email: "jon@gmail.com",
    TotalEstates: 10,
    status: "Completed",
    phone: "08068357789",
    createdAt: fDate(faker.date.past()),
  },
  {
    id: 3,
    name: "LMK Savings",
    category: "product",
    creatorName: "Michael White",
    email: "jon@gmail.com",
    TotalEstates: 1,
    status: "Incomplete",
    phone: "08068357789",
    createdAt: fDate(faker.date.past()),
  },
  {
    id: 4,
    name: "XYZ Savings",
    category: "periodical",
    creatorName: "Smith Walkins",
    email: "jon@gmail.com",
    TotalEstates: 5,
    status: "Incomplete",
    phone: "08068357789",
    createdAt: fDate(faker.date.past()),
  },
  {
    id: 5,
    name: "VWQ Savings",
    category: "product",
    creatorName: "Chioma Chukwu",
    email: "jon@gmail.com",
    TotalEstates: 15,
    status: "Completed",
    phone: "08068357789",
    createdAt: fDate(faker.date.past()),
  },
  {
    id: 6,
    name: "MKO Savings",
    category: "annual",
    creatorName: "Emeka John",
    email: "jon@gmail.com",
    TotalEstates: 10,
    status: "Incomplete",
    phone: "08068357789",
    createdAt: fDate(faker.date.past()),
  },
  {
    id: 7,
    name: "BHQ Savings",
    category: "periodical",
    creatorName: "Emeka John",
    email: "jon@gmail.com",
    TotalEstates: 2,
    status: "Incomplete",
    phone: "08068357789",
    createdAt: fDate(faker.date.past()),
  },
  {
    id: 8,
    name: "LJP Savings",
    category: "periodical",
    creatorName: "Emeka John",
    email: "jon@gmail.com",
    TotalEstates: 12,
    status: "Completed",
    phone: "08068357789",
    createdAt: fDate(faker.date.past()),
  },
];

export const PeriodicalMembers = [
  {
    id: 1,
    name: "Emeka Susan",
    position: 5,
    frequency: 4,
    year: 2021,
    product: "Motocycle",
  },
  {
    id: 2,
    name: "Jane Mena",
    position: 2,
    frequency: 4,
    year: 2021,
    product: "Motocycle",
  },
  {
    id: 3,
    name: "Betty Jones",
    position: 1,
    frequency: 4,
    year: 2021,
    product: "Motocycle",
  },
  {
    id: 4,
    name: "Akinolu Lala",
    position: 4,
    frequency: 4,
    year: 2021,
    product: "Motocycle",
  },
  {
    id: 5,
    name: "Emeka Susan",
    position: 3,
    frequency: 4,
    year: 2021,
    product: "Motocycle",
  },
  {
    id: 6,
    name: "Emeka Susan",
    position: 6,
    frequency: 4,
    year: 2021,
    product: "Motocycle",
  },
];
