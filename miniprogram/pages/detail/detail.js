// miniprogram/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['https://www.chenlaoshi.top/upload/images/375_375.png', 'https://www.chenlaoshi.top/upload/images/375_375.png', 'https://www.chenlaoshi.top/upload/images/375_375.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 5000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    detail:{
      "id": "1",
      "title": "寻找田野|最正宗的上海南汇8424 得奖最多奥运会指定西瓜1只/箱 9-11斤",
      "price": "10000",
      "originalPrice": "12000",
      "postage": "免运费",
      "remain":"450",
      "sales":"50"
    },
    comment: [
      {
        "buyer": "陈****",
        "date": "2018/12/22",
        "comment": "除了物流让人等的心焦，收到手机的惊喜还是可以抵消的，曲面屏很漂亮，速度也快，拍照功能非常强大，试了广角微距以及黑暗环境的表现力，都表示能让我满意，，还有续航功能正在体验之中。",
        "image": [
          "https://www.chenlaoshi.top/upload/images/375_375.png",
          "https://www.chenlaoshi.top/upload/images/375_375.png"
        ]

      },
      {
        "buyer": "陈****",
        "date": "2018/12/22",
        "comment": "除了物流让人等的心焦，收到手机的惊喜还是可以抵消的，曲面屏很漂亮，速度也快，拍照功能非常强大，试了广角微距以及黑暗环境的表现力，都表示能让我满意，，还有续航功能正在体验之中。",
        "image": [
          "../../images/375_375.png",
          "../../images/375_375.png"
        ]

      }
    ]

    ,
    bsnType: "detail"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
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

  },

  /**
   * 商品详情
   */
  itemDetail: function(){
    if (this.bsnType!="detail"){
      this.setData({
        bsnType: "detail"

      })
    }

  },

  /**
   * 本店成交
   */
  deal: function(){
    if (this.bsnType != "deal") {
      this.setData({
        bsnType: "deal"

      })
    }
  },
  /**
   *预览图片你呢 吗                                                                
   */
  previewImage: function(event){
    wx.previewImage({
      urls: event.currentTarget.dataset.imgsrcs,
      current: event.currentTarget.dataset.imgsrc

    })
  }
})