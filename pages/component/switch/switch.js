Page({
  data: {
    
  },

  onViewChange : function(e){
    wx.showToast({
      title: e.detail.value ? "打开了switch" : "关闭了switch",
      icon : "success",
      mask : 'true'
    })
  }

})