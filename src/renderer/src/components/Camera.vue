<template>
    <div class="w-screen h-screen flex overflow-hidden" :class="{'rounded-full':config.rounded}" :style="`border:solid ${config.borderWidth} ${config.borderColor}`">
        <video class="object-cover h-full"></video>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { useConfigStore } from '@renderer/store/useConfigStore';
const {config} = useConfigStore()
onMounted(() => {
    const video = document.querySelector('video')!;
    const constraints = {
        audio: false,
        video: config.deviceId?{deviceId:config.deviceId}:true
    } as MediaStreamConstraints
    
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
            video.srcObject = stream;
            video.play()
        })

})




</script>

<style scoped lang="scss">

</style>