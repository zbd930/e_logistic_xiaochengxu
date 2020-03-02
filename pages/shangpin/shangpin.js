// pages/shangpin/shangpin.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      items_index:{},
      like:""
  },
  pinlun:function(e){
    app.globalData.user_id=this.data.items_index.supplier_companies[0].user_id
    wx.navigateTo({
      url: '../comments/comments',
    })
  },
  // dianzan: function (e) {
    // var that=this
    // wx.request({
    //   method:'POST',
    //   header: { 'content-type': 'application/x-www-form-urlencoded' },
    //   data:{
    //     topicid:this.data.items_index.user_id,
    //     openid:app.globalData.openid
    //   },
    //   url: app.globalData.url_old+'dianzan/add.do',
    //   success:function(e){
    //     that.setData({
    //       like:e.data
    //     })
    //   }
    // })
  // },
  tijiao: function (e) {
   wx.navigateTo({
     url: '../comfirm/comfirm',
   })
  },
  shouye:function(e){
    wx.switchTab({
      url: '../logs/logs',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      items_index: app.globalData.items_index,
      like: app.globalData.items_index.like
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