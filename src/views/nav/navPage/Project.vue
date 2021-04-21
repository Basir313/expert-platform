<template>
  <div>
    <v-tabs
      v-model="tap"
      hide-overlay
      color="white"
      fixed-tabs
      background-color="light-blue"
      class="px-4"
      slider-color="red"
      prev-icon="navigate-before"
      no-data-text="mdi-navigate-next"
    >
      <v-tab v-for="item in items" :key="item.title">{{ item.title }}</v-tab>
      <v-tabs-items transition="scale-transition" v-model="tap">
        <v-tab-item>
          <RunningProjectList></RunningProjectList>
        </v-tab-item>
        <v-tab-item>
          <ComplateProjectList></ComplateProjectList>
        </v-tab-item>
        <v-tab-item>
          <PendingProjectList></PendingProjectList>
        </v-tab-item>
        <v-tab-item class="mt-n2">
          <create v-if="allow_create"></create>
          <base-banner-empty
            v-if="!allow_create"
            class="mt-3"
            :banner="banner"
          />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
import create from "./CreateProject";
import PendingProjectList from "../../projectView/PendeingProjec";
import RunningProjectList from "../../projectView/RunningProject";
import ComplateProjectList from "../../projectView/ComplateProject";
import read_project from "../../../services/readProject";
export default {
  data() {
    return {
      tap: null,
      allow_create: true,
      banner: {
        banner: true,
        color: "light-blue",
        message:
          "To acctive Creating Project, Please contact with supporter of platform"
      },
      items: [
        {
          title: " Running",
          tab_link: ""
        },
        {
          title: " Done",
          tab_link: ""
        },
        {
          title: " Pending",
          tab_link: ""
        },
        {
          title: "Create",
          tab_link: ""
        }
      ]
    };
  },
  components: {
    create,
    PendingProjectList,
    ComplateProjectList,
    RunningProjectList
  },
  async mounted() {
    await read_project.getAllProject();
  }
};
</script>

<style lang="scss" scoped></style>
