<template>
    <div class="index">
        <el-container>
            <scrollbar></scrollbar>
            <el-container style="position:relative">
                <vheader></vheader>
                <el-main class="main_container">

                </el-main>
            </el-container>
        </el-container>
        <router-view></router-view>
    </div>
</template>

<script>
    var scrollbar = require('../components/scrollbar.vue').default;
    var vheader = require('../components/header.vue').default;
    export default {
        data() {
            return {

            }
        },
        methods: {

        },
        components: {
            scrollbar,
            vheader
        },
    };
</script>

<style>
    .index,
    .el-container {
        height: 100%;
    }

    .main_container {
        width: 100%;
        min-height: calc(100% - 60px);
        position: absolute;
        top: 60px;
        right: 0px;
        background: #f3f3f4;
    }
</style>