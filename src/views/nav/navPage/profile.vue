<template>
  <v-container fill-height justify-center fluid>
    <v-layout class="md-12 lg-12 xs-12 sm-12" row>
      <v-col cols="12" md="3" lg="3" sm="12" class="mb-5" md-3 red>
        <v-form>
          <v-card align-content-center>
            <v-row>
              <v-col>
                <v-img
                  align-center
                  :src="imageUrl"
                  aria-placeholder=""
                  height="300"
                  prepend-icon="mdi-camera"
                >
                  <v-row>
                    <v-col>
                      <BaseButton
                        align-center
                        class="text-center"
                        @click="
                          edit_user_profile_dialog = !edit_user_profile_dialog
                        "
                      >
                        <v-icon>mdi-camera</v-icon>
                      </BaseButton>
                    </v-col>
                  </v-row>
                </v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                <v-text-field
                  disabled
                  class="font-weight-bold ml-1 pl-2"
                  value="Ali Mohammad"
                />
              </v-col>
              <v-col cols="2" class="mr-2 mt-4">
                <BaseButton @click="display_name_dialog = !display_name_dialog">
                  <v-icon>mdi-pencil</v-icon>
                </BaseButton>
              </v-col>
            </v-row>
          </v-card>
        </v-form>
      </v-col>

      <v-layout ml-3 mr-3 column>
        <v-card class="md-9 lg-9 xs-12 sm-12" outlined>
          <div md-9 xs-9 lg-9 justify-end>
            <v-row justify="start">
              <v-col class="ml-3 mt-3 pl-8">
                <h4>
                  <v-icon color="light-blue">mdi-map-marker</v-icon
                  ><span class="font-weight-medium">{{ address }}</span>
                </h4>
              </v-col>
              <v-col class="text-right mr-3" justify-space-around>
                <v-btn
                  name="linkedin"
                  id="linkden_1"
                  readonly
                  outlined
                  class="mb-3"
                  rounded
                  focusable="false"
                  color="light-blue"
                  @click="openLinkden()"
                >
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>

                <BaseButton
                  class="justify:end ml-3"
                  @click="linkedin_dialog = !linkedin_dialog"
                >
                  <v-icon>mdi-pencil</v-icon>
                </BaseButton>
              </v-col>
            </v-row>
          </div>
          <v-divider class="mx-4"></v-divider>
          <v-row>
            <v-col class="text-right mt-3 mr-3">
              <BaseButton @click="bio_dialog = !bio_dialog"
                ><v-icon>mdi-pencil-outline</v-icon></BaseButton
              >
            </v-col>
          </v-row>
          <div md-9 lg-9 xs-9>
            <!--- ---------------------headline area---------------------------------- -->
            <v-row text-center class="pl-6">
              <v-col>
                <v-textarea
                  class="pl-3 ml-3 mr-3"
                  light
                  elevation-4
                  disabled
                  label="Head Line"
                  prepend-icon="mdi-view-headline"
                  placeholder="Write your headling"
                  rows="1"
                  :value="headline_value"
                >
                </v-textarea>
              </v-col>
            </v-row>

            <!----------------------------- Bio Area-------------------------------------------- -->
            <v-row text-center class="pl-6">
              <v-col mt-5 ml-4 mr-4>
                <v-textarea
                  class="pa-3 ma-3"
                  light
                  elevation-4
                  prepend-icon="mdi-bio"
                  placeholder="Write short about your self for exampler Bio "
                  disabled
                  rows="3"
                  :value="short_bio"
                >
                </v-textarea>
              </v-col>
            </v-row>
          </div>
          <v-divider class="mx-4"></v-divider>

          <!-- work Experience ---------------------------------------------------------- -->

          <div class="mt-3">
            <v-row>
              <v-col class="text-left ">
                <h3 class="pl-8 light-blue--text font-weight-bold">
                  <span class="">WORK EXPERIENCE</span>
                </h3>
              </v-col>
              <v-col class="text-right">
                <BaseButton
                  class="mr-3"
                  @click="work_experience_dialog = !work_experience_dialog"
                >
                  <v-icon>
                    mdi-pencil-outline
                  </v-icon>
                </BaseButton>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pl-8">
                <v-list
                  v-for="item in workEper"
                  :key="item.job_title"
                  class="text-justify"
                >
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title
                        ><h2>
                          <span class="font-weight-bold text-uppercase">{{
                            item.job_title
                          }}</span>
                        </h2>
                      </v-list-item-title>
                      <h3 class="mt-3">
                        <span v-if="item.start_date"> {{ item.start_date }} to {{ item.end_date }} </span>
                      </h3>
                      <v-list-item-subtitle class="mt-3">
                        <span class="font-weight-bold">
                          {{ item.organization }} </span
                        ><span>. {{ item.location }}</span>
                      </v-list-item-subtitle>
                      {{ item.job_description }}
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </div>
          <v-divider class="mx-4"></v-divider>
          <!-- ------------------------------------------------ Education Backround -------------------- -->
          <div class="mt-3">
            <v-row>
              <v-col class="text-left ">
                <h3 class="pl-8 light-blue--text font-weight-bold">
                  <span class="">Education</span>
                </h3>
              </v-col>
              <v-col class="text-right">
                <BaseButton
                  class="mr-3"
                  @click="education_dialog = !education_dialog"
                >
                  <v-icon>
                    mdi-pencil-outline
                  </v-icon>
                </BaseButton>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pl-8">
                <v-list
                  v-for="education in educationlist"
                  :key="education.degree"
                >
                  <v-list-item three-line class="text-justify">
                    <v-list-item-content>
                      <v-list-item-title
                        ><h2>
                          <span class="font-weight-bold ">{{
                            education.degree
                          }}</span>
                          <span>
                            {{ education.fieldStudy }}
                          </span>
                        </h2></v-list-item-title
                      >
                      <v-list-item-subtitle class="mt-3">
                        <span class="font-weight-bold">
                          {{ education.univarsity }} </span
                        ><span>. {{ education.location }}</span>
                        <span v-if="education.start_date">
                          {{ education.start_date }} - {{ education.end_date }}
                        </span>
                      </v-list-item-subtitle>
                      <v-list-item-content class="font-weight-medium">
                        {{ education.description }}
                      </v-list-item-content>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </div>
          <v-divider class="mx-4"></v-divider>
          <!-- ------------------------------------------------upload your resuma------------------------------------- -->
          <div class="mt-4 mb-4 mb-sm-4 mb-md-4">
            <v-row>
              <v-col>
                <v-btn
                  rounded
                  outlined
                  class="light-blue--text ml-7"
                  @click="openPdfFile"
                  :disabled="!show_cv"
                >
                  <v-icon>mdi-file-document</v-icon>
                  Our Resuma
                </v-btn>
              </v-col>
              <v-col class="text-right mr-3">
                <BaseButton @click="edit_resuma = true">
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </BaseButton>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-layout>
    </v-layout>

    <!-------------------------------- dilaog for edit the name of User --------------------------------------------------------->
    <v-row justify="center">
      <v-dialog
        v-model="display_name_dialog"
        max-width="600px"
        transition="dialog-bottom-transition"
      >
        <v-form ref="form_display_name">
          <v-card>
            <v-card-title class="light-blue--text font-weight-bold">
              <span class="headline ">Edit User Name</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text mt-12>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <BaseEdittext
                      label="Name"
                      required
                      :rules="rulltext"
                    ></BaseEdittext>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <BaseButton @click="display_name_dialog = false">
                Close
              </BaseButton>
              <v-spacer></v-spacer>
              <BaseButton class="font-weight-bold" @click="goToEditName()">
                Edit
              </BaseButton>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </v-row>

    <!------------------------- dialog for edit linkedin account -->
    <v-row justify="center">
      <v-dialog
        v-model="linkedin_dialog"
        max-width="800px"
        transition="dialog-bottom-transition"
      >
        <v-form ref="form_linkden">
          <v-card>
            <v-card-title class="light-blue--text font-weight-bold">
              <span class="headline ">Edit Linkedin Account</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text mt-12>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <BaseEdittext
                      label="Linkedin Url"
                      v-model="linkdenAccount"
                      value="https://www.linkedin.com/AliMohammad"
                      type="url"
                      :rules="linkdenUrlrull"
                      required
                    ></BaseEdittext>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <BaseButton
                class="font-weight-bold text-left ml-3 mb-3"
                @click="linkedin_dialog = false"
              >
                Close
              </BaseButton>
              <v-spacer></v-spacer>
              <BaseButton
                class="font-weight-bold text-right mr-3 mb-3"
                @click="goToEditLinkDenAccount()"
              >
                Edit
              </BaseButton>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </v-row>

    <!--------------------------------- Edit user headline and bio dialog -->
    <v-row justify="center">
      <v-dialog
        v-model="bio_dialog"
        max-width="800px"
        transition="dialog-bottom-transition"
      >
        <v-form ref="form_bio">
          <v-card>
            <v-card-title class="light-blue--text font-weight-bold">
              <span class="headline ">Edit HeadLine and short Bio</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text mt-12>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" lg="12" md="12">
                    <BaseEdittext
                      label="Head Line"
                      picon="mdi-text"
                      counter="50"
                      type="text"
                      v-model="userHeadLine.headLine"
                      required
                      :rules="rullHeadLine"
                    ></BaseEdittext>
                  </v-col>

                  <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                    <BaseTextarea
                      label="Short Bio"
                      row="4"
                      icon="mdi-bio"
                      counter="300"
                      v-model="userHeadLine.bio"
                      type="text"
                      required
                      :rules="rulBio"
                    ></BaseTextarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <BaseButton
                class="font-weight-bold   text-left ml-3 mb-3"
                @click="bio_dialog = false"
              >
                Close
              </BaseButton>
              <v-spacer></v-spacer>
              <BaseButton
                class="font-weight-bold text-right mr-3 mb-3"
                @click="goToEditeBioInfo()"
              >
                Edit
              </BaseButton>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </v-row>

    <!-- -------------------------------work Experience dialog----------------------------------------- -->
    <v-row justify="center">
      <v-dialog
        v-model="work_experience_dialog"
        max-width="900px"
        transition="dialog-bottom-transition"
      >
        <v-form ref="form_work_experince">
          <v-card>
            <v-card-title class="light-blue--text font-weight-bold">
              <span class="headline ">Edit Work Expereince</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text mt-12>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                    <BaseEdittext
                      clas="pl-3"
                      label="Title"
                      v-model="experience.job_title"
                      picon="mdi-format-title"
                      required
                      :rules="rulltext"
                      counter="20"
                    ></BaseEdittext>
                  </v-col>

                  <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                    <BaseEdittext
                      clas="pl-3"
                      label="Location"
                      v-model="experience.job_location"
                      picon="mdi-map-marker"
                      required
                      :rules="rulltext"
                      counter="20"
                    ></BaseEdittext>
                  </v-col>
                  <v-col cols="12" md="6" sm="12" lg="6" xl="6">
                    <BaseEdittext
                      clas="pl-3"
                      label="Organization"
                      v-model="experience.organization"
                      picon="mdi-domain"
                      counter="20"
                      required
                      :rules="rulltext"
                    ></BaseEdittext>
                  </v-col>

                  <v-col cols="12" sm="12" md="6" lg="6">
                    <BaseEdittext
                      clas="pl-3"
                      label="rol"
                      v-model="experience.job_role"
                      counter="20"
                      picon="mdi-account-network"
                      required
                      :rules="rulltext"
                    ></BaseEdittext>
                  </v-col>
                  <v-col cols="12" md="6" sm="12" lg="6">
                    <v-menu
                      ref="start_date_menu"
                      v-model="start_date_menu"
                      :close-on-content-click="false"
                      :return-value.sync="startDate"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          class="pl-3"
                          label="Start date"
                          :value="startDate"
                          readonly
                          prepend-icon="mdi-calendar"
                          outlined
                          v-on="on"
                          v-bind="attrs"
                          color="light-blue"
                          required
                          :rules="rullDate"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="startDate">
                        <v-spacer></v-spacer>
                        <BaseButton @click="start_date_menu = false">
                          Cancel
                        </BaseButton>
                        <BaseButton
                          @click="$refs.start_date_menu.save(startDate)"
                        >
                          OK
                        </BaseButton>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-menu
                      ref="end_date_menu"
                      v-model="end_date_menu"
                      :close-on-content-click="false"
                      :return-value.sync="endDate"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                    >
                      <template v-slot:activator="{ on, atter }">
                        <v-text-field
                          label="End date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-on="on"
                          v-bind="atter"
                          outlined
                          :value="endDate"
                          color="light-blue"
                          required
                          :rules="rullDate"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="endDate">
                        <v-spacer></v-spacer>
                        <BaseButton @click="end_date_menu = false">
                          Close
                        </BaseButton>
                        <v-spacer></v-spacer>
                        <BaseButton @click="$refs.end_date_menu.save(endDate)">
                          Ok
                        </BaseButton>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12">
                    <BaseTextarea
                      label="Describ what do you work"
                      row="3"
                      counter="200"
                      v-model="experience.job_description"
                      icon="mdi-text"
                      required="true"
                      :rulles="rullDescribe"
                    ></BaseTextarea>
                  </v-col>
                  <v-row>
                    <v-col cols="9" class="mt-6">
                      <v-divider class="mx-4"></v-divider>
                    </v-col>
                    <v-col cols="1" class="text-right  mr-sm-4 mr-xs-4">
                      <v-btn fab color="light-blue">
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <BaseButton
                class="font-weight-bold text-left ml-3 mb-3"
                @click="work_experience_dialog = false"
              >
                Close
              </BaseButton>
              <v-spacer></v-spacer>
              <BaseButton
                class="font-weight-bold text-right mr-3 mb-3"
                @click="goToEditWorkExperience()"
              >
                Edit
              </BaseButton>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </v-row>

    <!-- Edit Education dialog--------------------------- -->

    <v-row justify="center">
      <v-dialog
        v-model="education_dialog"
        max-width="900px"
        transition="dialog-bottom-transition"
      >
        <v-form ref="form_education">
          <v-card>
            <v-card-title class="light-blue--text font-weight-bold">
              <span class="headline ">Edit Education</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text mt-12>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6" lg="6" xl="6" sm="12">
                    <BaseEdittext
                      label="Degree"
                      picon="mdi-school-outline"
                      counter="20"
                      v-model="education.degree"
                      required
                      :rules="rulltext"
                      class="pl-3"
                    >
                    </BaseEdittext>
                  </v-col>
                  <v-col cols="12" md="6" lg="6" xl="6" sm="12">
                    <BaseEdittext
                      label="Field Of Study"
                      picon="mdi-book-education"
                      v-model="education.fieldStudy"
                      counter="20"
                      required
                      :rules="rulltext"
                      class="pl-3"
                    >
                    </BaseEdittext>
                  </v-col>
                  <v-col cols="12" md="6" lg="6" xl="6" sm="12">
                    <BaseEdittext
                      label="Univarsity"
                      picon="mdi-home-floor-g"
                      v-model="education.univarsity"
                      counter="20"
                      required
                      :rules="rulltext"
                      class="pl-3"
                    >
                    </BaseEdittext>
                  </v-col>
                  <v-col cols="12" md="6" lg="6" xl="6" sm="12">
                    <BaseEdittext
                      label="Location"
                      picon="mdi-map-marker"
                      v-model="education.location"
                      counter="20"
                      required
                      :rules="rulltext"
                      class="pl-3"
                    >
                    </BaseEdittext>
                  </v-col>

                  <v-col cols="12" md="6" lg="6" xl="6" sm="12">
                    <v-menu
                      ref="edu_start_date_menu"
                      v-model="edu_start_date_menu"
                      :close-on-content-click="false"
                      offset-y
                      :return-value.sync="edu_start_date"
                      transition="scale-transition"
                      max-width="290px"
                    >
                      <template v-slot:activator="{ on, atter }">
                        <v-text-field
                          v-on="on"
                          v-bind="atter"
                          v-model="edu_start_date"
                          :value="edu_start_date"
                          outlined
                          color="light-blue"
                          label="Start Date"
                          prepend-icon="mdi-calendar"
                          class="ml-3"
                          readonly
                          required
                          :rules="rullDate"
                        >
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="edu_start_date">
                        <v-spacer></v-spacer>
                        <v-btn
                          class="text-left font-weight-bold ml-3 mb-3"
                          @click="edu_start_date_menu = false"
                        >
                          Close
                        </v-btn>
                        <v-spacer></v-spacer>
                        <BaseButton
                          class="text-right font-weght-bold mr-3 mb-3"
                          @click="
                            $refs.edu_start_date_menu.save(edu_start_date)
                          "
                          >Ok</BaseButton
                        >
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" md="6" lg="6" xl="6" sm="12">
                    <v-menu
                      ref="edu_end_date_menu"
                      v-model="edu_end_date_menu"
                      :close-on-content-click="false"
                      offset-y
                      :return-value.sync="edu_start_date"
                      transition="scale-transition"
                      max-width="290px"
                    >
                      <template v-slot:activator="{ on, atter }">
                        <v-text-field
                          v-on="on"
                          v-bind="atter"
                          v-model="edu_end_date"
                          :value="edu_end_date"
                          outlined
                          color="light-blue"
                          label="End Date"
                          prepend-icon="mdi-calendar"
                          class="ml-3"
                          readonly
                          required
                          :rules="rullDate"
                        >
                        </v-text-field>
                      </template>
                      <v-date-picker v-model="edu_end_date">
                        <v-spacer></v-spacer>
                        <BaseButton
                          class="text-left font-weight-bold ml-3 mb-3"
                          @click="edu_end_date_menu = false"
                        >
                          Close
                        </BaseButton>
                        <v-spacer></v-spacer>
                        <BaseButton
                          class="text-right font-weght-bold mr-3 mb-3"
                          @click="$refs.edu_end_date_menu.save(edu_start_date)"
                          >Ok</BaseButton
                        >
                      </v-date-picker>
                    </v-menu>
                  </v-col>

                  <v-col cols="12" class="mr-3">
                    <BaseTextarea
                      label="Describe More what do you learn?"
                      counter="200"
                      v-model="education.description"
                      row="5"
                      required="true"
                      :rulles="rullDescribe"
                      icon="mdi-text"
                    />
                  </v-col>
                  <v-row>
                    <v-col cols="9" class="mt-6">
                      <v-divider class="mx-4"></v-divider>
                    </v-col>
                    <v-col cols="1">
                      <v-btn fab color="light-blue">
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <BaseButton
                class=" font-weight-bold text-left ml-3 mb-3"
                @click="education_dialog = false"
              >
                Close
              </BaseButton>
              <v-spacer></v-spacer>
              <BaseButton
                class="font-weight-bold text-right mr-3 mb-3"
                @click="goToEditEducation()"
              >
                Edit
              </BaseButton>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </v-row>
    <!-- ----------------------------------------Edit your Resuma----------------------------------------------- -->
    <v-row>
      <v-dialog
        v-model="edit_resuma"
        max-width="900px"
        transition="dialog-bottom-transition"
      >
        <v-form ref="form_edit_resuma">
          <v-card>
            <v-card-title class="pl-5 light-blue--text font-weight-bold">
              <span class="headline">Edit Your Resuma</span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="8"
                    lg="8"
                    xl="8"
                    class="text-center"
                  >
                    <v-file-input
                      label="Uplode your CV"
                      counter
                      show-size
                      accept="application/pdf"
                      v-model="fileSelected"
                      required
                      :rules="rullfielpdf"
                      placeholder="Uplode your update cv"
                    >
                    </v-file-input>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <BaseButton @click="edit_resuma = !edit_resuma">
                      Colse
                    </BaseButton>
                  </v-col>
                  <v-col class="text-right" cols="6">
                    <BaseButton
                      class="light-blue--text"
                      @click="goToEditResuma()"
                    >
                      Edit
                    </BaseButton>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </v-row>
    <!-- ------------------------------------Edit user image profile ------------------------------ -->
    <v-row>
      <v-dialog
        v-model="edit_user_profile_dialog"
        max-width="900px"
        transition="dialog-top-transition"
      >
        <v-form ref="form_edit_profile">
          <v-card>
            <v-card-title color="light-blue--text" class="font-weight-bold">
              <span class="headline">Edit Your Profile </span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-file-input
                    label="Image Profile"
                    show-size
                    counter
                    type="file"
                    required
                    :rules="rullimgFile"
                    v-model="selectedimage"
                    accept="image/*"
                  >
                  </v-file-input>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-container>
                <v-row>
                  <v-col class="text-left">
                    <BaseButton @click="edit_user_profile_dialog = false"
                      >Close</BaseButton
                    >
                  </v-col>
                  <v-col class="text-right">
                    <BaseButton @click="goToEditProfilePic">Edit</BaseButton>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </v-row>
  </v-container>
