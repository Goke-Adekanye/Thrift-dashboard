import faker from "faker";
import { fDateTime } from "./utils/formatTime";

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
    username: "Jon Snow",
    avatar:
      "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_9.jpg",
    email: "jon@gmail.com",
    TotalEstates: 3,
    status: "active",
    phone: "08068357789",
    createdAt: fDateTime(faker.date.past()),
  },
  {
    id: 2,
    username: "Jon Snow",
    avatar:
      "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_1.jpg",
    email: "jon@gmail.com",
    TotalEstates: 0,
    status: "active",
    phone: "08068357789",
    createdAt: fDateTime(faker.date.past()),
  },
  {
    id: 3,
    username: "Jon Snow",
    avatar: "https://zuri-taskxyz.netlify.app/img/about-img.svg",
    email: "jon@gmail.com",
    TotalEstates: 1,
    status: "inactive",
    phone: "08068357789",
    createdAt: fDateTime(faker.date.past()),
  },
  {
    id: 4,
    username: "Jon Snow",
    avatar:
      "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_20.jpg",
    email: "jon@gmail.com",
    TotalEstates: 1,
    status: "active",
    phone: "08068357789",
    createdAt: fDateTime(faker.date.past()),
  },
  {
    id: 5,
    username: "Jon Snow",
    avatar:
      "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_9.jpg",
    email: "jon@gmail.com",
    TotalEstates: 1,
    status: "active",
    phone: "08068357789",
    createdAt: fDateTime(faker.date.past()),
  },
  {
    id: 6,
    username: "Jon Snow",
    avatar:
      "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_1.jpg",
    email: "jon@gmail.com",
    TotalEstates: 1,
    status: "active",
    phone: "08068357789",
    createdAt: fDateTime(faker.date.past()),
  },
  {
    id: 7,
    username: "Jon Snow",
    avatar: "https://zuri-taskxyz.netlify.app/img/about-img.svg",
    email: "jon@gmail.com",
    TotalEstates: 1,
    status: "inactive",
    phone: "08068357789",
    createdAt: fDateTime(faker.date.past()),
  },
  {
    id: 8,
    username: "Jon Snow",
    avatar:
      "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_20.jpg",
    email: "jon@gmail.com",
    TotalEstates: 1,
    status: "active",
    phone: "08068357789",
    createdAt: fDateTime(faker.date.past()),
  },
];

export const productRows = [
  {
    id: 1,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 2,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 3,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 4,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 5,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 6,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 7,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 8,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 9,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 10,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
];
