var app = getApp()

Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight
  },
  Registratio: function () {
    wx.navigateTo({
      url: '../apply/apply',
    })
  },
  Student: function () {
    wx.navigateTo({
      url: '../student/student',
    })
  },
  Leave: function () {
    wx.navigateTo({
      url: '../webview/webview?site=leave',
    })
  },
  Download: function () {
    wx.showToast({
      title: '正在开发中',
    })
  },
  Sports: function () {
    wx.navigateTo({
      url: '../webview/webview?site=sport',
    })
  },
  Location: function () {
    wx.navigateTo({
      url: '../webview/webview?site=location',
    })
  },
  onLoad: function (options) {
    if (options.apply == 1) {
      wx.showModal({
        title: '提示',
        content: '报名成功',
        showCancel: false
      })
    }
  },
  onShow: function () {
    var that = this
    console.log("onShow");
  },
  onLaunch: function () { },
  onReady: function () { },
  onHide: function () { },
  onShareAppMessage: function () {
    return {
      title: "爱搏体育",
      desc: "",
      path: "/pages/index/index"
    };
  }
});