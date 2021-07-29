<template>
  <div>
    <section class="container-register">
      <header class="container-headerRegister">
        <img src="../../assets/logo-register.png" alt="" class="logoAc" />
        <h1 class="marketing-title">
          AC é a empresa n° 1 em consultas de modo rápido e fácil
        </h1>
        <img
          src="../../assets/VectorBackgroud-register.svg"
          class="vetorBackgroud"
          alt=""
        />
      </header>
      <main class="register-content">
        <div class="container-sign">
          <h1 class="title-sign">
            Registar novo CNPJ
          </h1>
          <h3 class="subtitle-sign">
            Preencha todos os dados a seguir
          </h3>
        </div>
        <div class="body-sign">
          <div class="container-sidenav"></div>
          <div class="container-form">
            <label class="dataItens-sign">
              Nome de registro
            </label>
            <input
              type="text"
              class="input-dataItens"
              placeholder="Exemplo: NEOENERGIA S.A"
            />
            <label class="dataItens-sign">
              N° do CNPJ
            </label>
            <input
              type="text"
              class="input-dataItens"
              placeholder="Exemplo: 59.974.851/0001-88"
            />
            <label class="dataItens-sign">
              Descrição
            </label>
            <input
              type="text"
              class="input-dataItens"
              placeholder="Exemplo: Holdings de instituições não financeiras"
            />
            <label class="dataItens-sign">
              UF
            </label>
            <select name="" id="" class="input-dataItens">
              <option value="">RJ</option>
              <option value="">PA</option>
              <option value="">SP</option>
              <option value="">MG</option>
            </select>
            <label class="dataItens-sign">
              Bairro
            </label>
            <input
              type="text"
              class="input-dataItens"
              placeholder="Exemplo: FLAMENGO"
            />
            <label class="dataItens-sign">
              Municipio
            </label>
            <input
              type="text"
              class="input-dataItens"
              placeholder="Exemplo: RIO DE JANEIRO"
            />
            <div class="container-confirm">
              <router-link to="registrar/registrado">
                <button class="btn-content">
                  Cadastrar CNPJ
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </main>
    </section>
    <footerContainer />
    <img
      id="vetorBackgroudOpacity"
      src="../../assets/VectorBackgroud-result.svg"
      alt=""
    />
  </div>
</template>
<script>
import footerContainer from "../templates/footerContainer.vue";
export default {
  components: {
    footerContainer,
  },
};
</script>

<style>
.container-register {
  max-width: 1000px;
  height: auto;
  margin: 0 auto;
  padding: 10px;
}
.container-register .container-headerRegister {
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
}
.container-headerRegister .marketing-title {
  
  text-align: center;
  font-size: 22rem;
  max-width: 600px;
  font-weight: 400;
  color: #7b7474;
  margin: 20px;
}
.container-headerRegister .logoAc {
  margin-bottom: 20px;
}
.container-headerRegister .vetorBackgroud {
  width: 550px;
  position: absolute;
  z-index: -1;
}
.register-content {
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container-sign {
  width: 100%;
  padding: 20px 0px;
}
.container-sign .title-sign {
  font-size: 30rem;
  font-weight: 500;
}
.container-sign .subtitle-sign {
  font-size: 18rem;
  font-weight: 400;
  color: #7b7474;
}
.register-content .body-sign {
  width: 100%;
  display: flex;
  padding: 100px 0px;
}
.body-sign .container-sidenav {
  height: auto;
  border-radius: 20px;
}
.container-form {
  border-radius: 20px;
}
.container-form .dataItens-sign {
  font-size: 16rem;
  font-weight: 400;
  color: #1a1a1a;
  padding: 20px 0px;
  line-height: 60px;
}
.container-form .input-dataItens {
  width: 100%;
  font-size: 12rem;
  padding: 15px;
  border-radius: 3px;
  border: 1px solid #bab8b8;
  margin-bottom: 40px;
}
.container-form .container-confirm {
  display: flex;
  justify-content: flex-end;
}
.container-form .btn-content {
  background-color: #0099ff;

  font-size: 11rem;
  padding: 10px 20px;
  color: white;
  margin: 0px 10px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 3px;
}
.container-confirm .btn-content:hover {
  transition: 200ms;
  opacity: 0.8;
}
#vetorBackgroudOpacity {
  position: fixed;
  z-index: -1;
  top: -100px;
  left: 100px;
  width: 1000px;
}
@media (max-width: 750px) {
  .container-headerRegister .vetorBackgroud {
    max-width: 450px;
  }
}
@media (max-width: 500px) {
  .container-headerRegister .vetorBackgroud {
    max-width: 280px;
  }
}
@media (max-height: 650px) {
  .container-register .container-headerRegister {
    
  }
}
</style>
