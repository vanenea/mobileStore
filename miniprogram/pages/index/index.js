Page({
  data: {
    background: ['../../images/79_295.png', '../../images/79_295.png', '../../images/79_295.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 5000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,

    goods: [
      {
        id : "1",
        title: "测试数据测试数据",
        price: "78.5"
      },
      {
        id: "2",
        title: "测试数据测试数据",
        price: "78.5"
      },
      {
        id: "3",
        title: "测试数据测试数据",
        price: "78.5"
      }
    ],
    type: "home",
    homeImage: "../../../images/like_a.png",
    categoryImage: "../../../images/category.png",
    cartImage: "../../../images/cart.png",
    meImage: "../../../images/me.png"
  },
  footerTap(event){
    this.type = event.currentTarget.dataset.type;
    var page = "";
    if(this.type=="home"){
      page = "/pages/index/index";
      this.setData({
        type : this.type,
        homeImage : "../../../images/like_a.png",
        categoryImage : "../../../images/category.png"
      });
    } else if (this.type == "category"){
      page = "/pages/category/category";
      this.setData({
        type: this.type,
        homeImage : "../../../images/like.png",
        categoryImage : "../../../images/category_a.png"

      })
    }
    wx.navigateTo({
      url: page,
      success: function(res){
        console.log(res);
      }
    })
  },
  detail(event){
    wx.redirectTo({
      url: '../detail/detail?id=' + event.currentTarget.dataset.id

    })
  }
})
