<template>
  <div class="dashboard">
    <div class="tasks-grid">
      <div class="section-title">
        Мои задачи
      </div>

    </div>
    <div class="projects-grid">
      <div class="section-title">
        Мои проекты
      </div>
      <div v-for="project in project_list" :key="project.id" class="project-card">
        <button class="project-title">
          <img v-if="project.logo_small_url != null" class="project-icon" :src="project.logo_small_url"/>
          <img v-else class="project-icon" src="../assets/folder-outline.png"/>
          <p style="padding-left: 10px"> {{project.name}} </p>

        </button>
        <p class="project-description">  {{project.description}} </p>
        <div class="project-totals">
          <span class="project-total">
            <i v-if="project.i_am_owner" class="mdi mdi-crown"/>
            <i v-else-if="project.i_am_admin" class="mdi mdi-crown-outline"/>
            <i v-else class="mdi mdi-account"/>
          </span>
          <span></span>
          <span class="project-total">
            <i :class="project.is_fan ? 'mdi mdi-heart' : 'mdi mdi-heart-outline'"/> {{project.total_fans}}
          </span>
          <span class="project-total">
            <i :class="project.is_watcher ? 'mdi mdi-eye' : 'mdi mdi-eye-outline'"/> {{project.total_watchers}}
          </span>
          <span class="project-total">
            <i class="mdi mdi-account-multiple-outline"/> {{project.members.length}}
          </span>
        </div>
      </div>
    </div>

    <div class="section-title">
      Мой календарь
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cookies from 'js-cookie'

export default {
  data() {
    return {

    }
  },
  computed: {
    username() {
      return this.$store.state.user_detail.username
    },
    userId() {
      return this.$store.state.user_detail.id
    },
    project_list() {
      return this.$store.state.project_list
    }
  },
  methods: {
    getProjectList() {
      axios
        .get(cookies.get('api_url') + '/projects?member=' + this.$store.getters.getUserId,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + cookies.get("auth_token")
            }
          }
        )
        .then(
          (response) => (this.$store.commit('setProjectList', response.data))
        )
    }
  },
  created() {
    this.getProjectList()
  },
}
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-template-areas:  "tasks projects"
                        "calendar projects"
}

.section-title {
  display: flex;
  height: 35px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.tasks-grid {
  grid-area: tasks;
}

.projects-grid {
  grid-area: projects;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.project-icon {
  width: 50px;
  height: 50px;
}
.project-description {
  margin: 5px;
  word-wrap: break-word;
  text-align: left;
  flex-grow: 1;
  line-height: 20px;
}
.project-totals {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 60px 1fr 60px 60px 60px;
  height: 30px;
  align-items: center;
  justify-content: end;
  /* font-size: 20px; */
}
.project-total {
  border-radius: 5px;
  height: 100%;
  cursor: default;
  user-select: none;
  line-height: 30px;
  font-size: 20px;
}
.project-total:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.project-card {
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: var(--va-appbartrans);
  min-height: 160px;
  margin: 10px;
  padding: 5px;
}
.project-title:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.project-title {
  cursor: pointer;
  display: grid;
  grid-template-columns: 50px 1fr;
  background: none;
  border: none;
  border-radius: 5px;
  color: var(--va-font);
  font-size: 20px;
  padding: 8px;
  align-items: center;
  text-align: left;
}

</style>