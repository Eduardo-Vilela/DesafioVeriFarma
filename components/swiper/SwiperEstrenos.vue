<template>
    <div class="ContenedorSwiperLista">
        <h3 class="subtituloSwiperLista">{{ description }}</h3>
        <swiper
            :slidesPerView="4"
            :spaceBetween="30"
            :navigation="{
            clickable: true,
            }"
             :loop="true"
            :modules="modules"
            class="swiperLista"
            >
            <swiper-slide class="slideSwiperLista" 
            id="movieDiv"
          :key="movie.imdbID + Math.random()"
          v-for="movie in movies"
          >
          <div @click="showDetail(movie.imdbID)">
            <img :src="movie.Poster" id="imagemPosterSlide" loading="lazy"/>
          </div>
      </swiper-slide>
            
        </swiper>
    </div>
</template>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Movies } from "../../server/api/hello";


// import required modules
import { Navigation} from "swiper";

export default {
    name: 'Movies',
    data() {
    return {
      movies: [],
    };
  },
    props: {
    type: String,
    description: String,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.getMovieDetail();
  },
  methods: {
    async getMovieDetail(){
      this.showLoading = true;
      try {
        const { data: { Search } } = await Movies(this.type).get();
        this.movies = Search;
      } catch (error) {
        console.error(error);
      } finally {
        this.showLoading = false;
      }
    },
    showDetail(_id) {
      this.$router.push({ name: "Detail", params: { id: _id } });
    },
  }
};
</script>