<template>
  <v-data-table
    :headers="headers"
    :items="runningProject"
    sort-by="calories"
    class="elevation-3"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="">List of running Project</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <!-- this template has text field for searching -->
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

        <!-- dialog for edating project item and show the project deatials -->
        <v-dialog v-model="dialog" fullscreen>
          <v-card>
            <!-- cart title -->
            <v-card-title elevation-1>
              <span class="headline">{{ formTitle }}</span>
              <v-spacer></v-spacer>
              <v-btn class="mr-sm-3" @click="close" icon elevation="3"
                ><v-icon>mdi-close</v-icon></v-btn
              >
            </v-card-title>
            <v-divider class="mt-3"></v-divider>
            <v-card-text class="mt-4">
              <v-container>
                <v-row>
                  <v-col cols="6" md="6" lg="6" sm="12">
                    <v-row class="mx-sm-3">
                      <v-col cols="12" sm="12" md="8">
                        <v-text-field
                          v-model="editedItem.title"
                          :readonly="edit"
                          label="Title"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="8">
                        <v-text-field
                          v-model="editedItem.category"
                          :readonly="edit"
                          label="Category"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="mx-sm-3">
                      <v-col cols="12" sm="12" md="8">
                        <v-text-field
                          v-model="editedItem.create_at"
                          :readonly="edit"
                          label="Created At"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="8">
                        <v-text-field
                          v-model="editedItem.location"
                          :readonly="edit"
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
                          :readonly="edit"
                          label="Description"
                          rows="3"
                          no-resize
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-textarea
                          v-model="editedItem.ideal_expert"
                          :readonly="edit"
                          rows="2"
                          class="pt-3"
                          no-resize
                          label="Ideal Expert"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="12" lg="12" sm="12">
                    <v-card-title>
                      <span>Project Members</span>
                      <v-spacer></v-spacer>
                      <v-btn
                        to="/user_clinds_list"
                        v-if="!edit"
                        color="light-blue"
                        small
                        outlined
                      >
                        Add Clint
                      </v-btn>
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
                <v-row>
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

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-row class="mb-5" v-if="!edit">
                <v-btn outlined color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn
                  class="ml-3"
                  outlined
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
      <v-icon class="ml-3" small @click="showItem(item)">
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
    running_p: [],
    edit: false,
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
      { text: "Estimate Time", value: "estimate_time", sortable: true },
      { text: "Created", value: "create_at", sortable: true },
      { text: "Actions", value: "actions", sortable: false }
    ],
    runningProject: [],
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
      return this.edit ? "Project information" : "Edit Project information";
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
      this.running_p = this.$store.state.projects.projects;
      this.runningProject = Object.values(this.running_p).filter(project => {
        return project.status.includes("running");
      });
      
    },

    editItem(item) {
      this.edit = false;
      this.editedIndex = this.runningProject.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    showItem(item) {
      this.edit = true;
      this.editedIndex = this.runningProject.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.runningProject.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      Object.values(this.pendingProject).splice(this.editedIndex, 1);
      this.closeDelete();
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
        Object.assign(this.runningProject[this.editedIndex], this.editedItem);
      } else {
        this.pendingProject.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style lang="scss" scoped></style>
