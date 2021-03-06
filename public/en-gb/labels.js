var txtMediaPath =
  "https://media.ipsosinteractive.com/deploy/products/iBuy_v2/media/img/";
var texts = {
  header: {
    logo_img: txtMediaPath + "amazon_logo_150x50.png",
    opt0: null,
    opt1: "<br/><span style='color:white; vertical-align: baseline;'><img src='" + txtMediaPath + "amazon_deliver.png'></span><span style='color:white; vertical-align: top;'> Deliver to your doorstep</span>",
    opt2:
      "<br/><div><span style='color:lightgray;'>Today's Deals&nbsp;&nbsp;&nbsp;Help&nbsp;&nbsp;&nbsp;Browsing History&nbsp;&nbsp;&nbsp;My Amazon.com&nbsp;&nbsp;&nbsp;Buy Again&nbsp;&nbsp;&nbsp;Gift Cards</span>",
    opt3: null,
    search_all_text: "All▾"
  },
  footer: {
    back_to_top: "Back to top",
    col1: "<b>Get to Know Us</b><br/><br/>Careers<br/>Blog<br/>About Amazon",
    col2:
      "<b>Make Money with Us</b><br/><br/>Sell on Amazon<br/>Sell Your Services on Amazon<br/>Sell on Amazon Business<br/>Sell Your Apps on Amazon",
    col3:
      "<b>Amazon Payment Products</b><br/><br/>Amazon Business Card<br/>Shop with Points<br/>",
    col4: "<b>Let Us Help You</b><br/><br/>Your Account<br/>Your Orders",
    img1: txtMediaPath + "footer_s.png",
    img2: txtMediaPath + "footer_m.png",
    img3: txtMediaPath + "footer_l.png",
    img4: txtMediaPath + "footer_xl.png"
  },
  banner: {
    img1: txtMediaPath + "banner_s.png",
    img2: txtMediaPath + "banner_m.png",
    img3: txtMediaPath + "banner_l.png",
    img4: txtMediaPath + "banner_xl.png"
  },
  general_texts: {
    by: "by ",
    voucher: "Voucher",
    remainingV: "Remaining voucher",
    subTot: "Subtotal",
    itm: "items",
    currency: "$",
    customRev: "customer reviews",
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
