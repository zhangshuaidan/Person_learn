import * as _ from 'lodash'
var page = 'subpageA'
if(page === 'subpageA') {
    import(/* webpackChunkName:'subpageA' */ './subpageA').then(function (subPageA) {
        console.log(subPageA)
    })
}else if (page === 'subpageB'){
    import(/* webpackChunkName:'subpageB' */ './subpageB').then(function (subPageB) {
        console.log(subPageB)
    })
}


export default 'pageA'