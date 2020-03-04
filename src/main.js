import Vue from 'vue'

import permission from './mixin/permission'

import permissionDemo from './views/permission-demo'
import store from './store'

Vue.config.productionTip = false

//混入权限
Vue.mixin(permission)

new Vue({
    methods: {
        print: function () {
            console.log(this)
        }
    },
    store,
    render: function (h) {
        return h(permissionDemo)
    }
}).$mount('#app')
