<template>
    <div class="selectCamera">
            <h2 class=" text-gray-50 text-center text-sm  opacity-50">参数设置</h2>
                <el-select  v-model="config.deviceId" placeholder="选择摄像头(否则将使用默认摄像头)" clearable filterable>
                    <el-option  v-for="item in cameras"
                        :key="item.deviceId"
                        :label="item.label"
                        :value="item.deviceId">
                    </el-option>
                </el-select>
                <el-input   v-model="config.borderWidth" placeholder="边框宽度" size="default" clearable @change=""></el-input>
                <el-input   v-model="config.borderColor" placeholder="边框颜色" size="default" clearable @change=""></el-input>
                <el-button  type="success" @click="updateConfig" size="default">保存</el-button>
    </div>
</template>

<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore';

const {config,updateConfig} = useConfigStore()
const enumeratorPromise = await navigator.mediaDevices.enumerateDevices();
const cameras = enumeratorPromise.filter(k=>k.kind==='videoinput')

</script>

<style scoped lang="scss">
.selectCamera{
    @apply bg-[#2c3e50] w-screen h-screen p-5 flex flex-col gap-4 py-12;
}

</style>