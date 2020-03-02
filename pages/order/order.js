// pages/mine/mine.js
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
    listData: [],
    navbarActiveIndex: 0,
    navbarTitle: [
      "未入仓",
      "进行中",
      "待评价",
      "已完成",
    ],
    id:0,
    num: 4,//后端给的分数，显示的星星
    one_1: '',//点亮的星星数
    two_1: '',//没有点亮的星星数
    one_2: 0,//点亮的星星数
    two_2: 5,//没有点亮的星星数
    sentence: '',
    show: false,
    backgroundVisible: false,
    animation: animation,
    bg: 'background',
    service: "",
    service_value: [],
    postid: '',
    address_id:"",
    user_id:"",
    context:"",
    numbers:""
  },
  /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
  toLowFun() { 
    this.load()
  },
  load:function(e){
    var that = this;
    wx.request({
      url: app.globalData.url_old + 'items/orders.do',
      data: {
        openid: app.globalData.openid,
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        app.globalData.listData=res.data;
        // that.setData({
        //   listData:res.data
        // })
      },
      fail: function (res) {
        console.log("获取订单错误")
      },
      complete: function (res) {
          wx.hideNavigationBarLoading() //完成停止加载
          wx.stopPullDownRefresh() //停止下拉刷新
      }
    })

  },
  dianzan: function (e) {
    console.log
    var that = this
    wx.request({
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        topicid: that.data.user_id,
        openid: that.data.numbers,
      },
      url: app.globalData.url_old + 'dianzan/add.do',
      success: function (e) {
        // that.setData({
        //   like: e.data
        // })
      },
      complete:function(){
        wx.showToast({
          title: '点赞成功',
        })
      }
    })
  },
  text:function(e){
    console.log(e)
      this.setData({
        context:e.detail.value,
      })
  },
  userCheck: function (e) {
    let index = e.currentTarget.dataset.id;//获取用户当前选中的索引值
    let checkBox = this.data.items;
    if (checkBox[index].checked) {
      this.data.items[index].checked = false;
    } else {
      this.data.items[index].checked = true;
    }
    this.setData({ items: this.data.items })

    //返回用户选中的值
    let value = checkBox.filter((item, index) => {
      return item.checked == true;
    })
    console.log(value);
    this.setData({
      service_value: value
    })
  },
  select_use: function (e) {
    let index = e.currentTarget.dataset.id;//获取用户当前选中的索引值
    let checkBox = this.data.items1;
    if (checkBox[index].checked) {
      this.data.items1[index].checked = false;
    } else {
      this.data.items1[index].checked = true;
    }
    this.setData({ items1: this.data.items1 })

    //返回用户选中的值
    let value = checkBox.filter((item, index) => {
      return item.checked == true;
    })
    console.log(value)
    this.setData({
      service_value: value
    })

  },
  showModel: function (e) {
    this.setData({
      address_id:e.currentTarget.dataset.id,
      user_id:e.currentTarget.dataset.number,
      numbers:e.currentTarget.dataset.numbers,
      order: e.currentTarget.dataset.order,
    }) 
    moveY = 0;
    action = 'show';
    animationEvents(this, moveY, action);
  },
  //隐藏弹窗浮层
  hidden() {
    moveY = 200;
    action = 'hide';
    animationEvents(this, moveY, action);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  radioChange: function (e) {
    var that = this;
    console.log(e)
    var result = e.detail.value;
    if (result == 'bad') {
      that.setData({
        service: "bad",
      })
    } else if (result == 'normal') {
      that.setData({
        service: 'normal',
      })
    }
    else if (result == 'good') {
      that.setData({
        service: 'good',
      })
    }
  },
  in_xin: function (e) {
    var in_xin = e.currentTarget.dataset.in;
    var one_2;
    if (in_xin == 'star') {
      one_2 = Number(e.currentTarget.id)
    } else {
      one_2 = Number(e.currentTarget.id) + this.data.one_2
    }
    switch (one_2) {
      case 0:
        this.setData({
          sentence: "待评分"
        })
        break;
      case 1:
        this.setData({
          sentence: "非常不满意,差"
        })
        break;
      case 2:
        this.setData({
          sentence: "不满意，比较差"
        })
        break;
      case 3:
        this.setData({
          sentence: "一般般，有待改进"
        })
        break;
      case 4:
        this.setData({
          sentence: "比较满意，任需改进"
        })
        break;
      case 5:
        this.setData({
          sentence: "非常满意，再接再厉"
        })
        break;
    }
    this.setData({
      one_2: one_2,
      two_2: 5 - one_2
    })

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
  jump:function(e){
    if (e.currentTarget.dataset.id != null) {
      app.globalData.history_order = e.currentTarget.dataset.id;
      app.pic_id = e.currentTarget.dataset.id.orders[0].numbers
      wx.navigateTo({
        url: '../detail/detail',
      })
    }
  },
  submit:function(){
    var that=this;
    wx.request({
      url: app.globalData.url_old + 'comments/insert_comments.do',
      data: {
        star: this.data.one_2,
        address_id:this.data.address_id,
        user_id:this.data.user_id,
        comments_text:this.data.context,
        order:this.data.order
      },
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8', },
      success: function (res) {
        console.log(res)
      },
      complete:function(res){
        app.load_order()
        wx.showToast({
          title: '提交成功',
          success:function(){
          },
          complete:function(){
            setTimeout(function(){
              that.hidden()
              wx.switchTab({
                url: '../logs/logs',
              },3000)
            })
          }
        })
        
      }
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
    if (app.globalData.status !== null) {
      this.setData({
        navbarActiveIndex: app.globalData.status
      })
    }
    this.setData({
      listData: app.globalData.listData,
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
      this.setData({
        one_2:0,
        context:"",
        sentence:"",
        comments_text:""
      })
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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.toLowFun()
    
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