let html = document.querySelector('#html')
let style = document.querySelector('#style')
let n = 0
let string2 = ''
let string = `/*
你好，我叫Biao
接下来我演示一下我的前端功底
首先我要准备一个div
*/
#div1{
    border: 1px solid red;
    width: 400px;
    height: 400px;
}
/*
接下来我把 div 变成一个八卦图
注意看好了
首先，把 div 变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/*
八卦由阴阳两部分组成
一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
加上两个神秘的小球
*/
#div1::before{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`
let step = ()=>{
    setTimeout(()=>{
        //判断string第n个字符是否===回车
        //是 string2加上<br> ,否 加上string第n个
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if(string[n] === ' '){
            string2 += '&nbsp'
        } else if(string[n] === '/'){
            string[n] = ''
        } else if(string[n] === '*'){
            string[n] = ''
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,9999);
        html.scrollTo(0,9999)
        //判断 n 是否为最后一个字符
        if (n+1 < string.length) {
            step()
        }
        n+=1
    },50)
}
step()