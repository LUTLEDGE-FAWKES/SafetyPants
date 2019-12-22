Page({
  data:{
    change:0,
    N:"",
    color:'#000000',
    but:"开始",
    output1:"English",
    output2:"中文"
  },
  trans:function(){
    if(this.data.change==0)
    {
      this.setData({ change: 1,
      color: '#000000',
      output1:"中文",
      output2:"English"
      })
    }
    else if (this.data.change == 1) {
      this.setData({ change: 0,
        color: '#000000',
        output2: "中文",
        output1: "English"
      })
    }
  },
  begin:function(e){
    this.setData({but:"下一个"})
    this.setData({ color:'#F6F6F6'})
    wx.cloud.init({ traceUser: true })
    var _this = this;
    wx.cloud.callFunction({
      name: 'daoru',
      data: { tag: 1 },
      success: function (res) {
        _this.setData({ N: Math.floor(Math.random() * res.result.data.length)})
        if(_this.data.change==0){
          _this.setData({
            output1: res.result.data[_this.data.N].inE,
            output2: res.result.data[_this.data.N].inC
          })
        }
        else if (_this.data.change == 1) {
          _this.setData({
            output2: res.result.data[_this.data.N].inE,
            output1: res.result.data[_this.data.N].inC
          })
        }
      },
    })
  },
  search:function(e){
    this.setData({color:'black'})
  }
})