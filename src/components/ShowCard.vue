<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    feature: {
        type: Object,
        required: true
    },
    imgsrc: {
        type: String,
        required: true
    }
})
const { feature, imgsrc } = props
console.log(imgsrc)
</script>

<template>
    <el-row>
        <el-col :span="12">
            <el-col :span="24">
                <el-card style="max-width: 50vw; max-height: 65vh">
                    <img :src="imgsrc" style="width: 43.4vw; height: 60vh" />
                </el-card>
            </el-col>
            <el-col :span="24">
                <el-row style="padding-top: 1vh; padding-left: 0" justify="center">
                    <el-col :span="12">
                        <el-card class="text" style="width: 20vw; height: 9vh" shadow="always">建筑物名称：{{
                            feature.properties.name }}</el-card>
                        <el-card class="text" style="width: 20vw; height: 9vh; margin-top: 1vh"
                            shadow="hover">建筑物行政归属：{{ feature.properties.info }}</el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card class="text" style="width: 4vw; height: 19vh" shadow="hover">
                            <h2 style="padding-top: 0vh; padding-left: 0">开放时间</h2>
                        </el-card>
                    </el-col>
                    <el-col :span="9">
                        <el-card class="text" style="width: 17vw; height: 19vh" shadow="hover">
                            <h3 style="margin-top: 0vh">{{ feature.properties.open_time }}</h3>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-col>
        <el-col :span="12">
            <el-card style="width: 43vw; height: 83vh; padding-top: 2vh; margin-left: 2vw">
                <template #header>
                    <div class="card-header" style="display: flex; justify-content: center; align-items: center">
                        <h1 style="text-align: center">建筑介绍</h1>
                    </div>
                </template>
                <p class="text">{{ feature.properties.建筑介绍 }}</p>
            </el-card>
        </el-col>
    </el-row>
</template>

<style scoped>
/* .text {
  font-size: 8px;
} */
</style>
