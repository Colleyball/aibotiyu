// pages/apply/apply-info/apply-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  submit: function () {
    var that = this
    wx.request({
      url: 'http://aibotiyu.game-win.cn/App/Apply',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        name: that.data.name,
        no: that.data.no,
        sport: that.data.sport,
        count: that.data.count,
        type: that.data.type,
        start: that.data.start,
        classweek: that.data.classweek,
        classtime: that.data.classtime,
        classtype: that.data.classtype,
        tel: that.data.tel,
        price: that.data.price,
        salesman: that.data.salesman,
        note: that.data.note
      },
      success: function (res) {
        console.log (res.data),
          wx.redirectTo({
            url: '../../index/index?apply=1',
          })
      }
    })
  },
  cancel: function () {
    wx.navigateBack()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var classweek = options.classweek.split(",")
    var classtime = options.classtime.split(",")
    var classweek_temp = []
    var classtime_temp = []
    for (var i = 0; i < options.type * 2; i++) {
      if (i%2 == 0) {
        classweek_temp.push(classweek[i])
      }
    }
    for (var i = 0; i < options.type; i++) {
      classtime_temp.push(classtime[i])
    }
    this.setData({
      name: options.name,
      no: options.no,
      sport: options.sport,
      count: options.count,
      type: options.type,
      classweek: classweek_temp,
      classtime: classtime_temp,
      start: options.start,
      tel: options.tel,
      price: options.price,
      salesman: options.salesman,
      note: options.note,
      classtype: options.classtype
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