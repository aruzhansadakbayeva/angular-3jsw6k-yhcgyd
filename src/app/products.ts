
import { Url } from 'url';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  rating: number;
  image: Url;
  link: Url;
}
export const products = [

{
   id: 1,
    name: 'GoPro HERO7 Black',
    price: 249.99,
    description: 'Waterproof Digital Action Camera with Touch Screen 4K HD Video 12MP Photos Live Streaming Stabilization',
    rating:3.8,
    image:'https://images-na.ssl-images-amazon.com/images/I/71TcGv2ZpbL._AC_SL1500_.jpg',
    link:'https://www.amazon.com/GoPro-HERO7-Black-Battery-Commerce/dp/B08MCJK2TC/ref=sr_1_3?dchild=1&keywords=gopro&qid=1614336058&sr=8-3'
    

  },
  {
    id: 2,
    name: 'GoPro HERO9 Black',
    price: 449.00,
    description: 'Waterproof Action Camera with Front LCD and Touch Rear Screens, 5K Ultra HD Video, 20MP Photos, 1080p Live Streaming, Webcam, Stabilization',
    rating: 4.9,
    image:'https://images-na.ssl-images-amazon.com/images/I/71f8wMHfklL._AC_SL1500_.jpg',
    link:'https://www.amazon.com/GoPro-HERO9-Black-Waterproof-Stabilization/dp/B08DK5ZH44/ref=sr_1_4?dchild=1&keywords=gopro&qid=1614337473&sr=8-4'

  },
  {
    id: 3,
    name: 'GoPro HERO8 Black',
    price: 259.99,
    description: '4K Waterproof Action Camera - Black ',
    rating: 4.9,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71UAtd5yS5L._AC_SL1500_.jpg',
    link:'https://www.amazon.com/GoPro-HERO8-Waterproof-Action-Camera/dp/B083M84QH7/ref=sr_1_5?dchild=1&keywords=gopro&qid=1614337473&sr=8-5'
  },
  {
    id:4,
    name: 'GoPro HERO6 Black',
    price: 189.99,
    description: 'Waterproof Digital Action Camera with Touch Screen 4K HD Video 12MP Photos Live Streaming Stabilization',
    rating:4.0,
    link: 'https://www.amazon.com/GoPro-HERO6-Black-Battery-Commerce/dp/B08MFRGHNZ/ref=sr_1_7?dchild=1&keywords=gopro&qid=1614337473&sr=8-7',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71bpRkK-TvL._AC_SL1500_.jpg'
  },
  {
    id:5,
    name:'GoPro MAX',
    price: 389.99,
    description: 'Waterproof 360 + Traditional Camera with Touch Screen Spherical 5.6K30 HD Video 16.6MP 360 Photos 1080p Live Streaming Stabilization',
    rating:4.6,
    link: 'https://www.amazon.com/GoPro-MAX-Waterproof-Traditional-Stabilization/dp/B087WRYKFP/ref=sr_1_8?dchild=1&keywords=gopro&qid=1614337473&sr=8-8',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71Q13ucyIJL._AC_SL1500_.jpg'
  },
  {
    id:6,
    name:'GoPro HERO7 Silver',
    price:209.99,
    description: 'PNY Elite-X 32GB microSDHC Card Adapter-UHS-I, U3 - Waterproof Digital Action Camera with Touch Screen 4K HD Video 10MP Photos Live Streaming Stabilization',
    rating:4.8,
    link:'https://www.amazon.com/GoPro-Silver-Elite-X-microSDHC-Adapter-UHS-I/dp/B07XZK2S9C/ref=sr_1_12?dchild=1&keywords=gopro&qid=1614338467&sr=8-12',
    image:'https://images-na.ssl-images-amazon.com/images/I/31vWRVl2FIL._AC_.jpg'
  },
  {
    id:7,
    name:'GoPro HERO8 Black Bundle',
    price: 349.00,
    description: 'Includes HERO8 Black Camera, Shorty, Head Strap, 32GB SD Card, and 2 Rechargeable Batteries',
    rating: 4.7,
    link:'https://www.amazon.com/GoPro-HERO7-Black-Battery-Commerce/dp/B08MCJK2TC/ref=sr_1_3?dchild=1&keywords=gopro&qid=1614336058&sr=8-3',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61wKuvG72KL._AC_SL1500_.jpg'
  },
  {
    id:8,
    name:'GoPro Hero5 Black',
    price:334.90,
    description: 'Waterproof Digital Action Camera for Travel with Touch Screen 4K HD Video 12MP Photos',
    rating: 4.8,
    link: 'https://www.amazon.com/GoPro-HERO8-Black-Holiday-Bundle/dp/B07XP44MTV/ref=sr_1_20?dchild=1&keywords=gopro&qid=1614337473&sr=8-20',
    image:'https://images-na.ssl-images-amazon.com/images/I/51ofW0MgHaL._AC_SL1000_.jpg'
  },
  {
    id:9,
    name:'GoPro Hero8 Black Action Camera with GoPro Holiday Accessory Bundle',
    price: 369.00,
    description: 'Two 32gb U3 Memory Cards, Shorty Grip, Head Strap, and 2 Rechargeable Batteries',
    rating: 3.9,
    link:'https://www.amazon.com/Hero8-Black-Action-Holiday-Accessory/dp/B081VT9FWP/ref=sr_1_51?dchild=1&keywords=gopro&qid=1614338470&sr=8-51',
    image:'https://images-na.ssl-images-amazon.com/images/I/71jULRsz43L._AC_SL1500_.jpg'
  },
  {
    id:10,
    name:'GoPro Hero4 Black',
    price: 147.00,
    description: 'Professional 4k30, 2.7k60 and 1080P120 video, 720P240 video for super slow motion playback and 12MP photos at up to 30 frames per second',
    rating: 3.7,
    link:'https://www.amazon.com/GoPro-CHDHX-401-HERO4-BLACK/dp/B00NIYNUF2/ref=sr_1_45?dchild=1&keywords=gopro&qid=1614338470&sr=8-45',
    image:'https://images-na.ssl-images-amazon.com/images/I/51xtoYZlZZL._AC_.jpg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/