<template>
  <section class="container-historic">
    <div class="content-historic">
      <h1 class="title-historic">
        Todas as suas consultas
      </h1>
      <main class="container-cards">
        <div class="cards-content">
          <h1 class="nameConsult">
            Nome de registro
          </h1>
          <h3 class="resultConsult" id="nome">
            Rafael Cardoso
          </h3>
          <h1 class="nameConsult">
            N° do CNPJ
          </h1>
          <h3 class="resultConsult" id="cnpj">
            59.974.851/0001-88
          </h3>
          <footer class="footer-cards">
            <strong class="numCard">1</strong>
          </footer>
        </div>
        <div class="cards-content">
          <h1 class="nameConsult">
            Nome de registro
          </h1>
          <h3 class="resultConsult" id="nome">
            Rafael Cardoso
          </h3>
          <h1 class="nameConsult">
            N° do CNPJ
          </h1>
          <h3 class="resultConsult" id="cnpj">
            59.974.851/0001-88
          </h3>
          <footer class="footer-cards">
            <strong class="numCard">1</strong>
          </footer>
        </div>
        <div class="cards-content">
          <h1 class="nameConsult">
            Nome de registro
          </h1>
          <h3 class="resultConsult" id="nome">
            Rafael Cardoso
          </h3>
          <h1 class="nameConsult">
            N° do CNPJ
          </h1>
          <h3 class="resultConsult" id="cnpj">
            59.974.851/0001-88
          </h3>
          <footer class="footer-cards">
            <strong class="numCard">1</strong>
          </footer>
        </div>
      </main>
    </div>
  </section>
</template>
<style>
.container-historic {
  width: 100%;
  padding: 40px 0px;
  margin-bottom: 30px;
}
.container-historic .content-historic {
  max-width: 800px;
  margin: 0 auto;
}
.content-historic .title-historic {
  font-size: 22rem;
  font-weight: 400;
  padding: 50px 0px 10px 0px;
}
.container-cards {
  width: 100%;
  height: 100%;
}
.container-cards .cards-content {
  height: 200px;
  box-shadow: 1px 2px 4px rgb(130, 125, 125);
  margin-top: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
}
.container-cards .nameConsult {
  font-size: 13rem;
  font-weight: 400;
}
.container-cards .resultConsult {
  font-size: 10rem;
  color: rgba(0, 0, 0, 0.58);
  font-weight: 400;
  margin-bottom: 10px;
}
.footer-cards{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.footer-cards .numCard{
  font-size: 10rem;
}
</style>
