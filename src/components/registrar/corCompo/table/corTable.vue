<template>
  <div class="q-pa-md">
    <q-table
      :filter="filter"
      :data="selectedSubject"
      :columns="columns"
      row-key="keyIndex"
      :fullscreen.sync="isFullscreen"
      :visible-columns="visibleColumns"
      hide-bottom
    >
      <template v-slot:top>
        <div class="text-h6 text-bold">
          Subjects Selected
          <q-badge align="top">{{studentInformationForm.schoolYear}} {{studentInformationForm.semester}}</q-badge>
        </div>
        <q-space />
        <div class="text-weight-bold">
          Total Units: {{numberOfUnits}}
        </div>
      </template>

      <template v-slot:body="props">
        <q-tr
          :props="props"
          class="text-capitalize"
        >
          <!-- <q-td
            key="coursecode"
            :props="props"
          >
           {{props.row.index + 1}}.
          </q-td> -->
          <q-td
            key="coursecode"
            :props="props"
          >
           {{props.row.courseCode}}
          </q-td>
          <q-td
            key="descriptivetitle"
            :props="props"
          >
            {{props.row.descriptiveTitle}}
          </q-td>
          <q-td
            key="units"
            :props="props"
          >
            {{props.row.units}}
          </q-td>
          <q-td
            key="day"
            :props="props"
          >
           <q-badge v-if="props.row.department === 'College of Computer Science'" color="green-9">
              {{props.row.day}}
            </q-badge>
            <q-badge v-if="props.row.department === 'College of Education'" color="blue-9">
              {{props.row.day}}
            </q-badge>
            <q-badge v-if="props.row.department === 'College of Criminology'" color="purple-9">
              {{props.row.day}}
            </q-badge>
            <q-badge v-if="props.row.department === 'College of Business Administration'" color="amber-9">
              {{props.row.day}}
            </q-badge>
          </q-td>
          <q-td
            key="time"
            :props="props"
          >
            <q-badge v-if="props.row.department === 'College of Computer Science'" color="green-9">
              {{props.row.timeFrom}} - {{props.row.timeTo}}
            </q-badge>
            <q-badge v-if="props.row.department === 'College of Education'" color="blue-9">
             {{props.row.timeFrom}} - {{props.row.timeTo}}
            </q-badge>
            <q-badge v-if="props.row.department === 'College of Criminology'" color="purple-9">
              {{props.row.timeFrom}} - {{props.row.timeTo}}
            </q-badge>
            <q-badge v-if="props.row.department === 'College of Business Administration'" color="amber-9">
              {{props.row.timeFrom}} - {{props.row.timeTo}}
            </q-badge>

          </q-td>
          <q-td
            key="room"
            :props="props"
          >
            {{props.row.room}}
          </q-td>
          <q-td
            key="instructor"
            :props="props"
          >
            {{getInstructorName(props.row.instructorKeyIndex)}}
          </q-td>
          <q-td
            key="department"
            :props="props"
          >
            {{props.row.department}}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import filter from 'lodash/filter'
import find from 'lodash/find'
import forEach from 'lodash/forEach'

export default {
  props: ['studentInformationForm', 'selectedSubject'],
  data () {
    return {
      isFullscreen: false,
      filter: '',
      selected: [],
      visibleColumns: ['index', 'coursecode', 'descriptivetitle', 'units', 'day', 'time', 'room', 'instructor'],
      columns: [
        // {
        //   classes: 'bg-grey-2 ',
        //   name: 'index',
        //   label: '#',
        //   field: 'index'
        // },
        {
          name: 'coursecode',
          label: 'Course Code',
          align: 'left',
          field: 'courseCode'
        },
        {
          name: 'descriptivetitle',
          label: 'Descriptive Title',
          align: 'left',
          field: 'descriptiveTitle'
        },
        {
          name: 'units',
          label: 'Units',
          align: 'left',
          field: 'units'
        },
        {
          name: 'day',
          label: 'Day',
          align: 'left',
          field: 'day'
        },
        {
          name: 'time',
          label: 'Time',
          align: 'left',
          field: 'timeFrom'
        },
        {
          name: 'room',
          label: 'Room',
          align: 'left',
          field: 'room'
        },
        {
          name: 'instructor',
          label: 'Instructor',
          align: 'left',
          field: 'instructor'
        },
        {
          name: 'department',
          label: 'Department',
          align: 'left',
          field: 'department'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('admin', ['subjectsSchedule', 'personnelLists']),
    ...mapState('admin', ['allSubjects']),
    numberOfUnits () {
      let number = 0
      forEach(this.selectedSubject, function (value) {
        number += parseInt(value.units)
      })
      return number
    },
    allData () {
      // let onlyThis = filter(this.allSubjects)
      let onlyThis = filter(this.allSubjects, { 'schoolYear': this.studentInformationForm.schoolYear, 'semester': this.studentInformationForm.semester })
      onlyThis.forEach((row, index) => {
        row.index = index
      })
      return onlyThis
    }
  },
  methods: {
    test () {
      alert('test')
    },
    getInstructorName (index) {
      let data = find(this.personnelLists, ['keyIndex', index])
      return `${data.prefix} ${data.firstname} ${data.middlename} ${data.surname} ${data.suffix} `
    },
    printStudents () {
      console.log('test')
    }
  }
}
</script>
