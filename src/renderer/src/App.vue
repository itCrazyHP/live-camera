<script setup lang="ts">
import Camera from './components/Camera.vue';
import Setting from './components/Setting.vue';
import {SettingTwo,CameraFive,InnerShadowTopLeft} from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/store/useConfigStore';
import useDrag from '@renderer/composables/useDrag'

const {drag} = useDrag()
drag.run()
const {config} = useConfigStore()

const changeHandler=(value:string)=>{
config.page = value
}
const contextHandler = () =>{
  window.api.quit()

}

const changeRound = ()=>{
  if(!config.rounded){
    window.api.setWindowSize({aspectRatio:1,width:300,height:300})
  }else{
    window.api.setWindowSize({aspectRatio:5/4,width:350,height:280})
  }
  config.rounded=!config.rounded
}
</script>

<template>
  <Suspense>
    <main class=" relative group" @contextmenu="contextHandler">
      <section >
        <setting-two theme="outline" size="24" fill="white" class="icon  absolute left-1/2 -translate-x-1/2 mt-3 opacity-75 cursor-pointer  z-10 hidden group-hover:block " v-if="config.page=='camera'" @click="changeHandler('setting')"/>
        <camera-five theme="outline" size="24" fill="white" class="icon  absolute left-1/2 -translate-x-1/2 mt-3 opacity-75 cursor-pointer z-10 hidden group-hover:block " v-if="config.page=='setting'" @click="changeHandler('camera')" />
        <inner-shadow-top-left theme="outline" size="24" fill="white" class="icon  absolute bottom-3 left-1/2 -translate-x-1/2 mt-3 opacity-75 cursor-pointer z-10 hidden group-hover:block " v-if="config.page=='camera'"  @click="changeRound"/>
      </section>
      <section class=" -z-10">
        <Camera v-if="config.page === 'camera'"/>
        <Setting v-else />
      </section>

    </main>
  </Suspense>
</template>

<style lang="scss" scoped>

</style>
