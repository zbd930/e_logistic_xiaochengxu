// pages/comfirm/comfirm.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items_index: {
      },
    seleted_address:{},
    ctn:"",
    weight:"",
    volume:"",
    area:"",
    dateValue:"",
    dest:"",
    totalprice:"",
    dizhi:"",
    switch1Checked: false,
    switch1Style: '',
    fromLng:"",
    fromLat:"",
    toLat: [0],
    toLng:[0],
    total:"" ,
    flag:true,
    temple:0,
    category: "",
    method:'',
    array: ['请选择', 'ABE2', 'ABE3', 'ABE5', 'ABE8', 'AVP1', 'AVP3', 'ACY2', 'ATL6', 'BNA1', 'BNA2', 'BNA3', 'BNA4', 'BOS1', 'BWI1', 'BWI2', 'BOS2', 'BOS7', 'BDL2', 'CLT2', 'CLT3', 'CAE1', 'CHA1', 'CHA2', 'JFK8', 'JAX3', 'LAL1','MCO1','MEM1', 'MIA1', 'MDT1', 'MGE3', 'PHL1', 'PHL3', 'PHL7', 'PHL4', 'PHL5', 'PHL6', 'PIT1','SAV3', 'RIC1', 'RIC2', 'RIC3','TPA1','TPA2','VUBA','VUGA','XUSC','GSP1','其他（请在备注填写邮编）'],
    array1: ['请选择', 'ACT1', 'BFI1', 'BFI3', 'BFI4', 'BFI5', 'BFI7', 'DEN3', 'EWR4', 'LAX9', 'LGB3', 'LGB4', 'LGB6', 'LGB7', 'LGB8', 'LAS1', 'LAS2', 'LGA9', 'ONT2', 'ONT6', 'ONT7', 'ONT8', 'ONT9', 'OAK3', 'OAK4', 'PHX3', 'PHX5', 'PHX6', 'PHX7', 'PDX6', 'PDX7', 'RNO1', 'RNO2', 'RNO4', 'SNA4', 'SJC7', 'SLC3', 'SMF1', 'SMF3', 'SEA6', 'SEA8', 'SJC8', 'TEB3', 'TEB6', 'XUSD','其他(请在备注填写邮编)'],
    array2: ['请选择', 'BDL1', 'CVG1', 'CVG2', 'CVG3', 'CVG5', 'CMH1', 'CMH2', 'DET1', 'DET2', 'DFW6', 'DFW7', 'DFW8', 'EWR5', 'EWR7', 'EWR9', 'FTW1', 'FTW2', 'IND1', 'IND2', 'IND3', 'IND4', 'IND5', 'IND6', 'IND9', 'LEX1', 'LEX2', 'MKE1', 'MDW2', 'MDW6', 'MCI1', 'MKC4', 'MSP1', 'MKC6', 'MDW7', 'MDW8', 'MDW9', 'OKC1', 'SDF1', 'SDF2', 'SDF4', 'SDF6', 'SDF7', 'SDF9', 'SAT1', 'SDF8', 'STL4', 'TUL1','HOU1', 'HOU2', 'HOU3',  '其他(请在备注填写邮编)'],
    array3: ["", "普货", '箱包', '鞋子', "服饰", "成人用品", "车载电子", "平板", "手表", "机顶盒","3C类电子"],
    multiArray: [['美国'], ['请选择','美东', '美西', '美中'], ['请选择', 'ABE2', 'ABE3', 'ABE5', 'ABE8', 'AVP1', 'AVP3', 'ACY2', 'ATL6', 'BNA1', 'BNA2', 'BNA3', 'BNA4', 'BOS1', 'BWI1', 'BWI2', 'BOS2', 'BOS7', 'BDL2', 'CLT2', 'CLT3', 'CAE1', 'CHA2', 'JFK8', 'JAX3', 'LAL1','MCO1','MEM1', 'MIA1', 'MDT1', 'MGE3', 'PHL1', 'PHL3', 'PHL7', 'PHL4', 'PHL5', 'PHL6', 'PIT1','SAV3', 'RIC1', 'RIC2', 'RIC3','TPA1','TPA2','VUBA','VUGA','XUSC','GSP1','其他（请在备注填写邮编）']],
    objectMultiArray: [
      [{id: 0,name: '美国'}], [{id: 0,name: '美东'},{id: 1,name: '美西' },{id: 2,name: '美中'}], 
      [{id: 0,name: '请选择'},{id: 1,name: 'ABE2'},{id: 2,name: 'ABE3'},{id: 3,name: 'ABE5'}
      ,{id: 4,name: 'ABE8'},{id: 5,name: 'AVP1'},{id: 6,name: 'AVP3'},{id: 7,name: 'ACY2'}
      ,{id: 8,name: 'ATL6'},{id: 9,name: 'BNA1'},{id: 10,name: 'BNA2'},{id: 11,name: 'BNA3'}
      ,{id: 12,name: 'BNA4'},{id: 13,name: 'BOS1'},{id: 14,name: 'BWI1'},{id: 15,name: 'BWI2'}
      ,{id: 16,name: 'BOS2'},{id: 17,name: 'BOS7'},{id: 18,name: 'BDL2'},{id: 19,name: 'CLT2'}
      ,{id: 20,name: 'CLT3'},{id: 21,name: 'CAE1'},{id: 22,name: 'CHA1'},{id: 23,name: 'CHA2'}
      ,{id: 24,name: 'JFK8'},{id: 25,name: 'JAX3'},{id: 26,name: 'LAL1'},{id: 27,name: 'MCO1'}
      ,{id: 28,name: 'MEM1'},{id: 29,name: 'MIA1'},{id: 30,name: 'MDT1'},{id: 31,name: 'MGE3'}
      ,{id: 32,name: 'PHL1'},{id: 33,name: 'PHL3'},{id: 34,name: 'PHL7'},{id: 35,name: 'PHL4'}
      ,{id: 36,name: 'PHL5'},{id: 37,name: 'PHL6'},{id: 38,name: 'PIT1'},{id: 39,name: 'SAV3'}
      ,{id: 40,name: 'RIC1'},{id: 41,name: 'RIC2'},{id: 42,name: 'RIC3'},{id: 43,name: 'TPA1'}
      ,{id: 44,name: 'TPA2'},{id: 45,name: 'VUBA'},{id: 46,name: 'VUGA'},{id: 47,name: 'XUSC'}
      ,{id: 48,name: 'GSP1'},{id: 49,name: '其他（请在备注填写邮编）'}]
    ],
    multiIndex: [0, 0,0],
    default: '',
    default1: '',
    default2: '',
    index: 0
  },
  bindMultiPickerChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['请选择','美东', '美西', '美中'];
            data.multiArray[2] = ['请选择', 'ABE2', 'ABE3', 'ABE5', 'ABE8', 'AVP1', 'AVP3', 'ACY2', 'ATL6', 'BNA1', 'BNA2', 'BNA3', 'BNA4', 'BOS1', 'BWI1', 'BWI2', 'BOS2', 'BOS7', 'BDL2', 'CLT2', 'CLT3', 'CAE1', 'CHA1', 'CHA2', 'JFK8', 'JAX3', 'LAL1','MCO1','MEM1', 'MIA1', 'MDT1', 'MGE3', 'PHL1', 'PHL3', 'PHL7', 'PHL4', 'PHL5', 'PHL6', 'PIT1','SAV3', 'RIC1', 'RIC2', 'RIC3','TPA1','TPA2','VUBA','VUGA','XUSC','GSP1','其他（请在备注填写邮编）'];
            break;
          case 1:
            data.multiArray[1] = ['请选择','美东', '美西', '美中'];
            data.multiArray[2] = ['请选择', 'ACT1', 'BFI1', 'BFI3', 'BFI4', 'BFI5', 'BFI7', 'DEN3', 'EWR4', 'LAX9', 'LGB3', 'LGB4', 'LGB6', 'LGB7', 'LGB8', 'LAS1', 'LAS2', 'LGA9', 'ONT2', 'ONT6', 'ONT7', 'ONT8', 'ONT9', 'OAK3', 'OAK4', 'PHX3', 'PHX5', 'PHX6', 'PHX7', 'PDX6', 'PDX7', 'RNO1', 'RNO2', 'RNO4', 'SNA4', 'SJC7', 'SLC3', 'SMF1', 'SMF3', 'SEA6', 'SEA8', 'SJC8', 'TEB3', 'TEB6', 'XUSD','其他(请在备注填写邮编)'];
            break;
            case 2:
            data.multiArray[1] = ['请选择','美东', '美西', '美中'];
            data.multiArray[2] = ['请选择', 'BDL1', 'CVG1', 'CVG2', 'CVG3', 'CVG5', 'CMH1', 'CMH2', 'DET1', 'DET2', 'DFW6', 'DFW7', 'DFW8', 'EWR5', 'EWR7', 'EWR9', 'FTW1', 'FTW2', 'IND1', 'IND2', 'IND3', 'IND4', 'IND5', 'IND6', 'IND9', 'LEX1', 'LEX2', 'MKE1', 'MDW2', 'MDW6', 'MCI1', 'MKC4', 'MSP1', 'MKC6', 'MDW7', 'MDW8', 'MDW9', 'OKC1', 'SDF1', 'SDF2', 'SDF4', 'SDF6', 'SDF7', 'SDF9', 'SAT1', 'SDF8', 'STL4', 'TUL1','HOU1', 'HOU2', 'HOU3',  '其他(请在备注填写邮编)'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['请选择', 'ABE2', 'ABE3', 'ABE5', 'ABE8', 'AVP1', 'AVP3', 'ACY2', 'ATL6', 'BNA1', 'BNA2', 'BNA3', 'BNA4', 'BOS1', 'BWI1', 'BWI2', 'BOS2', 'BOS7', 'BDL2', 'CLT2', 'CLT3', 'CAE1', 'CHA1', 'CHA2', 'JFK8', 'JAX3', 'LAL1','MCO1','MEM1', 'MIA1', 'MDT1', 'MGE3', 'PHL1', 'PHL3', 'PHL7', 'PHL4', 'PHL5', 'PHL6', 'PIT1','SAV3', 'RIC1', 'RIC2', 'RIC3','TPA1','TPA2','VUBA','VUGA','XUSC','GSP1','其他（请在备注填写邮编）'];
                break;
              case 1:
                data.multiArray[2] = ['请选择', 'ACT1', 'BFI1', 'BFI3', 'BFI4', 'BFI5', 'BFI7', 'DEN3', 'EWR4', 'LAX9', 'LGB3', 'LGB4', 'LGB6', 'LGB7', 'LGB8', 'LAS1', 'LAS2', 'LGA9', 'ONT2', 'ONT6', 'ONT7', 'ONT8', 'ONT9', 'OAK3', 'OAK4', 'PHX3', 'PHX5', 'PHX6', 'PHX7', 'PDX6', 'PDX7', 'RNO1', 'RNO2', 'RNO4', 'SNA4', 'SJC7', 'SLC3', 'SMF1', 'SMF3', 'SEA6', 'SEA8', 'SJC8', 'TEB3', 'TEB6', 'XUSD','其他(请在备注填写邮编)'];
                break;
              case 2:
                data.multiArray[2] = ['请选择', 'BDL1', 'CVG1', 'CVG2', 'CVG3', 'CVG5', 'CMH1', 'CMH2', 'DET1', 'DET2', 'DFW6', 'DFW7', 'DFW8', 'EWR5', 'EWR7', 'EWR9', 'FTW1', 'FTW2', 'IND1', 'IND2', 'IND3', 'IND4', 'IND5', 'IND6', 'IND9', 'LEX1', 'LEX2', 'MKE1', 'MDW2', 'MDW6', 'MCI1', 'MKC4', 'MSP1', 'MKC6', 'MDW7', 'MDW8', 'MDW9', 'OKC1', 'SDF1', 'SDF2', 'SDF4', 'SDF6', 'SDF7', 'SDF9', 'SAT1', 'SDF8', 'STL4', 'TUL1','HOU1', 'HOU2', 'HOU3',  '其他(请在备注填写邮编)'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['请选择', 'ABE2', 'ABE3', 'ABE5', 'ABE8', 'AVP1', 'AVP3', 'ACY2', 'ATL6', 'BNA1', 'BNA2', 'BNA3', 'BNA4', 'BOS1', 'BWI1', 'BWI2', 'BOS2', 'BOS7', 'BDL2', 'CLT2', 'CLT3', 'CAE1', 'CHA1', 'CHA2', 'JFK8', 'JAX3', 'LAL1','MCO1','MEM1', 'MIA1', 'MDT1', 'MGE3', 'PHL1', 'PHL3', 'PHL7', 'PHL4', 'PHL5', 'PHL6', 'PIT1','SAV3', 'RIC1', 'RIC2', 'RIC3','TPA1','TPA2','VUBA','VUGA','XUSC','GSP1','其他（请在备注填写邮编）'];
                break;
              case 1:
                data.multiArray[2] = ['请选择', 'ACT1', 'BFI1', 'BFI3', 'BFI4', 'BFI5', 'BFI7', 'DEN3', 'EWR4', 'LAX9', 'LGB3', 'LGB4', 'LGB6', 'LGB7', 'LGB8', 'LAS1', 'LAS2', 'LGA9', 'ONT2', 'ONT6', 'ONT7', 'ONT8', 'ONT9', 'OAK3', 'OAK4', 'PHX3', 'PHX5', 'PHX6', 'PHX7', 'PDX6', 'PDX7', 'RNO1', 'RNO2', 'RNO4', 'SNA4', 'SJC7', 'SLC3', 'SMF1', 'SMF3', 'SEA6', 'SEA8', 'SJC8', 'TEB3', 'TEB6', 'XUSD','其他(请在备注填写邮编)'];
                break;
              case 2:
                data.multiArray[2] = ['请选择', 'BDL1', 'CVG1', 'CVG2', 'CVG3', 'CVG5', 'CMH1', 'CMH2', 'DET1', 'DET2', 'DFW6', 'DFW7', 'DFW8', 'EWR5', 'EWR7', 'EWR9', 'FTW1', 'FTW2', 'IND1', 'IND2', 'IND3', 'IND4', 'IND5', 'IND6', 'IND9', 'LEX1', 'LEX2', 'MKE1', 'MDW2', 'MDW6', 'MCI1', 'MKC4', 'MSP1', 'MKC6', 'MDW7', 'MDW8', 'MDW9', 'OKC1', 'SDF1', 'SDF2', 'SDF4', 'SDF6', 'SDF7', 'SDF9', 'SAT1', 'SDF8', 'STL4', 'TUL1','HOU1', 'HOU2', 'HOU3',  '其他(请在备注填写邮编)'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    this.setData(data);
    this.setData({
      dest:this.data.multiArray[2][this.data.multiIndex[2]]
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index:e.detail.value,
      dest: this.data.array[e.detail.value]
    })
  },
  bindPickerChange1: function (e) {
    this.setData({
      index: e.detail.value,
      dest: this.data.array1[e.detail.value]
    })
  },
  bindPickerChange2: function (e) {
    this.setData({
      index: e.detail.value,
      dest: this.data.array2[e.detail.value]
    })
  },
  bindPickerChange3: function (e) {
    this.setData({
      index: e.detail.value,
      category: this.data.array3[e.detail.value]
    })
  },
  switch1Change: function (e) {
    var that = this
    var kilometer=[]
    that.setData({
      switch1Checked:e.detail.value,
      dianji:1,
    })
    wx.request({
      url: 'https://apis.map.qq.com/ws/geocoder/v1/',
      data: {
        "key": "E7BBZ-LTFK5-QBXIC-QNIW5-GNTHJ-4OFJN",
        "address": that.data.seleted_address.address
      },
      method: 'GET',
      success: function (res) {
        //distance[i] = that.distance(that.data.fromLat, that.data.fromLng, that.data.toLat[i], that.data.toLng[i])
        if (res.data.result) {
          const addressLocation = res.data.result.location;
          const courseLat = addressLocation.lat;//获取目的地的纬度
          const courseLng = addressLocation.lng;//获取目的地的经度
          that.data.fromLat = courseLat,
          that.data.fromLng = courseLng
        }
      },
      complete:function(e){
        if (that.data.switch1Checked == true && that.data.seleted_address.address != undefined){
          for (var i = 0; i < that.data.toLat.length; i++) {
            kilometer[i] = that.distance(that.data.fromLat, that.data.fromLng, that.data.toLat[i], that.data.toLng[i])
          }
          for(var k=0;k<kilometer.length;k++){
            if(kilometer[k]<=5){
              that.data.temple=1
              that.data.songhuo=that.data.items_index.supplier_companies[k].contact_address
               break
            }
          }
          if(that.data.temple==0){
              wx.showModal({
                title: '结果',
                content: '超过5KM,请自行安排送货',
                success: function () {
                  that.setData({
                    switch1Checked: false
                  }) 
                }
              })
          }
        }
            
      }
    })
  },

  // * @desc 由经纬度计算两点之间的距离，la为latitude缩写，lo为longitude
  // * @param la1 第一个坐标点的纬度
  // * @param lo1 第一个坐标点的经度
  // * @param la2 第二个坐标点的纬度
  // * @param lo2 第二个坐标点的经度
  distance: function (la1, lo1, la2, lo2) {

    var La1 = la1 * Math.PI / 180.0;

    var La2 = la2 * Math.PI / 180.0;

    var La3 = La1 - La2;

    var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;

    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));

    s = s * 6378.137;//地球半径

    s = Math.round(s * 10000) / 10000;
    
    return s



  },
  datePickerBindchange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
  },
  get0: function (e) {
    this.setData({
      ctn: e.detail.value
    })
  },
  get1: function (e) {
    this.setData({
      weight: e.detail.value
    })
  },
  get2: function (e) {
    this.setData({
      volume: e.detail.value
    })
  },
  get3: function (e) {
    this.setData({
      area: e.detail.value
    })
  },
  get4: function (e) {
    this.setData({
      dest: e.detail.value
    })
  },
  get_price: function (e) {
    if (e <= 100) {
      this.setData({
        totalprice: Number(this.data.items_index.myprices.one) + Number(this.data.items_index.addition.price)-Number(this.data.items_index.details.discount),
        total: (Number(this.data.items_index.myprices.one) + Number(this.data.items_index.addition.price)-Number(this.data.items_index.details.discount)) * e,
      })
    } else if (e - 100 > 0 && e - 300 <= 0) {
      this.setData({
        totalprice: Number(this.data.items_index.myprices.three) + Number(this.data.items_index.addition.price)-Number(this.data.items_index.details.discount),
        total: (Number(this.data.items_index.myprices.three) + Number(this.data.items_index.addition.price)-Number(this.data.items_index.details.discount)) * e,
      })
    } else if (e - 300 > 0 && e - 500 <= 0) {
      this.setData({
        totalprice: Number(this.data.items_index.myprices.five) + Number(this.data.items_index.addition.price)-Number(this.data.items_index.details.discount),
        total: (Number(this.data.items_index.myprices.five) + Number(this.data.items_index.addition.price)-Number(this.data.items_index.details.discount)) * e,
      })
    } else if (500 - e < 0) {
      this.setData({
        totalprice: Number(this.data.items_index.myprices.ten) + Number(this.data.items_index.addition.price)-Number(this.data.items_index.details.discount),
        total: (Number(this.data.items_index.myprices.ten) + Number(this.data.items_index.addition.price)-Number(this.data.items_index.details.discount)) * e,
      })
    }
  },
  submit:function(){
    if (this.data.dateValue < this.data.items_index.details.cut_time) {
    var volume = this.data.volume
    var weight = this.data.weight
    var ctn = this.data.ctn*10
    var chargeable = this.data.volume * 167
    var method = this.data.items_index.method
    var maozhong =0
    var that=this
    if(ctn>weight){
      maozhong=ctn
    }else{
      maozhong=weight
    } 
    if (method=="海派"&& volume!=""&& weight!=""&& ctn!= "") {
      // if (ctn>weight) {
       that.get_price(maozhong)
        wx.showModal({
          title: '结果',
          content: '计费重量为:' + maozhong + "KG\r\n计费单价为:" + this.data.totalprice +"/KG\r\n总价为:"+this.data.total,
          cancelText: "取消",
          confirmText: "确认下单",
          success: function (res) {
            if (res.confirm) {
              wx.showLoading({
                title: '提交中',
              })
              that.zhuce()
            }
          }
        })
     }
    else if (method=="空派"&&volume!=""&&weight!=""&&ctn != "") {
      if (chargeable > maozhong) {
        var pao = parseInt(chargeable)
        that.get_price(pao)
        wx.showModal({
          title: '结果',
          content: '计费重量为:' + pao + "KG\r\n计费单价为:" + this.data.totalprice + "/KG\r\n总价为:" + this.data.total,
          cancelText: "取消",
          confirmText: "确认下单",
          success: function (res) {
            if (res.confirm) {
              wx.showLoading({
                title: '提交中',
              })
              that.zhuce()
            }
          }
        })
      } else if (chargeable < maozhong) {
        that.get_price(maozhong)
        wx.showModal({
          title: '结果',
          content: '计费重量为:' + maozhong + "KG\r\n计费单价为:" + this.data.totalprice + "/KG\r\n总价为:" + this.data.total,
          cancelText: "取消",
          confirmText: "确认下单",
          success: function (res) {
            if (res.confirm) {
              wx.showLoading({
                title: '提交中',
              })
              that.zhuce()
            }
          }
        })
      }
    } 
    else if (method=="空派(直飞)" && volume != "" && weight != "" && ctn != "") {
      if (chargeable > maozhong) {
        var pao = parseInt(chargeable)
        that.get_price(pao)
        wx.showModal({
          title: '结果',
          content: '计费重量为:' + pao + "KG\r\n计费单价为:" + this.data.totalprice + "/KG\r\n总价为:" + this.data.total,
          cancelText: "取消",
          confirmText: "确认下单",
          success: function (res) {
            if (res.confirm) {
              wx.showLoading({
                title: '提交中',
              })
              that.zhuce()
            }
          }
        })
      } else if (chargeable < maozhong) {
        that.get_price(maozhong)
        wx.showModal({
          title: '结果',
          content: '计费重量为:' + maozhong + "KG\r\n计费单价为:" + this.data.totalprice + "/KG\r\n总价为:" + this.data.total,
          cancelText: "取消",
          confirmText: "确认下单",
          success: function (res) {
            if (res.confirm) {
              wx.showLoading({
                title: '提交中',
              })
              that.zhuce()
            }
          }
        })
      }
    } 
    else if (method=="空派(带电)"&&volume!=""&&weight!=""&&ctn!="") {
      if (chargeable > maozhong) {
        var pao = parseInt(chargeable)
        that.get_price(pao)
        wx.showModal({
          title: '结果',
          content: '计费重量为:' + pao + "KG\r\n计费单价为:" + this.data.totalprice + "/KG\r\n总价为:" + this.data.total,
          cancelText: "取消",
          confirmText: "确认下单",
          success: function (res) {
            if (res.confirm) {
              wx.showLoading({
                title: '提交中',
              })
              that.zhuce()
            }
          }
        })
      } else if (chargeable < maozhong) {
        that.get_price(maozhong)
        wx.showModal({
          title: '结果',
          content: '计费重量为:' + maozhong + "KG\r\n计费单价为:" + this.data.totalprice + "/KG\r\n总价为:" + this.data.total,
          cancelText: "取消",
          confirmText: "确认下单",
          success: function (res) {
            if (res.confirm) {
              wx.showLoading({
                title: '提交中',
              })
              that.zhuce()
            }
          }
        })
      }
    } 
    else if (method=="美森" && volume != "" && weight != "" && ctn != "") {
      // if (ctn > weight) {
      that.get_price(maozhong)
        wx.showModal({
          title: '结果',
          content: '计费重量为:' + maozhong + "KG\r\n计费单价为:" + this.data.totalprice + "/KG\r\n总价为:" + this.data.total,
          cancelText: "取消",
          confirmText: "确认下单",
          success: function (res) {
            if (res.confirm) {
              wx.showLoading({
                title: '提交中',
              })
              that.zhuce()
            }
          }
        })
   
    }else if (method=="海卡"&&volume!=""&&weight!=""&&ctn!= "") {
      if(volume<2){
        volume=2
      }
      that.setData({
        dest:that.data.items_index.mudigang,
        totalprice: that.data.items_index.price,
        total: that.data.items_index.price * volume,
      })
      wx.showModal({
        title: '结果',
        content: '计费方数为:' + volume + "CBM\r\n计费单价为:" + this.data.totalprice +"/CBM\r\n总价为:"+this.data.total,
        cancelText: "取消",
        confirmText: "确认下单",
        success: function (res){
          if (res.confirm) {
            wx.showLoading({
              title: '提交中',
            })
            that.zhuce()
          }
        }
      })
    } else if (volume!= ""||weight!=""||ctn!="") {
      wx.showModal({
        title: '错误',
        content: '数据错误请重试',
        complete:function(){
          wx.hideLoading()
        }
      })
    }
    }else{
      wx.showModal({
        title: '结果',
        content: '提货时间不能晚于截止时间',
      })
    }
  },
  zhuce:function(){
    console.log(this.data.items_index)
    if(this.data.items_index.country!='American'||this.data.items_index.method=='海卡'){
      this.setData({
        dest:this.data.items_index.mudigang
      })
    }
    var that=this;
    if (this.data.weight!=""&&app.globalData.openid!=""&&this.data.seleted_address.id!=null&& this.data.volume!=""&&this.data.dateValue!=""&&this.data.dianji==1&&this.data.dest!="请选择"&&this.data.dest!="") {
      //普通支付
      if(this.data.items_index.details.discount==0){
      wx.request({
        url: app.globalData.url_old + 'order/make.do',
        data: {
          // openid: app.globalData.openid,
          // ctn: this.data.ctn,
          weight: this.data.weight,
          volume: this.data.volume,
          item_id: this.data.items_index.id,
          // address_id: this.data.seleted_address.id,
          // beizhu: this.data.area,
          // picking: this.data.dateValue,
          // dest: this.data.dest,
          // tihuo: this.data.switch1Checked,
          // songhuo: this.data.songhuo,
          // total: this.data.total,
          // chaigui: this.data.items_index.mudigang,
          // category:this.data.category,
          // ups:0
        },
        method: "post",
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          if (res.data == "下单成功") {
            wx.request({
              url: app.globalData.url_old + 'wechat/pay.do',        
              data: {
              openid: app.globalData.openid,
              unionId: app.globalData.unionId,
              ctn: that.data.ctn,
              weight: that.data.weight,
              volume: that.data.volume,
              item_id: that.data.items_index.id,
              address_id: that.data.seleted_address.id,
              beizhu: that.data.area,
              picking: that.data.dateValue,
              dest: that.data.dest,
              tihuo: that.data.switch1Checked,
              songhuo: that.data.songhuo,
              total: that.data.total,
              chaigui: that.data.items_index.mudigang,
              category:that.data.category,
              method:that.data.items_index.method,
              user_id:0,
              country:that.data.items_index.country,
              ups:0    
              },
              header: {   
                'content-type': 'application/x-www-form-urlencoded' // 默认值
              }, 
              method: "POST",
              success: function (res) {
                if(res.data.return_code==undefined){
                  //that.doWxPay(res.data);
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
            });
          }else{
            wx.showModal({
              title: '结果',
              content: res.data,
            })
            wx.hideLoading({
              complete: (res) => {},
            })
          }

        },
        fail: function (res) {
        },
        complete: function (res) {
  
        }
      })
    }else{
      wx.request({
        url: app.globalData.url_old + 'order/make_redis.do',
        data: {
          // openid: app.globalData.openid,
          // ctn: this.data.ctn,
          weight: this.data.weight,
          volume: this.data.volume,
          item_id: this.data.items_index.id,
          // address_id: this.data.seleted_address.id,
          // beizhu: this.data.area,
          // picking: this.data.dateValue,
          // dest: this.data.dest,
          // tihuo: this.data.switch1Checked,
          // songhuo: this.data.songhuo,
          // total: this.data.total,
          // chaigui: this.data.items_index.mudigang,
          // category:this.data.category,
          // ups:0
        },
        method: "post",
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          if (res.data == "下单成功") {
            wx.request({
              url: app.globalData.url_old + 'wechat/pay_miaosha.do',        
              data: {
              openid: app.globalData.openid,
              unionId:app.globalData.unionId,
              ctn: that.data.ctn,
              weight: that.data.weight,
              volume: that.data.volume,
              item_id: that.data.items_index.id,
              address_id: that.data.seleted_address.id,
              beizhu: that.data.area,
              picking: that.data.dateValue,
              dest: that.data.dest,
              tihuo: that.data.switch1Checked,
              songhuo: that.data.songhuo,
              total: that.data.total,
              chaigui: that.data.items_index.mudigang,
              category:that.data.category,
              method:that.data.items_index.method,
              country:that.data.items_index.country,
              user_id:0,
              ups:0    
              },
              header: {   
                'content-type': 'application/x-www-form-urlencoded' // 默认值
              }, 
              method: "POST",
              success: function (res) {
                if(res.data.return_code==undefined){
                  //that.doWxPay(res.data,1,that.data.weight,that.data.volume,that.data.items_index.id);
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
            });
          }else{
            wx.showModal({
              title: '结果',
              content: res.data,
            })
            wx.hideLoading({
              complete: (res) => {},
            })
          }
        },
        fail: function (res) {
        },
        complete: function (res) {
        }
      })
    }
    } else {
      wx.hideLoading()
      wx.showModal({
        title: '错误',
        content: '请完善信息',
      })
    }
    
  },
  doWxPay(param,test,weight,volume,item_id) {
    console.log(param)
    //小程序发起微信支付
    if(test==null){
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
        console.log("支付失败")
        wx.showToast({
          title: '支付失败',
          image:"../../pics/error.png",
          complete:function(res){
            wx.request({
                url: app.globalData.url_old +"shopping/redis_get.do",
                data:{
                  openid: app.globalData.openid,
                },
                method:"GET",
                success:function(res){
                  app.globalData.shopping=res.data
                  setTimeout(function(){
                    wx.redirectTo({
                      url: '../shopping/shopping',
                    })
                  },2000)
                }
              })
             
        },
       
        });
        }
      })
    }
    //抢购支付
    else{
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
        console.log("支付失败")
          wx.showToast({
            title: '支付失败',
            image:"../../pics/error.png",
            complete:function(){
              wx.request({
                url: app.globalData.url_old + 'shopping/return.do',
                data:{
                  volume:volume,
                  weight:weight,
                  item_id:item_id,
                  numbers:param.numbers
                },
                header: {   
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                }, 
                method: "POST",
                complete:function(res){
                  wx.navigateBack({
                  delta:4
                })
              }
              })
            }
          })
          //发送到服务器恢复仓位，还需要跳转页面
          
        }
      })
      
    }
    
},
    
  dizhi: function () {
    this.setData({
      switch1Checked: false
    })
    wx.navigateTo({
      url: '../dizhi/dizhi',
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that=this
    that.setData({
      items_index: app.globalData.items_index,
      category: app.globalData.category
    })
    if (this.data.items_index.method=="海卡"){
      that.setData({
        category: ""
      })
    }
    for (var i = 0; i < that.data.items_index.supplier_companies.length; i++) {
      let s=i
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/',
          data: {
            "key": "E7BBZ-LTFK5-QBXIC-QNIW5-GNTHJ-4OFJN",
            "address": that.data.items_index.supplier_companies[i].contact_address
          },
          method: 'GET',
          success: function (res) {
            if (res.data.result) {
              const addressLocation = res.data.result.location;
              const courseLat = addressLocation.lat;//获取目的地的纬度
              const courseLng = addressLocation.lng;//获取目的地的经度
              that.data.toLat[s] = courseLat
              that.data.toLng[s] = courseLng
             }
          },
          complete:function(e){
          }
        })
      }
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
      seleted_address:app.globalData.seleted_address,
      temple:0
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