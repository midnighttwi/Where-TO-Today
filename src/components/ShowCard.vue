<script setup>

const imgsrc = defineModel('imgsrc')
const tabname = defineModel('tabname')
</script>

<template>
    <el-row>
        <el-col :span="12">
            <el-col :span="24">
                <el-card style="max-width: 850px;max-height: 550px">
                    <img :src='imgsrc' style="width: 800px;height: 500px" />
                </el-card>
            </el-col>
            <el-col :span="24">
                <el-row style="padding-top: 20px;padding-left: 20px" justify="center">
                    <el-col :span="12">
                        <el-card style="width: 350px; height: 70px" shadow="always">Always</el-card>
                        <el-card style="width: 350px; height: 70px; margin-top: 20px;" shadow="hover">Hover</el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card style="width: 100px; height: 162px;" shadow="hover">
                            <h2 style="padding-top: 25%;padding-left: 6%">开放时间</h2>
                        </el-card>
                    </el-col>
                    <el-col :span="9">
                        <el-card style="width: 270px; height: 80px; padding-left: 0px;" shadow="hover">
                            <h3 style="margin-top: 12px;">工作日:{{ tabname }}</h3>
                        </el-card>
                        <el-card style="width: 270px; height: 80px" shadow="hover">
                            <h3 style="margin-top: 12px;">休息日:</h3>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-col>
        <el-col :span="12">
            <el-card style="width: 800px; height: 710px; padding-top: 20px;margin-left: 20px">
                <template #header>
                    <div class="card-header" style="display: flex; justify-content: center; align-items: center;">
                        <h1 style="text-align: center">
                            建筑介绍
                        </h1>
                    </div>
                </template>
                <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
            </el-card>
        </el-col>
    </el-row>
</template>

<style scoped></style>
