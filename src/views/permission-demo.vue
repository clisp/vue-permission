<template>
    <div>
        <div>
            功能级别控制
        </div>
        <div v-if="this.checkPermission(['module1'])">
            我是管理员
        </div>
        <div v-if="this.checkPermission(['module2'])">
            我是功能点1
        </div>

        <div v-if="this.checkPermission(['job2'])">
            我是功能点2,由于无功能点2角色，无法展示
        </div>
    </div>

</template>

<script>
    export default {
        name: "permission-demo",
       
    }
</script>

<style scoped>

</style>
