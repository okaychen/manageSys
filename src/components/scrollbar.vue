<template>
    <el-aside width="200px">
        <div class="block">
            <el-image :src="src"></el-image>
        </div>
        <el-menu :default-openeds="['2', '3']" default-active="1" class="el-menu-vertical-demo" @open="handleOpen"
            @close="handleClose" background-color="#336699" text-color="#eee" active-text-color="#ffd04b">
            
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>数据列表</span>
                </template>
                <el-menu-item class="ml85" index="2-1">文章列表</el-menu-item>
                <el-menu-item class="ml85" index="2-2">模板列表</el-menu-item>
                <el-menu-item class="ml85" index="2-3">用户列表</el-menu-item>
                <el-menu-item class="ml85" index="2-4">管理员列表</el-menu-item>
            </el-submenu>
            
            <el-submenu index="3" class="routerLink">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>添加数据</span>
                </template>
                <router-link to="/articleList">
                    <el-menu-item index="3-1" class="ml85">
                        创建模板
                    </el-menu-item>
                </router-link>
                <el-menu-item index="3-2" class="ml85">新增文章</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-warning"></i>
                    <span>系统设置</span>
                </template>
                <el-menu-item class="ml85" index="4-1">用户信息</el-menu-item>
                <el-menu-item class="ml85" index="4-2">系统帮助</el-menu-item>
            </el-submenu>
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