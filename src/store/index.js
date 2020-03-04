import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        roles: {
            admin: {
                name: '管理员',
            },
            job1: {
                name: '职工1'
            },
        },
        module: {
            module1: {name: '模块1'},
            module2: {name: '模块2'}
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})
