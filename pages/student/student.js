// pages/student/student.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    searchFlag: true,
    searchCourseFlag: true
  },
  search: function (e) {
    if (e.currentTarget.dataset.type == 0) {
      this.setData({
        searchName: '按名字检索',
        seaarchTips: '请输入学生姓名',
        searchFlag: false,
        type: e.currentTarget.dataset.type
      })
    }
    if (e.currentTarget.dataset.type == 1) {
      this.setData({
        searchName: '按学号检索',
        seaarchTips: '请输入学生学号',
        searchFlag: false,
        type: e.currentTarget.dataset.type
      })
    }
    if (e.currentTarget.dataset.type == 2) {
      this.setData({
        searchCourseFlag: false,
        type: e.currentTarget.dataset.type
      })
    }
  },
  GetContent: function (e) {
    this.setData({
      content: e.detail.value
    })
  },
  searchSubmit: function () {
    var that = this
    wx.navigateTo({
      url: 'student-info/student-info?content=' + that.data.content + '&type=' + that.data.type,
    })
  },

  searchCancel: function () {
    this.setData({
      searchFlag: true,
      searchCourseFlag: true
    })
  },

  GetDate: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  GetSport: function (e) {
    this.setData({
      sport: e.detail.value
    })
  },
  searchCourseSubmit: function () {
    var that = this
    wx.navigateTo({
      url: 'student-info/student-info?date=' + that.data.date + '&sport=' + that.data.sport + '&type=' + that.data.type,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.setData({
      searchFlag: true
    })
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