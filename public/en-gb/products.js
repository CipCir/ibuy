var ProdSkin = {
  TestMode: false,
  placeholder_search: "Fruit juice",
  hasVoucher: true,
  hasSort: true,
  hasFilters: true,
  RandomizeProds_ForNoSort: false,
  allowEmptyCart: true,
  allowNegativeVoucher: false,
  voucher: 50,
  show_search: true,
  show_bk_to_top: true,
  show_footer_text: true,
  show_footer_image: true,
  show_banner: true,
  ratingMaxVal: 5,
  productView: "Grid" //"Grid" "List",
};
var ProdFilters = {
  FilterRatingLabel: "Avg. Customer Review",
  FilterBrandLabel: "Brand",
  FilterPriceLabel: "Price",
  FilterLbl1: "Filter >>",
  FilterLbl2: "<< Back",
  brand: ["bai", "Dole", "Noni Juice", "Primor", "WTRMLN"],
  price: [
    {
      lbl: "0 - 10",
      val: "0#10.99"
    },
    {
      lbl: "11 - 20",
      val: "11#20.99"
    },
    {
      lbl: "21 - 30",
      val: "21#30.99"
    },
    {
      lbl: "31 +",
      val: "31#100"
    }
  ]
};
var prodDB = {
  prodMediaPath:
    "http://media.ipsosinteractive.com/deploy/products/iBuy_v2/media/Cell1/",
  SponsoredProd: {
    id: 2,
    bannerCartImg: "ProdSponsorCart.jpg",
    bannerDetailsImg: ["banner_bottom_mobile.jpg", "banner_bottom_pc.jpg"]
  }
};
var ProductsArr = [
  {
    id: 0,
    brand: "Primor",
    lbl: "Natural Fruit Puree (Passion Fruit)",
    imgArr: [
      {
        type: "img",
        imgSrc: "/Product1/product-image-1.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product1/product-image-2.jpg"
      }
    ],
    detailsImgArr: [
      "/Product1/about-the-product-mobile.jpg",
      "/Product1/about-the-product-pc.jpg"
    ],
    hasBnrCartImg: true,
    hasBnrDetailsImg: true,
    by: "by Primor",
    rating: 4.5,
    reviews: "14",
    price: "25.00",
    addInf1: null,
    addInf2: null,
    addInf3:
      "<div align='center' style='color:#555;font-size:13px;'>Size: <b>NET 64 fl oz (1.89 l)</b></div>"
  },
  {
    id: 1,
    brand: "WTRMLN",
    lbl:
      "WTRMLNSLCE Original, 16 Ounce Bottle (Pack of 6) Watermelon Water Sports Drink with Electrolytes",
    imgArr: [
      {
        type: "img",
        imgSrc: "/Product2/product-image-1.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product2/product-image-2.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product2/product-image-3.jpg"
      },
      {
        type: "video",
        imgSrc: "/Product2/video_thumbnail.jpg",
        videoSrc:
          "http://media.ipsosinteractive.com/sandbox/DragoK/iBuyV2/img/Product2/video.mp4"
      }
    ],
    detailsImgArr: [
      "/Product2/about-the-product-mobile.jpg",
      "/Product2/about-the-product-pc.jpg"
    ],
    hasBnrCartImg: true,
    hasBnrDetailsImg: true,
    by: "by WTRMLN",
    rating: 3.5,
    reviews: "37",
    price: "17.99",
    addInf1: null,
    addInf2: null,
    addInf3:
      "<div align='center' style='color:#555;font-size:13px;'>Size: <b>NET 16 fl oz (473 ml)</b></div>"
  },
  {
    id: 2,
    brand: "Dole",
    lbl:
      "Dole Sliced Yellow Cling Peaches in 100% Fruit Juice, 23.5 Ounce Jar, All Natural Fruit, Sliced Cling Peaches Packed in Fruit Juice",
    imgArr: [
      {
        type: "img",
        imgSrc: "/Product3/product-image-1.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product3/product-image-2.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product3/product-image-3.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product3/product-image-4.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product3/product-image-5.jpg"
      },
      {
        type: "video",
        imgSrc: "/Product3/video_thumbnail.jpg",
        videoSrc:
          "http://media.ipsosinteractive.com/sandbox/DragoK/iBuyV2/img/Product3/video.mp4"
      }
    ],
    detailsImgArr: [
      "/Product3/about-the-product-mobile.jpg",
      "/Product3/about-the-product-pc.jpg"
    ],
    hasBnrCartImg: false,
    hasBnrDetailsImg: false,
    by: "by Dole",
    rating: 4.5,
    reviews: "151",
    price: "2.68",
    addInf1: null,
    addInf2: null,
    addInf3:
      "<div align='center' style='color:#555;font-size:13px;'>Size: <b>NET 23.5 oz (665g)</b></div>"
  },
  {
    id: 3,
    brand: "Noni Juice",
    lbl:
      "Virgin Noni Juice - 100% Pure Organic Hawaiian Noni Juice - 32oz Glass Bottle",
    imgArr: [
      {
        type: "img",
        imgSrc: "/Product4/product-image-1.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product4/product-image-2.jpg"
      }
    ],
    detailsImgArr: [
      "/Product4/about-the-product-mobile.jpg",
      "/Product4/about-the-product-pc.jpg"
    ],
    hasBnrCartImg: true,
    hasBnrDetailsImg: true,
    by: "by Noni Juice",
    rating: 4,
    reviews: "98",
    price: "32",
    addInf1: null,
    addInf2: null,
    addInf3:
      "<div align='center' style='color:#555;font-size:13px;'>Size: <b>NET 32 fl oz (960 ml)</b></div>"
  },
  {
    id: 4,
    brand: "Fruit Shoot",
    lbl: "Robinsons Fruit Shoot Blackcurrant & Apple No Added Sugar 8 x 200 ml",
    imgArr: [
      {
        type: "img",
        imgSrc: "/Product5/product-image-1.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product5/product-image-2.jpg"
      },
      {
        type: "video",
        imgSrc: "/Product5/video_thumbnail.jpg",
        videoSrc:
          "http://media.ipsosinteractive.com/sandbox/DragoK/iBuyV2/img/Product5/video.mp4"
      }
    ],
    detailsImgArr: [
      "/Product5/about-the-product-mobile.jpg",
      "/Product5/about-the-product-pc.jpg"
    ],
    hasBnrCartImg: true,
    hasBnrDetailsImg: true,
    by: "by Fruit Shoot",
    rating: 3.5,
    reviews: "4",
    price: "14.25",
    addInf1: null,
    addInf2: null,
    addInf3:
      "<div align='center' style='color:#555;font-size:13px;'>Size: <b>NET 8 x 6.8 fl oz (8 x 200 ml)</b></div>"
  },
  {
    id: 5,
    brand: "WTRMLN",
    lbl:
      "WTRMLN WTR + Cucumber Cold Pressed Juiced Watermelon, Cucumber BLND, 12 Oz Bottles (Pack of 6)",
    imgArr: [
      {
        type: "img",
        imgSrc: "/Product6/product-image-1.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product6/product-image-2.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product6/product-image-3.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product6/product-image-4.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product6/product-image-5.jpg"
      }
    ],
    detailsImgArr: [
      "/Product6/about-the-product-mobile.jpg",
      "/Product6/about-the-product-pc.jpg"
    ],
    hasBnrCartImg: true,
    hasBnrDetailsImg: true,
    by: "by WTRMLN",
    rating: 3.5,
    reviews: "3",
    price: "34.99",
    addInf1: null,
    addInf2: null,
    addInf3:
      "<div align='center' style='color:#555;font-size:13px;'>Size: <b>NET 12 fl oz (355 ml)</b></div>"
  },
  {
    id: 6,
    brand: "DrinkFit",
    lbl:
      "DrinkFit Blender Smoothie Mix - Concentrated Real Fruit Puree - Low Calorie Stevia - Vegan Kosher, Gluten Soy Lactose Fat Free - 64 oz",
    imgArr: [
      {
        type: "img",
        imgSrc: "/Product7/product-image-1.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product7/product-image-2.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product7/product-image-3.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product7/product-image-4.jpg"
      }
    ],
    detailsImgArr: [
      "/Product7/about-the-product-mobile.jpg",
      "/Product7/about-the-product-pc.jpg"
    ],
    hasBnrCartImg: true,
    hasBnrDetailsImg: true,
    by: "by DrinkFit",
    rating: 5,
    reviews: "1",
    price: "24.99",
    addInf1: null,
    addInf2: null,
    addInf3:
      "<div align='center' style='color:#555;font-size:13px;'>Size: <b>NET 64 fl oz (1.89 l)</b></div>"
  },
  {
    id: 7,
    brand: "Noni Juice",
    lbl: "Wailua River Noni Juice 100% Organic Hawaiian",
    imgArr: [
      {
        type: "img",
        imgSrc: "/Product8/product-image-1.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product8/product-image-2.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product8/product-image-3.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product8/product-image-4.jpg"
      }
    ],
    detailsImgArr: [
      "/Product8/about-the-product-mobile.jpg",
      "/Product8/about-the-product-pc.jpg"
    ],
    hasBnrCartImg: true,
    hasBnrDetailsImg: true,
    by: "by Noni Juice",
    rating: 3,
    reviews: "3",
    price: "50.00",
    addInf1: null,
    addInf2: null,
    addInf3:
      "<div align='center' style='color:#555;font-size:13px;'>Size: <b>NET 32 fl oz (960 ml)</b></div>"
  },
  {
    id: 8,
    brand: "Dole",
    lbl:
      "Dole Mandarin Oranges in 100% Fruit Juice, 23.5 Ounce Jar, All Natural Fruit, Mandarin Orange Segments Packed in Fruit Juice",
    imgArr: [
      {
        type: "img",
        imgSrc: "/Product9/product-image-1.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product9/product-image-2.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product9/product-image-3.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product9/product-image-4.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product9/product-image-5.jpg"
      }
    ],
    detailsImgArr: [
      "/Product9/about-the-product-mobile.jpg",
      "/Product9/about-the-product-pc.jpg"
    ],
    hasBnrCartImg: true,
    hasBnrDetailsImg: true,
    by: "by Dole",
    rating: 4.5,
    reviews: "67",
    price: "2.68",
    addInf1: null,
    addInf2: null,
    addInf3:
      "<div align='center' style='color:#555;font-size:13px;'>Size: <b>NET 23.5 oz (665g)</b></div>"
  },
  {
    id: 9,
    brand: "bai",
    lbl:
      "Bai Sumatra Dragonfruit, Antioxidant Infused, Flavored Water Drink, 18 Fluid Ounce Bottles, 6 count",
    imgArr: [
      {
        type: "img",
        imgSrc: "/Product10/product-image-1.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product10/product-image-2.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product10/product-image-3.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product10/product-image-4.jpg"
      },
      {
        type: "img",
        imgSrc: "/Product10/product-image-5.jpg"
      },
      {
        type: "video",
        imgSrc: "/Product10/video_thumbnail.jpg",
        videoSrc:
          "http://media.ipsosinteractive.com/sandbox/DragoK/iBuyV2/img/Product10/video.mp4"
      }
    ],
    detailsImgArr: [
      "/Product10/about-the-product-mobile.jpg",
      "/Product10/about-the-product-pc.jpg"
    ],
    hasBnrCartImg: true,
    hasBnrDetailsImg: true,
    by: "by bai",
    rating: 4,
    reviews: "54",
    price: "11.55",
    addInf1: null,
    addInf2: null,
    addInf3:
      "<div align='center' style='color:#555;font-size:13px;'>Size: <b>NET 6 x 18 fl oz (6 x 530 ml)</b></div>"
  }
];
