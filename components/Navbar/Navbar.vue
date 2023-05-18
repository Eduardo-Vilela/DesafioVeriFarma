<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand navbar-logo" href="#"><img class="logoNavbar" src="/img/logoNavbar.png" alt="LogoNetflix"/></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Series</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Películas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Novedades populares</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Mi lista</a>
        </li>

      </ul>
      <div class="d-flex" role="search">
      
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>
   .navbar{
    background-color: #CABD5A!important;
    height: auto;
   }
   .navbar-logo{
    margin-right: 25px !important;
   }
   .logoNavbar{
    width: 120px;
    height: auto;
    padding: 1px  ;
   }
   .navbar-nav{
    display: flex;
    flex-direction: row;
    column-gap: 25px;
   }
   .nav-link {
    color: white;
    font-size: 16px;
    font-weight: 500;
   }
   .container-fluid{
    width: 95% !important;
   }
</style>