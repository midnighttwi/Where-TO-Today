<script lang="ts">
export default {
    name: 'MainPage'
}
</script>
<script lang="ts" setup>
import { MapLocation, School, Search, ArrowRight, ArrowLeft } from '@element-plus/icons-vue'
import ASearch from '@/components/ASearch.vue'
import PathSearch from '@/components/PathSearch.vue'
import { ref } from 'vue'
const value = ref('')
const options = [
    {
        value: 'POI搜索',
        label: 'POI搜索'
    },
    {
        value: '路径规划',
        label: '路径规划'
    }
]

const isCollapse = ref(true)

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<template>
    <el-container>
        <el-aside id="homeaside" :style="{ width: isCollapse ? '60px' : '200px' }">
            <!--设置侧边菜单-->
            <el-menu id="homemenu" active-text-color="#ffd04b" :default-active="$route.path" text-color="#fff"
                background-color="#232323" router @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-menu-item index="/Sidebar/Home">
                    <el-icon class="maplocation">
                        <MapLocation />
                    </el-icon>
                    <span class="text">校园游览</span>
                </el-menu-item>
                <el-menu-item index="/Sidebar/Architecture">
                    <el-icon>
                        <School />
                    </el-icon>
                    <span class="text">建筑风采</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header id="header">
                <el-col :span="8">
                    <el-radio-group v-model="isCollapse">
                        <el-radio-button v-if="isCollapse == true" :value="false"><el-icon>
                                <ArrowRight />
                            </el-icon></el-radio-button>
                        <el-radio-button v-else :value="true"><el-icon>
                                <ArrowLeft />
                            </el-icon></el-radio-button>
                    </el-radio-group>
                    <span class="text">今天去哪儿-中国地质大学未来城校区</span>
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
                        <span class="text"> 搜索选项：</span>
                        <el-select v-model="value" filterable placeholder="POI搜索" style="width: 6vw">
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
    padding: 0 2vh;
    background-color: #232323;
    height: 6vh;
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: space-between;
}

#homemenu:not(.el-menu--collapse) {
    border-right: none;
    height: 100vh;
}

#homemenu.el-menu--collapse {
    border-right: none;
    height: 100vh;
}

#homemain {
    padding-left: 0%;
    padding-top: 0%;
}

.el-row {
    margin-bottom: 0;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 5vh;
}

.grid-content {
    border-radius: 5vh;
    min-height: 20vh;
}

.text {
    font-size: 100%;
}
</style>
