// pages/warehouse/warehouse.js
var app = getApp();
let proListToTop = [], menuToTop = [], MENU = 0,
windowHeight, timeoutId;
Page({
/**
 * 页面的初始数据
 */

data: {
  staticImg: app.globalData.staticImg,
  currentActiveIndex: 0,
  indexId: 0, 
  // 接口返回的商品数组
  navList: [
    {
      c_id: "01",
      c_name: '美国',
      list: [
        {
          id: 1,
          goodsName: 'PHX3',
          goodsAddress: '85043',
          goodsArea: '美西',
        },
        {
          id: 2,
          goodsName: 'PHX5',
          goodsAddress: '85338',
          goodsArea: '美西',
        },
        {
          id: 3,
          goodsName: 'PHX6',
          goodsAddress: '85043',
          goodsArea: '美西',
        },
        {
          id: 4,
          goodsName: 'PHX7',
          goodsAddress: '85043',
          goodsArea: '美西',
        },
        {
          id: 5,
          goodsName: 'ONT2',
          goodsAddress: '92408',
          goodsArea: '美西',
        },
        {
          id: 6,
          goodsName: 'ONT6',
          goodsAddress: '92551',
          goodsArea: '美西',
        },
        {
          id: 7,
          goodsName: 'ONT8',
          goodsAddress: '92551',
          goodsArea: '美西',
        },
        {
          id: 8,
          goodsName: 'OAK3',
          goodsAddress: '95363',
          goodsArea: '美西',
        },
        {
          id: 9,
          goodsName: 'OAK4',
          goodsAddress: '95376',
          goodsArea: '美西',
        },
        {
          id: 10,
          goodsName: 'ONT9',
          goodsAddress: '92374',
          goodsArea: '美西',
        },
        {
          id: 11,
          goodsName: 'SNA4',
          goodsAddress: '92376-3009',
          goodsArea: '美西',
        },
        {
          id: 12,
          goodsName: 'SJC7',
          goodsAddress: '95391',
          goodsArea: '美西',
        },
        {
          id: 13,
          goodsName: 'SLC1',
          goodsAddress: '84116',
          goodsArea: '美西',
        },
        {
          id: 14,
          goodsName: 'SLC3',
          goodsAddress: '84116-4413',
          goodsArea: '美西',
        },
        {
          id: 15,
          goodsName: 'LGB8',
          goodsAddress: '92376',
          goodsArea: '美西',
        },
        {
          id: 16,
          goodsName: 'LGB6',
          goodsAddress: '92518-1513',
          goodsArea: '美西',
        },
        {
          id: 17,
          goodsName: 'LGB4',
          goodsAddress: '92374',
          goodsArea: '美西',
        },
        {
          id: 17,
          goodsName: 'LGB3',
          goodsAddress: '91752',
          goodsArea: '美西',
        },
        {
          id: 18,
          goodsName: 'LGB7',
          goodsAddress: '92376-2427',
          goodsArea: '美西',
        },
        {
          id: 19,
          goodsName: 'SMF1',
          goodsAddress: '95837',
          goodsArea: '美西',
        },
        {
          id: 20,
          goodsName: 'EWR4',
          goodsAddress: '8691',
          goodsArea: '美西',
        },
        
        {
          id: 21,
          goodsName: 'ABE8-401',
          goodsAddress: '8518',
          goodsArea: '美东',
        },
        
        {
          id: 22,
          goodsName: 'TEB3',
          goodsAddress: '8085',
          goodsArea: '美西',
        },
        {
          id: 23,
          goodsName: 'TEB6',
          goodsAddress: '8512',
          goodsArea: '美西',
        },
        {
          id: 24,
          goodsName: 'RNO1',
          goodsAddress: '89408',
          goodsArea: '美西',
        },
        {
          id: 25,
          goodsName: 'LAS1',
          goodsAddress: '89115',
          goodsArea: '美西',
        },
        {
          id: 26,
          goodsName: 'LAS2',
          goodsAddress: '89030',
          goodsArea: '美西',
        },
        {
          id: 26,
          goodsName: 'RNO2',
          goodsAddress: '85906',
          goodsArea: '美西',
        },
        {
          id: 26,
          goodsName: 'RNO4',
          goodsAddress: '89506',
          goodsArea: '美西',
        },
        {
          id: 27,
          goodsName: 'BFI1',
          goodsAddress: '98390',
          goodsArea: '美西',
        },
        {
          id: 28,
          goodsName: 'BFI3',
          goodsAddress: '98327-9607',
          goodsArea: '美西',
        },
        {
          id: 29,
          goodsName: 'BFI4',
          goodsAddress: '98032',
          goodsArea: '美西',
        },
        {
          id: 30,
          goodsName: 'BFI5',
          goodsAddress: '98032',
          goodsArea: '美西',
        },
        {
          id: 31,
          goodsName: 'BFI7',
          goodsAddress: '98390',
          goodsArea: '美西',
        },
        {
          id: 32,
          goodsName: 'SEA6',
          goodsAddress: '98144',
          goodsArea: '美西',
        },
        {
          id: 33,
          goodsName: 'SEA8',
          goodsAddress: '98005',
          goodsArea: '美西',
        },
        {
          id: 34,
          goodsName: 'ONT7',
          goodsAddress: '92374',
          goodsArea: '美西',
        },
        {
          id: 35,
          goodsName: 'LAS6',
          goodsAddress: '89115',
          goodsArea: '美西',
        },
        {
          id: 36,
          goodsName: 'LAS7',
          goodsAddress: '89115-1935',
          goodsArea: '美西',
        },
        {
          id: 37,
          goodsName: 'LAX9',
          goodsAddress: '92337',
          goodsArea: '美西',
        },
        {
          id: 38,
          goodsName: 'DEN2',
          goodsAddress: '80019',
          goodsArea: '美西',
        },
        {
          id: 39,
          goodsName: 'DEN3',
          goodsAddress: '80023',
          goodsArea: '美西',
        },
        {
          id: 40,
          goodsName: 'IVSC',
          goodsAddress: '8066',
          goodsArea: '美西',
        },
        {
          id: 41,
          goodsName: 'IVSD',
          goodsAddress: '8085',
          goodsArea: '美西',
        },
        {
          id: 42,
          goodsName: 'IVSE',
          goodsAddress: '89115',
          goodsArea: '美西',
        },
        {
          id: 43,
          goodsName: 'IVSF',
          goodsAddress: '89115',
          goodsArea: '美西',
        },
        {
          id: 44,
          goodsName: 'SMF3',
          goodsAddress: '95206-8202',
          goodsArea: '美西',
        },
        {
          id: 45,
          goodsName: 'FAT1',
          goodsAddress: '93725',
          goodsArea: '美西',
        },
        {
          id: 46,
          goodsName: 'PDX9',
          goodsAddress: '97060',
          goodsArea: '美西',
        },
        {
          id: 47,
          goodsName: 'PDX6',
          goodsAddress: '97203-6814',
          goodsArea: '美西',
        },
        {
          id: 48,
          goodsName: 'PDX7',
          goodsAddress: '97317-8983',
          goodsArea: '美西',
        },
        {
          id: 49,
          goodsName: 'ACY1',
          goodsAddress: '8066',
          goodsArea: '美西',
        },
        {
          id: 50,
          goodsName: 'LGA9',
          goodsAddress: '8817',
          goodsArea: '美西',
        },
        {
          id: 51,
          goodsName: 'SJC8',
          goodsAddress: '94538',
          goodsArea: '美西',
        },
        {
          id: 52,
          goodsName: 'PHL1',
          goodsAddress: '19720',
          goodsArea: '美东',
        },
        {
          id: 53,
          goodsName: 'PHL3',
          goodsAddress: '19720',
          goodsArea: '美东',
        },
        {
          id: 54,
          goodsName: 'PHL7',
          goodsAddress: '19709',
          goodsArea: '美东',
        },
        {
          id: 55,
          goodsName: 'PHL8',
          goodsAddress: '19709',
          goodsArea: '美东',
        },
        {
          id: 56,
          goodsName: 'TPA1',
          goodsAddress: '33570',
          goodsArea: '美东',
        },
        {
          id: 57,
          goodsName: 'TPA2',
          goodsAddress: '33811',
          goodsArea: '美东',
        },
        {
          id: 58,
          goodsName: 'MIA1',
          goodsAddress: '33182',
          goodsArea: '美东',
        },
        {
          id: 59,
          goodsName: 'JAX3',
          goodsAddress: '32210-8686',
          goodsArea: '美东',
        },
        {
          id: 60,
          goodsName: 'BOS1',
          goodsAddress: '3063',
          goodsArea: '美东',
        },
        {
          id: 61,
          goodsName: 'BWI1',
          goodsAddress: '21224',
          goodsArea: '美东',
        },
        {
          id: 62,
          goodsName: 'BWI2',
          goodsAddress: '21224',
          goodsArea: '美东',
        },
        {
          id: 63,
          goodsName: 'MDT1',
          goodsAddress: '17015',
          goodsArea: '美东',
        },
        {
          id: 64,
          goodsName: 'ABE2',
          goodsAddress: '18031',
          goodsArea: '美东',
        },
        {
          id: 65,
          goodsName: 'ABE3',
          goodsAddress: '18031',
          goodsArea: '美东',
        },
        {
          id: 66,
          goodsName: 'PHL4',
          goodsAddress: '17015',
          goodsArea: '美东',
        },
        {
          id: 67,
          goodsName: 'PHL5',
          goodsAddress: '17339',
          goodsArea: '美东',
        },
        {
          id: 68,
          goodsName: 'PHL6',
          goodsAddress: '17015',
          goodsArea: '美西',
        },
        {
          id: 69,
          goodsName: 'AVP1',
          goodsAddress: '18202-9361',
          goodsArea: '美东',
        },
        {
          id: 70,
          goodsName: 'AVP3',
          goodsAddress: '18424-9492',
          goodsArea: '美东',
        },
        {
          id: 71,
          goodsName: 'ABE5',
          goodsAddress: '17112',
          goodsArea: '美东',
        },
        {
          id: 72,
          goodsName: 'PIT1',
          goodsAddress: '15205',
          goodsArea: '美东',
        },
        {
          id: 73,
          goodsName: 'VUBA',
          goodsAddress: '18512',
          goodsArea: '美东',
        },
        {
          id: 74,
          goodsName: 'VUGA',
          goodsAddress: '18643',
          goodsArea: '美东',
        },
        {
          id: 75,
          goodsName: 'XUSC',
          goodsAddress: '17013',
          goodsArea: '美东',
        },
        {
          id: 76,
          goodsName: 'CAE1',
          goodsAddress: '29172',
          goodsArea: '美东',
        },
        {
          id: 77,
          goodsName: 'GSP1',
          goodsAddress: '29303',
          goodsArea: '美东',
        },
        {
          id: 78,
          goodsName: 'CHA1',
          goodsAddress: '37416',
          goodsArea: '美东',
        },
        {
          id: 79,
          goodsName: 'CHA2',
          goodsAddress: '37310',
          goodsArea: '美东',
        },
        {
          id:80,
          goodsName: 'BNA1',
          goodsAddress: '37090',
          goodsArea: '美东',
        },
        {
          id:81,
          goodsName: 'BNA2',
          goodsAddress: '37067',
          goodsArea: '美东',
        },
        {
          id:82,
          goodsName: 'BNA3',
          goodsAddress: '37127',
          goodsArea: '美东',
        },
        {
          id:83,
          goodsName: 'BNA4',
          goodsAddress: '37217',
          goodsArea: '美东',
        },
        {
          id:84,
          goodsName: 'RIC1',
          goodsAddress: '23803',
          goodsArea: '美东',
        },
        {
          id:85,
          goodsName: 'RIC2',
          goodsAddress: '23836',
          goodsArea: '美东',
        },
        {
          id:86,
          goodsName: 'RIC3',
          goodsAddress: '23836',
          goodsArea: '美东',
        },
        {
          id:87,
          goodsName: 'ATL6',
          goodsAddress: '30344',
          goodsArea: '美东',
        },
        {
          id:88,
          goodsName: 'MGE3',
          goodsAddress: '30549',
          goodsArea: '美东',
        },
        {
          id:89,
          goodsName: 'BOS2',
          goodsAddress: '2072',
          goodsArea: '美东',
        },
        {
          id:90,
          goodsName: 'BOS7',
          goodsAddress: '2720',
          goodsArea: '美东',
        },
        {
          id:91,
          goodsName: 'CLT2',
          goodsAddress: '28214-8082',
          goodsArea: '美东',
        },
        {
          id:92,
          goodsName: 'BDL2',
          goodsAddress: '06095-2144',
          goodsArea: '美东',
        },
        {
          id:93,
          goodsName: 'LAL1',
          goodsAddress: '33811',
          goodsArea: '美东',
        },
        {
          id:94,
          goodsName: 'ABE4',
          goodsAddress: '18045',
          goodsArea: '美东',
        },
        {
          id:95,
          goodsName: 'MDT2',
          goodsAddress: '21901',
          goodsArea: '美东',
        },
        {
          id:96,
          goodsName: 'ATL8',
          goodsAddress: '30122',
          goodsArea: '美东',
        },
        {
          id:97,
          goodsName: 'JAX2',
          goodsAddress: '32218',
          goodsArea: '美东',
        },
        {
          id:98,
          goodsName: 'BWI4',
          goodsAddress: '22624',
          goodsArea: '美东',
        },
        {
          id:99,
          goodsName: 'CLT3',
          goodsAddress: '28027',
          goodsArea: '美东',
        },
        {
          id:100,
          goodsName: 'ACY2',
          goodsAddress: '08016-1934',
          goodsArea: '美东',
        },
        {
          id:101,
          goodsName: 'ACY2',
          goodsAddress: '08016-1934',
          goodsArea: '美东',
        },
        {
          id:102,
          goodsName: 'JFK8',
          goodsAddress: '10314',
          goodsArea: '美东',
        },
        {
          id:103,
          goodsName: 'MCO1',
          goodsAddress: '32824',
          goodsArea: '美东',
        },
        {
          id:104,
          goodsName: 'MEM1',
          goodsAddress: '38118',
          goodsArea: '美东',
        },
        {
          id:105,
          goodsName: 'DCA1',
          goodsAddress: '21219',
          goodsArea: '美东',
        },
        {
          id:106,
          goodsName: 'SAV3',
          goodsAddress: '31216-6427',
          goodsArea: '美东',
        },
        {
          id:107,
          goodsName: 'BDL1',
          goodsAddress: '6095',
          goodsArea: '美东',
        },
        {
          id:108,
          goodsName: 'BDL1',
          goodsAddress: '6095',
          goodsArea: '美中',
        },
        {
          id:109,
          goodsName: 'XUSE',
          goodsAddress: '46075',
          goodsArea: '美中',
        },
        {
          id:110,
          goodsName: 'IND1',
          goodsAddress: '46075',
          goodsArea: '美中',
        },
        {
          id:111,
          goodsName: 'IND2',
          goodsAddress: '46168',
          goodsArea: '美中',
        },
        {
          id:112,
          goodsName: 'IND3',
          goodsAddress: '46168',
          goodsArea: '美中',
        },
        {
          id:113,
          goodsName: 'IND4',
          goodsAddress: '46231',
          goodsArea: '美中',
        },
        {
          id:114,
          goodsName: 'IND5',
          goodsAddress: '46168',
          goodsArea: '美中',
        },
        {
          id:115,
          goodsName: 'IND6',
          goodsAddress: '47130',
          goodsArea: '美中',
        },
        {
          id:116,
          goodsName: 'IND9',
          goodsAddress: '46143-7830',
          goodsArea: '美中',
        },
        {
          id:117,
          goodsName: 'SDF8',
          goodsAddress: '47130',
          goodsArea: '美中',
        },
        {
          id:118,
          goodsName: 'TUL1',
          goodsAddress: '67337',
          goodsArea: '美中',
        },
        {
          id:119,
          goodsName: 'MCI1',
          goodsAddress: '66219',
          goodsArea: '美中',
        },
        {
          id:120,
          goodsName: 'MKC4',
          goodsAddress: '66021-9588',
          goodsArea: '美中',
        },
        {
          id:121,
          goodsName: 'MKC6',
          goodsAddress: '66102',
          goodsArea: '美中',
        },
        {
          id:122,
          goodsName: 'LEX1',
          goodsAddress: '40511',
          goodsArea: '美中',
        },
        {
          id:123,
          goodsName: 'LEX2',
          goodsAddress: '40511',
          goodsArea: '美中',
        },
        {
          id:124,
          goodsName: 'SDF1',
          goodsAddress: '42718',
          goodsArea: '美中',
        },
        {
          id:125,
          goodsName: 'SDF2',
          goodsAddress: '40218',
          goodsArea: '美中',
        },
        {
          id:126,
          goodsName: 'SDF2',
          goodsAddress: '40218',
          goodsArea: '美中',
        },
        {
          id:127,
          goodsName: 'SDF4',
          goodsAddress: '40165',
          goodsArea: '美中',
        },
        {
          id:128,
          goodsName: 'SDF6',
          goodsAddress: '40165',
          goodsArea: '美中',
        },
        {
          id:129,
          goodsName: 'CVG1',
          goodsAddress: '41048',
          goodsArea: '美中',
        },
        {
          id:130,
          goodsName: 'CVG2',
          goodsAddress: '41048',
          goodsArea: '美中',
        },
        {
          id:131,
          goodsName: 'CVG3',
          goodsAddress: '41048',
          goodsArea: '美中',
        },
        {
          id:132,
          goodsName: 'CVG5',
          goodsAddress: '41048',
          goodsArea: '美中',
        },
        {
          id:133,
          goodsName: 'SDF7',
          goodsAddress: '40165',
          goodsArea: '美中',
        },
        {
          id:134,
          goodsName: 'SDF9',
          goodsAddress: '40165',
          goodsArea: '美中',
        },
        {
          id:135,
          goodsName: 'EWR5',
          goodsAddress: '7001',
          goodsArea: '美中',
        },
        {
          id:136,
          goodsName: 'EWR7',
          goodsAddress: '7001',
          goodsArea: '美中',
        },
        {
          id:137,
          goodsName: 'EWR9',
          goodsAddress: '7008',
          goodsArea: '美中',
        },
        {
          id:138,
          goodsName: 'CMH1',
          goodsAddress: '43062-7793',
          goodsArea: '美中',
        },
        {
          id:139,
          goodsName: 'CMH2',
          goodsAddress: '43125-9016',
          goodsArea: '美中',
        },
        {
          id:140,
          goodsName: 'DFW6',
          goodsAddress: '75019',
          goodsArea: '美中',
        },
        {
          id:141,
          goodsName: 'SAT1',
          goodsAddress: '78154-1461',
          goodsArea: '美中',
        },
        {
          id:142,
          goodsName: 'DFW7',
          goodsAddress: '76177',
          goodsArea: '美中',
        },
        {
          id:143,
          goodsName: 'DFW8',
          goodsAddress: '75261',
          goodsArea: '美中',
        },
        {
          id:144,
          goodsName: 'HOU1',
          goodsAddress: '77338',
          goodsArea: '美中',
        },
        {
          id:145,
          goodsName: 'HOU2',
          goodsAddress: '77038-2324',
          goodsArea: '美中',
        },
        {
          id:146,
          goodsName: 'HOU3',
          goodsAddress: '77423',
          goodsArea: '美中',
        },
        {
          id:147,
          goodsName: 'XUSB',
          goodsAddress: '76155',
          goodsArea: '美中',
        },
        {
          id:148,
          goodsName: 'FTW1',
          goodsAddress: '75241',
          goodsArea: '美中',
        },
        {
          id:149,
          goodsName: 'FTW2',
          goodsAddress: '75019',
          goodsArea: '美中',
        },
        {
          id:150,
          goodsName: 'MKE1',
          goodsAddress: '53144',
          goodsArea: '美中',
        },
        {
          id:151,
          goodsName: 'MDW2',
          goodsAddress: '60433-3280',
          goodsArea: '美中',
        },
        {
          id:152,
          goodsName: 'MDW6',
          goodsAddress: '60446-6529',
          goodsArea: '美中',
        },
        {
          id:153,
          goodsName: 'MDW7',
          goodsAddress: '60449',
          goodsArea: '美中',
        },
        {
          id:154,
          goodsName: 'MDW8',
          goodsAddress: '60085',
          goodsArea: '美中',
        },
        {
          id:155,
          goodsName: 'MDW9',
          goodsAddress: '60502',
          goodsArea: '美中',
        },
        {
          id:156,
          goodsName: 'ORD6',
          goodsAddress: '60191',
          goodsArea: '美中',
        },
        {
          id:157,
          goodsName: 'STL4',
          goodsAddress: '62025-2815',
          goodsArea: '美中',
        },
        {
          id:158,
          goodsName: 'MSP1',
          goodsAddress: '55379',
          goodsArea: '美中',
        },
        {
          id:159,
          goodsName: 'IVSA',
          goodsAddress: '41018',
          goodsArea: '美中',
        },
        {
          id:160,
          goodsName: 'IVSB',
          goodsAddress: '41018',
          goodsArea: '美中',
        },
        {
          id:161,
          goodsName: 'DET1',
          goodsAddress: '48150',
          goodsArea: '美中',
        },
        {
          id:162,
          goodsName: 'SAT2',
          goodsAddress: '78666',
          goodsArea: '美中',
        },
        {
          id:163,
          goodsName: 'SAT2',
          goodsAddress: '78666',
          goodsArea: '美中',
        },
        {
          id:164,
          goodsName: 'MDW4',
          goodsAddress: '60433',
          goodsArea: '美中',
        },
        {
          id:165,
          goodsName: 'MDW2-402',
          goodsAddress: '60433',
          goodsArea: '美中',
        },
        {
          id:166,
          goodsName: 'FTW6',
          goodsAddress: '75261',
          goodsArea: '美中',
        },
        {
          id:167,
          goodsName: 'FTW9',
          goodsAddress: '75019-3989',
          goodsArea: '美中',
        },
        {
          id:168,
          goodsName: 'ITX1',
          goodsAddress: '77064',
          goodsArea: '美中',
        },
        {
          id:169,
          goodsName: 'ITX2',
          goodsAddress: '77040',
          goodsArea: '美中',
        },
        {
          id:170,
          goodsName: 'DTW1',
          goodsAddress: '48174',
          goodsArea: '美中',
        },
        {
          id:171,
          goodsName: 'CMH1',
          goodsAddress: '43062',
          goodsArea: '美中',
        },
        {
          id:172,
          goodsName: 'CMH2',
          goodsAddress: '43125',
          goodsArea: '美中',
        },
        {
          id:173,
          goodsName: 'CMH3',
          goodsAddress: '45050-1848',
          goodsArea: '美中',
        },
        {
          id:174,
          goodsName: 'CMH6',
          goodsAddress: '43137-9670',
          goodsArea: '美中',
        },
        {
          id:175,
          goodsName: 'DET2',
          goodsAddress: '48317-1318',
          goodsArea: '美中',
        },
        {
          id:176,
          goodsName: 'OKC1',
          goodsAddress: '73159-0003',
          goodsArea: '美中',
        },
      ]
    },
    {
      c_id: "02",
      c_name: '德国',
      list: [
        {
          id: 1,
          goodsName: 'LEJ1',
          goodsAddress: '4347',
        },
        {
          id:2,
          goodsName: 'FRA3',
          goodsAddress: '36251',
        },
        {
          id:3,
          goodsName: 'EDE5',
          goodsAddress: '59368',
        },
        {
          id:4,
          goodsName: 'EDE4',
          goodsAddress: '59368',
        },
        {
          id:5,
          goodsName: 'EDEA',
          goodsAddress: '44145',
        },
        {
          id:6,
          goodsName: 'MUC3',
          goodsAddress: '86836',
        },
        {
          id:7,
          goodsName: 'DUS2',
          goodsAddress: '47495',
        },
        {
          id:8,
          goodsName: 'DUS4',
          goodsAddress: '41179',
        },
        {
          id:9,
          goodsName: 'FRA1',
          goodsAddress: '36251',
        },
        {
          id:10,
          goodsName: 'BER3',
          goodsAddress: '14656',
        },
        {
          id:11,
          goodsName: 'CGN1',
          goodsAddress: '56330',
        },
        {
          id:12,
          goodsName: 'WRO2',
          goodsAddress: '90451',
        },
        {
          id:13,
          goodsName: 'PRG2',
          goodsAddress: '16515',
        },
        {
          id:14,
          goodsName: 'WRO1',
          goodsAddress: '90451',
        },
        {
          id:15,
          goodsName: 'KTW1',
          goodsAddress: '90451',
        },
        {
          id:16,
          goodsName: 'STR1',
          goodsAddress: '75177',
        },
        {
          id:17,
          goodsName: 'HAM2',
          goodsAddress: '21423',
        },
        {
          id:18,
          goodsName: 'DTM2',
          goodsAddress: '44145',
        },
        {
          id:19,
          goodsName: 'DTM1',
          goodsAddress: '59368',
        },
        {
          id:20,
          goodsName: 'DTM1',
          goodsAddress: '59368',
        },
        {
          id:21,
          goodsName: 'FRA7',
          goodsAddress: '67227',
        },
        {
          id:22,
          goodsName: 'HAM8',
          goodsAddress: '25462',
        },
      ]
    },
    {
      c_id: "05",
      c_name: '波兰',
      list: [
        {
          id: 1,
          goodsName: 'POZ1',
          goodsAddress: '62-080',
        },
        {
          id: 2,
          goodsName: 'WRO1',
          goodsAddress: '55040',
        },
        {
          id: 3,
          goodsName: 'WRO2',
          goodsAddress: '55040',
        },
        {
          id: 4,
          goodsName: 'WRO2',
          goodsAddress: '55040',
        },
        {
          id: 5,
          goodsName: 'WRO2(PL)',
          goodsAddress: '55040',
        },
      ]
    },
    {
      c_id: "06",
      c_name: '捷克',
      list: [
        {
          id: 1,
          goodsName: 'PRG2',
          goodsAddress: '25261',
        },
      ]
    },
    {
      c_id: "07",
      c_name: '英国',
      list: [
        {
          id: 1,
          goodsName: 'BHX1',
          goodsAddress: 'WS15 1LX',
        },
        {
          id: 2,
          goodsName: 'BHX2',
          goodsAddress: 'LE67 1GQ',
        },
        {
          id: 3,
          goodsName: 'BHX3',
          goodsAddress: 'NN11 8QL',
        },
        {
          id: 4,
          goodsName: 'BHX4',
          goodsAddress: 'CV5 9FA',
        },
        {
          id: 5,
          goodsName: 'BHX4-（CV5 9DQ）',
          goodsAddress: 'CV5 9DQ',
        },
        {
          id: 6,
          goodsName: 'BHX5',
          goodsAddress: 'CV23 0XF',
        },
        {
          id: 7,
          goodsName: 'BRS1',
          goodsAddress: 'BS35 4DJ',
        },
        {
          id: 8,
          goodsName: 'CWL1',
          goodsAddress: 'SA18QX',
        },
        {
          id: 9,
          goodsName: 'CWL1-1',
          goodsAddress: 'SA1 8QX',
        },
        {
          id: 10,
          goodsName: 'EDI4',
          goodsAddress: 'KY11 8ST',
        },
        {
          id: 11,
          goodsName: 'EMA1',
          goodsAddress: 'DE74 2BB',
        },
        {
          id: 12,
          goodsName: 'EUK5',
          goodsAddress: 'PE2 9EN',
        },
        {
          id: 12,
          goodsName: 'EUKA',
          goodsAddress: 'PE2 6UG',
        },
        {
          id: 13,
          goodsName: 'EUKB',
          goodsAddress: 'PE2 6TE',
        },
        {
          id: 14,
          goodsName: 'EUKC',
          goodsAddress: 'WA8 8YN',
        },
        {
          id: 15,
          goodsName: 'GLA1',
          goodsAddress: 'PA19 1BQ',
        },
        {
          id: 16,
          goodsName: 'LBA1',
          goodsAddress: 'DN4 5JS',
        },
        {
          id: 17,
          goodsName: 'LBA2',
          goodsAddress: 'DN11 0BG',
        },
        {
          id: 18,
          goodsName: 'LCY2',
          goodsAddress: 'RM18 7AN',
        },
        {
          id: 19,
          goodsName: 'LTN1',
          goodsAddress: 'MK43 0ZA',
        },
        {
          id: 20,
          goodsName: 'LTN2',
          goodsAddress: 'HP27LF',
        },
        {
          id: 21,
          goodsName: 'LTN4',
          goodsAddress: 'LU54FE',
        },
        {
          id: 22,
          goodsName: 'MAN1',
          goodsAddress: 'M90 5AA',
        },
        {
          id: 23,
          goodsName: 'MAN2',
          goodsAddress: 'WA5 3XA',
        },
        {
          id: 24,
          goodsName: 'MAN3',
          goodsAddress: 'BL5 1BT',
        },
        {
          id: 24,
          goodsName: 'MAN4',
          goodsAddress: 'S43 4PZ',
        },
        {
          id: 25,
          goodsName: 'SUUK',
          goodsAddress: 'EC2A 2BA',
        },
        {
          id: 26,
          goodsName: 'XUKD',
          goodsAddress: 'NN11 8LR',
        },
      ]
    },
    {
      c_id: "08",
      c_name: '加拿大',
      list: [
        {
          id: 1,
          goodsName: 'YVR1',
          goodsAddress: 'V3M 5Y9',
        },
        {
          id: 2,
          goodsName: 'YYZ1',
          goodsAddress: 'L5N 1L8',
        },
        {
          id: 3,
          goodsName: 'YYZ2',
          goodsAddress: 'L9T 6Y9',
        },
        {
          id: 4,
          goodsName: 'YYZ3',
          goodsAddress: 'L6Y 0B2',
        },
        {
          id: 5,
          goodsName: 'YYZ4',
          goodsAddress: 'L6Y 0C9',
        },
        {
          id: 6,
          goodsName: 'YYZ6',
          goodsAddress: '',
        },
        {
          id: 7,
          goodsName: 'YVR3',
          goodsAddress: 'V3L5H4',
        },
        {
          id: 8,
          goodsName: 'YVR2',
          goodsAddress: 'V3M 5Y9',
        },
        {
          id: 9,
          goodsName: 'YVR4',
          goodsAddress: 'V4M 0B9',
        },
        {
          id: 10,
          goodsName: 'YYC1-0E0',
          goodsAddress: 'T0M 0E0',
        },
        {
          id: 11,
          goodsName: 'YYC1',
          goodsAddress: 'T4A 1C6',
        },
        {
          id: 12,
          goodsName: 'YOW1',
          goodsAddress: 'K4B 0L3',
        },
      ]
    },
    {
      c_id: "09",
      c_name: '日本',
      list: [
        {
          id: 1,
          goodsName: 'NRT5',
          goodsAddress: '〒350-1182',
        },
        {
          id: 2,
          goodsName: 'HND3',
          goodsAddress: '〒350-0195',
        },
        {
          id: 3,
          goodsName: 'KIX1',
          goodsAddress: '〒590-8589',
        },
        {
          id: 4,
          goodsName: 'KIX2',
          goodsAddress: '〒574-8531',
        },
        {
          id: 5,
          goodsName: 'KIX3',
          goodsAddress: '567-8507',
        },
        {
          id: 5,
          goodsName: 'HSG1',
          goodsAddress: '〒841-8505',
        },
        {
          id: 6,
          goodsName: 'FSZ1',
          goodsAddress: '〒250-8560',
        },
        {
          id: 7,
          goodsName: 'NRT1',
          goodsAddress: '〒272-0193',
        },
        {
          id: 8,
          goodsName: 'NRT2',
          goodsAddress: '〒276-8525',
        },
        {
          id: 9,
          goodsName: 'NGO2',
          goodsAddress: '〒507-8585',
        },
        {
          id: 10,
          goodsName: 'KIX4',
          goodsAddress: '〒583-8533',
        },
        {
          id: 11,
          goodsName: 'HND8',
          goodsAddress: '192-8560',
        },
        {
          id: 12,
          goodsName: 'HND9',
          goodsAddress: '213-8517',
        },
        {
          id: 13,
          goodsName: 'HND9',
          goodsAddress: '213-8517',
        },
        {
          id: 14,
          goodsName: 'VJUN',
          goodsAddress: '〒583-8533',
        },
        {
          id: 15,
          goodsName: 'TPF3',
          goodsAddress: '569-0823',
        },
        {
          id: 16,
          goodsName: 'TPF6',
          goodsAddress: '270-1389',
        },
        {
          id: 17,
          goodsName: 'TYO1',
          goodsAddress: '332-8503',
        },
      ]
    },
    {
      c_id: "10",
      c_name: '西班牙',
      list: [
        {
          id: 1,
          goodsName: 'MAD4',
          goodsAddress: '28830',
        },
        {
          id: 2,
          goodsName: 'XESB',
          goodsAddress: '19208',
        },
        {
          id: 3,
          goodsName: 'XESA',
          goodsAddress: '19208',
        },
        {
          id: 4,
          goodsName: 'BCN1',
          goodsAddress: '8820',
        },
        {
          id: 5,
          goodsName: 'BCN2',
          goodsAddress: '8107',
        },
      ]
    },
    {
      c_id: "12",
      c_name: '意大利',
      list: [
        {
          id: 1,
          goodsName: 'MXP5',
          goodsAddress: '2U 29015',
        },
        {
          id: 2,
          goodsName: 'FCO1',
          goodsAddress: '2032',
        },
        {
          id: 3,
          goodsName: 'MXP3',
          goodsAddress: '13100',
        },
      ]
    },
    {
      c_id: "13",
      c_name: '法国',
      list: [
        {
          id: 1,
          goodsName: 'ORY1',
          goodsAddress: '45772',
        },
        {
          id: 2,
          goodsName: 'ORY4',
          goodsAddress: '91220',
        },
        {
          id: 3,
          goodsName: 'MRS1',
          goodsAddress: '26200',
        },
        {
          id: 4,
          goodsName: 'MRS1',
          goodsAddress: '26132',
        },
        {
          id: 5,
          goodsName: 'MRS1',
          goodsAddress: '26132',
        },
        {
          id: 6,
          goodsName: 'LYS1',
          goodsAddress: '71100',
        },
        {
          id: 7,
          goodsName: 'LYS1（71311）',
          goodsAddress: '71311',
        },
        {
          id: 8,
          goodsName: 'LIL1',
          goodsAddress: '59553',
        },
        {
          id: 9,
          goodsName: 'LIL1-1',
          goodsAddress: '59553',
        },
        {
          id: 10,
          goodsName: 'XFRG',
          goodsAddress: '45410',
        },
        {
          id: 11,
          goodsName: 'BVA1',
          goodsAddress: '80440',
        },
        {
          id: 12,
          goodsName: 'ORY1-770',
          goodsAddress: '45770',
        },
        {
          id: 13,
          goodsName: 'CDFR',
          goodsAddress: '33610',
        },
      ]
    },
    {
      c_id: "14",
      c_name: '澳大利亚',
      list: [
        {
          id: 1,
          goodsName: 'MEL1',
          goodsAddress: '3175',
        },
        {
          id: 2,
          goodsName: 'BWU1',
          goodsAddress: '2170',
        },
      ] 
    }
  ]    
  },
   // 左侧点击事件
   jumpIndex(e) {
    let index = e.currentTarget.dataset.menuindex
    let that = this
    that.setData({
      indexId: index
    });
  },
  //键盘输入时实时调用搜索方法
  input(e){
  // console.log(e)
  this.search(e.detail.value)
  },
  //点击完成按钮时触发
  confirm(e){
  this.search(e.detail.value)
  },
  search(key){
      var that=this;
    //从本地缓存中异步获取指定 key 的内容
      var list=wx.getStorage({
      key: 'list',
      //从Storage中取出存储的数据
      success: function(res) {
      // console.log(res)
      if(key==''){ //用户没有输入时全部显示
        that.setData({
        list:res.data
        })
        return;
      }
      var arr=[]; //临时数组，用于存放匹配到的数组
        for(let i in res.data){
          res.data[i].show=false; //所有数据隐藏
          if (res.data[i].search.indexOf(key)>=0){
          res.data[i].show = true; //让匹配到的数据显示
          arr.push(res.data[i])
        }
        }
        if(arr.length==0){
        that.setData({
        list:[{show:true,name:'没有相关数据！'}]
        })
        }else{
        that.setData({
        list: arr
        })
      }
  },
  })
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
  var list=[
  {name: "西安市第一人民医院", show: true, search:"西安市第一人民医院"},
  {name: "西安市第二人民医院", show: true, search: "西安市第二人民医院" },
  {name: "兰州市第一人民医院", show: true, search: "兰州市第一人民医院" },
  {name: "兰州市第二人民医院", show: true, search: "兰州市第二人民医院" }
  ]
  wx.setStorage({
  key: 'list',
  data: list
  })
  this.setData({
  list:list
  })
   // 确保页面数据已经刷新完毕~
   setTimeout(() => {
    this.getAllRects()
  }, 20)
},

changeMenu(e) {
  console.log(proListToTop);
  // 改变左侧tab栏操作
  if (Number(e.target.id) === this.data.currentActiveIndex) return
  MENU = 1
  this.setData({
    currentActiveIndex: Number(e.target.id),
    rightProTop: proListToTop[Number(e.target.id)]
  })
  this.setMenuAnimation(Number(e.target.id))
},
scroll(e) {
  for (let i = 0; i < proListToTop.length; i++) {
    if (e.detail.scrollTop < proListToTop[i] && i !== 0 && e.detail.scrollTop > proListToTop[i - 1]) {
      return this.setDis(i)
    }
  }
  // 找不到匹配项，默认显示第一个数据
  if (!MENU) {
    this.setData({
      currentActiveIndex: 0
    })
  }
  MENU = 0
},
setDis(i) {
  // 设置左侧menu栏的选中状态
  if (i !== this.data.currentActiveIndex + 1 && !MENU) {
    this.setData({
      currentActiveIndex: i - 1
    })
  }
  MENU = 0
  this.setMenuAnimation(i)
},
setMenuAnimation(i) {
  // 设置动画，使menu滚动到指定位置。
  let self = this
  console.log(33)
  if (menuToTop[i].animate) {
    console.log(11111)
    // 节流操作
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      console.log(12138)
      self.setData({
        leftMenuTop: (menuToTop[i].top - windowHeight)
      })
    }, 50)
  } else {
    if (this.data.leftMenuTop === 0) return
    this.setData({
      leftMenuTop: 0
    })
  }
},
getActiveReacts() {
  wx.createSelectorQuery().selectAll('.menu-active').boundingClientRect(function (rects) {
    return rects[0].top
  }).exec()
},
getAllRects() {

  // 获取商品数组的位置信息
  wx.createSelectorQuery().selectAll('.pro-item').boundingClientRect(function (rects) {
    rects.forEach(function (rect) {
      console.log(rect)
      // 这里减去44是根据你的滚动区域距离头部的高度，如果没有高度，可以将其删去
      proListToTop.push(rect.top - 44)
    })
  }).exec()

  // 获取menu数组的位置信息
  wx.createSelectorQuery().selectAll('.menu-item').boundingClientRect(function (rects) {
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        windowHeight = res.windowHeight / 2
        // console.log(windowHeight)
        rects.forEach(function (rect) {
          menuToTop.push({
            top: rect.top,
            animate: rect.top > windowHeight
          })
        })
      }
    })
  }).exec()
},
// 获取系统的高度信息
getSystemInfo() {
  let self = this
  wx.getSystemInfo({
    success: function (res) {
      windowHeight = res.windowHeight / 2
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