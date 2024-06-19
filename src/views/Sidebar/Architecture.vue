<script lang="ts">
export default {
    name: 'ArchitecturePage'
}
</script>
<script lang="ts" setup>
import { ref } from 'vue';
import ShowCard from '@/components/ShowCard.vue';
import type { TabsInstance } from 'element-plus'
const tabPosition = ref<TabsInstance['tabPosition']>('top')
const activeTab = ref('user')
const tabs = [
    { label: 'User', name: 'user', content: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" },
    { label: 'Config', name: 'config', content: "https://img1.baidu.com/it/u=1618423612,4112499448&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=574" },
    { label: 'Role', name: 'role', content: 'Role Content' },
    { label: 'Task', name: 'task', content: 'Task Content' }
]
</script>

<template>
    <el-tabs v-model="activeTab" :tab-position="tabPosition" style="padding: 20px">
        <el-tab-pane v-for="(tab, index) in tabs" :key="index" :label="tab.label" :name="tab.name">
            <ShowCard v-model:tabname="tab.name" v-model:imgsrc="tab.content"></ShowCard>
        </el-tab-pane>
    </el-tabs>
</template>

<style scoped>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
    height: 100%;
}
</style>
