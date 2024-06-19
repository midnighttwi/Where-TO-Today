<script setup>
import { ref } from 'vue'

const start = ref('')
const end = ref('')
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
]
</script>

<template>
    <el-row justify="space-evenly">
        <el-select id="start" v-model="start" filterable placeholder="起点" style="width: 100px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-select id="end" v-model="end" filterable placeholder="终点" style="width: 100px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button type="warning" circle>GO</el-button>
    </el-row>
</template>

<style scoped></style>
