//app.js
App({
  onLaunch: function () {
    var a = this;
    wx.getSystemInfo({
      success: function (t) {
        var e = 68; -
          1 !== t.model.indexOf("iPhone X") ? e = 88 : -1 !== t.model.indexOf("iPhone") && (e = 64),
          a.globalData.statusBarHeight = t.statusBarHeight, a.globalData.titleBarHeight = e - t.statusBarHeight;
      },
      failure: function () {
        a.globalData.statusBarHeight = 0, a.globalData.titleBarHeight = 0;
      }
    });
  },
  globalData: {
    userInfo: null,
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight']
  }
})