Page({
data:{
input1:"",
input2:""
},
inputEn:function(e){
  this.setData({input1:e.detail.value}) },
inputZh:function(e){
  this.setData({input2:e.detail.value}) },
up: function (e) {
  if(this.data.input1=="" || this.data.input2==""){
wx.showToast({
  icon:'none',
  title: '您还未输入完整！',
})
  }else{
    wx.cloud.init({ traceUser: true })
    const db = wx.cloud.database()
    db.collection('Jiancha').add({
      data: {
        inE: this.data.input1,
        inC: this.data.input2,
        tag: 1
      },
      success: re => { wx.showToast({ title: '审核中' }) },
    })
    this.setData({
      input1:"",
      input2:""
    })
  }
  },
})