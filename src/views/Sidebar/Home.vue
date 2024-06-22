<script>
export default {
    name: 'HomePage'
}
</script>
<script setup>
import { ref, onMounted } from 'vue'
import { ElAmap } from '@vuemap/vue-amap'
import axios from 'axios'
import { inject } from 'vue'

const Start = inject('Start')
const End = inject('End')
const features = inject('features')

var getData = async () => {
    try {
        const response = await axios.get(
            'http://localhost:8080/geoserver/wfs?service=wfs&version=1.0.0&request=GetFeature&typeName=Buildings:final_building&outputFormat=application/json'
        )
        //console.log(response.data.value);
        return response.data.features
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

const zoom = ref(17)
const center = ref([114.61695255703985, 30.45760478117997])
let map = null
let mwalk = null
//初始化地图
const init = (e) => {
    map = e
    //添加地图插件
    map.plugin(
        [
            'AMap.ControlBar',
            'AMap.Scale',
            'AMap.HawkEye',
            'AMap.MapType',
            'AMap.Geolocation',
            'AMap.Walking'
        ],
        () => {
            //加载插件
            const controlbar = new AMap.ControlBar({
                position: {
                    top: '7vh',
                    left: '4vh'
                }
            })
            map.addControl(controlbar)
            const scale = new AMap.Scale()
            map.addControl(scale)
            const hawkeye = new AMap.HawkEye()
            map.addControl(hawkeye)
            const maptype = new AMap.MapType()
            map.addControl(maptype)
            const geolocation = new AMap.Geolocation({
                position: {
                    top: '18vh',
                    left: '7vh'
                },
                enableHighAccuracy: true, // 是否使用高精度定位，默认：true
                timeout: 10000
            })
            map.addControl(geolocation)
            //添加建筑标记
            // getData()
        }
    )
    console.log('map init: ', map)
}

const globalState = inject('globalState')
// 查询选中的选项
const searchLocation = () => {
    console.log('函数响应')
    console.log('lat和lon:', globalState.lat, globalState.lon)
    if (center.value) {
        AMap.convertFrom([globalState.lon, globalState.lat], 'gps', function (status, result) {
            var resLnglat = result.locations[0]
            center.value = resLnglat
        })
    }
}

const addMarker = () => {
    //添加地图标记
    features.value.forEach((feature) => {
        let name = feature.properties.info
        let coordinates = feature.geometry.coordinates
        AMap.convertFrom(coordinates, 'gps', function (status, result) {
            var resLnglat = result.locations[0]
            let marker = new AMap.Marker({
                position: resLnglat,
                title: name
            })
            map.add(marker)
            // 创建标签并设置标题
            let label = new AMap.Text({
                text: name,
                anchor: 'bottom-left', // 标签的锚点位置
                offset: new AMap.Pixel(0, -30) // 调整标签相对于 Marker 的偏移位置
            })
            marker.setLabel(label)
        })
    })
}
const addPath = () => {
    mwalk = new AMap.Walking() //构造步行导航类
    //根据起、终点坐标规划步行路线
    var startPoint = [Start.lon, Start.lat]
    var endPoint = [End.lon, End.lat]
    AMap.convertFrom(startPoint, 'gps', function (status, result) {
        var startLnglat = [result.locations[0].lng, result.locations[0].lat]
        console.log('ss', startLnglat)
        AMap.convertFrom(endPoint, 'gps', function (status, result) {
            var endLnglat = [result.locations[0].lng, result.locations[0].lat]
            console.log('ee', endLnglat)
            mwalk.search(startLnglat, endLnglat, function (status, result) {
                if (status == 'complete') {
                    console.log('success')
                    var paths = result.routes[0].steps
                    // 绘制路径
                    // 清除已有路径
                    var polylineCount = 0
                    var overlays = map.getAllOverlays()
                    for (var i = 0; i < overlays.length; i++) {
                        if (overlays[i] instanceof AMap.Polyline) {
                            polylineCount++
                            if (polylineCount > 0) {
                                map.remove(overlays[i])
                            }
                        }
                    }
                    var pathArray = []
                    for (var k = 0; k < paths.length; k++) {
                        var path = paths[k].path
                        for (var j = 0; j < path.length; j++) {
                            var lnglat = new AMap.LngLat(path[j].lng, path[j].lat)
                            pathArray.push(lnglat)
                        }
                    }
                    var polyline = new AMap.Polyline({
                        path: pathArray,
                        strokeColor: '#c45656',
                        strokeWeight: 5
                    })
                    map.add(polyline)
                } else {
                    console.log.error('获取步行数据失败：' + result)
                }
            })
        })
    })
}

onMounted(async () => {
    const result = await getData()
    features.value = result
    addMarker()
    console.log(features.value)
})
</script>

<template>
    <div id="container">
        <el-button id="btn1" type="warning" oval @click="searchLocation">Move</el-button>
        <el-button id="btn2" type="warning" @click="addPath" oval>Navigation</el-button>
        <el-amap :center="center" :zoom="zoom" @init="init"> </el-amap>
    </div>
</template>

<style scoped>
#container {
    width: 100%;
    height: 100%;
}

#btn1 {
    position: absolute;
    top: 8vh;
    left: 13vw;
    z-index: 2;
}

#btn2 {
    position: absolute;
    top: 8vh;
    left: 17vw;
    z-index: 2;
}
</style>
