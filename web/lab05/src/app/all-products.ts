export interface allProducts {
  id: number;
  category: string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  url: string;
  likePressed: boolean;
  likeCount: number;
}

export const allProducts = [
  {
    id: 1, category: "Phone",
    name: 'Apple iPhone 15 Pro Max 256Gb',
    price: 647056,
    description:
      'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
    rating: 9.8,
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 2, category: "Phone",
    name: 'Samsung Galaxy S24 Ultra 5G 12 ГБ/512 ГБ',
    price: 639139,
    description:
      'Galaxy S24 Ultra очень похож на прошлую модель — но с плоским экраном, титановым корпусом и более мощным процессором. А еще в него добавили обширный пакет ИИ-функций, которых нет в других смартфонах.',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hd1/h74/84963524706334.png?format=gallery-medium',
    rating: 8.7,
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-116044201/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 3, category: "Phone",
    name: 'Poco X6 Pro 12 ГБ/512 ГБ',
    price: 170983,
    description:
      'POCO X6 Pro задает новые стандарты производительности и комфорта. Связь 5G обеспечивает непревзойденную скорость при обмене данными. 6,67-дюймовый FHD+ AMOLED дисплей с защитой от синего свечения и частотой обновления 120 Гц обеспечивает превосходные ощущения от просмотра.',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hbe/h45/84940376899614.jpg?format=gallery-medium',
    rating: 9.0,
    url: 'https://kaspi.kz/shop/p/poco-x6-pro-12-gb-512-gb-chernyi-115961596/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 4, category: "Phone",
    name: 'Xiaomi Redmi 12 4G 4 ГБ/128 ГБ',
    price: 59927,
    description:
      'Смартфон Redmi 12 является достойным продолжением линейки Redmi и получил весьма привлекательные характеристики за скромную стоимость',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hd1/h49/81186020917278.jpg?format=gallery-medium',
    rating: 7.6,
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-4-gb-128-gb-chernyi-110700244/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 5, category: "Phone",
    name: 'OPPO A78 8 ГБ/256 ГБ',
    price: 108197,
    description:
      'OPPO A78 AMOLED-дисплей с разрешением Full HD+ SUPERVOOCTM 67 Вт 8 ГБ + 8 ГБ расширенной оперативной памяти',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h07/hfb/83109614714910.jpg?format=gallery-medium',
    rating: 8.3,
    url: 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-zelenyi-112809322/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 6, category: "Laptop",
    name: 'Apple MacBook Air 13',
    price: 430983,
    description:
      'Самый тонкий и лёгкий ноутбук Apple полностью преобразился с появлением чипа Apple M1. Центральный процессор теперь работает до 3,5 раза быстрее.',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h6f/h69/64010685579294.jpg?format=gallery-large',
    rating: 9.4,
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93ru-a-serebristyi-101192123/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 7, category: "Laptop",
    name: 'ASUS TUF Gaming F15',
    price: 413164,
    description:
      'Игровой ноутбук Asus TUF Gaming F15 i5 12500H/ 16ГБ / 512SSD / RTX3050 4ГБ / 15.6 / DOS / (FX507ZC4-HN143)',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h96/hd0/83606464462878.jpg?format=gallery-medium',
    rating: 6.9,
    url: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx507zc4-hn143-chernyi-113186739/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 8, category: "Laptop",
    name: 'Acer Nitro 5',
    price: 387020,
    description:
      'Игровой ноутбук Acer Nitro 5 i5 12500H/ 16ГБ / 512SSD / RTX2050 4ГБ / 15.6 / DOS / 144 HZ (ANV15-51)',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hcd/hc0/85042181013534.jpg?format=gallery-medium',
    rating: 7.8,
    url: 'https://kaspi.kz/shop/p/acer-nitro-5-anv15-51-nh-qnder-002-chernyi-116297801/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 9, category: "Laptop",
    name: 'Lenovo IdeaPad 3',
    price: 267959,
    description:
      'Компактный ноутбук Lenovo IdeaPad 3 оснащен процессором i3 1215U / 8ГБ ОЗУ / 512SSD / Intel UHD Graphics / 15.6 / DOS / (15IAU7 82RK00EWRK)',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h75/h14/65051456962590.jpg?format=gallery-medium',
    rating: 8.1,
    url: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15iau7-82rk00ewrk-seryi-107333284/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 10, category: "Laptop",
    name: 'ASUS ROG Strix Scar 18',
    price: 1499990,
    description:
      'Игровой ноутбук ASUS ROG Strix Scar 18 i9 14900HX / 32ГБ ОЗУ / 1TB SSD / RTX 4080 12 GB / 18.0 / DOS / 240 HZ (90NR0IN2-M000P0)',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h33/h10/84933489721374.jpg?format=gallery-medium',
    rating: 8.9,
    url: 'https://kaspi.kz/shop/p/asus-rog-strix-scar-18-90nr0in2-m000p0-chernyi-115936828/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 11, category: "Pc",
    name: 'Системный блок ITBRO INFINITY 1',
    price: 354000,
    description:
      'Игровой компьютер ITBRO INFINITY / i5 10400f / 32ГБ ОЗУ / 1TB SSD / RTX 2060 Super',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h1a/h5e/69662586732574.jpg?format=gallery-medium',
    rating: 8.0,
    url: 'https://kaspi.kz/shop/p/itbro-infinity-1-chernyi-109187711/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 12, category: "Pc",
    name: 'Системный блок Ucomp Standard 32',
    price: 249800,
    description:
      'Игровой компьютер Ucomp Standard 32 / i5 9400f / 16ГБ ОЗУ / 240 GB SSD / GTX 1050 Ti',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hbd/hc2/64234660790302.jpg?format=gallery-medium',
    rating: 7.1,
    url: 'https://kaspi.kz/shop/p/ucomp-standard-32-chernyi-101119550/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 13, category: "Pc",
    name: 'Системный блок IT-Factory Gaming 17',
    price: 460000,
    description:
      'Игровой компьютер IT-Factory Gaming 17 / i5 12400f / 32ГБ ОЗУ / 1000 GB SSD / RTX 4060',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/ha5/hcc/83701637840926.jpg?format=gallery-medium',
    rating: 8.4,
    url: 'https://kaspi.kz/shop/p/it-factory-gaming-17-chernyi-100976041/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 14, category: "Pc",
    name: 'Системный блок PULSER Advanced 155',
    price: 290990,
    description:
      'Игровой компьютер PULSER Advanced 155 / i5 10400f / 16ГБ ОЗУ / 1000 GB HDD / 240 GB SSD / GTX 1660 Super',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h18/hc4/63933141254174.jpg?format=gallery-medium',
    rating: 9.2,
    url: 'https://kaspi.kz/shop/p/pulser-advanced-155-chernyi-100733459/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 15, category: "Pc",
    name: 'Системный блок Ucomp Gaming 38',
    price: 1_090_000,
    description:
      'Игровой компьютер Ucomp Gaming 38 / i7 9700 / 16ГБ ОЗУ / 1000 GB HDD / 240 GB SSD / GTX 1650',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h33/hec/64027248689182.jpg?format=gallery-medium',
    rating: 5.7,
    url: 'https://kaspi.kz/shop/p/ucomp-gaming-38-chernyi-101119557/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 16, category: "Monitor",
    name: 'Монитор Samsung LS22F350FHIXCI',
    price: 86472,
    description: 'диагональ: 21.5 дюйм; разрешение: 1920x1080; тип ЖК-матрицы: TN; яркость: 200.0 кд/м2; время отклика: 5.0 мс; макс. частота обновления кадров: 60.0 Гц; входы: HDMI, VGA (D-Sub)',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb5/h47/63765907570718.jpg?format=gallery-medium',
    rating: 6.7,
    url: 'https://kaspi.kz/shop/p/samsung-ls22f350fhixci-chernyi-1700652/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 17, category: "Monitor",
    name: 'Монитор Xiaomi Mi Curved Gaming XMMNTWQ34',
    price: 137998,
    description: 'диагональ: 34.0 дюйм; разрешение: 3440x1440; тип ЖК-матрицы: TFT; *VA яркость: 300.0 кд/м2; время отклика: 4.0 мс; макс. частота обновления кадров: 144.0 Гц; входы: HDMI, DisplayPort',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/he5/h32/63858015436830.jpg?format=gallery-medium',
    rating: 8.3,
    url: 'https://kaspi.kz/shop/p/xiaomi-mi-curved-gaming-xmmntwq34-chernyi-100129635/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 18, category: "Monitor",
    name: 'Монитор Sanc M2453',
    price: 39990,
    description: 'диагональ: 23.8 дюйм; разрешение: 1920x1080; тип ЖК-матрицы: IPS; *VA яркость: 250.0 кд/м2; время отклика: 5.0 мс; макс. частота обновления кадров: 75.0 Гц; входы: HDMI, DisplayPort',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h94/h9c/64534448209950.jpg?format=gallery-medium',
    rating: 7.5,
    url: 'https://kaspi.kz/shop/p/sanc-m2453-chernyi-104949523/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 19, category: "Monitor",
    name: 'Монитор Acer Nitro VG240Ybmiix UM.QV0EE.001',
    price: 119990,
    description: 'диагональ: 23.8 дюйм; разрешение: 1920x1080; тип ЖК-матрицы: IPS; *VA яркость: 250.0 кд/м2; время отклика: 5.0 мс; макс. частота обновления кадров: 75.0 Гц; входы: HDMI, DisplayPort',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hce/h3b/63790397456414.jpg?format=gallery-medium',
    rating: 6.9,
    url: 'https://kaspi.kz/shop/p/acer-nitro-vg240ybmiix-um-qv0ee-001-chernyi-krasnyi-1701392/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
  {
    id: 20, category: "Monitor",
    name: 'Монитор LG 24GN60R',
    price: 73930,
    description: 'диагональ: 23.8 дюйм; разрешение: 1920x1080; тип ЖК-матрицы: IPS; *VA яркость: 300.0 кд/м2; время отклика: 1.0 мс; макс. частота обновления кадров: 144.0 Гц; входы: HDMI, DisplayPort',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/he3/hda/65500267380766.jpg?format=gallery-medium',
    rating: 8.6,
    url: 'https://kaspi.kz/shop/p/lg-24gn60r-chernyi-107490032/?c=750000000',
    likePressed: false,
    likeCount: 0
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
