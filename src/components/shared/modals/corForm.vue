<template>
  <div class="row q-col-gutter-md">
    <div class="col-md-4 col-xs-12 col-sm-6 col-xs-12">
       <q-uploader
          ref="refUploaderImage"
          label="Student Image"
          flat
          class="full-width uploaderBug"
          hide-upload-btn
          bordered
          accept="image/*"
          v-on:added="$emit('added', $event)"
        >
          <template v-slot:list>
            <q-img
              :src="studentInformationForm.profileImgUrl"
              placeholder-src="/statics/defaultProfile.png"
            />
          </template>
        </q-uploader>
    </div>
    <div class="col-md-8 col-xs-12 col-sm-6">
      <div class="col-xs-12 row q-col-gutter-md">
        <div class="col-md-3 col-xs-12">
          <q-input
            autofocus=""
            outlined
            dense
            :value="studentInformationForm.idnumber"
            @change="setIdnumber($event.target.value)"
            label="Id number"
            ref="refIdnumber"
            class="col-10"
            mask="#### - ####"
            hide-bottom-space
            :error="validations.idnumber.$error"
          >
            <template
              v-slot:error
              v-if="!validations.idnumber.required"
            >
              Id number is required
            </template>
            <template
              v-slot:error
              v-else-if="!validations.idnumber.minLength"
            >
              Please enter a valid Id number
            </template>
            <template
              v-slot:error
              v-else-if="!validations.idnumber.isUnique"
            >
              ID already registered
            </template>
          </q-input>
        </div>
        <div class="col-md-3 col-xs-12">
          <q-input
            dense
            outlined
            :value="studentInformationForm.firstname"
            @input="setFirstname($event)"
            label="Firstname"
            class="text-capitalize"
            :error="validations.firstname.$error"
            hide-bottom-space
          >
            <template
              v-slot:error
              v-if="!validations.firstname.required"
            >
              Alien is not allowed to Study here
            </template>
          </q-input>
        </div>
        <div class="col-md-3 col-xs-12">
          <q-input
            dense
            outlined
            :value="studentInformationForm.middlename"
            @input="$emit('update:middlename', $event)"
            label="Middlename"
            class="text-capitalize"
            :error="false"
            hide-bottom-space
          />
        </div>
        <div class="col-md-3 col-xs-12">
          <q-input
            dense
            outlined
            type="text"
            :value="studentInformationForm.surname"
            @input="setSurname($event)"
            label="Surname"
            class="text-capitalize"
            :error="validations.surname.$error"
            hide-bottom-space
          >
            <template
              v-slot:error
              v-if="!validations.surname.required"
            >
              Surname is required
            </template>
          </q-input>
        </div>

        <div class="col-md-3 col-xs-12">
          <q-select
            dense
            outlined
            :value="studentInformationForm.gender"
            @input="$emit('update:gender', $event)"
            :options="['Male','Female']"
            label="Gender"
            class="text-capitalize"
            :error="validations.gender.$error"
            hide-bottom-space
          >
            <template
              v-slot:error
              v-if="!validations.gender.required"
            >
              Gender is required to fill
            </template>
          </q-select>
        </div>

        <div class="col-md-4 col-xs-12">
          <q-select
            dense
            outlined
            :value="studentInformationForm.course"
            @input="$emit('update:course', $event)"
            :options="options"
            label="Course"
            class="text-capitalize"
            :error="validations.course.$error"
            hide-bottom-space
          >
            <template
              v-slot:error
              v-if="!validations.course.required"
            >
              Student Program is required to fill
            </template>
          </q-select>
        </div>

        <div class="col-md-2 col-xs-12">
          <q-select
            dense
            outlined
            :value="studentInformationForm.yearLevel"
            @input="$emit('update:yearLevel', $event)"
            :options="['I', 'II', 'III', 'IV']"
            label="Year"
            class="text-capitalize"
            :error="validations.yearLevel.$error"
            hide-bottom-space
          >
            <template
              v-slot:error
              v-if="!validations.yearLevel.required"
            >
              Year required to fill
            </template>
          </q-select>
        </div>

        <div class="col-md-3 col-xs-12">
          <q-input
            dense
            outlined
            :value="studentInformationForm.major"
            @input="$emit('update:major', $event)"
            label="Major"
            class="text-capitalize"
            hide-bottom-space
          >
          </q-input>
        </div>

        <div class="col-md-3 col-xs-12">
          <q-select
            dense
            outlined
            :value="studentInformationForm.schoolYear"
            @input="$emit('update:schoolYear', $event)"
            :options="shoolYearAV"
            label="School Year"
            class="text-capitalize"
            :error="validations.schoolYear.$error"
            hide-bottom-space
          >
            <template
              v-slot:error
              v-if="!validations.schoolYear.required"
            >
              School Year is required to fill
            </template>
          </q-select>
        </div>

        <div class="col-md-3 col-xs-12">
          <q-select
            dense
            outlined
            :value="studentInformationForm.semester"
            @input="$emit('update:semester', $event)"
            :options="['First Semester', 'Second Semester', 'Summer']"
            label="Semester"
            class="text-capitalize"
            :error="validations.semester.$error"
            hide-bottom-space
          >
            <template
              v-slot:error
              v-if="!validations.semester.required"
            >
              Semester is required to fill
            </template>
          </q-select>
        </div>

        <div class="col-md-5 col-xs-12">
          <q-input
            dense
            outlined
            type="text"
            :value="studentInformationForm.contactNumber"
            @input="setContactNumber($event)"
            label="Contact Number"
            class="text-capitalize"
            mask="+639##-####-###"
            :error="validations.contactNumber.$error"
            hide-bottom-space
          >
            <template v-slot:prepend>
              <q-icon name="call" />
            </template>
            <template
              v-slot:error
              v-if="!validations.contactNumber.required"
            >
              Contact Number is Required
            </template>
          </q-input>
        </div>
      </div>
    </div>

    <!-- <div class="col-xs-12">
      <studentsSubject></studentsSubject>
    </div> -->
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import forEach from 'lodash/forEach'
export default {
  computed: {
    ...mapGetters('admin', ['schoolYearAvailable']),
    shoolYearAV () {
      let data = []
      forEach(this.schoolYearAvailable, function (value) {
        data.push(value.schoolYear)
      })
      return data
    }
  },
  components: {
    // 'studentsSubject': require('components/students/subjectsCompo.vue').default
  },
  props: [
    'studentInformationForm',
    'options',
    'validations'
  ],
  data () {
    return {

    }
  },
  created () {
  },
  methods: {
    test () {
      console.log('test')
    },
    setFirstname (event) {
      this.$emit('update:firstname', event)
      this.validations.firstname.$touch()
    },
    setSurname (event) {
      this.$emit('update:surname', event)
      this.validations.surname.$touch()
    },
    setIdnumber (event) {
      this.$emit('update:idnumber', event)
      this.validations.idnumber.$touch()
    },
    setContactNumber (event) {
      this.$emit('update:contactNumber', event)
      this.validations.contactNumber.$touch()
    }
  }
}
</script>

<style>
.scroll,
.scroll-x,
.scroll-y .uploaderBug {
  overflow: hidden;
}
</style>
