<template>
  <div class="max-w-[95%] mx-auto md:max-w-full">
    <div>
      <img
        v-bind:src="`https://image.tmdb.org/t/p/original${details.backdrop_path}`"
        class="mt-5 mb-5 rounded-xl"
      />
      <h1 class="text-4xl md:text-6xl text-white">{{ details.original_title }}</h1>
      <h1 v-if=details.tagline class="text-xl md:text-2xl text-white mt-2"><i>{{ details.tagline }}</i></h1>

      <div class="dui-divider"></div>

      <p class="text-xl"><b>Release date: </b>{{ details.release_date }}</p>
      <p class="text-xl"><b>Rating: </b>{{ details.vote_average }}</p>

      <div class="flex flex-wrap">
        <p class="text-xl"><b>Genres:&nbsp;</b></p>
        <p
          v-for="genre in details.genres"
          v-bind:key="genre.id"
          class="text-xl bg-primary rounded-lg mx-2 px-2 text-primary-content"
        >
          {{ genre.name }}&nbsp;
        </p>
      </div>

      <div class="dui-divider"></div>

      <p class="text-2xl">{{ details.overview }}</p>

      <div class="dui-divider"></div>

      <p class="text-xl"><b>Cast:&nbsp;</b></p>
      <div class="flex">
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-5">
          <div
            v-for="actor in actors.splice(0, 5)"
            v-bind:key="actor.id"
            class="dui-card dui-card-compact mr-4 mb-10 bg-base-300 shadow-gray-800 shadow-lg"
          >
            <figure>
              <img v-bind:src="`https://image.tmdb.org/t/p/original${actor.profile_path}`" />
            </figure>
            <div class="dui-card-body">
              <h2 class="dui-card-title">{{ actor.name }}</h2>
              <h2 class=""><b>Character:</b> {{ actor.character }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { MovieDb } = require("moviedb-promise");
const moviedb = new MovieDb("17e6273050ea3134a10b4dc39a15bfff");

export default {
  name: "MovieDetail",

  data() {
    return {
      details: [],
      actors: [],
      showLessMovies: true,
    };
  },

  components: {},

  methods: {
    async getData() {
      try {
        const data = await moviedb.movieInfo({ id: this.$route.params.id });
        this.details = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async getCredits() {
      try {
        const data = await moviedb.movieCredits({ id: this.$route.params.id });
        this.actors = data.cast;
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
    this.getCredits();
  },
};
</script>
