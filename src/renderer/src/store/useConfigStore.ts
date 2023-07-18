import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config',()=>{
    const config = ref(
        {
        page:'setting',
        deviceId:'',
        rounded:true,
        borderWidth:'2px',
        borderColor:'#7eb321'
    }
    )

    const updateConfig = ()=>{

    }

    return {config,updateConfig}
},
{
    persist:true
}
)

