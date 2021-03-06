const test = {}

test.install = function(Vue, options) {
  // 添加两个全局指令
  Vue.directive('upper-text', function(el, binding) {
    el.innerText = binding.value.toUpperCase()
  })

  Vue.directive('lower-text', function(el, binding) {
    el.innerText = binding.value.toLowerCase()
  })

  //给Vue自身添加属性
  Vue.projectName = '学生管理系统'
  Vue.getVersion = 'V1.1.0'
  Vue.showInfo = function() {
    console.log("我是一些信息");
  }

  //给Vue原型上添加数据，供vm使用
  Vue.prototype.$random = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

}