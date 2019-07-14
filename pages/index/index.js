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
  Package: function () {
    wx.navigateTo({
      url: '/pages/class/add-class-package',
    })
  },
  onLoad: function (options) {

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