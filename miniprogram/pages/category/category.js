// miniprogram/pages/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 1,
    curIndex: 0,
    category: [],
    goods: [],
    initId: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
    this.getGoods(id)
  },
  /**
   * 详情页 
   */
  toDetail: function(event){
    wx.navigateTo({
      url: '../detail/detail?id=' + event.currentTarget.dataset.id
    })
  },

  /**
   * 获取分类
   */
  getCategory: function(){
    var _this = this;
    wx.request({
      url: 'https://www.chenlaoshi.top/weChat/getCategory.do',
      data: {
      },
      success: function (res) {
        console.log(res.data);
        if("0000"==res.data.code){
          _this.getGoods(res.data.data[0].id);
          _this.setData({
            curNav: res.data.data[0].id,
            category: res.data.data
          })
        } else {
          wx.showModal({
            content: res.data.msg,
            showCancel: false
          })
        }
       
      },
      fail: function () {
        wx.showModal({
          content: '服务器异常,请稍后重试',
          showCancel: false
        })
      }
    })
  },

  /**
   * 获取商品
   */
  getGoods: function (categoryId){
    var _this = this;
    wx.request({
      url: 'https://www.chenlaoshi.top/weChat/getGoodsByCategory.do',
      data: {
        categoryId: categoryId
      },
      success: function (res) {
        console.log(res.data);
        _this.setData({
          goods: res.data.data
        })
      },
      fail: function () {
        wx.showModal({
          content: '服务器异常,请稍后重试',
          showCancel: false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategory();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getCategory();
    wx.stopPullDownRefresh({});
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})