var inputObj = {
  generalInfo: {
    skin: "Amazon", // "Amazon" "Custom",
    skinProps: {
      logo_img: "./img/emag_logo_150x50.png",
      header_bk_color: "#005eb8",
      cart_color: "white",
      show_search: true,
      footer_color: "#005eb8",
      search_bk_color1: "lightblue",
      search_bk_color2: "whitesmoke",
      search_bk_color3: "lightblue",
      bk_top_show: false,
      bk_top_color: "lightblue",
      show_footer_text: true,
      show_footer_image: false
    },
    currency: "$",
    currecySide: "left",
    productView: "Grid", //"Grid" "List"
    body_bk_color: "white",
    show_banner: true
  },
  layout: {
    header: {},
    footer: {}
  },
  banner: {
    img1: "./img/banner_s.png",
    img2: "./img/banner_m.png",
    img3: "./img/banner_l.png",
    img4: "./img/banner_xl.png"
  },
  texts: {
    CustmrsRev: "<span style='color:#0066c0;'>customer reviews</span>",
    price: "Price",
    Quantity: "Quantity",
    Dlt: "Delete",
    lvl_Prod: {
      subTitle: "The product level"
    },
    cart: {
      cartTitle: "Shopping Cart",
      empty: "Your cart is empty",
      Checkout: "Checkout"
    },
    Header: {
      opt0:
        "<span style='color:white;'>24/7 Customer service. Learn more</span>",
      opt1:
        "<span style='color:white;'><img src='./img/amazon_opt_1.png'></span>",
      // opt2:
      //   "<br/>sadkasodkpoaskd okaspodkaspodka poaksdp okaspodkaspodk poaskdopakdpo kasopdkaspo kas fgdfg dfg df",
      opt2:
        "<br/><div style='color:white;'><b>Departments▾ </b></span><span style='color:lightgray;'>Your Amazon.com Today's Deals Gift Cards Registry Help</span>",
      opt3:
        "<span style='color:white;'><img src='./img/amazon_opt_3.png'></span>",
      search_all_text: "All▾",
      placeholder_search: "Placeholder text here..."
    },
    Footer: {
      back_to_top: "<span style='color:white;'>Back to top</span>",
      col1:
        "<span style='color:white;'><b>Get to Know Us</b><br/><br/>Careers<br/>Blog<br/>About Amazon</span>",
      col2:
        "<span style='color:white;'><b>Make Money with Us</b><br/><br/>Sell on Amazon<br/>Sell Your Services on Amazon<br/>Sell on Amazon Business<br/>Sell Your Apps on Amazon</span>",
      col3:
        "<span style='color:white;'><b>Amazon Payment Products</b><br/><br/>Amazon Business Card<br/>Shop with Points<br/></span>",
      col4:
        "<span style='color:white;'><b>Let Us Help You</b><br/><br/>Your Account<br/>Your Orders</span>",
      img1: "./img/footer_s.png",
      img2: "./img/footer_m.png",
      img3: "./img/footer_l.png",
      img4: "./img/footer_xl.png"
    }
  },
  Filters: {
    FilterBrandLabel: "Brand",
    brand: ["Rexona", "Nivea", "Tom's"],
    FilterPriceLabel: "Price",
    price: [
      { lbl: "Under 5", val: "0#5" },
      { lbl: "5 - 10.50", val: "5#10.50" },
      { lbl: "10.50 - 15", val: "10.50#15" }
    ],
    FilterRatingLabel: "Avg. Customer Review",
    RatingLabel: "&Up",
    RatingMaxVal: 5,
    FilterLbl1: "Filter >>",
    FilterLbl2: "<< Back"
  }
};
