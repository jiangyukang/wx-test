var app = getApp()
Page({
  data: {
    show: ""
  },
  bean_json: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/user/bean2json.action',
      data: {
        id: 1,
        username: "toBeMN",
        age: 28
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        var show = "对象转jsonusername: "+res.data.username+"age: "+res.data.age;
        that.setData({
          show: show
        })
      }
    })
  },
  listbean_json: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/user/listbean2json.action',
      data: {
        'listuser[0].username': "Hello",
        'listuser[0].age': 18,
        'listuser[1].username': "World",
        'listuser[1].age': 28
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        var show = "list<对象>转json ";
        for (var i = 0; i < res.data.length; i++) {
          show += "username: "+res.data[i].username+"age: "+res.data[i].age;
        }
        that.setData({
          show: show
        })
      }
    })
  },
  mapbean_json: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/user/mapbean2json.action',
      data: {
        'listuser[0].username': "Hello",
        'listuser[0].age': 48,
        'listuser[1].username': "MINA",
        'listuser[1].age': 58
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        var show = "map<String,Obiect>转json ";
        for (var i = 0; i < res.data.detail.length; i++) {
          show += "username: "+res.data.detail[i].username+"age: "+res.data.detail[i].age;
        }
        that.setData({
          show: show
        })
      }
    })
  },

  //看这个方法即可
  user_register: function (res) {
    var that = this;
    console.log(res.detail.value)
    wx.request({
      url: 'http://localhost:8080/user/register.action',
      // data: res.detail.value,
      data: {
        username: "12345",
        studentno: "123",
        wxid: "jiangyukang",
        gender: 1,
        campus: 1,
        college: 1,
        phone: "123"
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        // var show = "表单提交返回状态码: "+res.data.status;
        // that.setData({
        //   show: show
        // })
      }
    })
  },

  //增加项目
  item_add: function (res) {
    var that = this;
    console.log(res.detail.value)
    wx.request({
      url: 'http://localhost:8080/item/add.action',
      data: {
        game: "校运会",
        category: "游泳",
        item: "50米自由泳",
        gender: 0,
        description: "比赛项目12.24在嘉定校区游泳馆举办"
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
      }
    })
  },












  onLoad: function () {
  }
})