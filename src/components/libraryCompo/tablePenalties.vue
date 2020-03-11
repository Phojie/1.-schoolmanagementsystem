<template>
  <div class="q-pa-md">
    <q-table hide-bottom :data="data" :columns="columns" row-key="name">
      <template v-slot:top>
        <q-toolbar>
          <q-toolbar-title>List of Students with Penalties</q-toolbar-title>
          <q-badge color="red">*There are some students are not yet listed here</q-badge>
        </q-toolbar>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true,
          classes: "bg-grey-2 ellipsis",
          style: "max-width: 100px",
          headerClasses: "text-indigo"
        },
        {
          name: "idnumber",
          label: "Id Number",
          field: "idnumber",
          sortable: true
        },
        {
          name: "penalty",
          label: "Penalty",
          field: "penalty",
          sortable: true
        }
      ],
      data: [
        {
          name: "Remie C. Mabida",
          idnumber: "not yet registered",
          penalty: "₱ 30.00",
          department: "Elementary Education"
        },
        {
          name: "Cathy Macapobre",
          idnumber: "not yet registered",
          penalty: "₱ 200.00",
          department: "Elementary Education"
        },
        {
          name: "Jiselle D. Enterina",
          idnumber: "2018-0058",
          penalty: "₱ 120.00",
          department: "Elementary Education"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>