<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-md-6">
        <q-card flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Length: 4 Years full time</div>
              <div class="text-h5 q-mt-sm q-mb-xs">College of Computer Science</div>
              <q-separator inset spaced></q-separator>
              <div class="text-caption text-grey">
                <q-badge color="green">Bachelor of Science in Computer Science </q-badge>
                <br>
                To address the need for a more specialized skills in computing as required by the academe and the industries, the Bachelor of Science in Computer Science has branched out into two tracks, namely: Foundations and Software Engineering.
              </div>
            </q-card-section>

            <q-card-section class="col-4 flex flex-center">
              <q-avatar size="150px">
                <q-img
                  src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/1924360_826243970741658_8792713838436577731_n.jpg?_nc_cat=100&_nc_ohc=1JSILCUHXOIAX_gxc4E&_nc_ht=scontent.fcgy1-1.fna&oh=a25e54ed81c132730ad2955cd39aca7c&oe=5E91A184"
                />
              </q-avatar>
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat icon="event" label="Schedule"/>
            <q-btn flat color="primary">
              View Prospectus
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-md-6">
        <q-card flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Length: 4 Years full time</div>
              <div class="text-h5 q-mt-sm q-mb-xs">College of Education</div>
              <q-separator inset spaced></q-separator>
              <div class="text-caption text-grey">
                <q-badge color="blue-10">Bachelor of Elementary Education </q-badge>
                <br>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique itaque, error id vel, ipsum fugiat est possimus quia recusandae ad provident nam distinctio sint fugit rem maiores architecto numquam voluptatibus.
              </div>
              <div class="q-mt-md text-caption text-grey">
                <q-badge color="blue-10">Bachelor of Secondary Education </q-badge>
                <br>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique itaque, error id vel, ipsum fugiat est possimus quia recusandae ad provident nam distinctio sint fugit rem maiores architecto numquam voluptatibus.
              </div>
            </q-card-section>

            <q-card-section class="col-4 flex flex-center">
              <q-avatar size="150px">
                <q-img
                  src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t31.0-8/p960x960/19800934_150003998899480_3126206610236442042_o.jpg?_nc_cat=107&_nc_ohc=OqG_ckXItEUAX_5ZDKg&_nc_ht=scontent.fcgy1-1.fna&_nc_tp=6&oh=4d73f7b5241c6baab11fbde8c1e81ccf&oe=5ECA0F46"
                />
              </q-avatar>
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat icon="event" label="Schedule"/>
            <q-btn flat color="primary">
              View Prospectus
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <q-page-sticky
      position="bottom-right"
      :offset="[18, 18]"
    >
      <q-btn
        ref="testref"
        @click="addProgramDialog"
        fab
        icon="add"
        color="secondary"
      />
    </q-page-sticky>

    <q-dialog
      v-model="programDialog"
      >
        <programsForm > {{headerTitle}} </programsForm>
    </q-dialog>

  </div>
</template>

<script>
export default {
  components: {
    'programsForm': require('components/shared/modals/programsForm.vue').default
  },
  data () {
    return {
      programDialog: false,
      headerTitle: ''
    }
  },
  methods: {
    printStudents () {
      alert('printed')
    },
    addProgramDialog () {
      this.programDialog = true
      this.headerTitle = 'Add'
    }
  }
}
</script>
