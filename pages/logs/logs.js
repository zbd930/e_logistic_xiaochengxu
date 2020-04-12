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
    array8: ['韩国', '日本', '美国', '荷兰', '俄罗斯', '意大利', '英国'],
    array7: ["", "普货", '箱包', '鞋子', "服饰", "成人用品", "车载电子", "平板", "手表", "机顶盒","3C类电子"],
    dateValue: '',
    navbarTitle: [
      "包税",
      "不包税",
      "小包",
      "快递",
    ],
    index6:0,
    weight:'',
    volume:'',
    default: '',
    default1: '',
    default2: '',
    default3: '',
    default4: '',
    default5: '',
    default6: '',
    country:'',
    dest_country:'',
    mudiguo:'',
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
      //当前选中数组的下标值
      customIndex2: [0, 0, 0],
      //当前选中数组
      onlyArray2: [
        [],
        [],
        []
      ],
      //customArray
      customArray2: [{
          name: '国家',
          dept: [
            {
              name: '一区',
              product: [
                {
                  name: ''
                },{
                  name: '中国澳门'
                },
                {
                  name: '中国香港'
                },
                {
                  name: '中国台湾'
                },
              ]
            },
            {
              name: '二区',
              product: [{
                  name: '朝鲜'
                },
                {
                  name: '韩国'
                },
                {
                  name: '日本'
                }
              ]
            },
            {
              name: '三区',
              product: [{
                name: '菲律宾'
              },{
                name: '柬埔寨'
              },
                {
                  name: '马来西亚'
                },{
                  name: '蒙古'
                },
               {
                   name: '泰国'
               },
                {
                  name: '新加坡'
                },
                {
                  name: '印度尼西亚'
                },{
                  name: '越南'
                }
            ]
            },
            {
              name: '四区',
              product: [{
                name: '澳大利亚'
              },{
                name: '巴布亚新几内亚'
              },{
                name: '新西兰'
              }]
            },
            {
              name: '五区',
              product: [{
                name: '美国'
              }]
            },
            {
              name: '六区',
              product: [{
                name: '新西兰'
              },{
                name: '奥地利'
              },{
                name: '比利时'
              },{
                name: '丹麦'
              },{
                name: '德国'
              },{
                name: '法国'
              },{
                name: '芬兰'
              },{
                name: '荷兰'
              },{
                name: '加拿大'
              },{
                name: '卢森堡'
              },{
                name: '马耳他'
              },{
                name: '南非'
              },{
                name: '挪威'
              },{
                name: '葡萄牙'
              },{
                name: '瑞典'
              },{
                name: '瑞士'
              },{
                name: '西班牙'
              },{
                name: '希腊'
              },{
                name: '意大利'
              },{
                name: '英国'
              }]
            },
            {
              name: '七区',
              product: [{
                name: '巴基斯坦'
              },{
                name: '老挝'
              },{
                name: '孟加拉国'
              },{
                name: '尼泊尔'
              },{
                name: '斯里兰卡'
              },{
                name: '土耳其'
              },{
                name: '印度'
              }]
            },
            {
              name: '八区',
              product: [{
                name: '阿根廷'
              },{
                name: '阿联酋'
              },{
                name: '巴拿马'
              },{
                name: '巴西'
              },{
                name: '白俄罗斯'
              },{
                name: '波兰'
              },{
                name: '俄罗斯'
              },{
                name: '哥伦比亚'
              },{
                name: '古巴'
              },{
                name: '圭亚那'
              },{
                name: '捷克'
              },{
                name: '秘鲁'
              },{
                name: '墨西哥'
              },{
                name: '乌克兰'
              },{
                name: '匈牙利'
              },{
                name: '以色列'
              },{
                name: '约旦'
              },{
                name: '乌拉圭'
              },{
                name: '黎巴嫩'
              }]
            },
            {
              name: '九区',
              product: [{
                name: '阿曼'
              },{
                name: '埃及'
              },{
                name: '埃塞俄比亚'
              },{
                name: '阿塞拜疆'
              },{
                name: '爱沙尼亚'
              },{
                name: '巴林'
              },{
                name: '保加利亚'
              },{
                name: '布基纳法索'
              },{
                name: '博茨瓦纳'
              },{
                name: '刚果（布）'
              },{
                name: '刚果（金）'
              },{
                name: '哈萨克斯坦'
              },{
                name: '吉布提'
              },{
                name: '几内亚'
              },{
                name: '加纳 加蓬'
              },{
                name: '卡塔尔'
              },{
                name: '开曼群岛'
              },{
                name: '科特迪瓦'
              },{
                name: '科威特'
              },{
                name: '克罗地亚'
              },{
                name: '肯尼亚'
              },{
                name: '拉脱维亚'
              },{
                name: '卢旺达'
              },{
                name: '罗马尼亚'
              },{
                name: '马达加斯加'
              },{
                name: '马里'
              },{
                name: '摩洛哥'
              },{
                name: '莫森比克'
              },{
                name: '尼日尔'
              },{
                name: '尼日利亚'
              },{
                name: '塞内加尔'
              },{
                name: '塞浦路斯'
              },{
                name: '沙特阿拉伯'
              },{
                name: '突尼斯'
              },{
                name: '乌兹别克斯坦'
              },{
                name: '乌干达'
              },{
                name: '叙利亚'
              },{
                name: '伊朗'
              },{
                name: '伊拉克'
              },{
                name: '乍得'
              },{
                name: '阿尔及利亚'
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
    //包税或海卡渠道
    if (that.data.qiyungang != "" && that.data.mudigang != "" && that.data.method != "" && that.data.catogory!=""&&that.data.navbarActiveIndex==1||that.data.navbarActiveIndex==0){
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
    // else if(that.data.qiyungang == "" || that.data.mudigang == "" || that.data.method == "" || that.data.catogory==""&&that.data.navbarActiveIndex==1||that.data.navbarActiveIndex==0){
    //   wx.showToast({
    //     image:"../../pics/error.png",
    //     title: '输入框不能为空',
    //   })
    // }
    //小包或者快递渠道
    else if(that.data.weight!=""&&that.data.volume!=""&&that.data.navbarActiveIndex==2||that.data.navbarActiveIndex==3&&that.data.mudiguo!=''){
      wx.request({
        url: app.globalData.url_old +'items/get_xiaobao.do',
        data: {
          qiyungang: that.data.qiyungang,
          mudiguo: that.data.mudiguo,
          weight: that.data.weight,
          volume: that.data.volume,
        },
        method:"POST",
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          app.globalData.qiyungang=that.data.qiyungang,
          app.globalData.mudiguo=that.data.mudiguo,
          app.globalData.xiaobao_weight=that.data.weight,
          app.globalData.xiaobao_volumn=that.data.volume
          for (var i = 0; i < res.data.length; i++) {
            items.push(res.data[i])
          }
          app.globalData.items = items
          wx.hideLoading()
          wx.navigateTo({
            url: '../xiaobao/xiaobao',
          })
        
        },
        fail: function (res) {
        },
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
//重量
weightInput:function(e){
  this.setData({
    weight:e.detail.value
  })
},
//体积
volumeInput:function(e){
  this.setData({
    volume:e.detail.value
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
  //小包目的国
  bindPickerChange8: function (e) {
    let array = this.data.array8
    this.setData({
      mudiguo:array[e.detail.value]
    })
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
  //多列自定义选择器改变value的方法
  bindCustomPickerChange2: function(e) {
    var customArray = this.data.customArray2,
      customIndex = this.data.customIndex2,
      onlyArray = this.data.onlyArray2;
    console.log('picker发送选择改变，携带值为', e.detail.value);
    //此处e.detail.value为当前选择的列的下标值数组，如[0,1,0]
    
    console.log('picker最终选择值为：', onlyArray[0][customIndex[0]], onlyArray[1][customIndex[1]], onlyArray[2][customIndex[2]]);
    this.setData({
      customIndex2: e.detail.value
    })
  },

  //多列自创选择器换列方法
  bindCustomPickerColumnChange2: function(e) {
    var customArray = this.data.customArray2,
      customIndex = this.data.customIndex2,
      onlyArray = this.data.onlyArray2;

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
    var dest_country=this.data.onlyArray2[2][customIndex[2]]
    var final_country=this.data.onlyArray2[1][customIndex[1]]
    this.setData({
      onlyArray2: onlyArray,
      customIndex2: customIndex,
      dest_country:dest_country,
      final_country:final_country
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
        wx.showLoading({
          title: '加载中',
        })
      },
      complete: function () {
        var that = this;
        wx.getUserInfo({
          success: function (res) {
            app.globalData.userInfo = res.userInfo;
            if(app.globalData.encryptedData==""&&app.globalData.iv==""){
              setTimeout(function(){
                app.getunionId(app.globalData.code,app.globalData.encryptedData,app.globalData.iv)
              },3000)
            }else{
              app.getunionId(app.globalData.code,app.globalData.encryptedData,app.globalData.iv)
            } 
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
    // 小包
    var data2 = {
      customArray2: this.data.customArray2,
      customIndex2: this.data.customIndex2,
      onlyArray2: this.data.onlyArray2,
    };
    for (var i = 0; i < data2.customArray2.length; i++) {
      data2.onlyArray2[0].push(data2.customArray2[i].name);
    }
    for (var j = 0; j < data2.customArray2[data2.customIndex2[0]].dept.length; j++) {
      data2.onlyArray2[1].push(data2.customArray2[data2.customIndex2[0]].dept[j].name);
    }
    for (var k = 0; k < data2.customArray2[data2.customIndex2[0]].dept[data2.customIndex2[1]].product.length; k++) {
      data2.onlyArray2[2].push(data2.customArray2[data2.customIndex2[0]].dept[data2.customIndex2[1]].product[k].name);
    }
    this.setData(data2);
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
      mudiguo: "",
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
