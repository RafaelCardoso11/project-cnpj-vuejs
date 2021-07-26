<template>
  <section class="container-QueryPage">
    <h1 class="title-query">
      Consulte seu CNPJ agora
    </h1>
    <h2 class="subtitle-query">
      Sem cobranças, é totalmente gratuito
    </h2>
    <div class="container-query">
      <div class="content-query">
        <i class="las la-search"></i>
        <input
          type="text"
          class="consulting-content"
          placeholder="59.974.851/0001-88"
        />
      </div>
      <router-link to="/consulta/resultado">
        <button class="btn-search">
          Consultar
        </button>
      </router-link>
    </div>
    <footer class="footer-query">
      <p class="description-query">
        Sua empresa aínda não possui CNPJ?
        <strong>
          <a href="">Crie um agora</a>
        </strong>
        mesmo conosco.
      </p>
    </footer>
  </section>
</template>

<style>
.container-QueryPage {
  width: 100%;
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
}
.title-query {
  font-size: 25rem;
  font-weight: 300;
  line-height: 60px;
  letter-spacing: 2px;
}
.subtitle-query {
  font-size: 14rem;
  font-weight: 300;
  color: #8e8e8e;
}
.container-query {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-query .btn-search {
  background-color: #0f3e5e;
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13rem;
  box-shadow: 0px 3px 4px #a6bcca;
}
.container-query .btn-search:hover {
  opacity: 0.8;
}
.container-query .content-query {
  display: flex;

  background-color: #0099ff;
  width: 100%;
  align-items: center;
  margin: 20px;
  border-radius: 5px;
}

.content-query > i {
  padding-left: 10px;
  font-size: 25rem;
  color: white;
}

.content-query .consulting-content {
  background-color: #0099ff;
  padding: 10px;
  font-size: 18rem;
  color: white;
}
.container-query .consulting-content::placeholder {
  color: white;
  opacity: 0.5;
}
.footer-query {
  width: 580px;
  text-align: center;
  padding: 20px;
  color: #887c7c;
}
.footer-query .description-query {
  font-size: 13rem;
}
.description-query strong {
  opacity: 0.6;
}
.description-query strong:hover {
  text-decoration: underline;
}
</style>
