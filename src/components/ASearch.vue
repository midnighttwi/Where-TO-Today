<script>
export default {
    name: 'ASearchPage'
}
</script>
<script setup>
import { ref } from 'vue'

const value = ref('')
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
        <el-select v-model="value" filterable placeholder="请输入搜索地点" style="width: 240px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button type="warning" circle>GO</el-button>
    </el-row>
</template>

<style scoped></style>
