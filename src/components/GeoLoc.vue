<template>
    <div>
        <InputSwitch v-model="geoLocPerm" @click="toggleGPS()" aria-labelledby="single" />
        <!-- <Button v-if="geoLocPerm" name="click" @click="click" @dblclick="clearTimer">GPS</Button> -->
        <!-- <Button v-if="geoLocPerm" name="clear" @click="click">debug</Button> -->
        Perm:{{geoLocPerm}}
        <ul v-if="geoLocPerm">
            <!-- {{GPS.loc}} -->
            <li>Time:{{getDateTime()[1]}}</li>
            <li v-for="(v,k) in GPS.loc">
                {{k}}:{{v}}/
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'
import Button from 'primevue/button';
import InputSwitch from 'primevue/inputswitch';
import {getDateTime} from "../helpers"
// import ToggleButton from 'primevue/togglebutton';

let loc=ref(new Date())
//Geolocation object


export default {
    setup(){
      console.log(GPS.loc);
      return {geoLocPerm}
  }
}
</script>

<script setup>
let geoLocPerm=ref(false)

let GPS = reactive({
    timer:false,
    // status:undefined,
    loc:undefined,
    milliseconds:5000, // frequency
    options: {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
    },
    
    startGPS() {
        // console.debug(this)
        this.timer = setInterval(getLoc, this.milliseconds); //setting the loop with time interval
    },
    stopGPS() {
        console.log('stoping GPS ',geoLocPerm)
        clearInterval(this.timer); //call this line to stop the loop
        this.timer=false;
    },

})

function click(){
    console.log('got ',JSON.stringify(GPS.loc))
}
function getLoc(){
    if (!geoLocPerm) {
        GPS.stopGPS()
    }
    navigator.geolocation.getCurrentPosition(success, error, GPS.options);
}
function success(pos) {
    console.debug(GPS)
    const crd = pos.coords;
    //Object.fromEntries(Object.entries(crd).filter(([_, v]) => v!=null ));
    GPS.loc={latitude: crd.latitude, 
        longitude: crd.longitude,
        accuracy: crd.accuracy,
        timestamp: pos.timestamp,
        signal:'OK'}
    // console.log("success",this.loc);
} 

function error(err) {
    console.debug(GPS)
    GPS.loc= Object.assign(GPS.loc||{loc:undefined},
                            {'signal':'N/A-error'});
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

function toggleGPS(){
    // geoLocPerm=!geoLocPerm
    if(!geoLocPerm.value){
        if (GPS.timer==false){ 
            console.debug('starting',GPS.loc)
            GPS.startGPS()
        } else console.error(GPS.timer)
    } else{
        console.debug('stopping',geoLocPerm)
        GPS.stopGPS()
    }
}

</script>

<style scoped>

</style>