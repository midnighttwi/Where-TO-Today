<script setup>
import { ref, inject, onMounted } from 'vue'

const start = ref('')
const end = ref('')
var Soptions = ref([])
var Eoptions = ref([])
const Start = inject('Start');
const End = inject('End')
const features = inject('features')

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
// 查询选中的选项
const getLocation = () => {
    console.log('函数响应')
    const StartOption = Soptions.value.find((option) => option.value === start.value)
    const EndOption = Eoptions.value.find((option) => option.value === end.value)
    if (StartOption && EndOption) {
        const StartFeature = features.value.find(
            (feature) => feature.properties.名称 === StartOption.value
        )
        const EndFeature = features.value.find(
            (feature) => feature.properties.名称 === EndOption.value
        )
        if (StartFeature && EndFeature) {
            const Slat = StartFeature.properties.lat
            const Slon = StartFeature.properties.lon
            const Elat = EndFeature.properties.lat
            const Elon = EndFeature.properties.lon
            console.log('Start location coordinates:', Slat, ' , ', Slon)
            console.log('Start location coordinates:', Elat, ' , ', Elon)
            // 进行坐标查询的其他操作...
            Start.lat = Slat
            Start.lon = Slon
            End.lat = Elat
            End.lon = Elon
        }
        else {
            console.log('Selected feature not found.')
        }
    } else {
        console.log('Selected option not found.')
    }
}
onMounted(() => {
    addFeaturesToOptions(features.value, Soptions.value);
    console.log(Soptions)
    addFeaturesToOptions(features.value, Eoptions.value)
    console.log(Eoptions)
})
</script>

<template>
    <el-row justify="space-evenly">
        <el-select id="start" v-model="start" filterable placeholder="起点" style="width: 100px">
            <el-option v-for="item in Soptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-select id="end" v-model="end" filterable placeholder="终点" style="width: 100px">
            <el-option v-for="item in Eoptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button type="warning" @click="getLocation" oval>确定</el-button>
    </el-row>
</template>

<style scoped></style>
