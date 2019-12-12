<template>
    <el-header class="header_container">
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
    </el-header>
</template>

<script>
    export default {

    }
</script>

<style>
    .header_container {
        width: 100%;
        height: 60px;
        background: #fff;
        text-align: right;
        font-size: 12px;
    }
</style>