</template>

// Script aree
<script>
import fileuplode from "../../../services/uploadfile";
import fireLogin from "../../../services/UserLogin";
import createProfile from "../../../services/createProfile";
import read from "../../../services/readUserData";
export default {
  created() {
    read.getCV();
    read.getBio();
    read.getWorkExperience();
    read.getUserEducation();
  },
  mounted() {
    // set image profile
    this.setImageProfile(this.$store.state.user.info.photoUrl);
    // set address
    this.setAddress(
      this.$store.state.user.info.city,
      this.$store.state.user.info.country
    );
    // set linkden account
    this.setLinkdenUrl(this.$store.state.user.info.linkdenAccount);

    // set user cv
    this.setCV(this.$store.state.cv.cv);

    // read bio information
    this.setBio(this.$store.state.bio.bio);
    // read and set work experience;
    this.setWork(this.$store.state.work.work);

    //read and call the function to set education info
    this.setEducation(this.$store.state.education.education);
  },
  data() {
    return {
      linkdenAccount: "",
      userHeadLine: {
        headLine: "",
        bio: ""
      },
      experience: {},
      education: {},
      display_name_dialog: false,
      linkedin_dialog: false,
      bio_dialog: false,
      work_experience_dialog: false,
      education_dialog: false,
      address: "",
      headline_value: "",
      short_bio: "",
      startDate: null,
      start_date_menu: false,
      endDate: null,
      end_date_menu: false,
      edu_start_date_menu: false,
      edu_end_date_menu: false,
      edu_start_date: null,
      edu_end_date: null,

      mycv: this.$store.state.cv.cv,
      show_cv: false,
      edit_resuma: false,
      fileSelected: "",

      edit_user_profile_dialog: false,
      form_edit_profile: false,
      image: null,
      imageUrl: "",
      selectedimage: "",
      replace_image: "../../assets/img/placeholder_image.png",
      workEper: [],
      educationlist: [],
      linkdenUrlrull: [v => !!v || "link or your linkedin account is required"],
      rullHeadLine: [
        v => !!v || "Head Line is requered",
        v =>
          ((v || " ").length >= 10 && (v || " ").length <= 60) ||
          "The head line must be between 10 and 60 chracters",
        v => /^[ a-zA-Z0-9 ]*$/.test(v) || "Head Line most be chracters"
      ],
      rulBio: [
        v => !!v || "Bio is requered",
        v =>
          ((v || " ").length >= 80 && (v || " ").length <= 500) ||
          "The Bio must be between 200 and 300 chracters",
        v => /^[ a-zA-Z ]*$/.test(v) || "BIo most be chracters"
      ],
      rulltext: [
        v => !!v || "the is field is required",
        v => /^[ A-Za-z]*$/.test(v) || "This field most be chracters",
        v =>
          (v || " ").length < 20 || "This field most be less than 20 chracters"
      ],
      rullDate: [v => !!v || "This is field is required"],
      rullDescribe: [
        v => !!v || "This field is requred",
        v => /^[" "a-zA-Z]*$/.test(v) || "Description most be chracters",
        v =>
          (v || " ").length <= 200 ||
          "This field most be less than 200 chracters"
      ],
      rullfielpdf: [
        v => !!v || "This is filed is required",
        value =>
          !value ||
          value.size < 2097152 ||
          "Rusuma size should be less than 2 MB!"
      ],
      rullimgFile: [
        v => !!v || "this field is required",
        v => !v || v.size <= 2097152 || "Image size should be less than 2 MB "
      ]
    };
  },

  computed: {
    profile() {
      for (var data in this.userinfo) {
        var image = data.place_image;
      }
      return image;
    }
  },
  methods: {
    EditName() {
      this.nameEdit = !this.nameEdit;
      this.focuseColor = "red";
    },
    goToEditLinkDenAccount() {
      if (this.$refs.form_linkden.validate()) {
        var userId = fireLogin.getCurrentUser().uid;
        createProfile.EditLinkdenAccount(this.linkdenAccount, userId);

        this.linkedin_dialog = false;
      } else {
        this.linkedin_dialog = true;
      }
    },
    goToEditeBioInfo() {
      if (this.$refs.form_bio.validate()) {
        var userId = this.$store.state.user.user.uid;
        createProfile.AddHeadLineAndBio(this.userHeadLine, userId);
        read.getBio();
        this.bio_dialog = false;
      } else {
        this.bio_dialog = true;
      }
    },
    goToEditWorkExperience() {
      if (this.$refs.form_work_experince.validate()) {
        var userId = this.$store.state.user.user.uid;
        this.experience.start_date = this.startDate;
        this.experience.end_date = this.endDate;
        createProfile.AddWorkExperience(this.experience, userId);
        this.work_experience_dialog = false;
      } else {
        this.work_experience_dialog = true;
      }
    },
    goToEditResuma() {
      if (this.$refs.form_edit_resuma.validate()) {
        this.onpdfFile(this.fileSelected);
        this.edit_resuma = false;
        this.show_cv = true;
      } else {
        this.$refs.form_edit_resuma = false;
      }
    },

    goToEditEducation() {
      if (this.$refs.form_education.validate()) {
        var userId = fireLogin.getCurrentUser().uid;
        this.education.start_date = this.edu_start_date;
        this.education.end_date = this.edu_end_date;
        createProfile.AddEducation(userId, this.education);
        this.education_dialog = false;
      } else {
        this.education_dialog = true;
      }
    },
    goToEditName() {
      if (this.$refs.form_display_name.validate()) {
        this.display_name_dialog = false;
        console.log(this.profileimage);
      } else {
        this.display_name_dialog = true;
      }
    },
    goToEditProfilePic() {
      if (this.$refs.form_edit_profile.validate()) {
        this.onFileChange(this.selectedimage);
        this.edit_user_profile_dialog = false;
      }
    },
    onFileChange(event) {
      const files = event;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files);
      this.image = event;
      fileuplode.uploadUserPicProfile(event);
    },
    onpdfFile(event) {
      const files = event;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files);
      this.mycv = event;
      fileuplode.uploadeUserCv(event);
      read.getCV();
    },

    // method to open cv file
    openPdfFile() {
      window.open(this.$store.state.cv.cv, "_blank");
    },

    // method to open linkden url
    openLinkden() {
      window.open(this.$store.state.user.info.linkdenAccount, "_blank");
    },
    // set image profile
    setImageProfile(img) {
      if (img != null) {
        this.imageUrl = img;
      } else {
        this.imageUrl = "../../../assets/img/placeholder_image.png";
      }
    },
    // mehtod set address
    setAddress(city, country) {
      if (country != null) {
        this.address = city + " - " + country;
      } else {
        this.address = "your address";
      }
    },
    // method set linkden url
    setLinkdenUrl(link) {
      if (link != null) {
        this.linkdenAccount = link;
      } else {
        this.linkdenAccount = "";
      }
    },
    // set cv
    setCV(cv) {
      if (cv != null) {
        this.mycv = cv;
        this.show_cv = true;
      } else {
        this.show_cv = false;
      }
    },
    // set bio info
    setBio(bio) {
      if (bio != null) {
        this.headline_value = bio.headLine;
        this.short_bio = bio.bio;
      } else {
        this.short_bio = "";
        this.headLine = "";
      }
    },
    // set work to the list
    setWork(work) {
      this.workEper = work;
    },
    // set education to the list
    setEducation(education) {
      if (education != null) {
        this.educationlist = education;
      }
    }
  }
};
</script>
