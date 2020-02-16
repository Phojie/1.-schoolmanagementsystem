<template>
  <q-layout view="hHh lpR fFf">
    <q-footer reveal>
      <div class="row bg-indigo-9" dense>
        <q-toolbar-title class=" text-weight-bolder"><span style="margin-left:-3px" class="rounded-borders bg-white q-px-sm text-deep-orange-7">
          <q-avatar size="34px" color="indigo">
            <img src="/statics/jieIcons/apple-touch-icon-180x180.png" alt="">
          </q-avatar>
          CKCM LIBRARY</span></q-toolbar-title>
        <!-- <q-toolbar-title class="text-weight-bolder">Login here 😍</q-toolbar-title> -->
        <div style="margin-top:8px" class="row col-6 text-subtitle2">
          Opening Hours:
          <marquee width="80%">The library is open from <span class="rounded-borders bg-red">Monday to Friday</span> from 7:30 in the morning until 5:30 o'clock in the afternoon; <span class="rounded-borders bg-red">half day of Saturday</span></marquee>
          <!-- <marquee width="80%"> IF YOUR NAME START WITH LETTER J, <span class="bg-white text-green-8 text-bold"> YOU ARE WELCOME TO THE LIBRARY</span> </marquee> -->
          <span class="text-orange"></span>
        </div>
        <div class="q-mx-md text-weight-bold  ">
          <q-chip icon="alarm">
            {{now.date + ' ' + now.time}}
          </q-chip>
        </div>
      </div>
    </q-footer>

    <q-page-container style="border-top:5px solid #1565c0 ">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  data () {
    return {
      now: {
        time: '',
        date: '',
        local: ''
      }
    }
  },
  created () {
    let vm = this
    setInterval(function () {
      let timeStamp = new Date()
      let local = timeStamp.setHours(timeStamp.getHours() - 1)
      // .SSSZ
      let formattedTime = date.formatDate(local, 'hh:mm:ssa')
      let formattedDate = date.formatDate(local, 'Do of MMMM  YYYY')
      vm.now.time = formattedTime
      vm.now.date = formattedDate
      vm.now.local = local
      // let date1 = new Date(1570222200202)
      // let date2 = date.formatDate(date1, 'hh:mm:ssa')
      // console.log(date2)
    }, 1000)
  }
}
</script>

<style >
html {
  overflow: hidden;
}
</style>
