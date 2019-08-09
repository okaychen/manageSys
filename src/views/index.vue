<template>
    <div class="index">
        <el-container>
            <scrollbar></scrollbar>
            <router-view></router-view>
            <el-container>
                <el-header style="background:#fff;text-align: right; font-size: 12px;">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main style="background:#f3f3f4">

                </el-main>
            </el-container>

        </el-container>
    </div>
</template>

<script>
    var scrollbar = require('../components/scrollbar.vue').default;
    export default {
        data() {
            return {

            }
        },
        methods: {

        },
        components: {
            scrollbar
        },
    };
</script>

<style scoped>
    .index,
    .el-container {
        height: 100%;
    }
</style>