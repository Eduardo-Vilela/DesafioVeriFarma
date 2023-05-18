<template>

      <Navbar/>
      <div class="boxSwiper">
        <!-- <swiper
        :loop="true"
        :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        }"
        :navigation="true"
        :modules="modules"
        class="swiperPrincipal"
      >
      <swiper-slide class="swiper-slide-principal" v-for="slide in data" :key="slide.imdbID" :style="{ backgroundImage: `url(${slide.Poster})` }">
        {{ slide.content }} 
      </swiper-slide>
      </swiper> -->
      <SwiperTendencia/>
      </div>
      <!-- <div v-if="error || !data">
        <p>errorrrr</p>
      </div>
     <div v-else> -->
      <SwiperEstrenos/>
      <!-- <p>{{ data }}</p> -->
     <!-- </div> -->
</template>

<script >
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay,Navigation} from 'swiper';
  import axios from 'axios';
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const data = ref([]);
  
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=c7485f5a&s=avengers')
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
        modules: [Autoplay,Navigation],
        data, 
        slides, 
      };
    },
  };
</script>
<style>
/* .boxSwiper{
  width: 100%;
  height: 60vh;
}
.swiperPrincipal{
  width: 100%;
  height: 100%;
}
.swiper-slide-principal{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100% !important;
  height: 100%;
  background-repeat: no-repeat !important;
  background-size: contain;
  background-position: center;
  background-color: #212752;
} */
</style>