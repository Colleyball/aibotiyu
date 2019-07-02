// pages/student/student-info/student-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type == 0 || options.type ==1) {
      this.setData({
        content: options.content,
        type: options.type,
        web_src: 'http://aibotiyu.game-win.cn/App/ShowStudent?content=' + options.content + '&type=' + options.type
      })
    }
    if (options.type ==2) {
      this.setData({
        date: options.date,
        sport: options.sport,
        type: options.type,
        web_src: 'http://aibotiyu.game-win.cn/App/ShowCourseTime?date=' + options.date + '&sport=' + options.sport
      })
    }
    
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