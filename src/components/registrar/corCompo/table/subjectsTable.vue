<template>
  <div class="q-pa-md">
    <q-table
      :filter="filter"
      :data="allData"
      :columns="columns"
      row-key="keyIndex"
      :fullscreen.sync="isFullscreen"
      :visible-columns="visibleColumns"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :selected.sync="selected"
    >
      <template v-slot:top>
        <div class="text-h4 text-bold">
          Subjects Offered
          <q-badge align="top">{{studentInformationForm.schoolYear}} {{studentInformationForm.semester}}</q-badge>
        </div>

        <q-space />

        <q-input
          dense
          clearable
          debounce="300"
          v-model="filter"
          placeholder="Search"
          class="print-hide q-mr-md-lg text-body1"
        >
          <q-icon
            slot="append"
            name="search"
          />
        </q-input>

        <q-select
          class="print-hide"
          v-model="visibleColumns"
          multiple
          dense
          outlined=""
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          style="min-width: 150px"
        />

        <!-- <q-avatar
          icon="print"
          class="print-hide q-ml-md-md cursor-pointer"
          @click="printStudents"
        >
          <q-tooltip>
            Print
          </q-tooltip>
        </q-avatar> -->

        <q-avatar
          size="md"
          color="deep-orange"
          round
          class="shadow-14 q-ml-md text-white cursor-pointer print-hide"
        >
          {{numberOfUnits}}
          <q-tooltip>
            Total units
          </q-tooltip>
        </q-avatar>
      </template>

      <template v-slot:body="props">
        <q-tr
          :props="props"
          class="text-capitalize"
        >
          <q-td auto-width>
            <q-checkbox v-model="props.selected" />
          </q-td>
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
        //   name: 'desc',
        //   required: true,
        //   label: 'Dessert (100g serving)',
        //   align: 'left',
        //   field: row => row.name,
        //   format: val => `${val}`,
        //   sortable: true
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
      forEach(this.selected, function (value) {
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
    },
    getSelectedString () {
      this.$emit('update:selectedSubject', this.selected)
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.allData.length}`
    }
  }
}
</script>
