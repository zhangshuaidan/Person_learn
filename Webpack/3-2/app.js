//es modules
import  sum from './sum'
// commonjs
var minus =require('./minus');
//amd
require(['./muti'],function (muti) {
    console.log('muti(2*3)',muti(2,3))
})
    
console.log('sum(24+24) = ',sum(23,24));
console.log('sum(24-17) = ', minus(24, 17));
