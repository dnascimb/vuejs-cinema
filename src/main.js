import './style.scss'

import Vue from 'vue';
import Overview from './components/Overview.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import moment from 'moment-timezone';
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

new Vue({
  el: '#app',
  data: {
    genre: [],
    time: [],
    movies: [],
    moment
  },
  methods: {
    checkFilter(category, title, checked) {
      if(checked) {
        this[category].push(title);
      } else {
        let index = this[category].indexOf(title);
        if(index < -1) {
          this[category].splice(index, 1);
        }
      }
    }
  },
  components: { 
    Overview
  },
  created() {
    this.$http.get('/api').then(response => {
      this.movies = response.data;
    });
  }
});