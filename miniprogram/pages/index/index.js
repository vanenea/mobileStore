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
        id: "1",
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
    recommend:[],
    page: 1,
    totalPage: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },
  onReachBottom: function(){
    if(this.data.totalPage<this.data.page){
      return;
    }
    this.setData({
      page: this.data.page++
    })
    this.getList();
  },
  
  getList: function(){
    var _this = this;
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    wx.request({
      url: 'https://chenlaoshi.top/weChat/getGoods.do',
      data: {
        page: this.data.page
      },
      success: function (res) {
        console.log(res.data);
        wx.hideLoading({});
        _this.setData({
          totalPage: res.data.data.pages,
          //background: res.data.data.list
        })
      },
      fail: function () {
        wx.hideLoading({});
        wx.showModal({
          content: '服务器异常,请稍后重试',
          showCancel: false
        })
      }
    })
  },
  detail(event){
    wx.redirectTo({
      url: '../detail/detail?id=' + event.currentTarget.dataset.id

    })
  }
})
