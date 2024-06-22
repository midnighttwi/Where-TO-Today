<script lang="ts">
export default {
    name: 'ArchitecturePage'
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import ShowCard from '@/components/ShowCard.vue'
import type { TabsInstance } from 'element-plus'
import axios from 'axios'

//获取校园数据
var features = ref([])
var getData = async () => {
    const url =
        'http://localhost:8080/geoserver/wfs?service=wfs&version=1.0.0&request=GetFeature&typeName=Buildings:final_building&outputFormat=application/json'

    try {
        const response = await axios.get(url)
        if (response.data.features && response.data.features.length > 0) {
            features.value = response.data.features
            console.log('Data found.')
            console.log(features.value)
        } else {
            console.log('No data found.')
        }
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

// 异步加载数据
getData()

const tabPosition = ref<TabsInstance['tabPosition']>('top')
const activeTab = ref('user')
</script>

<template>
    <el-tabs v-model="activeTab" :tab-position="tabPosition" style="padding: 1.04vh">
        <el-tab-pane v-for="(feature, index) in features" :key="index" :label="feature.properties.名称"
            :name="feature.properties.名称">
            <ShowCard :feature="feature" :imgsrc="feature.properties.图片链接"></ShowCard>
        </el-tab-pane>
    </el-tabs>
</template>

<style scoped>
.demo-tabs>.el-tabs__content {
    padding: 1.67%;
    color: #6b778c;
    font-size: 2.96vh;
    font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
    height: 100vh;
}
</style>
