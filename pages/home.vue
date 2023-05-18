<template>

      <Navbar/>
      <div class="boxSwiper">
      </div>
        <SwiperEstrenos :key="movie.id" :type="movie.type" v-for="movie in movies"/>
</template>

<script >
 import SwiperEstrenos from '~/components/swiper/SwiperEstrenos.vue';
  export default {
  name: "App",
  components: {
    SwiperEstrenos,
  },
  computed: {
    movies() {
      return [
      {id: 1, type: "s=avengers", description: "Populares na Vueflix"},
        {id: 2, type: "s=harry", description: "Recomendados"},
        {id: 3, type: "s=fast", description: "Em alta"},
        {id: 4, type: "s=super", description: "Aventura"},
        {id: 5, type: "s=game", description: "Ficção"},
        {id: 6, type: "s=brain", description: "Para todas idades"},
        {id: 7, type: "s=all", description: "Família"}
      ]
    }
  }
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