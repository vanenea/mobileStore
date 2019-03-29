Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 5000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    banner: [],
    like: [],
    hot: [],
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
  getList: function(){
    var _this = this;
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    wx.request({
      url: 'https://www.chenlaoshi.top/weChat/getGoods.do',
      data: {
      },
      success: function (res) {
        console.log(res.data);
        var items = res.data.data;
        for (var i = 0; i < items.length; i++){
          if (items[i].type=='03'){
            _this.data.banner.push(items[i]);
          } else if (items[i].type == '04'){
            _this.data.like.push(items[i]);
          } else if (items[i].type == '05'){
            _this.data.hot.push(items[i]);
          }
        }
        wx.hideLoading({});
        _this.setData({
          banner: _this.data.banner,
          like: _this.data.like,
          hot: _this.data.hot
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
  toDetail: function(event){
    wx.navigateTo({
      url: '../detail/detail?id=' + event.currentTarget.dataset.id

    })
  }
})
