<template>
    <el-aside width="200px">
        <div class="block">
            <el-image :src="src"></el-image>
        </div>
        <el-menu :default-openeds="['2', '3']" default-active="1" class="el-menu-vertical-demo" @open="handleOpen"
            @close="handleClose" background-color="#336699" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item class="ml85" index="2-1">选项1</el-menu-item>
                <el-menu-item class="ml85" index="2-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="3" class="routerLink">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>文章管理</span>
                </template>
                <router-link to="/articleList">
                    <el-menu-item index="3-1" class="ml85">
                        文章列表
                    </el-menu-item>
                </router-link>
                <el-menu-item index="3-2" class="ml85">选项2</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">系统管理</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>
<script>
    export default {
        data() {
            return {
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    .el-aside {
        height: 100%;
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        background: #336699;
        color: #333;
    }

    .el-menu {
        margin-left: -50px;
        border: none;
    }

    .routerLink a {
        color: #ffffff;
        text-decoration: none;
    }

    .routerLink a:focus {
        color: rgb(255, 208, 75);
    }

    .ml85 {
        margin-left: 85px;
    }
</style>