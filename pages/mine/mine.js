// pages/mine/mine.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    amount:[],
    level: "A",
    xiangmu: [{
      "image_url":
        "../../pics/weitihuo.png",
      "text": "未入仓",
      "number": "1"
    },
    {
      "image_url": "../../pics/fuwuzhong.png",
      "text": "进行中",
      "number": "2"
    },
    {
      "image_url": "../../pics/daipingjia.png",
      "text": "待评价",
      "number": "3"
    },
      {
        "image_url": "../../pics/yiwancheng.png",
        "text": "已完成",
        "number": "4"
      },
    ],

  },
  jump: function (event) {
    app.globalData.status = event.currentTarget.dataset.id-1

    wx.switchTab({
      url: '/pages/order/order',
    })
  },
  yijian: function () {
    wx.showToast({
      title: '即将上线',
      image: '../../pics/error.png',
      duration: 2000
    })
  },
  shopping:function(){
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: app.globalData.url_old +"shopping/redis_get.do",
      data:{
        unionId: app.globalData.unionId,
      },
      method:"GET",
      success:function(res){
        app.globalData.shopping=res.data
        wx.hideLoading({
          complete: (res) => {
            setTimeout(function(){
              wx.navigateTo({
                url: '/pages/shopping/shopping',
              })
            })
          },
        })
        
      },
    })
  },
  dizhi:function(){
    wx.navigateTo({
      url: '/pages/dizhi/dizhi',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    _getUserInfo();
    function _getUserInfo() {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            userInfo: res.userInfo
          })

        }
      })
    }
    that.setData({
        amount:app.globalData.amount,
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