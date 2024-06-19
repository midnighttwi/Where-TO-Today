<script>
export default {
    name: 'HomePage'
}
</script>
<script setup>
import { ref } from "vue";
import { ElAmap } from "@vuemap/vue-amap";


const zoom = ref(17);
const center = ref([114.61695255703985, 30.45760478117997]);
let map = null;
//初始化地图
const init = (e) => {
    map = e;
    //添加地图插件
    map.plugin(['AMap.ControlBar',
        'AMap.Scale',
        'AMap.HawkEye',
        'AMap.MapType',
        'AMap.Geolocation',

    ], () => {
        //加载插件
        const controlbar = new AMap.ControlBar({
            position: {
                top: '20px',
                left: '20px'
            }
        });
        map.addControl(controlbar);
        const scale = new AMap.Scale();
        map.addControl(scale);
        const hawkeye = new AMap.HawkEye();
        map.addControl(hawkeye);
        const maptype = new AMap.MapType();
        map.addControl(maptype);
        const geolocation = new AMap.Geolocation({
            position: {
                top: '115px',
                left: '50px'
            },
            enableHighAccuracy: true, // 是否使用高精度定位，默认：true
            timeout: 10000,
        });
        map.addControl(geolocation);
        //添加建筑标记
    })
    console.log('map init: ', map)
}

</script>

<template>
    <div id="container">
        <el-amap :center="center" :zoom="zoom" @init="init">
        </el-amap>
    </div>
</template>

<style scoped>
#container {
    width: 100%;
    height: 100%;
}
</style>
