<template>
  <section class="container-confirmRegister">
    <div class="container">
      <img src="../../assets/icon-confirm.png" alt="" class="img-confirm" />
      <h1 class="textMain">
        CNPJ registrado com sucesso!
      </h1>
      <div class="container-subtext">
        <h3 class="subtext">
          Você pode consultar ele agora mesmo.
        </h3>
      </div>
      <div class="container-buttons">
        <router-link to="../registrar">
          <button class="btn-register">
            Registrar novamente
          </button>
        </router-link>
        <router-link to="../consulta">
          <button class="btn-consulting">
            Consultar
          </button>
        </router-link>
      </div>
      <router-link to="../registrar">
        <div class="container-back">
          <img src="../../assets/icon-back.png" alt="back" />
          <p class="backText">
            Voltar
          </p>
        </div>
      </router-link>

      <footer class="footerContainer">
        <img src="../../assets/logo-confirm.png" alt="logo" />
      </footer>
    </div>
  </section>
</template>
<style>
.container-confirmRegister {
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 2;
  background-color: #0099ff;
}
.container-confirmRegister .container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  min-height: 95vh;
  max-width: 700px;
  margin: 0 auto;
}
.container .textMain {
  font-size: 30rem;
  color: white;
  margin-top: 20px;
}
.container .container-subtext {
  width: 100%;
  text-align: left;
}
.container-subtext .subtext {
  font-size: 15rem;
  color: white;
  padding: 0px 5px;
}
.container .container-buttons {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0px;
}
.container-buttons .btn-register,
.btn-consulting {
  margin: 10px 10px;
  cursor: pointer;

  font-size: 12rem;
  padding: 10px;
  width: 300px;
  border-radius: 5px;
}
.container-buttons .btn-register {
  background-color: white;
  box-shadow: 0px 0px 3px #4c90bd;
}

.container-buttons .btn-consulting {
  background-color: #0066ff;
  color: white;
  box-shadow: 0px 0px 3px #4c90bd;
}
.container-buttons .btn-consulting:hover,
.btn-register:hover {
  transition: 200ms;
  opacity: 0.8;
}
.container-back {
  margin: 20px;
}
.container-back .backText {
  color: white;
  font-size: 8rem;
}
.footerContainer {
  display: flex;
  position: absolute;
  bottom: 50px;
  right: 50px;
}
@media (max-width: 750px) {
  .container .container-subtext {
    text-align: center;
  }
  .footerContainer {
  display: flex;
  position: initial;
  justify-content: center;
  padding-top: 50px;
}
}
@media (max-height: 650px) {
  .container-confirmRegister {
    padding: 90px;
  }
}
</style>
