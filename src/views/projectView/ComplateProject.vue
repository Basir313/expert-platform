<template>
  <v-data-table
    :headers="headers"
    :items="complateProject"
    sort-by="calories"
    class="elevation-3"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="">List of Complated Project</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <template>
          <v-col class="mt-10" cols="6" md="4" sm="6" xs="6">
            <v-text-field
              outlined
              rounded
              v-model="search"
              append-icon="mdi-magnify"
              label="searching"
              placeholder="Type for searching"
            />
          </v-col>
        </template>
        <!-- dialog for editing and show the deatials of project -->
        <v-dialog v-model="dialog" fullscreen>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
              <v-spacer></v-spacer>
              <v-btn elevation="3" icon @click="close"
                ><v-icon>mdi-close</v-icon></v-btn
              >
            </v-card-title>
            <v-card-text class="mt-4">
              <v-container>
                <v-row>
                  <v-col cols="6" md="6" lg="6" sm="12">
                    <v-row class="mx-sm-3">
                      <v-col cols="12" sm="12" md="8">
                        <v-text-field
                          v-model="editedItem.title"
                          readonly
                          label="Title"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="8">
                        <v-text-field
                          v-model="editedItem.category"
                          readonly
                          label="Category"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="mx-sm-3">
                      <v-col cols="12" sm="12" md="8">
                        <v-text-field
                          :value="getDateFromTimeStamp(editedItem.created_at)"
                          readonly
                          label="Created At"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="8">
                        <v-text-field
                          v-model="editedItem.location"
                          readonly
                          label="Location"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="6" md="6" lg="6" sm="12">
                    <v-row class="mx-sm-3">
                      <v-col cols="12" sm="12" md="12">
                        <v-textarea
                          v-model="editedItem.description"
                          readonly
                          label="Description"
                          rows="3"
                          no-resize
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-textarea
                          v-model="editedItem.ideal_expert"
                          readonly
                          rows="2"
                          class="pt-3"
                          no-resize
                          label="Ideal Expert"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>

                <v-row v-if="editedItem.project_member">
                  <v-col cols="12" md="12" lg="12" sm="12">
                    <v-card-title>
                      <span>Project Members</span>
                    </v-card-title>
                  </v-col>
                  <v-col cols="12" md="12" lg="12" sm="12">
                    <v-divider class="mt-n6"></v-divider>
                  </v-col>
                  <v-col cols="12" md="12" lg="12" sm="12">
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Id</th>
                            <th class="text-left">User Id</th>
                            <th class="text-left">Added At</th>
                            <th class="text-left">Salary</th>
                            <th class="text-left">Currency</th>
                            <th class="text-left">type Wrok</th>
                            <th class="text-left">Contract Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="member in editedItem.members"
                            :key="member.id"
                          >
                            <td>{{ member.id }}</td>
                            <td>{{ member.user_id }}</td>
                            <td>{{ member.add_at }}</td>
                            <td>{{ member.salary }}</td>
                            <td>{{ member.currency }}</td>
                            <td>{{ member.type_work }}</td>
                            <td>{{ member.contract_type }}</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>
                </v-row>
                <v-row v-if="editedItem.project_paid_to_complate">
                  <v-col cols="12" md="12" lg="12" sm="12">
                    <v-card-title>
                      <span>Amount Money that piad for complate project</span>
                    </v-card-title>
                  </v-col>
                  <v-col cols="12" md="12" lg="12" sm="12">
                    <v-divider class="mt-n6"></v-divider>
                  </v-col>
                  <v-col cols="12" md="12" lg="12" sm="12">
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Id</th>
                            <th class="text-left">Date</th>
                            <th class="text-left">Amount Paid</th>
                            <th class="text-left">Currency</th>
                            <th class="text-left">Total Budget</th>
                            <th class="text-left">Total Reminder</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="paids in editedItem.paid" :key="paids.id">
                            <td>{{ paids.id }}</td>
                            <td>{{ paids.paid_at }}</td>
                            <td>{{ paids.amount_pay }}</td>
                            <td>{{ paids.currency }}</td>
                            <td>{{ paids.total_budget }}</td>
                            <th>{{ paids.total_reminder }}</th>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon class="ml-2" small @click="showItem(item)">
        mdi-text
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    search: "",
    headers: [
      {
        text: "Id",
        align: "start",
        sortable: true,
        value: "id"
      },
      { text: "Name", value: "title" },
      { text: "Budget", value: "budget" },
      { text: "Category", value: "category", sortable: true },
      { text: "Type Worked", value: "ideal_expert.type_work" },
      {
        text: "Taked time",
        value: "ideal_expert.estimate_time",
        sortable: true
      },
      { text: "Complated", value: "complated_at", sortable: true },
      { text: "Actions", value: "actions", sortable: false }
    ],
    complateProject: [],
    complate_P: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      budget: 0,
      category: 0,
      estimate_time: 0,
      create_at: 0,
      location: "",
      ideal_expert: "",
      currency: "",
      description: "",
      ower: "",
      status: "",
      payment_methods: "",
      paid: [],
      members: []
    },
    defaultItem: {
      id: "",
      name: "",
      budget: 0,
      category: 0,
      estimate_time: 0,
      create_at: 0,
      location: "",
      ideal_expert: "",
      currency: "",
      description: "",
      ower: "",
      status: "",
      payment_methods: "",
      paid: [],
      members: []
    }
  }),

  computed: {
    formTitle() {
      return "Project information";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.complate_P = this.$store.state.projects.projects;
      this.complateProject = Object.values(this.complate_P).filter(project => {
        return project.status.includes("done");
      });
    },

    showItem(item) {
      this.editedIndex = this.complateProject.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.complateProject[this.editedIndex], this.editedItem);
      } else {
        this.pendingProject.push(this.editedItem);
      }
      this.close();
    },
    // this method change timestamp which is milisecond to the real date;
    getDateFromTimeStamp(timeStamp) {
      var date = new Date(timeStamp);
      var year = date.getFullYear();
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      var month = months[date.getMonth()];
      var days = [
        "Sunday",
        "Monday",
        "Tuseday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      var day_week_num = days[date.getDay()];
      var day = date.getDate();
      return day_week_num + " " + day + " " + month + " " + year;
    }
  }
};
</script>

<style lang="scss" scoped></style>
