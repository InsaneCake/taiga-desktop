<template>
  <div>
    <va-divider>
      <span class="px-2">My projects</span>
    </va-divider>
    <div class="projects-grid">
      <va-card v-for="project in project_list" :key="project.id" class="project-card">
        <va-card-title>
          {{project.name}}
        </va-card-title>
        <va-card-content>
          <div class="project-card-content">
            <img class="project-icon" :src="project.logo_small_url"/>
            <p class="project-description">  {{project.description}} </p>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      project_list: [
        {
          anon_permissions: [],
          blocked_code: null,
          created_date: "2020-07-03T08:40:54.649Z",
          creation_template: 1,
          default_epic_status: 38,
          default_issue_status: 59,
          default_issue_type: 25,
          default_points: 97,
          default_priority: 28,
          default_severity: 45,
          default_task_status: 43,
          default_us_status: 49,
          description: "Beta description",
          i_am_admin: true,
          i_am_member: true,
          i_am_owner: true,
          id: 9,
          is_backlog_activated: true,
          is_contact_activated: true,
          is_epics_activated: false,
          is_fan: false,
          is_featured: false,
          is_issues_activated: true,
          is_kanban_activated: false,
          is_looking_for_people: false,
          is_private: true,
          is_watcher: true,
          is_wiki_activated: true,
          logo_big_url: null,
          logo_small_url: null,
          looking_for_people_note: "",
          members: [6],
          modified_date: "2020-07-03T08:40:54.874Z",
          my_homepage: false,
          my_permissions: [],
          name: "Beta project",
          notify_level: 1,
          owner: {
            big_photo: null,
            full_name_display: "Vanesa Torres",
            gravatar_id: "b579f05d7d36f4588b11887093e4ce44",
            id: 6,
            is_active: true,
            photo: null,
            username: "user2114747470430251528",
          },
          public_permissions: [],
          slug: "user2114747470430251528-beta-project",
          tags: [],
          tags_colors: {},
          total_activity: 1,
          total_activity_last_month: 1,
          total_activity_last_week: 1,
          total_activity_last_year: 1,
          total_closed_milestones: 0,
          total_fans: 0,
          total_fans_last_month: 0,
          total_fans_last_week: 0,
          total_fans_last_year: 0,
          total_milestones: null,
          total_story_points: null,
          total_watchers: 1,
          totals_updated_datetime: "2020-07-03T08:40:54.906Z",
          videoconferences: null,
          videoconferences_extra_data: null,
        },
      ],
    }
  },
  computed: {
    username() {
      return this.$store.state.user_detail.username
    },
    userId() {
      return this.$store.state.user_detail.id
    },
    token() {
      return this.$cookies.get("auth_token")
    },
    apiURL() {
      return localStorage.getItem("api_url")
    },
  },
  created() {
    axios
      .get(this.apiURL + '/projects?member=' + this.userId,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
          }
        }
      )
      .then((response) => (this.project_list = response.data))
  },
}
</script>

<style scoped>
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project-icon {
  width: 80px;
  height: 80px;
}

.project-card-content {
  display: flex;
}

.project-description {
  margin: 5px;
  word-wrap: break-word;
  text-align: left;
}

.project-card {
  min-height: 200px;
  width: 400px;
  margin: 10px;
}
</style>