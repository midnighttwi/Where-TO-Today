<script setup>
import { provide, ref } from 'vue'
const globalState = ref({
    lat: 0,
    lon: 0
})
const Start = ref({
    lat: 0,
    lon: 0
})
const End = ref({ lat: 0, lon: 0 })
const features = ref([])
provide('Start', Start)
provide('End', End)
provide('features', features)
provide('globalState', globalState)
</script>

<template>
    <dev id="app">
        <!--路由出口，渲染路由组件-->
        <router-view></router-view>
    </dev>
</template>

<style scoped></style>
