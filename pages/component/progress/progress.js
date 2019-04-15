// pages/component/button/buton.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  change(e){
    wx.showToast({
      title: '加载成功',
      icon: 'success',
      mask: true
    })
  }
  
})