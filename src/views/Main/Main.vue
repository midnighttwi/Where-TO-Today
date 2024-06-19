<script>
export default {
    name: 'MainPage'
}
</script>
<script setup>
import {
    MapLocation,
    School,
    Search
}
    from '@element-plus/icons-vue';
import ASearch from '@/components/ASearch.vue';
import PathSearch from '@/components/PathSearch.vue';
import { ref } from 'vue'
const value = ref('')
const options = [
    {
        value: 'POI搜索',
        label: 'POI搜索',
    },
    {
        value: '路径规划',
        label: '路径规划',
    },]

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
            <el-header id="header">
                <el-col :span="16">
                    <span>中国地质大学未来城校区</span>
                </el-col>
                <el-col :span="5">
                    <div v-if="value === '路径规划'">
                        <PathSearch></PathSearch>
                    </div>
                    <div v-else>
                        <ASearch></ASearch>
                    </div>
                </el-col>
                <el-col :span="3">
                    <el-row justify="space-evenly">
                        <el-icon>
                            <Search />
                        </el-icon>
                        <span> 搜索选项：</span>
                        <el-select v-model="value" filterable placeholder="POI搜索" style="width: 100px">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-row>
                </el-col>
            </el-header>
            <el-main id="homemain">
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

#homemain {
    padding: 0;
}

.el-row {
    margin-bottom: 0px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>
