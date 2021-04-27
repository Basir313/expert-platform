<template>
  <v-container fill-height text-center fluid>
    <v-layout row class="md-12 sm-12 xs-12 lg-12" wrap text-center>
      <v-col cols="12">
        <v-form
          ref="project_form"
          lazy-validation
          v-model="valid"
          @submit.prevent="gotCreateProject"
        >
          <v-card>
            <v-card-title><span>Create new Project</span></v-card-title>
            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              <v-row>
                <v-col cols="12" md="12" lg="12" sm="12">
                  <v-card-title>
                    <span>Project information</span>
                    <v-divider class="ml-7 mt-2 mr-7"></v-divider>
                  </v-card-title>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="6" xs="12" lg="4" class=" mt-3">
                  <BaseEdittext
                    label="Project Title"
                    icon="mdi-text"
                    counter="30"
                    type="text"
                    :rules="this.rules.rules.name_required"
                    v-model="project.title"
                    placeholder="Add Project title"
                  />
                </v-col>
                <v-col class=" mt-3 " cols="12" md="6" sm="12" lg="4">
                  <BaseEdittext
                    icon="mdi-map-marker"
                    label="Project Location"
                    placeholder="Add project location"
                    :rules="this.rules.rules.name"
                    v-model="project.location"
                    counter="30"
                  />
                </v-col>
                <v-col cols="12" md="4" lg="4" sm="12" class=" mt-3">
                  <v-autocomplete
                    label="Project Category"
                    placeholder="selct your project category "
                    icon="mdi-format-list-bulleted-type"
                    v-model="project.category"
                    :items="info.project_catagory"
                    :rules="rules.rules.list"
                    outlined
                    clearable
                  />
                </v-col>
                <v-col>
                  <BaseTextarea
                    row="8"
                    clas="px-3 py-4"
                    label="Project Description"
                    placeholder="Wirte More info about your Project."
                    :rules="rules.rules.description"
                    icon="mdi-text"
                    counter="400"
                    v-model="project.description"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card-title>
                    <span>Project Budget</span>
                    <v-divider class="mx-7 mt-2"></v-divider>
                  </v-card-title>
                </v-col>
              </v-row>
              <v-row justify-space-around>
                <v-col cols="12" md="6" lg="5" sm="12">
                  <BaseEdittext
                    label="Estimated Budget"
                    placeholder="Add estimated budget"
                    icon="mdi-counter"
                    :rules="rules.rules.number"
                    type="number"
                    v-model="project.budget"
                  />
                </v-col>
                <v-col class="mx-3 " cols="12" md="4" sm="12" lg="3">
                  <v-autocomplete
                    icon="mdi-currency-eth"
                    label="Budget Currency"
                    placeholder="Seclet Currency"
                    :items="info.currency"
                    :rules="rules.rules.list"
                    v-model="project.currency"
                    outlined
                    clearable
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card-title>
                    <span>Ideal Expert that you want for this project</span>
                    <v-divider class="mx-7 mt-2"></v-divider>
                  </v-card-title>
                </v-col>
              </v-row>
              <v-row class="mt-3">
                <v-col cols="12" md="4" sm="12" lg="3">
                  <v-autocomplete
                    icon="mdi-text"
                    label="Contract Type"
                    placeholder="Select Contract Type"
                    :rules="rules.rules.list"
                    :items="info.contract_work"
                    v-model="project.ideal_expert.contract_type"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="6" lg="5" sm="12">
                  <BaseEdittext
                    label="Skills"
                    placeholder="Add skills that required for this project"
                    :rules="rules.rules.name"
                    icon="mdi-text"
                    counter="50"
                    v-model="project.ideal_expert.skills"
                  />
                </v-col>
                <v-col cols="12" md="6" lg="4" sm="12">
                  <v-autocomplete
                    label="Estimated time"
                    placeholder="Select estimated time to done the Project"
                    icon="mdi-counter"
                    v-model="project.ideal_expert.estimate_time"
                    :rules="rules.rules.list"
                    :items="info.estimated_time"
                    outlined
                    clearable
                  />
                </v-col>

                <v-col cols="12" md="4" sm="12" lg="3">
                  <v-autocomplete
                    icon="mdi-list"
                    label="Type work"
                    placeholder="selct project Type work"
                    v-model="project.ideal_expert.type_work"
                    :rules="rules.rules.list"
                    :items="info.work_type"
                    outlined
                    clearable
                  />
                </v-col>
              </v-row>
              <v-col class="text-right">
                <v-btn
                  rounded
                  outlined
                  elevation="4"
                  type="submit"
                  color="light-blue darken-2"
                  class="text-capitalize font-weight-bold"
                  :disabled="!valid"
                >
                  Submit Project
                </v-btn>
              </v-col>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import rules from "../../../model/validationRull";
import info from "../../../model/project_info";
import { mapActions } from "vuex";
import create_project from "../../../services/create_project";
export default {
  data() {
    return {
      valid: true,
      result: {},
      rules: rules,
      info: info,
      project: {
        ideal_expert: {}
      }
    };
  },
  mounted() {},
  methods: {
    gotCreateProject() {
      if (this.$refs.project_form.validate()) {
        try {
          create_project.createProject(this.project);
          this.$refs.project_form.reset();
          window.scrollTo(0, 0);
        } catch (error) {
          console.log(error);
        }
      }
    },
    ...mapActions("projects", ["create_project"])
  }
};
</script>
<style scoped></style>
