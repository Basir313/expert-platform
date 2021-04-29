<template>
  <v-row fill>
    <base-banner-empty :banner="banner" class="mx-3 my-2"> </base-banner-empty>
    <v-col cols="12" md="12" lg="12" sm="12">
      <v-data-table
        :headers="headers"
        :items="clients"
        sort-by="id"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Clients List</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="new_client_dialog" max-width="800px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" outlined v-on="on">
                  Request New Client
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span>Request new client for existing project</span>
                  <v-spacer></v-spacer>
                  <v-btn
                    rounded
                    outlined
                    @click="new_client_dialog = !new_client_dialog"
                    ><v-icon>mdi-close</v-icon></v-btn
                  >
                </v-card-title>
                <v-divider class="mt-4"></v-divider>
                <v-card-text class="mt-4">
                  <v-form
                    v-model="valid"
                    ref="request_client"
                    @submit.prevent="requestNewClient"
                    lazy-validation
                  >
                    <v-row justify="center">
                      <v-col
                        class="text-center"
                        cols="12"
                        md="8"
                        lg="8"
                        sm="12"
                        xl="6"
                      >
                        <v-select
                          :items="project_list"
                          v-model="req_client.project_name"
                          label="Select your project"
                          :rules="rull.list"
                          no-data-text="For request client you should have a project. Please create your project"
                        >
                        </v-select>
                      </v-col>
                      <v-col cols="12" md="8" lg="8" xl="6" sm="12">
                        <v-text-field
                          label="How many employes do you want?"
                          v-model="req_client.num_client_req"
                          type="number"
                          :rules="rull.number"
                          hint="Max client you can request is 5"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        class="text-center"
                        cols="12"
                        md="8"
                        lg="8"
                        sm="12"
                        xl="6"
                      >
                        <v-select
                          :items="type_work"
                          v-model="req_client.type_work"
                          :rules="rull.list"
                          label="Type work"
                        >
                        </v-select>
                      </v-col>
                    </v-row>
                    <v-divider class="mt-4"></v-divider>
                    <v-card-actions class="mt-4">
                      <v-btn rounded outlined @click="cancelForm">
                        cancel
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn type="submit" rounded outlined>
                        request
                      </v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-dialog>
            <!-- dialog box for showing deatial of each item of table -->
            <v-dialog v-model="dialog" max-width="800px">
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                  <v-spacer></v-spacer>
                  <v-btn icon elevation="3" @click="close" class="mr-sm-3">
                    <v-icon>
                      mdi-close
                    </v-icon>
                  </v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="mt-2">
                  <v-container>
                    <v-col
                      class="text-center"
                      cols="12"
                      md="12"
                      lg="12"
                      sm="12"
                    >
                      <v-row>
                        <v-col>
                          <v-avatar size="100">
                            <v-img
                              src="../../../assets/img/placeholder_image.png"
                            ></v-img>
                          </v-avatar>
                        </v-col>
                        <v-col>
                          <v-avatar size="100">
                            <v-btn icon elevation="4">
                              <v-icon>
                                mdi-message
                              </v-icon>
                            </v-btn>
                          </v-avatar>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="12" lg="12" sm="12">
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.id"
                            label="ID"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.name"
                            label="Name"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.lastName"
                            label="Last Name"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.edu_degree"
                            label="Education Degree"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.edu_field"
                            label="Field of Education"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.project_title"
                            label="Project Title"
                            readonly
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-dialog>
            <!-- dialog box for comforming the delete opreation -->
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
        <!-- call method by cliking each item of table -->
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-text
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
        <!-- state table does'nt have data -->
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>
<script>
import project_info from "../../../model/project_info";
import validation from "../../../model/validationRull";
import projectService from "../../../services/readProject";
export default {
  mounted() {
    //this.setBanner();
  },
  data() {
    return {
      clint: null,
      type_work: project_info.work_type,
      rull: validation.rules,
      banner: {
        banner: false,
        color: "light-blue lighten-1",
        message: "you did'nt have any client"
      },
      dialog: false,
      new_client_dialog: false,
      valid: true,
      dialogDelete: false,
      req_client: {},
      project_list: [],
      headers: [
        {
          text: "Id",
          align: "start",
          sortable: false,
          value: "id"
        },
        { text: "Name", value: "name" },
        { text: "last Name", value: "lastName" },
        { text: "education Degree", value: "edu_degree" },
        { text: "Education field", value: "edu_field" },
        { text: "Work Experience", value: "work_exper" },
        { text: "Project Title", value: "project_title" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      clients: [],
      editedIndex: -1,
      editedItem: {
        id: "",
        name: "",
        photoUrl: "",
        lastName: "",
        edu_degree: "",
        edu_field: "",
        work_exper: "",
        project_title: ""
      },
      defaultItem: {
        id: "",
        name: "",
        photoUrl: "",
        lastName: "",
        edu_degree: "",
        edu_field: "",
        work_exper: "",
        project_title: ""
      }
    };
  },
  computed: {
    formTitle() {
      return "Client information";
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
    this.checkProjectState();
  },
  methods: {
    setBanner() {
      if (this.clint == null) {
        this.banner.banner = true;
      } else {
        this.banner.banner = false;
      }
    },
    initialize() {
      this.clients = this.$store.state.clients.clients;
    },

    editItem(item) {
      this.editedIndex = this.clients.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.clients.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.clients.splice(this.editedIndex, 1);
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
        Object.assign(this.clients[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    requestNewClient() {
      if (this.$refs.request_client.validate()) {
        console.log(this.req_client);
        this.$refs.request_client.reset();
      }
    },
    cancelForm() {
      this.$refs.request_client.resetValidation();
      this.$refs.request_client.reset();
      this.new_client_dialog = !this.new_client_dialog;
    },
    // check the project state in project modual store
    checkProjectState() {
      if (this.$store.state.projects.projects == null) {
        projectService.getAllProject();
      } else {
        this.$store.state.projects.projects;
        this.project_list.push( this.$store.state.projects.projects.title);
        console.log(this.$store.state.projects.projects);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
