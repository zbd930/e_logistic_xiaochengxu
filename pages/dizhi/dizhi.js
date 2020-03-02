// pages/dizhi/dizhi.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareshow: false,
    dizhi:[],
    xuanzhong:"",
    key:null,
    contact_name:"",
    contact_phone:"",
    contact_addree:"",
    contact_mail:"",
    code:""
         },
  /// 按钮触摸开始触发的事件
  touchStart: function (e) {
    this.touchStartTime = e.timeStamp
  },

  /// 按钮触摸结束触发的事件
  touchEnd: function (e) {
    this.touchEndTime = e.timeStamp
  },
  //短按
  seleted: function (e) {
    if (this.touchEndTime - this.touchStartTime<350){
      var seleted = {
        name: e.currentTarget.dataset.name,
        phone: e.currentTarget.dataset.phone,
        address: e.currentTarget.dataset.address,
        id: e.currentTarget.dataset.id,
      };
      this.setData({
        key: e.currentTarget.dataset.index,
      })
      app.globalData.seleted_address = seleted;
      wx.navigateBack({

      })
    }
    
  }, 
  /// 长按
  longTap: function (e) {
    wx.showModal({
      title: '删除地址',
      content: '确定要删除该地址？',
      success: function (res) {
        if (res.cancel) {
          console.log("否")
          //点击取消,默认隐藏弹框
        } else {
          //点击确定
          console.log("是")
         wx.request({
           url: app.globalData.url_old +'address/delete.do',
           data:{
             id: e.currentTarget.dataset.id,
           },
           method:"post",
           header: { 'content-type': 'application/x-www-form-urlencoded' },
           success:function(res){
             wx.showModal({
               title: '提交结果',
               content: res.data,
             })
             app.getaddress(app.globalData.openid)
             wx.navigateBack({
               
             })
           }
         })
        }
      },
      fail: function (res) { },//接口调用失败的回调函数
      complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
    })
  },
  get_code: function (e) {
    var reg = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$');
    var emailVar = reg.test(this.data.contact_mail);     // 得到的值为布尔型
    wx.showLoading({
      title: '提交中',
    })
    if (this.data.contact_mail!=''||emailVar) {
      wx.request({
        url: app.globalData.url_old + 'address/valid_email.do',
        data: {
          openid: app.globalData.openid,
          email: this.data.contact_mail
        },
        method: "post",
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          console.log(res.data)
          wx.showModal({
            title: '结果',
            content: res.data,
            success:function(){
              wx.hideLoading()
            }
          })
        }
      })
    } else{
      wx.showToast({
        image: "../../pics/error.png",
      title: '邮箱错误',
    })
    }
  },
  tijiao:function(e){
    var reg = new RegExp('^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$');
    var phoneVar = reg.test(this.data.contact_phone);     // 得到的值为布尔型
    var reg = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$');
    var emailVar = reg.test(this.data.contact_mail);     // 得到的值为布尔型
    if (phoneVar == true && emailVar==true){
      wx.request({
        url: app.globalData.url_old + 'address/add.do',
        data: {
          address: this.data.contact_addree,
          phone: this.data.contact_phone,
          name: this.data.contact_name,
          openid: app.globalData.openid,
          email: this.data.contact_mail,
          code:this.data.code
        },
        method: "post",
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          console.log(res.data)
          wx.showModal({
            title: '提交',
            content: res.data,
            success:function(e){
              if(e.confirm){
                app.getaddress(app.globalData.openid)
                wx.navigateBack({

                })
              }
            }
          })
         
        },
        fail: function (res) {
        },
        complete: function (res) {
        },

      })
    }else{
      wx.showModal({
        title: '错误',
        content: '手机或者邮箱格式错误',
      })
    }
   
  },
  contactemailInput:function(e){
    this.setData({
      contact_mail: e.detail.value
    })
  },
  contactcodeInput:function(e){
    this.setData({
      code: e.detail.value
    })
  },
  contactNameInput: function (e) {
    this.setData({
      contact_name: e.detail.value
    })
  },
  contactphoneInput: function (e) {
    this.setData({
      contact_phone: e.detail.value
    })
  },
  contactaddressInput: function (e) {
    this.setData({
      contact_addree: e.detail.value
    })
  },
  share: function () {
    var that = this;
    var shareshow = that.data.shareshow
    that.setData({
      shareshow: !that.data.shareshow
    })
  }, 
  getUserLocation: function () {
    let vm = this
    wx.getSetting({
      success: (res) => {
        // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
        // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
        // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
        // 拒绝授权后再次进入重新授权
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          // console.log('authSetting:status:拒绝授权后再次进入重新授权', res.authSetting['scope.userLocation'])
          wx.showModal({
            title: '',
            content: '【易物通】需要获取你的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                })
                setTimeout(() => {
                  wx.navigateBack()
                }, 1500)
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    // console.log('dataAu:success', dataAu)
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      //再次授权，调用wx.getLocation的API
                      vm.getLocation(dataAu)
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none'
                      })
                      setTimeout(() => {
                        wx.navigateBack()
                      }, 1500)
                    }
                  }
                })
              }
            }
          })
        }
        // 初始化进入，未授权
        else if (res.authSetting['scope.userLocation'] == undefined) {
          // console.log('authSetting:status:初始化进入，未授权', res.authSetting['scope.userLocation'])
          //调用wx.getLocation的API
          vm.getLocation(res)
        }
        // 已授权
        else if (res.authSetting['scope.userLocation']) {
          // console.log('authSetting:status:已授权', res.authSetting['scope.userLocation'])
          //调用wx.getLocation的API
          vm.getLocation(res)
        }
      }
    })
  },
  // 微信获得经纬度
  getLocation: function (userLocation) {
    let vm = this;
    wx.chooseLocation({
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        // console.log(latitude + "****" + longitude)
        vm.setData({
          contact_addree: res.address
        })
      },
      fail: function (res) {
        // console.log('getLocation:fail', res)
        if (res.errMsg === 'getLocation:fail:auth denied') {
          wx.showToast({
            title: '拒绝授权',
          })
          setTimeout(() => {
            wx.navigateBack()
          }, 1500)
          return
        }
        if (!userLocation || !userLocation.authSetting['scope.userLocation']) {
          vm.getUserLocation()
        } else if (userLocation.authSetting['scope.userLocation']) {
          wx.showModal({
            title: '',
            content: '请在系统设置中打开定位服务',
            showCancel: false,
            success: result => {
              if (result.confirm) {
                wx.navigateBack()
              }
            }
          })
        } else {
          wx.showToast({
            title: '授权失败',
            icon: 'none'
          })
          setTimeout(() => {
            wx.navigateBack()
          }, 1500)
        }
      }
    })
  },
  // location: function () {
  //   var that = this;
  //   wx.chooseLocation({
  //     success: function (res) {
  //       var latitude = res.latitude
  //       var longitude = res.longitude
  //       // console.log(latitude + "****" + longitude)
  //       that.setData({
  //         contact_addree: res.address
  //       })
  //     },
  //     fail:function(){
  //       wx.getSetting({
  //         success(res) {
  //           if (!res.authSetting['scope.userLocation']) {
  //             wx.authorize({
  //               scope: 'scope.userLocation',
  //               success() {
  //                 wx.chooseLocation({
  //                   success: function (res) {
  //                     var latitude = res.latitude
  //                     var longitude = res.longitude
  //                     // console.log(latitude + "****" + longitude)
  //                     that.setData({
  //                       contact_addree: res.address
  //                     })
  //                   },
  //                 })
  //                 console.log('success')
  //               },
  //               fail() {
  //                 console.log("fail")
  //               }
  //             })
  //           }
  //         }
  //       })
  //     }

  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
      dizhi: app.globalData.dizhi
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
    wx.request({
      url: app.globalData.url_old +'items/orders.do',
      data: {
        openid: app.globalData.openid,
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        app.globalData.listData = res.data;
      },
      fail: function (res) {
        console.log("获取订单错误")
      },
      complete: function (res) {
        wx.hideLoading()
      }

    })
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