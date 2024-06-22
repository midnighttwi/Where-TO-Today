<script>
export default {
    name: 'ASearchPage'
}
</script>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { inject } from 'vue'

const value = ref('')
const options = ref([])

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
            // 将属性值加入到options中
            addFeaturesToOptions(features.value, options.value)
            console.log('Updated options:', options.value)
        } else {
            console.log('No data found.')
        }
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

// 将属性值加入到options中
const addFeaturesToOptions = (features, options) => {
    features.forEach((feature) => {
        if (feature.properties && feature.properties.名称 && feature.properties.info) {
            options.push({
                value: feature.properties.名称,
                label: feature.properties.info
            })
        }
    })
}

// 异步加载数据
getData()

const globalState = inject('globalState')

// 查询选中的选项
const getLocation = () => {
    console.log('函数响应')
    const selectedOption = options.value.find((option) => option.value === value.value)
    if (selectedOption) {
        const selectedFeature = features.value.find(
            (feature) => feature.properties.名称 === selectedOption.value
        )
        if (selectedFeature) {
            const lat = selectedFeature.properties.lat
            const lon = selectedFeature.properties.lon
            console.log('Selected location coordinates:', lat, ' , ', lon)
            // 进行坐标查询的其他操作...
            globalState.lat = lat
            globalState.lon = lon
        } else {
            console.log('Selected feature not found.')
        }
    } else {
        console.log('Selected option not found.')
    }
}
</script>

<template>
    <el-row justify="space-evenly">
        <el-select v-model="value" filterable placeholder="请输入搜索地点" style="width: 9vw">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button type="warning" oval @click="getLocation">Get location</el-button>
    </el-row>
</template>

<style scoped></style>
