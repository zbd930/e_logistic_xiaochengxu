// pages/shopping/shopping.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopping:[
      
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      shopping:app.globalData.shopping
    })
    console.log(this.data.shopping)
  },
  showModel:function(event){
    console.log(event.currentTarget.dataset)
      //小程序发起微信支付
      wx.requestPayment({
      timeStamp: event.currentTarget.dataset.timestamp,//记住，这边的timeStamp一定要是字符串类型的，不然会报 
      nonceStr:  event.currentTarget.dataset.noncestr, 
      package:  event.currentTarget.dataset.package,
      signType: 'MD5',
      paySign:  event.currentTarget.dataset.sign,  
      success: function (event) { 
      // success 
       wx.showToast({
          title: '支付成功',
          icon: 'success',
          complete:function(){
            setTimeout(function(){
              app.load_order()
              wx.navigateBack({
                delta:4
              })
            },2000)
          }
        })
      },
      fail: function (error) {
      // fail
      console.log("支付失败")
      wx.showToast({
        title: '支付失败',
        image:"../../pics/error.png",
      });
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