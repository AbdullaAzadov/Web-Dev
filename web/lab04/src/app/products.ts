export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro Max 256Gb',
    price: 647056,
    description:
      'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
    rating: 9.8,
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra 5G 12 ГБ/512 ГБ',
    price: 639139,
    description:
      'Galaxy S24 Ultra очень похож на прошлую модель — но с плоским экраном, титановым корпусом и более мощным процессором. А еще в него добавили обширный пакет ИИ-функций, которых нет в других смартфонах.',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hd1/h74/84963524706334.png?format=gallery-medium',
    rating: 8.7,
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-116044201/?c=750000000',
  },
  {
    id: 3,
    name: 'Poco X6 Pro 12 ГБ/512 ГБ',
    price: 170983,
    description:
      'POCO X6 Pro задает новые стандарты производительности и комфорта. Связь 5G обеспечивает непревзойденную скорость при обмене данными. 6,67-дюймовый FHD+ AMOLED дисплей с защитой от синего свечения и частотой обновления 120 Гц обеспечивает превосходные ощущения от просмотра.',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hbe/h45/84940376899614.jpg?format=gallery-medium',
    rating: 9.0,
    url: 'https://kaspi.kz/shop/p/poco-x6-pro-12-gb-512-gb-chernyi-115961596/?c=750000000',
  },
  {
    id: 4,
    name: 'Xiaomi Redmi 12 4G 4 ГБ/128 ГБ',
    price: 59927,
    description:
      'Смартфон Redmi 12 является достойным продолжением линейки Redmi и получил весьма привлекательные характеристики за скромную стоимость',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hd1/h49/81186020917278.jpg?format=gallery-medium',
    rating: 7.6,
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-4-gb-128-gb-chernyi-110700244/?c=750000000',
  },
  {
    id: 5,
    name: 'OPPO A78 8 ГБ/256 ГБ',
    price: 108197,
    description:
      'OPPO A78 AMOLED-дисплей с разрешением Full HD+ SUPERVOOCTM 67 Вт 8 ГБ + 8 ГБ расширенной оперативной памяти',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h07/hfb/83109614714910.jpg?format=gallery-medium',
    rating: 8.3,
    url: 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-zelenyi-112809322/?c=750000000',
  },
  {
    id: 6,
    name: 'Apple MacBook Air 13',
    price: 430983,
    description:
      'Самый тонкий и лёгкий ноутбук Apple полностью преобразился с появлением чипа Apple M1. Центральный процессор теперь работает до 3,5 раза быстрее.',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h6f/h69/64010685579294.jpg?format=gallery-large',
    rating: 9.4,
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93ru-a-serebristyi-101192123/?c=750000000',
  },
  {
    id: 7,
    name: 'ASUS TUF Gaming F15',
    price: 413164,
    description:
      'Игровой ноутбук Asus TUF Gaming F15 i5 12500H/ 16ГБ / 512SSD / RTX3050 4ГБ / 15.6 / DOS / (FX507ZC4-HN143)',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h96/hd0/83606464462878.jpg?format=gallery-medium',
    rating: 6.9,
    url: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx507zc4-hn143-chernyi-113186739/?c=750000000',
  },
  {
    id: 8,
    name: 'Acer Nitro 5',
    price: 387020,
    description:
      'Игровой ноутбук Acer Nitro 5 i5 12500H/ 16ГБ / 512SSD / RTX2050 4ГБ / 15.6 / DOS / 144 HZ (ANV15-51)',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hcd/hc0/85042181013534.jpg?format=gallery-medium',
    rating: 7.8,
    url: 'https://kaspi.kz/shop/p/acer-nitro-5-anv15-51-nh-qnder-002-chernyi-116297801/?c=750000000',
  },
  {
    id: 9,
    name: 'Lenovo IdeaPad 3',
    price: 267959,
    description:
      'Компактный ноутбук Lenovo IdeaPad 3 оснащен процессором i3 1215U / 8ГБ ОЗУ / 512SSD / Intel UHD Graphics / 15.6 / DOS / (15IAU7 82RK00EWRK)',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h75/h14/65051456962590.jpg?format=gallery-medium',
    rating: 8.1,
    url: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15iau7-82rk00ewrk-seryi-107333284/?c=750000000',
  },
  {
    id: 10,
    name: 'ASUS ROG Strix Scar 18',
    price: 1499990,
    description:
      'Игровой ноутбук ASUS ROG Strix Scar 18 i9 14900HX / 32ГБ ОЗУ / 1TB SSD / RTX 4080 12 GB / 18.0 / DOS / 240 HZ (90NR0IN2-M000P0)',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h33/h10/84933489721374.jpg?format=gallery-medium',
    rating: 8.9,
    url: 'https://kaspi.kz/shop/p/asus-rog-strix-scar-18-90nr0in2-m000p0-chernyi-115936828/?c=750000000',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
