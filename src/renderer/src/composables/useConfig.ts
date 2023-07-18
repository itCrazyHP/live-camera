import { ref } from "vue"

type ConfigType = {
    deviceId:string,
    page:string
}
const initConfig = {
    deviceId:'',
    page:'camera'
}
export default()=>{
    const cache = localStorage.getItem('config')
    const data = cache?(JSON.parse(cache) as ConfigType) : initConfig
    const config = ref(data)

    const updateConfig = ()=>{
        console.log(config.value,'set');
        localStorage.setItem('config',JSON.stringify(config.value))
    }

    
    return {config,updateConfig}
}