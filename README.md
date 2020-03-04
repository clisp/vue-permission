# vue-permission

从element-admin 抽出,由于自定义指令在 tab元素中无法使用,舍弃掉了。

最大化满足业务的要求:
改为 people  ->  role  ->  modules 对应，均为一对多 

使用方法:
```
v-if="this.checkPermission(['module1'])">


```

对应关系
```
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
```


