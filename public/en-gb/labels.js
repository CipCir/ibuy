var texts = {
  mediaPath: "",
  header: {
    logo_img: ProdSkin.MediaPath + "amazon_logo_150x50.png",
    opt0: "<span style='color:white;'>24/7 Customer service. Learn more</span>",
    opt1:
      "<span style='color:white;'><img src='" +
      ProdSkin.MediaPath +
      "amazon_opt_1.png'></span>",
    opt2:
      "<br/><div style='color:white;'><b>Departments▾ </b></span><span style='color:lightgray;'>Your Amazon.com Today's Deals Gift Cards Registry Help</span>",
    opt3:
      "<span style='color:white;'><img src='" +
      ProdSkin.MediaPath +
      "amazon_opt_3.png'></span>",
    search_all_text: "All▾"
  },
  footer: {
    back_to_top: "<span style='color:white;'>Back to top</span>",
    col1:
      "<span style='color:white;'><b>Get to Know Us</b><br/><br/>Careers<br/>Blog<br/>About Amazon</span>",
    col2:
      "<span style='color:white;'><b>Make Money with Us</b><br/><br/>Sell on Amazon<br/>Sell Your Services on Amazon<br/>Sell on Amazon Business<br/>Sell Your Apps on Amazon</span>",
    col3:
      "<span style='color:white;'><b>Amazon Payment Products</b><br/><br/>Amazon Business Card<br/>Shop with Points<br/></span>",
    col4:
      "<span style='color:white;'><b>Let Us Help You</b><br/><br/>Your Account<br/>Your Orders</span>",
    img1: ProdSkin.MediaPath + "footer_s.png",
    img2: ProdSkin.MediaPath + "footer_m.png",
    img3: ProdSkin.MediaPath + "footer_l.png",
    img4: ProdSkin.MediaPath + "footer_xl.png"
  },
  banner: {
    img1: ProdSkin.MediaPath + "banner_s.png",
    img2: ProdSkin.MediaPath + "banner_m.png",
    img3: ProdSkin.MediaPath + "banner_l.png",
    img4: ProdSkin.MediaPath + "banner_xl.png"
  },
  general_texts: {
    voucher: "Voucher",
    remainingV: "Remaining voucher",
    subTot: "Subtotal",
    itm: "items",
    currency: "$",
    currecySide: "left",
    customRev: "<span style='color:#0066c0;'>customer reviews</span>",
    price: "Price",
    qty: "Quantity",
    del: "Delete",
    cart: {
      cartTitle: "Shopping Cart",
      empty: "Your cart is empty",
      checkout: "Checkout",
      negVoucher:
        "The total amount of products purchased is bigger than the available voucher"
    },
    btn: {
      bckResults: "back to results",
      gtCheckout: "go to checkout",
      addCart: "Add to Cart"
    }
  },
  sorts: {
    SortByLabel: "Sort by:",
    SortArr: [
      { lbl: "Best Sellers", param: "id", ordr: 1, type: "num" },
      { lbl: "Price: Low to High", param: "price", type: "num", ordr: 1 },
      {
        lbl: "Price: High to Low",
        param: "price",
        type: "num",
        ordr: -1
      },
      { lbl: "A-Z", param: "lbl", type: "str", ordr: 1 },
      { lbl: "Z-A", param: "lbl", type: "str", ordr: -1 }
    ]
  }
};
