<script>
export default {
    name: 'HomePage'
}
</script>
<script setup>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

let map = null;

onMounted(() => {
    window._AMapSecurityConfig = {
        securityJsCode: "0b9914b6e70ad68436af51e28e7c4876",
    };
    AMapLoader.load({
        key: "2e98a5aa0c9e643cc93950bccd7d90ee", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
            'AMap.Autocomplete',
            'AMap.PlaceSearch',
            'AMap.Scale',
            'AMap.ToolBar',
            {
                pName: 'AMap.OverView',
                isOpen: true,
            },
        ], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
    })
        .then((AMap) => {
            map = new AMap.Map("container", {
                // 设置地图容器id
                viewMode: "2D", // 是否为3D地图模式
                zoom: 17, // 初始化地图级别
                center: [114.61695255703985, 30.45760478117997], // 初始化地图中心点位置
            });
        })
        .catch((e) => {
            console.log(e);
        });
});

onUnmounted(() => {
    map?.destroy();
});
</script>

<template>
    <div id="container"></div>
</template>

<style scoped>
#container {
    width: 100%;
    height: 100%;
}
</style>
