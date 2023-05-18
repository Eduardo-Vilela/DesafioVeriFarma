<template>
    <div class="ContenedorSwiperLista">
        <h3 class="subtituloSwiperLista">Tendencias</h3>
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
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import axios from 'axios';
// Import Swiper styles
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
  
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=c7485f5a&s=fast')
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