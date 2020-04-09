// pages/items/items.js
var app = getApp();
var action = '';
var moveY = 200;
var animation = animation = wx.createAnimation({
  transformOrigin: "50% 50%",
  duration: 400,
  timingFunction: "ease",
  delay: 0
})
animation.translateY(moveY + 'vh').step();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      
    ],
    sentence: '',
    show: false,
    backgroundVisible: false,
    animation: animation,
    bg: 'background',
    state: '',
    totalSecond:[]
    
  },

  showModel: function (e) {
    var that = this;
    if (e.currentTarget.dataset.id != null ) {
      app.globalData.items_index = this.data.items[e.currentTarget.dataset.id];
      wx.navigateTo({
              url: '../shangpin/shangpin',
            })
    }
    moveY = 0;
    action = 'show';
    animationEvents(this, moveY, action);
  },
  //隐藏弹窗浮层
  hidden(e) {
    moveY = 200;
    action = 'hide';
    animationEvents(this, moveY, action);
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      items:app.globalData.items
    })
    console.log(that.data.items)
    if(that.data.items.length>0){
      if(that.data.items[0].discount!=0){
        wx.showLoading({
          title: '加载中',
        })
        var date=new Date();
          for(var i=0;i<that.data.items.length;i++){ 
          let countDownHour='items['+i+'].details.countDownHour';
          let countDownMinute='items['+i+'].details.countDownMinute';
          let countDownSecond='items['+i+'].details.countDownSecond'; 
          var time=new Date(that.data.items[i].details.kill_end.replace(/-/g,"/")).getTime();
          var totalSecond=(time-date.getTime())/1000;
          that.get(totalSecond,countDownHour,countDownMinute,countDownSecond)
          }
  
      }
    }
  },
  get:function (params,countDownHour,countDownMinute,countDownSecond) {
    var interval = setInterval(function () {
      // 秒数
      var second =params;
  
      // 天数位
      var day =Math.floor(second / 3600 / 24);
      var dayStr =day.toString();
      if (dayStr.length == 1) dayStr = '0' + dayStr;

      // 小时位
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1) hrStr = '0' + hrStr;

      // 分钟位
      var min =Math.floor((second - day * 3600 *24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1) minStr = '0' + minStr;
     
      // 秒位
      var sec =(second - day * 3600 * 24 - hr * 3600 - min*60).toFixed(0) ;
      var secStr=sec.toString();
      if (secStr.length == 1) secStr = '0' + secStr;

      this.setData({
      // countDownDay: dayStr,
       [countDownHour]:hrStr,
       [countDownMinute]:minStr,
       [countDownSecond]:secStr,
      });
      params--;
      if (params < 0) {
       clearInterval(interval);
       this.setData({
       // [countDownDay]: '00',
        [countDownHour]: '00',
        [countDownMinute]: '00',
        [countDownSecond]: '00',
       });
     }
     }.bind(this), 1000);
     wx.hideLoading()
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
//动画事件 底部的弹出，背景层通过切换不同的class，添加一个transition的效果，使之有一个渐变的感觉。
function animationEvents(that, moveY, action) {
  that.animation = wx.createAnimation({
    transformOrigin: "50% 50%",
    duration: 400,
    timingFunction: "ease",
    delay: 0
  })
  that.animation.translateY(moveY + 'vh').step()
  if (action == 'show') {
    that.setData({
      animation: that.animation.export(),
      show: true,
      backgroundVisible: true,
      bg: 'bg',
      disableScroll: 'disableScroll'
    });
  } else if (action == 'hide') {
    that.setData({
      animation: that.animation.export(),
      show: false,
      backgroundVisible: false,
      bg: 'background',
      disableScroll: ''
    });
  }
}