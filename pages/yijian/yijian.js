Page({
  data:{
    input:""
  },
  input:function(e){
    this.setData({input:e.detail.value})
  },
  up: function (e) {
      wx.cloud.init({ traceUser: true })
      const db = wx.cloud.database()
    db.collection('Suggestion').add({
        data: {
          建议: this.data.input,
        },
        success: re => { wx.showToast({ 
          icon:"none",
          title: '感谢您的建议！' }) },
      })
  },
})