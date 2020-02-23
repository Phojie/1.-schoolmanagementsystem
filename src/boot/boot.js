import { firebaseAuth, firebase } from './firebase'

export default ({ app, router, Vue, store }) => {
  // Register the Firebase authentication listener
  firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function () {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      // return this.$firebase.auth().signInWithEmailAndPassword(email, password)
      // alert('relogin')
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      console.log(errorCode, errorMessage)
    })

  router.beforeEach((to, from, next) => {
    const authRequired = to.matched.some(route => route.meta.authRequired)
    const loginBa = to.matched.some(route => route.meta.loginRequired)
    firebaseAuth.onAuthStateChanged(user => {
      if (authRequired) {
        if (user) {
          // User is already signed in. Continue on.
          store.commit('auth/SET_USER', user)
          store.dispatch('admin/getSchoolYear')
          store.dispatch('admin/getPersonnelLists')
          store.dispatch('admin/getStudentLists')
          store.dispatch('admin/getLibraryStat')
          next()
        } else {
          // Not signed in. Redirect to login page.
          store.commit('auth/RESET_USER')
          next({
            name: 'login'
          })
        }
      } else if (!authRequired && loginBa && user) {
        store.commit('auth/SET_USER', user)
        next({
          name: 'dashboard'
        })
      } else {
        next()
      }
    })
  })
}