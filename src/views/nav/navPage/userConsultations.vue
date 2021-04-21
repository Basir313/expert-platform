<template>
  <v-data-table
    :headers="headers"
    :items="consulates"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Consulation List</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Request for consulation
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="elevation-0">
              <span class="headline">{{ formTitle }}</span>
              <v-spacer></v-spacer>
              <v-btn icon elevation="3" class="mr-sm-3" @click="close">
                <v-icon>
                  mdi-close
                </v-icon>
              </v-btn>
            </v-card-title>
            <v-divider class="elevation-1"></v-divider>
            <v-card-text class="mt-7">
              <v-container>
                <v-form>
                  <v-row>
                    <v-col cols="6" sm="12" md="6" lg="6">
                      <v-row class="elevation-1 ml-md-n16 ml-lg-n16">
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.title"
                            label="Consulation Title"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.create_at"
                            label="Date of Consulation"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.consulted_id"
                            readonly
                            label="Consulated by"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.recive_consult_id"
                            label="Consulate to"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.duration"
                            label="Consulating duration"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.start_due"
                            label="Consulating start at"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.end_due"
                            label="Consulating end at"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.total_cost"
                            label="Consulating total cost"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.cost_per_hour"
                            label="Consulating cost per hour"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.paid"
                            label="Payment is Complated or No ?"
                            readonly
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="6" md="6" sm="12" lg="6"> </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
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
      <v-icon color="light-blue" small class="mr-2" @click="editItem(item)">
        mdi-text
      </v-icon>
      <v-icon color="light-blue" small @click="deleteItem(item)">
        mdi-delete
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
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id"
      },
      { text: "Title", value: "title" },
      { text: "Duration", value: "duration" },
      { text: "Consulating Date", value: "create_at" },
      { text: "Cost Per Hour", value: "cost_per_hour" },
      { text: "Total Cost", value: "total_cost" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    consulates: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      create_at: "",
      type_consulting: "",
      duration: "",
      start_due: "",
      end_due: "",
      cost_per_hour: "",
      currency: "",
      total_cost: "",
      title: "",
      consulted_id: "",
      recive_consulte_id: "",
      paied: "",
      payment: []
    },
    defaultItem: {
      id: "",
      create_at: "",
      type_consulting: "",
      duration: "",
      start_due: "",
      end_due: "",
      cost_per_hour: "",
      currency: "",
      total_cost: "",
      title: "",
      consulted_id: "",
      recive_consulte_id: "",
      paied: "",
      payment: []
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Consulating" : "Consulation";
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
      this.consulates = this.$store.state.consulates.consulates;
    },

    editItem(item) {
      this.editedIndex = this.consulates.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.consulates.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.consulates.splice(this.editedIndex, 1);
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
        Object.assign(this.consulates[this.editedIndex], this.editedItem);
      } else {
        this.consulates.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
