// vue包中导入vue对象
import Vue from 'vue'
//导入APP组件对象
import App from './App.vue'

new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>' // 使用App标签渲染
})



// 测试babel 将ES6语法转为ES5语法
const arr = [1,2,3].map(item=>{
    return item+1
})
console.log(arr)


