<template>
  <div class="q-pa-md">
    <div class="text-h4 text-bold q-mb-md">
      Cetificate Of Registration Form
    </div>

    <q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
     >
      <q-step
        :name="1"
        title="Student Profile"
        icon="person_pin"
        :done="step > 1"
       >
        <corForm
          ref="studentsFormModal"
          @submitAddStudent="submitAddStudent"
          @added="addPhoto"
          :options="options"
          :LRNnumber.sync="studentInformationForm.LRNnumber"
          :idnumber.sync="studentInformationForm.idnumber"
          :schoolYear.sync="studentInformationForm.schoolYear"
          :firstname.sync="studentInformationForm.firstname"
          :middlename.sync="studentInformationForm.middlename"
          :surname.sync="studentInformationForm.surname"
          :course.sync="studentInformationForm.course"
          :yearLevel.sync="studentInformationForm.yearLevel"
          :major.sync="studentInformationForm.major"
          :semester.sync="studentInformationForm.semester"
          :contactNumber.sync="studentInformationForm.contactNumber"
          :gender.sync="studentInformationForm.gender"
          :studentInformationForm="studentInformationForm"
          :loading="loading"
          :validations="$v.studentInformationForm"
        >
        </corForm>

         <slot name="dialogBtn"></slot>
        <!-- <pre>{{this.studentInformationForm}}</pre> -->
        <q-inner-loading :showing="loading">
          <q-spinner-gears
            size="50px"
            color="primary"
          />
        </q-inner-loading>

        <q-stepper-navigation>
          <q-btn
            @click="submitAddStudent"
            :loading="loading"
            color="primary"
            label="Continue"
          />
          <!-- <q-btn @click="step = 2" color="primary" label="Continue" /> -->
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Select Subjects"
        :caption="studentInformationForm.schoolYear + ' ' + studentInformationForm.semester"
        icon="create_new_folder"
        :done="step > 2"
      >

        <subjectsTable
        :selectedSubject.sync="selectedSubject"
        :studentInformationForm="studentInformationForm" ></subjectsTable>

        <q-stepper-navigation>
          <q-btn @click="checkUnits" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Review Subjects"
        icon="assignment"
      >
        <corTable
          :selectedSubject.sync="selectedSubject"
          :studentInformationForm="studentInformationForm" >
        </corTable>
        <q-stepper-navigation>
        <q-btn @click="submitStudent" color="primary" label="Finish" />
        <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
      </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'
import forEach from 'lodash/forEach'
export default {
  validations: {
    studentInformationForm: {
      firstname: { required },
      surname: { required },
      schoolYear: { required },
      yearLevel: { required },
      semester: { required },
      contactNumber: { required },
      gender: { required },
      idnumber: {
        required,
        minLength: minLength(11),
        isUnique (value) {
          let vm = this
          // standalone validator ideally should not assume a field is required
          if (value === '') return true
          let isUnique = find(vm.studentLists, ['idnumber', value])
          // console.log(vm.dummyStudentInformationForm.idnumber, value)
          if (isUnique && vm.dummyStudentInformationForm.idnumber !== value) {
            // error alert
            return false
          }
          // simulate async call, fail for all logins with even length
          return new Promise((resolve, reject) => {
            resolve(typeof value === 'string' && value.length % 2 !== 0)
          })
        }

      },
      course: { required },
      profileImgUrl: ''
    }
  },
  components: {
    'corForm': require('components/shared/modals/corForm.vue').default,
    'subjectsTable': require('components/registrar/corCompo/table/subjectsTable.vue').default,
    'corTable': require('components/registrar/corCompo/table/corTable.vue').default
  },
  data () {
    return {
      selectedSubject: [],
      step: 1,
      studentInformationForm: {
        firstname: '',
        middlename: '',
        surname: '',
        idnumber: '',
        LRNnumber: '',
        keyIndex: '',
        course: '',
        profileImgUrl: '',
        fullname: '',
        schoolYear: '',
        yearLevel: '',
        major: '',
        semester: '',
        contactNumber: '',
        gender: ''
      },
      options: [
        'Business Administration', 'Criminology', 'Computer Science', 'Secondary Education', 'Elementary Education'
      ]
    }
  },
  computed: {
    ...mapGetters('admin', ['loading']),
    numberOfUnits () {
      let number = 0
      forEach(this.selectedSubject, function (value) {
        number += parseInt(value.units)
      })
      return number
    }
  },
  methods: {
    ...mapActions('admin', ['addStudentLists', 'addStudentListsCOR']),
    submitStudent () {
      let vm = this
      this.addStudentListsCOR({
        studentInfo: this.studentInformationForm,
        selectedSub: this.selectedSubject
      }).then(function (result) {
        var fullname = `${vm.studentInformationForm.firstname} ${vm.studentInformationForm.middlename.charAt(0)}. ${vm.studentInformationForm.surname}`
        vm.$q.notify({
          message: 'Successfully Enrolled ' + fullname,
          color: 'positive',
          timeout: 4000,
          icon: 'playlist_add'
        })
        vm.$v.studentInformationForm.$reset()
        vm.step = 1
        vm.selectedSubject = []
        vm.studentInformationForm = {
          firstname: '',
          middlename: '',
          surname: '',
          idnumber: '',
          LRNnumber: '',
          keyIndex: '',
          course: '',
          profileImgUrl: '',
          fullname: '',
          schoolYear: '',
          yearLevel: '',
          major: '',
          semester: '',
          contactNumber: '',
          gender: ''
        }
      }, function (error) {
        console.log(error)
        vm.$q.notify({
          message: 'Something is wrong',
          color: 'warning',
          timeout: 2000,
          icon: 'warning'
        })
      })
    },
    checkUnits () {
      if (this.numberOfUnits > 30 || this.numberOfUnits === 0) {
      } else {
        this.step = 3
      }
    },
    addPhoto (data) {
      let imgData = data[0].__img['src']
      this.studentInformationForm.profileImgUrl = imgData
    },
    submitAddStudent () {
      // console.log('test', this.studentInformationForm.profileImgUrl)
      let vm = this
      if (this.$v.studentInformationForm.$invalid) {
        this.$v.studentInformationForm.$touch()
      } else {
        vm.step = 2
      }
    }
  }
}
</script>
