<template>
  <section class="container-result">
    <header class="container-headerText">
      <h1 class="title">
        Resultado da consulta
      </h1>
      <h2 class="subtitle">
        Todos os dados são fornecidos por uma API e salvos em seu local storage.
      </h2>
    </header>
    <main class="content-result">
      <h1 class="title-result">
        Nome de registro
      </h1>
      <h3 class="result" id="nameRegistration">
        Rafael Cardoso
      </h3>
      <h1 class="title-result">
        N° do CNPJ
      </h1>
      <h3 class="result" id="cnpj">
        59.974.851/0001-88
      </h3>
    </main>
    <footer class="footer-result">
      <router-link to="/consulta">
          <button class="btn-content">Consultar novamente</button>
      </router-link>
      <router-link to="/consulta/historico">
         <button class="btn-content">Suas consultas</button>
      </router-link>
     
    </footer>
    <img id="vetorBackgroudOpacity" src="../../assets/VectorBackgroud-result.svg" alt="">
  </section>
</template>
<style>
.container-result {
  max-width: 1000px;
  height: 70%;
  margin: 0 auto;
  margin-top: 80px;
}
.container-headerText {
  width: 100%;
}
.container-headerText .title {
  font-size: 22rem;
  font-weight: 400;
  font-style: normal;
  line-height: 26, 63px;
}
.container-headerText .subtitle {
  font-size: 14rem;
  font-weight: 400;
  color: #8e8e8e;
}
.content-result{
  width: 100%;
  padding: 20px 0px;
}
.content-result .title-result{
  font-size: 14rem;
  font-weight: 400;
}
.content-result .result{
  font-size: 12rem;
  color: rgba(0, 0, 0, 0.58);
  margin: 5px 0px;
  font-weight: 400;
}
.footer-result{
  width: 100%;
  display: flex;
  
}
.footer-result .btn-content{
  background-color: #0099FF;
  display: flex;
  font-size: 11rem;
  padding: 10px 20px;
  color: white;
  margin: 40px 10px 40px 0px;
  border-radius: 5px;
  cursor: pointer;

  }
  .footer-result .btn-content:hover{
    opacity: 0.8;
  }
  #vetorBackgroudOpacity{
    position: fixed;
    z-index: -1;
    top: -100px;
    left:100px;
    width: 700px;
  }
</style>
