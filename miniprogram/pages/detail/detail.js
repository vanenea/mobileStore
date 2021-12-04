// miniprogram/pages/detail/detail.js
var utils = require('../../utils/utils.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 5000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    detail: {},
    sku: [],
    skuIndex: 0,
    comment: [],
    bsnType: "detail",
    // input默认是1
    num: 1,
    // 使用data数据对象设置样式名
    minusStatus: 'disabled',
    moRemain: 56,
    goods: {},
    introImg: [],
    detailImg: [],
    baseUrl: utils.getBaseUrl()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.background = [this.data.baseUrl + 'upload/images/375_375.png', this.data.baseUrl + 'upload/images/375_375.png', this.data.baseUrl + 'upload/images/375_375.png'];
    this.data.detail = {
      "id": "1",
      "title": "寻找田野|最正宗的上海南汇8424 得奖最多奥运会指定西瓜1只/箱 9-11斤",
      "price": "10000",
      "originalPrice": "12000",
      "postage": "免运费",
      "remain": "450",
      "sales": "50"
    }
    this.setData({
      sku : ["120g", "150g", "200g"]
    })
    
    this.data.comment = [
      {
        "buyer": "陈****",
        "date": "2018/12/22",
        "comment": "除了物流让人等的心焦，收到手机的惊喜还是可以抵消的，曲面屏很漂亮，速度也快，拍照功能非常强大，试了广角微距以及黑暗环境的表现力，都表示能让我满意，，还有续航功能正在体验之中。",
        "image": [
          this.data.baseUrl + "upload/images/375_375.png",
          this.data.baseUrl + "upload/images/375_375.png"
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
    ],
      console.log(options.id)
    this.getGoods(options.id);
    this.getImg(options.id);
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
  itemDetail: function () {
    if (this.bsnType != "detail") {
      this.setData({
        bsnType: "detail"

      })
    }

  },

  /**
   * 本店成交
   */
  deal: function () {
    if (this.bsnType != "deal") {
      this.setData({
        bsnType: "deal"

      })
    }
  },
  /**
   *预览图片你呢 吗                                                                
   */
  previewImage: function (event) {
    wx.previewImage({
      urls: event.currentTarget.dataset.imgsrcs,
      current: event.currentTarget.dataset.imgsrc

    })
  },
  /**
   * 显示遮罩层
   */
  showModal: function () {
    this.setData({
      showModalStatus: true
    })
  },
  /**
   * 隐藏遮罩层
   */
  hideModal: function () {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  /**选择sku */
  selectSku: function (e) {
    debugger
    this.setData({
      skuIndex: event.currentTarget.dataset.index
    })
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    var moRemain = this.data.moRemain;
    // 如果大于1时，才可以减
    if (num > 1) {
      num--;
      moRemain++;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      moRemain: moRemain,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    var moRemain = this.data.moRemain;
    // 不作过多考虑自增1
    if (moRemain > 1) {
      num++;
      moRemain--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      moRemain: moRemain,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回
    this.setData({
      num: num
    });
  },

  /**
   * 
   */
  getGoods: function (id) {
    var _this = this;
    wx.request({
      url: this.data.baseUrl + 'weChat/getGoodsDetail.do',
      data: {
        "id": id
      },
      success: function (res) {
        console.log(res);
        if (res.data.code == "0000") {
          _this.setData({
            goods: res.data.data
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
   * 获取图片
   */
  getImg: function (id) {
    var _this = this;
    wx.request({
      url: this.data.baseUrl + 'weChat/getImgByGoodsId.do',
      data: {
        "id": id
      },
      success: function (res) {
        console.log(res);
        if (res.data.code == "0000") {
          var imgsData = res.data.data;
          for (var i = 0; i < imgsData.length; i++) {
            if ("01" == imgsData[i].type) {
              _this.data.introImg.push(imgsData[i]);
            } else if ("02" == imgsData[i].type) {
              _this.data.detailImg.push(imgsData[i]);
            }
          }
          _this.setData({
            introImg: _this.data.introImg,
            detailImg: _this.data.detailImg
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
  }

})