<template>
    <div class="index">
        <el-container>
            <scrollbar></scrollbar>
            <el-container style="position:relative">
                <vheader></vheader>
                <el-main class="main_container">
                    <h1>数据统计</h1>
                    <el-row class="main_subTitle">
                        <el-row>
                            <el-col :span="4"><div class="grid-content bg-pink">当日数据</div></el-col>
                            <el-col :span="4"><div class="grid-content bg-purple-light">注册用户</div></el-col>
                            <el-col :span="4"><div class="grid-content bg-purple-dark">访问量</div></el-col>
                            <el-col :span="4"><div class="grid-content bg-purple">新增文章</div></el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4"><div class="grid-content bg-blue">所有数据</div></el-col>
                            <el-col :span="4"><div class="grid-content bg-purple-dark">注册用户</div></el-col>
                            <el-col :span="4"><div class="grid-content bg-purple-light">访问量</div></el-col>
                            <el-col :span="4"><div class="grid-content bg-purple">文章</div></el-col>
                        </el-row>
                    </el-row>
                    <ve-line :data="chartData"></ve-line>
                </el-main>
            </el-container>
        </el-container>
        <router-view></router-view>
    </div>
</template>

<script>
    const scrollbar = require('../components/scrollbar.vue').default;
    const vheader = require('../components/header.vue').default;
    export default {
        data() {
            return {
                chartData:{
                    columns:['日期','注册用户量','文章数量','访问量'],
                    rows:[
                        {'日期':'1/1','注册用户量':'10','文章数量':'2','访问量':'100'},
                        {'日期':'1/2','注册用户量':'50','文章数量':'2','访问量':'120'},
                        {'日期':'1/3','注册用户量':'80','文章数量':'1','访问量':'230'},
                    ]
                }
            }
        },
        methods: {

        },
        components: {
            scrollbar,
            vheader,
        },
    };
</script>

<style>
    .bg-blue{
        background: #409EFF;
    }

    .bg-pink{
        background: #F56C6C;
    }

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

    .main_subTitle{
        margin:100px 0px;
    }

    .el-row {
        margin-bottom: 50px;
    }
    .el-col {
        border-radius: 4px;
        margin-right: 20px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 60px;
        line-height: 60px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>