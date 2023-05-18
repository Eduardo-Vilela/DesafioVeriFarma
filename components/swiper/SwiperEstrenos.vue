<template>
    <div class="ContenedorSwiperLista">
        <h3 class="subtituloSwiperLista">Estrenos</h3>
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
            <swiper-slide class="slideSwiperLista" v-for="slide in data" :key="slide.imdbID" :style="{ backgroundImage: `url(${slide.Poster})` }">
        {{ slide.content }} 
      </swiper-slide>
            
        </swiper>
    </div>
</template>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import axios from 'axios';
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Navigation} from "swiper";

export default {
    name: 'SwiperLista',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const data = ref([]);
  
  axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=c7485f5a&s=harry')
    .then(response => {
      data.value = response.data.Search;
    })
    .catch(error => {
      console.error(error);
    });
      const slides = [
      { id: 1, content: 'Slide 1' },
      { id: 2, content: 'Slide 2' },
      { id: 3, content: 'Slide 3' },
      { id: 4, content: 'Slide 4' },
      { id: 5, content: 'Slide 5' },
      // ...
    ];

    return {
      modules: [Navigation],
      data, 
        slides, 
    };
  },
};
</script>