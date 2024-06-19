<script>
export default {
    name: 'MainPage'
}
</script>
<script setup>
import {
    MapLocation,
    School
}
    from '@element-plus/icons-vue'
</script>

<template>
    <el-container>
        <el-aside width="200px">
            <!--设置侧边菜单-->
            <el-menu id="homemenu" active-text-color="#ffd04b" background-color="#232323" :default-active="$route.path"
                text-color="#fff" router>
                <h2>{{ '今天去哪儿' }}</h2>
                <el-menu-item index="/Sidebar/Home">
                    <el-icon class="maplocation">
                        <MapLocation />
                    </el-icon>
                    <span>校园游览</span>
                </el-menu-item>
                <el-menu-item index="/Sidebar/Architecture">
                    <el-icon>
                        <School />
                    </el-icon>
                    <span>建筑风采</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header id="header">中国地质大学未来城校区</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
#header {
    padding: 0 20px;
    background-color: #232323;
    height: 60px;
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: space-between;
}

#homemenu {
    border-right: none;
    height: 100vh;

    h2 {
        text-align: center;
        margin-top: 0;
        line-height: 40px;
        padding-top: 18px;
        color: #fff;
        font-size: 24px;
        font-weight: 400;

    }
}
</style>
