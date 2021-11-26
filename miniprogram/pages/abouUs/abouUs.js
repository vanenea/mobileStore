// miniprogram/pages/abouUs/abouUs.js
var utils = require('../../utils/utils.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    baseUrl: utils.getBaseUrl()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: this.data.baseUrl + 'weChat/getAboutUs.do',
      data: {
      },
      success: function (res) {
        console.log(res)
        if (res.data.code == "0000") {
          _this.setData({
            imgs: res.data.data
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