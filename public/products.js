var prodDB = {
  MainCat: [
    {
      id: 0,
      lbl: "electronics",
      img: "electronicsCat.jpg",
      isClickable: false
    },
    {
      id: 1,
      lbl: "baby",
      img: "babyCat.jpg",
      isClickable: true
    },
    {
      id: 2,
      lbl: "tools & home improvement",
      img: "toolsCat.jpg",
      isClickable: true
    },
    {
      id: 3,
      lbl: "home & kitchen",
      img: "homeCat.jpg",
      isClickable: true
    },
    {
      id: 4,
      lbl: "fashion",
      img: "fashionCat.jpg",
      isClickable: true
    },
    {
      id: 5,
      lbl: "sports and outdors",
      img: "sportsCat.jpg",
      isClickable: true
    }
  ],
  AisleCat: [
    {
      id: 0,
      categId: 1,
      lbl: "baby and toddler toys",
      img: "Sub_toddler.jpg"
    },
    {
      id: 1,
      categId: 1,
      lbl: "baby boys' clothing",
      img: "Sub_bBoys.jpg"
    },
    {
      id: 2,
      categId: 1,
      lbl: "baby girl's clothing",
      img: "Sub_bGirls.jpg"
    },
    {
      id: 3,
      categId: 1,
      lbl: "bathing and skin care",
      img: "Sub_bathing.jpg"
    },
    {
      id: 4,
      categId: 1,
      lbl: "car seats & accesories",
      img: "Sub_carSeats.jpg"
    },
    {
      id: 5,
      categId: 1,
      lbl: "Nappies and Pants",
      img: "Sub_diaper.jpg"
    },
    {
      id: 6,
      categId: 1,
      lbl: "Fred & Flo Nappies",
      img: "Sub_diaper.jpg"
    },
    {
      id: 7,
      categId: 1,
      lbl: "feeding",
      img: "Sub_feeding.jpg"
    },
    {
      id: 8,
      categId: 1,
      lbl: "gifts",
      img: "Sub_gifts.jpg"
    }
  ],
  ShelfCat: [
    {
      id: 0,
      aisleId: 5,
      lbl: "PAMPERS NAPPIES & PANTS",
      img: "shelf1.jpg"
    },
    {
      id: 0,
      aisleId: 5,
      lbl: "PAMPERS NAPPIES",
      img: "shelf2.jpg"
    }
  ],
  Products: [
    {
      id: 0,
      shelfId: [0, 1],
      lbl: "prod 1.1",
      img: "Sub_diaper.jpg"
    },
    {
      id: 1,
      shelfId: [0],
      lbl: "prod 1.2",
      img: "Sub_diaper.jpg"
    },
    {
      id: 2,
      shelfId: [0, 1],
      lbl: "prod 2.1",
      img: "Sub_diaper.jpg"
    },
    {
      id: 3,
      shelfId: [1],
      lbl: "prod 2.2",
      img: "Sub_diaper.jpg"
    }
  ]
};
