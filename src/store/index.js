import { createStore } from "vuex";
import axios from 'axios';


export default createStore({
  state: {
    userStories: [],
  },
  getters: {
    userStories: (state) => state.userStories,
  },
  mutations: {
    async setStory(state, story) {
      await axios.post('https://user-stories-4a4ce-default-rtdb.firebaseio.com/' , story)
      state.userStories.push(story);
      localStorage.setItem("userStories", JSON.stringify(state.userStories));
    },
    dltStory(state, story) {
      state.userStories.splice(story , 1)
      localStorage.setItem("userStories", JSON.stringify(state.userStories));
    },
    getStory( state , stories) {
    state.userStories = stories;
    },
    flipStoryId(state, id){
      state.userStories[id].completed = !state.userStories[id].completed;
      localStorage.setItem("userStories", JSON.stringify(state.userStories));

    }
  },
  actions: {
    addStory({ commit }, story) {
      commit("setStory", story);
    },
    deleteStory({ commit }, story) {

      commit("dltStory", story);
    },
    getStories({ commit }) {
      const stories = JSON.parse(localStorage.getItem("userStories")) || [];
      commit("getStory" , stories)
    },
    flipStory({commit}, id){
      commit("flipStoryId", id)
    }
  },
  modules: {},
});
