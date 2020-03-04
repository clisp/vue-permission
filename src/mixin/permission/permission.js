import store from '@/store'

/**
 *  对权限部分进行改造,权限对应模块，角色可有多个模块
 */

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
export default function checkPermission(value) {
    if (value && value instanceof Array && value.length > 0) {
        //Object
        const modules = store.state.modules
        //Array
        const permissionModules = value

        const hasPermission = permissionModules.some(module => {
            return modules.hasOwnProperty(module)
        })

        if (!hasPermission) {
            return false
        }
        return true
    } else {
        console.error(`need modules! Like checkPermission="['module1','module2']"`)
        return false
    }
}
