function init() {
  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1LBDm0k2Ocn5HwgbeIV_2ZEegLw6Gidtns3Yz_N-f7_A/pubhtml',
    callback: function (tabletopData, tabletop) {
      console.log(tabletopData)

      var app4 = new Vue({
        el: '#app-4',
        data: {
          list: tabletopData,
        }
      })
    },
    simpleSheet: true
  })
}

window.addEventListener('DOMContentLoaded', init)