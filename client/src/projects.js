import HTTP from './components/http';
import router from './router';
import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    projects: [],
    newProjectName: null,
  },
  actions: {
    saveProject({ commit }, project) {
      return HTTP().patch(`api/projects/${project.id}`, project)
      .then(({ data }) => {
        commit('unsetEditMode', project);
      })
    },
    deleteProject({ commit }, project) {
      return HTTP().delete(`api/projects/${project.id}`, project)
      .then(({ data }) => {
        commit('removeProject', project);
      })
    },
    fetchProjects({ commit, state }) {
      return HTTP().get('api/projects')
      .then(({ data }) => {
        commit('setProjects', data);
      })
    },
    createProject({ commit, state }) {
      return HTTP().post('api/projects', {
        title: state.newProjectName,
      })
        .then(({ data }) => {
          commit('appendProject', data);
          commit('setNewProjectName', null);
        })
    }
  },
  getters: {
  },
  mutations: {
    setNewProjectName(state, name) {
      state.newProjectName = name;
    },
    appendProject(state, project) {
      state.projects.push(project);
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setProjectTitle(state, { project, title }) {
      project.title = title;
    },
    setEditMode(state, project) {
      Vue.set(project, 'isEditMode', true);
    },
    unsetEditMode(state, project) {
      Vue.set(project, 'isEditMode', false);
    },
    removeProject(state, project) {
      state.projects.splice(state.projects.indexOf(project), 1);
    }
  },
};
