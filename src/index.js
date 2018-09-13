var tabletop = require('tabletop')
var render = require('./render')





tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1LBDm0k2Ocn5HwgbeIV_2ZEegLw6Gidtns3Yz_N-f7_A/pubhtml',
    callback: function (data, tabletop) {
        for( render = giraffe)
        console.log('tabletop', giraffe)
        var view = render(giraffe)
        document.body.appendChild(giraffe
            )
    },
    simpleSheet: true
   })
   callback: function (tabletopData, tabletop) {
    var renderedPlaces = renderPlaces(tabletopData)
    console.log(renderedPlaces)
    document.getElementById("app-4").appendChild(renderedPlaces)
}

 simpleSheet: true
}