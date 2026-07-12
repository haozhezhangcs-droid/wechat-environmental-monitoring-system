// logs.js
const util = require('../../utils/util.js')

Page({

  /*页面初始数据*/
  data:{
    info: 'hello world',
    pic: '/images/2ac2ffe275220ed4adc9e15f06159c7.png',
    val: 72,
    xiaoshu: Math.random() * 100, // 生成0-100之间的小数
    t_val: 23,  // 示例温度值
    count: 5,   // 示例报警值
    displayValue: "正常", // 示例报警值显示
    warnning_str: "系统正常" // 示例警告字符串
   },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
   // 按钮1点击事件
   button_init() {
    console.log("按钮1点击事件");
    // 处理按钮1逻辑
  },

  // 按钮2点击事件
  button_config() {
    console.log("按钮2点击事件");
    // 处理按钮2逻辑
  }
})
