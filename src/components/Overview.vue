<template>
  <div id="overview">
      <div id="main">
          <movie-list v-bind:genre="genre" v-bind:time="time" v-bind:movies="movies"></movie-list>
          <movie-filter v-on:check-filter="checkFilter"></movie-filter>
      </div>
  </div>
</template>
<script>
  import MovieList from './components/MovieList.vue';
  import MovieFilter from './components/MovieFilter.vue';

  export default {
    components: {
        MovieList,
        MovieFilter 
      },
  }
</script>