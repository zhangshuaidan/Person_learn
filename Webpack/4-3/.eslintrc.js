module.exports= {
    root:true,
    extends:'standard',
    plugins:['html'],
    env:{
        browser:true, //浏览器环境
        node:true
    },
    globals:{
        $:true
    },
    rules:{
        indent: ['error',4],
        'eol-last':['error','nerver']
    }
}