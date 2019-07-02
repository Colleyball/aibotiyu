// pages/apply/apply.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    Name: '',
    No: '',
    SportFlag: true,
    DayFlag: true,
    WeekFlag: true,
    sportname: '请选择运动项目',
    classday: '请选择每周上课次数',
    day: [['1', '一周一次课'], ['2', '一周两次课'], ['3', '一周三次课'], ['4', '一周四次课'], ['5', '一周五次课'], ['7', '连续上课']],
    week: [['0', '星期天'], ['1', '星期一'], ['2', '星期二'], ['3', '星期三'], ['4', '星期四'], ['5', '星期五'], ['6', '星期六']],
    classweek: [['6', '星期六'], ['0', '星期日'], ['5', '星期五'], ['4', '星期四'], ['3', '星期三'], ['2', '星期二'], ['1', '星期一']],
    classtime: ['08:00', '08:00', '08:00', '08:00', '08:00', '08:00', '08:00'],
    classtype: ['普通班', '基础班', '提高班', '私教班'],
    classtypechoose: '选择班级种类',
    ClassTypeFlag: true,
    classpackage: [['0', '手动输入']],
    classpackagechoose: '请选择课程套餐',
    classpackageFlag: true,
  },
  GetStudentName: function (e) {
    this.setData({
      Name: e.detail.value
    })
  },
  GetStudentNo: function (e) {
    this.setData({
      No: "M" + e.detail.value
    })
  },
  GetStudentTel: function (e) {
    this.setData({
      Tel: e.detail.value
    })
  },
  GetPrice: function (e) {
    this.setData({
      Price: e.detail.value
    })
  },
  GetSalesman: function (e) {
    this.setData({
      Salesman: e.detail.value
    })
  },
  GetNote: function (e) {
    this.setData({
      Note: e.detail.value
    })
  },
  BindSetClassDay: function () {
    this.setData({
      DayFlag: false
    })
  },
  AutoGetStudentNo: function () {
    var that = this
    wx.request({
      url: 'http://aibotiyu.game-win.cn/App/GetUid',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        name: that.data.Name
      },
      success: function (res) {
        console.log(res.data),
        that.setData({
          StudentNo: res.data.data
        })
      }
    })
  },
  //弹出选择一周几次课的菜单
  BindChooseClassDay: function (e) {
    this.setData({
      classday: e.currentTarget.dataset.name,
      classdaytype: e.currentTarget.dataset.type,
      DayFlag: true
    })
  },
  BindHideChooseClassDay: function () {
    this.setData({
      DayFlag: true
    })
  },

  BindSetSports: function () {
    this.setData({
      SportFlag: false
    })
  },
  BindChooseSport: function (e) {
    this.setData({
      sportname: e.currentTarget.dataset.name,
      SportFlag: true
    })
  },
  BindHideChooseSport: function () {
    this.setData({
      SportFlag: true
    })
  },
  //选择班级种类
  BindSetClassType: function () {
    this.setData({
      ClassTypeFlag: false
    })
  },
  BindChooseClassType: function (e) {
    this.setData({
      classtypechoose: e.currentTarget.dataset.name,
      ClassTypeFlag: true
    })
  },
  BindHideClassType: function () {
    this.setData({
      ClassTypeFlag: true
    })
  },
  //选择课程套餐种类
  BindSetClassPackage: function () {
    this.setData({
      classpackageFlag: false
    })
  },
  BindChooseClassPackage: function (e) {
    this.setData({
      classpackagechoose: e.currentTarget.dataset.name,
      classpackageFlag: true
    })
  },
  BindHideClassPackage: function () {
    this.setData({
      classpackageFlag: true
    })
  },
  //课程课时
  BindSetSportsCount: function (e) {
    this.setData({
      classcount: e.detail.value
    })
  },
  BindSetStartTime: function (e) {
    this.setData({
      starttime: e.detail.value
    })
  },
  //选择上课时间
  BindSetClassWeek: function (e) {
    this.setData({
      WeekFlag: false,
      time_id: e.currentTarget.dataset.count
    })
  },
  BindChooseClassWeek: function (e) {
    var classweek = this.data.classweek
    var time_id = this.data.time_id
    var week = e.currentTarget.dataset.name
    var week_id = e.currentTarget.dataset.type
    var class_time = [week_id, week]
    classweek[time_id] = class_time
    this.setData({
      WeekFlag: true,
      classweek: classweek
    })
  },
  BindHideChooseClassWeek: function () {
    this.setData({
      WeekFlag: true
    })
  },
  bindTimeChange: function (e) {
    var classtime = this.data.classtime
    var time_id = e.currentTarget.dataset.count
    var time = e.detail.value
    if (this.data.classdaytype == 7) {
      classtime[0] = time
      classtime[1] = time
      classtime[2] = time
      classtime[3] = time
      classtime[4] = time
      classtime[5] = time
      classtime[6] = time
    } else {
      classtime[time_id] = time
    }
    this.setData({
      classtime: classtime
    })
  },
  submit: function (e) {
    var that = this
    wx.navigateTo({
      url: 'apply-info/apply-info?name=' + that.data.Name + '&no=' + that.data.No + '&sport=' + that.data.sportname + '&count=' + that.data.classcount + '&start=' + that.data.starttime + '&type=' + that.data.classdaytype + '&classweek=' + that.data.classweek + '&classtime=' + that.data.classtime + '&tel=' + that.data.Tel + '&price=' + that.data.Price + '&salesman=' + that.data.Salesman + '&note=' + that.data.Note + '&classtype=' + that.data.classtypechoose,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://aibotiyu.game-win.cn/App/GetSports',
      header: {
        "content-type": "application/json;charset=utf8"
      },
      method: "GET",
      data: {},
      success: function (res) {
        console.log(res.data)
        var sports = [[0, '请选择运动项目']]
        var current_sports = res.data.data
        var sports_count = current_sports.length
        var i
        for (i = 0; i < sports_count; i++) {
          var sports_tmp = [current_sports[i].no, current_sports[i].sport]
          sports.push(sports_tmp)
        }
        that.setData({
          sports: sports
        })
      }
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