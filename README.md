# vue-permission

从element-admin 抽出,由于自定义指令在 tab元素中无法使用,舍弃掉了。

将 people  ->  role  ->  modules 对应，均为一对多 

使用方法:
```
v-if="this.checkPermission(['module1'])">
```


