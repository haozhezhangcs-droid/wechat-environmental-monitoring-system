// index.js


Page({
  data:{
    pic:'/images/10ae05f3ef6de45ee10632a6897032d.jpg',
    buttonClass: 'button-custom-1', // 初始样式
    t_val : 23,
    count : 23,
    displayValue: 23, // 显示的温度或报警值
    isTemperature: false, // 是否显示温度，默认显示报警值
    wendu_shang: 30, // 温度上限
    wendu_xia: 10, // 温度下限
    warnning_str:'正常工作中',
    displayValue: 0, // 初始显示温度
    isTemperature: false // 初始状态
   },
    // 增加温度上限
  wenduadd1() {
    this.setData({
      wendu_shang: this.data.wendu_shang + 1,
    });
    this.updateWarning(); // 每次修改后都更新警告信息
  },

  // 减少温度上限
  wenduadd2() {
    this.setData({
      wendu_shang: this.data.wendu_shang - 1,
    });
    this.updateWarning();
  },

  // 增加温度下限
  wendujian1() {
    this.setData({
      wendu_xia: this.data.wendu_xia + 1,
    });
    this.updateWarning();
  },

  // 减少温度下限
  wendujian2() {
    this.setData({
      wendu_xia: this.data.wendu_xia - 1,
    });
    this.updateWarning();
  },
   
   /*声明周期函数--监听页面加载*/
   
  /*每秒钟监听一次 count:报警值，t_val:当前温度*/ 
  updateWarning() {
    if (this.data.t_val > this.data.wendu_shang) {
      this.setData({
        warnning_str: '温度过高'
      });
    } else if (this.data.t_val === this.data.wendu_shang) {
      this.setData({
        warnning_str: '达到临界点'
      });
    } else if (this.data.t_val < this.data.wendu_xia) {
      this.setData({
        warnning_str: '温度过低'
      });
    } else if (this.data.t_val === this.data.wendu_xia) {
      this.setData({
        warnning_str: '达到临界点'
      });
    } else {
      this.setData({
        warnning_str: '温度正常'
      });
    }
  },
      toggleTemperatureDisplay() {
        this.setData({
          isTemperature: !this.data.isTemperature,
          displayValue: this.data.isTemperature ? this.data.count : this.data.t_val, // 切换显示温度值或报警值
          buttonClass: this.data.buttonClass === 'one' ? 'one-active' : 'one' // 切换按钮样式
        });
      },
    
      // 增加或减少按钮样式的变化
      changeButtonColor() {
        this.setData({
          buttonClass: this.data.buttonClass === 'button-custom-1' ? 'button-custom-2' : 'button-custom-1'
        });
      },
    
      // 按钮减少报警值
      button_init() {
        this.setData({
          count: this.data.count - 1,
          displayValue: this.data.isTemperature ? this.data.t_val : this.data.count // 根据切换状态更新显示
        });
      },
    
      // 按钮增加报警值
      button_config() {
        this.setData({
          count: this.data.count + 1,
          displayValue: this.data.isTemperature ? this.data.t_val : this.data.count // 根据切换状态更新显示
        });
      },
      onLoad(options) {
        /*每秒钟监听一次 count:报警值，t_val:当前温度*/
        setInterval(() => {
          this.updateWarning(); // 每秒钟更新警告信息
    if (!this.data.isTemperature) {
      this.setData({
        displayValue: this.data.count // 更新显示报警值
      });
    }
  }, 1000)
}

})
