// pages/detail/detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history_order:"",
    fapiao: "",
    xiangdan: "",
    hetong: "",
    baoguan: "",
    imgArr:""
  },
  upload:function(e){
   wx.navigateTo({
      url: '/pages/upload/upload?order='+e.currentTarget.dataset.order,
   })   
  },
 fapiao:function(e){
   var that=this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        //将图片路径循环赋值给filePath参数
        for (var i = 0; i < res.tempFilePaths.length; i++) {

          var imgUrl = res.tempFilePaths[i];

          wx.uploadFile({
            //上传图片的网路请求地址
            url: app.globalData.url_old +'upload/upload.do',
            //选择
            filePath: imgUrl,
            name: 'file',
            formData: {
              // id: that.data.history_order.id,
              number: that.data.history_order.orders[0].numbers,
            },
            success: function (res) {
              wx.showModal({
                title: '结果',
                content: res.data,
                success:function(){
                  if (res.data=="上传成功") {
                    that.setData({
                      fapiao: imgUrl
                    })
                  }
                }
              })
              
            },

            fail: function (res) {
              console.log("error");
            }
          });

        }//for循环结束

      }
    });

    console.log("****正在添加图片*****");

  },
  xiangdan: function (e) {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        //将图片路径循环赋值给filePath参数
        for (var i = 0; i < res.tempFilePaths.length; i++) {

          var imgUrl = res.tempFilePaths[i];

          wx.uploadFile({
            //上传图片的网路请求地址
            url: app.globalData.url_old + 'upload/upload1.do',
            //选择
            filePath: imgUrl,
            name: 'file',
            formData: {
              number: that.data.history_order.orders[0].numbers,
            },
            success: function (res) {
              wx.showModal({
                title: '结果',
                content: res.data,
                success: function () {
                  if (res.data=="上传成功") {
                    that.setData({
                      xiangdan: imgUrl
                    })
                  }
                }
              })

            },

            fail: function (res) {
              console.log("error");
            }
          });

        }//for循环结束

      }
    });

    console.log("****正在添加图片*****");

  },
  baoguan: function (e) {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        //将图片路径循环赋值给filePath参数
        for (var i = 0; i < res.tempFilePaths.length; i++) {

          var imgUrl = res.tempFilePaths[i];

          wx.uploadFile({
            //上传图片的网路请求地址
            url: app.globalData.url_old + 'upload/upload2.do',
            //选择
            filePath: imgUrl,
            name: 'file',
            formData: {
              number: that.data.history_order.orders[0].numbers,
            },
            success: function (res) {
              wx.showModal({
                title: '结果',
                content: res.data,
                success: function () {
                  if (res.data=="上传成功") {
                    that.setData({
                      baoguan: imgUrl
                    })
                  }
                }
              })

            },

            fail: function (res) {
              console.log("error");
            }
          });

        }//for循环结束

      }
    });

    console.log("****正在添加图片*****");

  },
  hetong: function (e) {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        //将图片路径循环赋值给filePath参数
        for (var i = 0; i < res.tempFilePaths.length; i++) {

          var imgUrl = res.tempFilePaths[i];

          wx.uploadFile({
            //上传图片的网路请求地址
            url: app.globalData.url_old + 'upload/upload3.do',
            //选择
            filePath: imgUrl,
            name: 'file',
            formData: {
              number: that.data.history_order.orders[0].numbers,
            },
            success: function (res) {
              wx.showModal({
                title: '结果',
                content: res.data,
                success: function () {
                  if (res.data=="上传成功"){
                    that.setData({
                      hetong: imgUrl
                    })
                  }
                }
              })

            },

            fail: function (res) {
              console.log("error");
            }
          });

        }//for循环结束

      }
    });

    console.log("****正在添加图片*****");

  },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
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
      history_order: app.globalData.history_order,
      fapiao: app.globalData.url_old + "fapiao/" + app.pic_id + ".jpg",
      xiangdan: app.globalData.url_old + "xiangdan/" + app.pic_id + ".jpg",
      hetong: app.globalData.url_old + "hetong/" + app.pic_id + ".jpg",
      baoguan: app.globalData.url_old + "baoguan/" + app.pic_id + ".jpg",
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