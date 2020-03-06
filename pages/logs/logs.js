//logs.js
const util = require('../../utils/util.js')
var app = getApp();
Page({
  data: {
    logs: [],
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '../../pics/menu1.png'
      }, {
        link: '/pages/logs/logs',
        url: '../../pics/menu2.png'
      }, {
        link: '/pages/index/index',
        url: '../../pics/menu3.png'
      }
    ], 
    indicatorDots: true,  //小点

    autoplay: true,  //是否自动轮播

    interval: 3000,  //间隔时间

    duration: 3000,  //滑动时间
    navbarActiveIndex: 0,
    array: ['深圳', '广州', '义乌', '上海'],
    array1: ['美西', '美东','美中'],
    array2: ['深圳', '广州', '义乌', '上海', '宁波'],
    array3: ['海运', '海运（快船）','空运', '空运(直飞)', '空运(带电)'],
    array4: ['FTW1','CLT2','ONT8','LAX9','CVG3','LGB8'],
    array5: ['海运'],
    array6: ["", "普货", '箱包', '鞋子', "服饰", "成人用品", "车载电子", "平板", "手表", "机顶盒","3C类电子"],
    dateValue: '',
    navbarTitle: [
      "包税",
      "不包税",
    ],
    index6:0,
    default: '',
    default1: '',
    default2: '',
    default3: '',
    default4: '',
    default5: '',
    default6: '',
    country:'',
    //当前选中数组的下标值
    customIndex: [0, 0, 0],
    //当前选中数组
    onlyArray: [
      [],
      [],
      []
    ],
    //customArray
    customArray: [{
        name: '国家',
        dept: [{
            name: '美国',
            product: [
              {
                name: ''
              },{
                name: '美西'
              },
              {
                name: '美中'
              },
              {
                name: '美东'
              },
            ]
          },
          {
            name: '加拿大',
            product: [{
                name: '温哥华'
              },
              {
                name: '多伦多'
              },
              {
                name: '卡尔加多'
              },
              {
                name: '渥太华'
              },
            ]
          },
          {
            name: '欧洲',
            product: [{
              name: '英国'
            },{
              name: '法国'
            },
              {
                name: '德国'
              },{
                name: '卢森堡'
              },
             {
                 name: '荷兰'
             },
              {
                name: '比利时'
              },
              {
                name: '爱尔兰'
              },{
                name: '西班牙'
              },{
                name: '意大利'
              },{
                name: '奥地利',
              },{
                name: '丹麦'
              },{
                name: '捷克'
              },{
                name: '其他'
              }
           
          ]
          },
          {
            name: '亚太',
            product: [{
              name: '日本'
            }]
          }
        ]
      },
    ],
     //当前选中数组的下标值
     customIndex1: [0, 0, 0],
     //当前选中数组
     onlyArray1: [
       [],
       [],
       []
     ],
     //customArray
     customArray1: [{
         name: '国家',
         dept: [{
             name: '美国',
             product: [
               {
                 name: ''
               },{
                 name: 'FTW1'
               },
               {
                 name: 'ONT8'
               },
               {
                 name: 'LAX9'
               },
               {
                name: 'SMF3'
              },
              {
                name: 'MDW2'
              },
             ]
           },
           {
             name: '加拿大',
             product: [{
                 name: 'YVR'
               },
               {
                 name: 'YYZ'
               },
               {
                 name: 'YYC'
               },
               {
                 name: 'YOW'
               },
             ]
           },
           {
             name: '欧洲',
             product: [{
               name: '英国'
             },{
               name: '法国'
             },
               {
                 name: '德国'
               },{
                 name: '卢森堡'
               },
              {
                  name: '荷兰'
              },
               {
                 name: '比利时'
               },
               {
                 name: '爱尔兰'
               },{
                 name: '西班牙'
               },{
                 name: '意大利'
               },{
                 name: '奥地利',
               },{
                 name: '丹麦'
               },{
                 name: '捷克'
               },{
                 name: '其他'
               }
            
           ]
           },
           {
             name: '亚太',
             product: [{
               name: '日本'
             }]
           }
         ]
       },
     ],
  },
  /**
    * 点击导航栏
    */
  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex
    })
  },

  /**
   * 
   */
  onBindAnimationFinish: function ({ detail }) {
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: detail.current
    })
  },
  submit:function(e){
    wx.showLoading({
      title: '提交中'
    })
    var that = this;
    var items=[];
    if (that.data.qiyungang != "" && that.data.mudigang != "" && that.data.method != "" && that.data.catogory!=""){
      wx.request({
        url: app.globalData.url_old +'items/get_items.do',
        data: {
          qiyungang: that.data.qiyungang,
          mudigang: that.data.mudigang,
          method: that.data.method,
          date: that.data.default6,
          openid: app.globalData.openid,
          country:that.data.country,
          category: that.data.catogory
        },
        method:"POST",
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          console.log(res.data)
          for (var i = 0; i < res.data.length; i++) {
            items.push(res.data[i])
          }
          app.globalData.items = items
          wx.hideLoading()
          wx.navigateTo({
            url: '../items/items',
          })
        },
        fail: function (res) {
        },
      })
    }
    else{
      wx.showToast({
        image:"../../pics/error.png",
        title: '输入框不能为空',
      })
    }
      
    
    },
  daima:function(e){
      wx.navigateTo({
        url: '/pages/warehouse/warehouse',
      })
  },
 tejia:function(e){
   var items = []
   wx.request({
     url: app.globalData.url_old + 'items/redis_get.do',
     data: {},
     method: "POST",
     header: { 'content-type': 'application/x-www-form-urlencoded' },
     success: function (res) {
       for (var i = 0; i < res.data.length; i++) {
         items.push(res.data[i])
       }
       app.globalData.items = items
       wx.navigateTo({
         url: '../items/items',
       })
     },
     fail: function (res) {
     },
   })
 },

