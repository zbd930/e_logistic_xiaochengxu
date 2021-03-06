//app.js
App({
  onLaunch: function () {
    var that = this;
    var name = '';
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 获取用户信息

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              // console.log(res.encryptedData)
              this.globalData.iv=res.iv
              this.globalData.encryptedData=res.encryptedData
              this.globalData.userInfo = res.userInfo
              this.globalData.user_Name = res.userInfo.nickName
              //由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              
            }  
          })
        }   
      }
    })
  },
  getaddress: function (unionId){
    var that = this;
    wx.request({
      url: that.globalData.url_old+'address/get.do',
      data: {
        unionId: unionId,
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success:function(res){
        that.globalData.dizhi = res.data;
      }
    })
  },
  getunionId: function (code,encryptedData,iv) {
    var that = this; 
    wx.request({
      url: that.globalData.url_old+'wechat/getunionId.do',
      data: {
        code: code,
        encryptedData: encryptedData,
        iv: iv,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
    },
      success: function (res) {
          console.log(res.data)
          that.globalData.openid = res.data.userInfo.openId;
          that.globalData.unionId = res.data.userInfo.unionId;
        wx.request({
          url: that.globalData.url_old +'address/get.do',
          data: {
            unionId: that.globalData.unionId,
          },
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          success: function (res) {
            that.globalData.dizhi = res.data;
            that.load_order(),
            wx.request({
              url: that.globalData.url_old +'items/get.do',
              data: {
                unionId: that.globalData.unionId,
              },
              header: { 'content-type': 'application/x-www-form-urlencoded' },
              success:function(e){
                that.globalData.amount=e.data;
              }
            })
          },
          fail: function (res) {
          },
          complete: function (res) {
          },
        })
      },
      fail: function (res) {
      
      },
    })
  },
  load_order:function(e){
    var that=this;
    wx.request({
      url: that.globalData.url_old + 'items/orders.do',
      data: {
        unionId: that.globalData.unionId,
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
        that.globalData.listData = res.data;
      },
      fail: function (res) {
        console.log("获取订单错误")
      },
      complete: function (res) {
        wx.hideLoading()
      }
    })
  } , 
  globalData: {
    // url_new:"http://localhost:8080/elogistic/",
    // url_old: "https://www.yikuajing.cn/elogistic/", 
      url_old: "http://localhost:8091/elogistic/", 
     unionId:null,
     encryptedData:"",
     iv:"",
    xiaobao_weight:null,
    xiaobao_volumn:null,
    qiyungang:"",
    mudiguo:"",
    status:null,
    userInfo: null,
    code: null,
    openid: null,
    //评论页面
    user_id:"",
    items:[],
    amount:[],
    //历史订单
    listData:[
      {  
      }
    ],
     //历史订单
     history_order:{
     },
     pic_id:"",
    dizhi:[
    ],
    //商品
    items_index:{
    },
    //购物车
    // {
    //   ctn:"10",
    //   weight:"100",
    //   volume:"2",
    //   beizhu:"asdfg",
    //   picking:"2019-12-31",
    //   dest:"DFW1",
    //   total:"1541",
    //   category:"普货"
    // },{
    //   ctn:"10",
    //   weight:"100",
    //   volume:"2",
    //   beizhu:"asdfg",
    //   picking:"2019-12-31",
    //   dest:"DFW1",
    //   total:"1541",
    //   category:"普货"
    // }
    shopping:[],
    seleted_address:{
      
    },
    discount:"",
    category:""
  }
})