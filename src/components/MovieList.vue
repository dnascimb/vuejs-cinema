<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length">
      <movie-item v-for="movie in movies" v-bind:movie="movie.movie" v-bind:sessions="movie.sessions"></movie-item> 
    </div>
    <div v-else>No Results</div>
  </div>
</template>

<script>

  import genres from '../util/genres';
  import MovieItem from './MovieItem.vue';

  export default {
    props: ['genre', 'time', 'movies'],
    methods: {
      moviePassesGenreFilter(movie) {
        if(!this.genre.length) {
          return true;
        } else {
          let movieGenres = movie.movie.Genre.split(", ");
          let matched = true;
          this.genre.forEach(genre => {
            if (movieGenres.indexOf(genre) === -1) {
              matched = false;
            }
          });
          return matched;
        }
        
      }
    },
    computed: {
      filteredMovies() {
        return this.movies.filter(this.moviePassesGenreFilter);
      }
    },
    components: {
      MovieItem
    },
    created() {
      console.log(this.$moment);
    }
  }
</script>