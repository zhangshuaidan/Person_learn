import common from './css/common.less'
import base from './css/base.less';
// import  './components/a.js'
import(/* webpackChunkName:'a' */'./components/a.js').then(function (d) {
    console.log(d)
})
var app = document.getElementById('app')
app.innerHTML= '<div class="'+base.box+'"></div>'



// base.use()
// base.unuse()

// var flag =false

// setInterval(function () {
//     if(flag){
//         base.unuse()
//     }else {
//         base.use()
//     }
//     flag = !flag
// },500)