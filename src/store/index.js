import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('../firebase/index.js')
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    EventImages : [],
    Testimonials : [],
    EventsFetched : false,
    TestimonialsFetched : false
  },
  mutations: {
    setEvents (state, payload) {
      state.EventImages = payload
    },
    setEventsFetchedState (state,payload) {
      state.EventsFetched = payload
    },
    setTestimonials (state, payload) {
      state.Testimonials = payload
    },
    setTestimonialFetchedState (state,payload) {
      state.TestimonialsFetched = payload
    }
  },
  actions: {
    async getEvents({ state, commit }) {
      if(!state.EventsFetched) {
        try {
          var colRef = fb.Events;
          var events = await colRef.get();
          var eventData = events.docs.map(doc => doc.data());
          commit('setEvents', eventData);
          commit('setEventsFetchedState', true);
        } catch (e) {
          commit('setEvents', []);
        }
      }
        
    },
    async getTestimonials({ state, commit }) {
      if(!state.TestimonialsFetched) {
        try {
          var colRef = fb.Testimonials;
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
