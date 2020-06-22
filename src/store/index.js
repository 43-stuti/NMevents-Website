import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    ProjectImages : [],
    Testimonials : [],
    ImagesFetched : false,
    TestimonialsFetched : false
  },
  mutations: {
    setGalleryImages (state, payload) {
      state.ProjectImages = payload
    },
    setImageFetchedState (state,payload) {
      state.ImagesFetched = payload
    },
    setTestimonials (state, payload) {
      state.Testimonials = payload
    },
    setTestimonialFetchedState (state,payload) {
      state.TestimonialsFetched = payload
    }
  },
  actions: {
    async getGalleryImages({ state, commit }) {
      if(!state.ImagesFetched) {
        try {
          var colRef = firebase.firestore().collection("Projects");
          var images = await colRef.get();
          var imageData = images.docs.map(doc => doc.data());
          commit('setGalleryImages', imageData);
          commit('setImageFetchedState', true);
        } catch (e) {
          commit('setGalleryImages', []);
        }
      }
        
    },
    async getTestimonials({ state, commit }) {
      if(!state.TestimonialsFetched) {
        try {
          var colRef = firebase.firestore().collection("Testimonials");
          var testimonials = await colRef.get();
          var testimonialData = testimonials.docs.map(doc => doc.data());
          commit('setTestimonials', testimonialData);
          commit('setTestimonialFetchedState', true);
        } catch (e) {
          commit('setTestimonials', []);
        }
      }
        
    }
  },
  modules: {
  }
})
