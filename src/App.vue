<template>
  <div id="q-app">
    <!-- <template v-if="!loading"> -->
      <router-view />
    <!-- </template> -->
    <!-- <template v-else>
      loading....
    </template> -->
  </div>
</template>

<script>
// import { mapActions, mapMutations, mapGetters, mapState } from 'vuex'

export default {
  name: 'App'
  // computed: {
  //   ...mapGetters('admin', ['loading']),
  //   ...mapState('auth', ['user'])
  // },
  // methods: {
  //   ...mapActions('admin', ['getStudentLists', 'getLibraryStat', 'getPersonnelLists', 'getSchoolYear']),
  //   ...mapMutations('admin', ['commitLoading']),
  //   dataReloader () {
  //     let vm = this
  //     this.getSchoolYear()
  //     this.commitLoading(true)
  //     this.$q.loading.show()
  //     this.getPersonnelLists().then(function (result) {
  //       vm.commitLoading(false)
  //       vm.$q.loading.hide()
  //     }, function (err) {
  //       console.log(err)
  //     })
  //     vm.commitLoading(false)
  //     this.getStudentLists().then(function (result) {
  //       vm.commitLoading(false)
  //       vm.$q.loading.hide()
  //     }, function (err) {
  //       console.log(err)
  //     })
  //     vm.commitLoading(false)
  //     this.getLibraryStat().then(function (result) {
  //       vm.commitLoading(false)
  //       vm.$q.loading.hide()
  //     }, function (err) {
  //       console.log(err)
  //     })
  //   }
  // },
  // created () {
  //   console.log(this.user)
  //   if (this.user) {
  //     this.dataReloader()
  //   }
  // }

}
</script>

<style>
</style>
