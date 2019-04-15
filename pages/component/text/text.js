Page({
  data: {
    number : 0
  },

  add : function(){
    this.setData({
      number: this.data.number = this.data.number + 1
    })
  },

  clear(e){
    this.setData({
      number: 0
    })
  }
})