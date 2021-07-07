# 1.关于 h 函数的说明

vue.runtime.common.js（项目中用的比较多） 1.不包含模板解析器，打包后体积很小（1kb，但是原来的 vue.js 有 336kb） 2.配置项中不能写 template，要用 render: h => h(APP) 代替
vue.js 1.包含模板解析器，打包后体积很大 2.配置可以写 template

# 2.ref 和 props

## 2.1.ref 的用法：

1.标签中直接编写 ref="xxx" 2.通过 this.\$refs.xxx 获取 3.备注：
（1）.若给 HTML 内置标签打 ref，则获取到的是真实的 DOM 节点
（2）.若给组件标签打 ref，则获取到的是组件实例对象

## props 的用法：

(1)传递 props： <Demo :a="xx" />
(2)Demo 组件中接收声明
第一种方式：
props:['xx']
第二种方式：
props：{
xx:{
type:String,
required: true,//必要性
default:"隔壁老王" //默认值
}
}