// 起运港
  bindPickerChange: function (e) {
    let index = e.detail.value
    let array = this.data.array
    if(e.detail.value ==0){
      this.setData({
        default: array[index],
        qiyungang: "深圳"
      })
    }
      if (e.detail.value == 1) {
        this.setData({
          default: array[index],
          qiyungang: "广州"
        })
      }
        if (e.detail.value == 2) {
          this.setData({
            default: array[index],
            qiyungang: "义乌"
          })
        }
        if (e.detail.value == 4) {
          this.setData({
            default: array[index],
            qiyungang: "宁波"
          })
    }
   
  },
  bindAddressChange:function(e){
    this.setData({
      index6: e.detail.value,
      catogory: this.data.array6[e.detail.value]
    })
    app.globalData.category = this.data.array6[e.detail.value]
  },
  // bindPickerChange1: function (e) {
  //   let index = e.detail.value
  //   let array = this.data.array1
  //     if (e.detail.value == 0) {
  //       this.setData({
  //         mudigang: "美西",
  //         default1: array[index],
  //       })
  //     }
  //       if (e.detail.value == 1) {
  //         this.setData({
  //           mudigang: "美东",
  //           default1: array[index],
  //         })
  //       }
  //         if (e.detail.value == 2) {
  //           this.setData({
  //             mudigang: "美中",
  //             default1: array[index],
  //           })
  //         }
  // },
  bindPickerChange2: function (e) {
    let index = e.detail.value
    let array = this.data.array2
    if (e.detail.value == 0) {
      this.setData({
        qiyungang: "深圳",
        default2: array[index],
      })
    }
    if (e.detail.value == 1) {
      this.setData({
        qiyungang: "广州",
        default2: array[index],
      })
    }
    if (e.detail.value == 2) {
      this.setData({
        qiyungang: "义乌",
        default2: array[index],
      })
    }
    if (e.detail.value == 3) {
      this.setData({
        qiyungang: "上海",
        default2: array[index],
      })
    }
    if (e.detail.value == 4) {
      this.setData({
        qiyungang: "宁波",
        default2: array[index],
      })
    }
  },
  bindPickerChange3: function (e) {
    let index = e.detail.value
    let array = this.data.array3
    if (e.detail.value == 0) {
      this.setData({
        method: "海派",
        default3: array[index],
      })
    
    }
    if (e.detail.value == 1) {
      this.setData({
        method: "美森",
        default3: array[index],
      })
    }
    if (e.detail.value == 2) {
      this.setData({
        method: "空派",
        default3: array[index],
      })
    }
    if (e.detail.value == 3) {
      this.setData({
        method: "空派(直飞)",
        default3: array[index],
      })
    }
    if (e.detail.value == 4) {
      this.setData({
        method: "空派(带电)",
        default3: array[index],
      })
    }
  },
  bindPickerChange4: function (e) {
    let index = e.detail.value
    let array = this.data.array4
    if (e.detail.value == 0) {
      this.setData({
        default4: array[index],
        mudigang: "FTW1"
      })
    }
      if (e.detail.value == 1) {
        this.setData({
          default4: array[index],
          mudigang: "CLT2"
        })
      }
        if (e.detail.value == 2) {
          this.setData({
            default4: array[index],
            mudigang: "ONT8"
          })
        }
          if (e.detail.value == 3) {
            this.setData({
              default4: array[index],
              mudigang: "LAX9"
            })
          }
            if (e.detail.value == 4) {
              this.setData({
                default4: array[index],
                mudigang: "CVG3"
              })
            }
              if (e.detail.value == 5) {
                this.setData({
                  default4: array[index],
                  mudigang: "LGB8"
                })
               }
  },
  bindPickerChange5: function (e) {
    let index = e.detail.value
    let array = this.data.array5
    if (e.detail.value == 0) {
      this.setData({
        default5: array[index],
        method: "海卡"
      })
    }
  }, 
  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex
    })
  },
  //多列自定义选择器改变value的方法
  bindCustomPickerChange: function(e) {
    var customArray = this.data.customArray,
      customIndex = this.data.customIndex,
      onlyArray = this.data.onlyArray;

    console.log('picker发送选择改变，携带值为', e.detail.value);
    //此处e.detail.value为当前选择的列的下标值数组，如[0,1,0]
    
    console.log('picker最终选择值为：', onlyArray[0][customIndex[0]], onlyArray[1][customIndex[1]], onlyArray[2][customIndex[2]]);
    this.setData({
      customIndex: e.detail.value
    })
  },

  //多列自创选择器换列方法
  bindCustomPickerColumnChange: function(e) {
    var customArray = this.data.customArray,
      customIndex = this.data.customIndex,
      onlyArray = this.data.onlyArray;

    customIndex[e.detail.column] = e.detail.value;
    // console.log(onlyArray);
      
    var searchColumn = () => {
      for (var i = 0; i < customArray.length; i++) {
        var arr1 = [];
        var arr2 = [];
        if (i == customIndex[0]) {
          for (var j = 0; j < customArray[i].dept.length; j++) {
            arr1.push(customArray[i].dept[j].name);
            if (j == customIndex[1]) {
              for (var k = 0; k < customArray[i].dept[j].product.length; k++) {
                arr2.push(customArray[i].dept[j].product[k].name);
              }
              onlyArray[2] = arr2;
            }
          }
          onlyArray[1] = arr1;
        }
      };
    }
    switch (e.detail.column) {
      case 0:
        customIndex[1] = 0;
        customIndex[2] = 0;
        searchColumn();
        break;
      case 1:
        customIndex[2] = 0;
        searchColumn();
        break;
    }
    var dest=this.data.onlyArray[2][customIndex[2]]
    var country=this.data.onlyArray[1][customIndex[1]]
    this.setData({
      onlyArray: onlyArray,
      customIndex: customIndex,
      mudigang:dest,
      country:country
    });
  },

   //多列自定义选择器改变value的方法
   bindCustomPickerChange1: function(e) {
    var customArray = this.data.customArray,
      customIndex = this.data.customIndex1,
      onlyArray = this.data.onlyArray1;

    console.log('picker发送选择改变，携带值为', e.detail.value);
    //此处e.detail.value为当前选择的列的下标值数组，如[0,1,0]
    
    console.log('picker最终选择值为：', onlyArray[0][customIndex[0]], onlyArray[1][customIndex[1]], onlyArray[2][customIndex[2]]);
    this.setData({
      customIndex1: e.detail.value
    })
  },

  //多列自创选择器换列方法
  bindCustomPickerColumnChange1: function(e) {
    var customArray = this.data.customArray1,
      customIndex = this.data.customIndex1,
      onlyArray = this.data.onlyArray1;

    customIndex[e.detail.column] = e.detail.value;
    // console.log(onlyArray);
      
    var searchColumn = () => {
      for (var i = 0; i < customArray.length; i++) {
        var arr1 = [];
        var arr2 = [];
        if (i == customIndex[0]) {
          for (var j = 0; j < customArray[i].dept.length; j++) {
            arr1.push(customArray[i].dept[j].name);
            if (j == customIndex[1]) {
              for (var k = 0; k < customArray[i].dept[j].product.length; k++) {
                arr2.push(customArray[i].dept[j].product[k].name);
              }
              onlyArray[2] = arr2;
            }
          }
          onlyArray[1] = arr1;
        }
      };
    }
    switch (e.detail.column) {
      case 0:
        customIndex[1] = 0;
        customIndex[2] = 0;
        searchColumn();
        break;
      case 1:
        customIndex[2] = 0;
        searchColumn();
        break;
    }
    var dest=this.data.onlyArray1[2][customIndex[2]]
    var country=this.data.onlyArray1[1][customIndex[1]]
    this.setData({
      onlyArray1: onlyArray,
      customIndex1: customIndex,
      mudigang:dest,
      country:country
    });
  },
  onLoad: function () {
    wx.login({
      success: function (res) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          // console.log('获取用户登录态success！' + res.code)
          app.globalData.code = res.code
        } else {
          // console.log('获取用户登录态失败！' + res.errMsg)
        }
        app.getOpenId(app.globalData.code)
      },
      complete: function () {
        var that = this;
        wx.getUserInfo({
          success: function (res) {
            app.globalData.userInfo = res.userInfo;
            setTimeout(function () {
              wx.switchTab({
                url: '../logs/logs',
              })
            }, 2000)
          },
          fail(err) {
            console.log(err, '获取用户信息失败')
            wx.showModal({
              title: '警告',
              content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确认')
                  wx.navigateTo({
                    url: '../index/index',
                  })
                }
              },
            })
          },
        })
      }
    })

    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    var data1 = {
      customArray1: this.data.customArray1,
      customIndex1: this.data.customIndex1,
      onlyArray1: this.data.onlyArray1,
    };
    for (var i = 0; i < data1.customArray1.length; i++) {
      data1.onlyArray1[0].push(data1.customArray1[i].name);
    }
    for (var j = 0; j < data1.customArray1[data1.customIndex1[0]].dept.length; j++) {
      data1.onlyArray1[1].push(data1.customArray1[data1.customIndex1[0]].dept[j].name);
    }
    for (var k = 0; k < data1.customArray1[data1.customIndex1[0]].dept[data1.customIndex1[1]].product.length; k++) {
      data1.onlyArray1[2].push(data1.customArray1[data1.customIndex1[0]].dept[data1.customIndex1[1]].product[k].name);
    }
    this.setData(data1);
    var data = {
      customArray: this.data.customArray,
      customIndex: this.data.customIndex,
      onlyArray: this.data.onlyArray,
    };
    for (var i = 0; i < data.customArray.length; i++) {
      data.onlyArray[0].push(data.customArray[i].name);
    }
    for (var j = 0; j < data.customArray[data.customIndex[0]].dept.length; j++) {
      data.onlyArray[1].push(data.customArray[data.customIndex[0]].dept[j].name);
    }
    for (var k = 0; k < data.customArray[data.customIndex[0]].dept[data.customIndex[1]].product.length; k++) {
      data.onlyArray[2].push(data.customArray[data.customIndex[0]].dept[data.customIndex[1]].product[k].name);
    }
    this.setData(data);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      default: "",
      default1: "",
      default2: "",
      default3: "",
      default4: "",
      default5: "",
      qiyungang: "",
      mudigang: "",
      method: "",
      default6: "",
      index6:0
    })
    wx.requestSubscribeMessage({
      tmplIds: ['JRvb4SxI-nkJxR4btyd3KWWG9trZohOfCeykxBvuQbs'],
      success(res) { }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    // this.toLowFun()
    
  },
})
