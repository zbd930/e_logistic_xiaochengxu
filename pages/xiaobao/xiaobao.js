// pages/xiaobao/xiaobao.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    xiaobao_weight:"",
    xiaobao_volumn:"",
    qiyungang:"",
    mudiguo:"",
    country:"",
    seleted_address:"",
    dateValue:"" ,
    songhuo:"",
    dest:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log(app.globalData.items)
    that.setData({
        xiaobao_weight:app.globalData.xiaobao_weight,
        xiaobao_volumn:app.globalData.xiaobao_volumn,
        qiyungang:app.globalData.qiyungang,
        mudiguo:app.globalData.mudiguo,
        items:app.globalData.items,
     })
  },
  submit: function(e) {
      this.setData({
      showModal: true,
      songhuo:e.target.dataset.songhuo,
      amount:e.target.dataset.amount,
      companyid:e.target.dataset.companyid,
      company:e.target.dataset.company
         })
    },

    preventTouchMove: function() {

    },


    go: function() { 
        this.setData({
        showModal: false
        })
    },
    switch1Change: function (e) {
      this.setData({
        switch1Checked:e.detail.value,
      })
    },
    order:function(){
     var that=this;
     let method='小包';
     wx.showLoading({
       title: '提交中',
     })
     wx.request({
        url: app.globalData.url_old+'xiaobao/pay_xiaobao.do',
        data:{
          openid: app.globalData.openid,
          unionId:app.globalData.unionId,
          ctn: 0,
          weight: that.data.xiaobao_weight,
          volume: that.data.xiaobao_volumn,
          item_id: 0,
          address_id: that.data.seleted_address.id,
          //beizhu: that.data.area,
          picking: that.data.dateValue,
          dest: that.data.items[0].country,
          //是否提货
          tihuo: that.data.switch1Checked,
          songhuo: that.data.songhuo,
          total: that.data.amount,
          chaigui: 'xiaobao',
          category:'xiaobao',
          method:'小包',
          user_id:that.data.companyid,
          country:that.data.items[0].country,
          supplier_id:that.data.company,
          ups:0
        },
        method:"POST",
        header:{'content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
        success: function (res) {
          console.log(res)
          if(res.data.return_code==undefined){
            that.doWxPay(res.data);
           //测试的时候
           wx.hideLoading({
             complete: (res) => {
               wx.showToast({
                 title: '成功',
               })
             },
           })
          }
          else{
            wx.showToast({
              image: "../../pics/error.png",
              title: '服务器异常'
            })
          }
        },
        fail: function (err) {
          wx.showToast({
            image: "../../pics/error.png",
            title: '服务器异常'
          })
        },
        complete:function(){
          wx.hideLoading({
            complete: (res) => {},
          })
        }
      })
    },
    dizhi: function () {
      this.setData({
        switch1Checked: false
      })
      wx.navigateTo({
        url: '../dizhi/dizhi',
      })
      
    },
    datePickerBindchange: function (e) {
      this.setData({
        dateValue: e.detail.value
      })
    },
    doWxPay(param,test,weight,volume,item_id) {
      console.log(param)
      //小程序发起微信支付
        wx.requestPayment({
          timeStamp: param.timeStamp,//记住，这边的timeStamp一定要是字符串类型的，不然会报 
          nonceStr: param.nonceStr, 
          package: param.package,
          signType: 'MD5',
          paySign: param.sign,  
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
          wx.showToast({
            title: '支付失败',
            image:"../../pics/error.png",
            complete:function(res){
              wx.navigateBack
               
          },
         
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
    this.setData({
      seleted_address:app.globalData.seleted_address
    })
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