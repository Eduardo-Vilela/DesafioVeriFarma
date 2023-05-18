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
          <div @click="showDetail(movie.imdbID)"  >
            <img :src="movie.Poster" id="imagemPosterSlide" loading="lazy"/>
          </div>
          <p>{{movie.imdbID}}</p>
      </swiper-slide>
            
        </swiper>
    </div>
</template>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Movies } from "../../server/api/hello";  

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
     
      try {
        const { data: { Search } } = await Movies(this.type).get();
        this.movies = Search;
      } catch (error) {
        console.error(error);
      } 
    },
    showDetail(_id) {
      this.$router.push({ name: "detail", params: { id: _id } });
    },
  }
};
</script>
<style>
.ContenedorSwiperLista{
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #1F094A;
    padding-left: 50px;
    padding-top: 30px;
    column-gap: 25px;
}
.swiperLista{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.swiperLista .swiper-wrapper{
    align-items: center;
}
.swiperLista .swiper-button-prev:after{
    opacity: 0 !important;
}
.slideSwiperLista{
    width: 330px !important;
    height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
}

.slideSwiperLista:hover{
    box-shadow: rgba(0, 0, 0, 0.8) 8px 8px 20px -16px, rgba(0, 0, 0, 0.72) 0px 12px 22px -10px;
    transform: scale(1.02, 1.02) translateZ(0px) translate3d(0px, 0px, 0px);
    transition-duration: 300ms;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
    border-radius: 5px;
}
.imagenSlideLista{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
.subtituloSwiperLista{
    color: white;
    font-size: 1.4vw;
    font-weight: 600;
}
</style>