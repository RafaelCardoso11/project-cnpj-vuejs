<template>
  <section class="container-register">
    <header class="container-headerRegister">
      <img src="../../assets/logo-register.png" alt="" class="logoAc">
       <h1 class="marketing-title">
        AC é a empresa n° 1 em consultas de modo rápido e fácil
      </h1>
      <img src="../../assets/VectorBackgroud-register.svg" class="vetorBackgroud" alt="">
    </header>
  </section>
</template>

<style>
  .container-register{
    max-width: 1000px;
    height: 100vh;
    margin: 0 auto;
  }
  .container-register .container-headerRegister{
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .container-headerRegister .marketing-title{
    position: absolute;
    z-index: 2;
    bottom: 160px;
    text-align: center;
    font-size: 22rem;
    width: 600px;
    font-weight: 400;
    color: #7B7474;
    
  }
  .container-headerRegister .logoAc{
    position: absolute;
    z-index: 2;
    bottom: 300px;
  }
  .container-headerRegister .vetorBackgroud{
    width: 550px;
  }
</style>
