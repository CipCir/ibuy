var ProdFilters = {
  FilterRatingLabel: "Avg. Customer Review",
  FilterBrandLabel: "Brand",
  FilterPriceLabel: "Price",
  FilterLbl1: "Filter >>",
  FilterLbl2: "<< Back",
  brand: ["Rexona", "Nivea", "Tom's"],
  price: [
    { lbl: "Under 5", val: "0#5" },
    { lbl: "5 - 10.50", val: "5#10.50" },
    { lbl: "10.50 - 15", val: "10.50#15" }
  ]
};
var prodDB = {
  prodMediaPath:
    "https://cdn.ipsosinteractive.com/deploy/products/iBuy_v2/img/",
  SponsoredProd: {
    id: 8,
    bannerCartImg: "ProdSponorCart.jpg",
    bannerDetailsImg: ["banner_bottom_mobile.jpg", "banner_bottom_pc.jpg"]
  }
};
var ProductsArr = [
  {
    id: 0,
    brand: "Rexona",
    lbl: "Rexona Women", // Biorythm Ultra Dry Deo Stick Anti-Perspirant 48h 40 ml",

    imgArr: [
      { type: "img", imgSrc: "R0.jpg" },
      { type: "img", imgSrc: "R1.jpg" },
      { type: "img", imgSrc: "R2.jpg" },
      { type: "img", imgSrc: "R2.jpg" },

      {
        type: "video",
        imgSrc: "vid_blank.jpg",
        videoSrc: "http://techslides.com/demos/sample-videos/small.mp4"
      },
      {
        type: "video",
        imgSrc: "vid_blank.jpg",
        videoSrc: "https://www.w3schools.com/tags/movie.mp4"
      }
    ],
    detailsImgArr: ["ProdDetailsCart_Mob.jpg", "ProdDetailsCart.jpg"],
    hasBnrCartImg: true,
    hasBnrDetailsImg: true,
    by: null,
    rating: 5,
    reviews: "<span style='color:#0066c0;'>4</span>",
    price: "6.99",
    addInf1: null,
    addInf2:
      "<span style='color:#4c4c4c;'>More Buying Choices<br>$6.60 </span><span style='color:#0066c0;'>(5 new offers)</span>"
  },
  {
    id: 1,
    brand: "Rexona",
    lbl: "Rexona Women's Maximum Protection -Clinical- deodorant : CONFIDENCE",
    imgArr: [
      { type: "img", imgSrc: "R1.jpg" },
      { type: "img", imgSrc: "R0.jpg" },
      { type: "img", imgSrc: "R2.jpg" }
    ],
    detailsImgArr: ["ProdDetailsCart_Mob.jpg", "ProdDetailsCart.jpg"],
    hasBnrCartImg: true,
    hasBnrDetailsImg: false,
    by: null,
    rating: 3.5,
    reviews: "<span style='color:#0066c0;'>6</span>",
    price: "14.49",
    addInf1: null,
    addInf2: null
  },
  {
    id: 2,
    brand: "Rexona",
    lbl:
      "Rexona Women MotionSense Aloe Vera 48H Anti-Perspirant Solid Stick 40 ml",
    imgArr: [
      { type: "img", imgSrc: "R2.jpg" },
      { type: "img", imgSrc: "R0.jpg" },
      { type: "img", imgSrc: "R1.jpg" }
    ],
    detailsImgArr: ["ProdDetailsCart_Mob.jpg", "ProdDetailsCart.jpg"],

    by: null,
    rating: 5,
    reviews: "<span style='color:#0066c0;'>3</span>",
    price: "2.69",
    addInf1: null,
    addInf2:
      "<span style='color:#4c4c4c;'>More Buying Choices<br>$2.69 </span><span style='color:#0066c0;'>(3 new offers)</span>"
  },
  {
    id: 3,
    brand: "Rexona",
    lbl:
      "Rexona Women Cotton 48h Anti-perspirant Deodorant Roll-on 40ml. (Pack of 3)",
    imgArr: [
      { type: "img", imgSrc: "R3.jpg" },
      { type: "img", imgSrc: "R1.jpg" },
      { type: "img", imgSrc: "R2.jpg" }
    ],
    detailsImgArr: ["ProdDetailsCart_Mob.jpg", "ProdDetailsCart.jpg"],

    by: null,
    rating: 5,
    reviews: "<span style='color:#0066c0;'>1</span>",
    price: "24.95",
    addInf1: null,
    addInf2:
      "<span style='color:#4c4c4c;'>Free shipping with purchase of 1 items<br/>More Buying Choices<br>$20.51 </span><span style='color:#0066c0;'>(3 new offers)</span>"
  },
  {
    id: 4,
    brand: "Rexona",
    lbl: "Degree Women Clinical Antiperspirant Deodorant, Shower Clean, 1.7 oz",

    imgArr: [
      { type: "img", imgSrc: "R4.jpg" },
      { type: "img", imgSrc: "R1.jpg" },
      { type: "img", imgSrc: "R2.jpg" }
    ],
    detailsImgArr: ["ProdDetailsCart_Mob.jpg", "ProdDetailsCart.jpg"],

    by: null,
    rating: 4,
    reviews: "<span style='color:#0066c0;'>144</span>",
    price: " 7.96",
    addInf1: null,
    addInf2:
      "<span style='color:#4c4c4c;'>Save 5% more with Subscribe & Save<br/>Eligible for Shipping to United Kingdom<br/>More Buying Choices<br>$7.63 </span><span style='color:#0066c0;'>(17 new offers)</span>"
  },

  {
    id: 5,
    brand: "Rexona",
    lbl:
      "Rexona Women's Maximum Protection -Clinical- deodorant : STRESS CONTROL",

    imgArr: [
      { type: "img", imgSrc: "R5.jpg" },
      { type: "img", imgSrc: "R1.jpg" },
      { type: "img", imgSrc: "R2.jpg" }
    ],
    detailsImgArr: ["ProdDetailsCart_Mob.jpg", "ProdDetailsCart.jpg"],

    by: null,
    rating: 3,
    reviews: "<span style='color:#0066c0;'>1</span>",
    price: "17.29",
    addInf1: null,
    addInf2:
      "<span style='color:#B12704'>Only 3 left in stock - order soon.</span><br/><span style='color:#4c4c4c;'>More Buying Choices<br/>$10.97 </span><span style='color:#0066c0;'>(3 new offers)</span>"
  },

  {
    id: 6,
    brand: "Rexona",
    lbl:
      "REXONA Women Sexy Bouquet Deodorant Roll-on 50ml -Smell Sexy and Confident Throughout The Day with Rexona's Sexy Bouquet antiperspirant Deodorant for Women",

    imgArr: [
      { type: "img", imgSrc: "R6.jpg" },
      { type: "img", imgSrc: "R1.jpg" },
      { type: "img", imgSrc: "R2.jpg" }
    ],
    detailsImgArr: ["ProdDetailsCart_Mob.jpg", "ProdDetailsCart.jpg"],

    by: "<span style='color:gray;'>by Rexona</span>",
    rating: null,
    reviews: null,
    price: "14.99",
    addInf1: null,
    addInf2: "Ages: 7 years and up"
  },

  {
    id: 7,
    brand: "Nivea",
    lbl:
      "Nivea Dry Comfort Stick products perspirant and deodorant stick formula Extra Whitening 1.4 Oz",

    imgArr: [
      { type: "img", imgSrc: "N1.jpg" },
      { type: "img", imgSrc: "R1.jpg" },
      { type: "img", imgSrc: "R2.jpg" }
    ],
    detailsImgArr: ["ProdDetailsCart_Mob.jpg", "ProdDetailsCart.jpg"],

    by: null,
    rating: 4,
    reviews: "<span style='color:#0066c0;'>1</span>",
    price: "13.80",
    addInf1: null,
    addInf2: null
  },

  {
    id: 8,
    brand: "Tom's",
    lbl:
      "Tom's of Maine Women's Antiperspirant Deodorant Stick, Fresh Meadow, 2 Count",

    imgArr: [
      { type: "img", imgSrc: "T1.jpg" },
      { type: "img", imgSrc: "R1.jpg" },
      { type: "img", imgSrc: "R2.jpg" }
    ],
    detailsImgArr: ["ProdDetailsCart_Mob.jpg", "ProdDetailsCart.jpg"],
    by: "<span style='color:gray;'>by Tom's of Maine</span>",
    rating: 4,
    reviews: "<span style='color:#0066c0;'>300</span>",
    price: "8.49",
    addInf1: null,
    addInf2: "Save 5% more with Subscribe & Save"
  }
];
