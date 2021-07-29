<template>
  <div>
    <section class="container-QueryPage">
      <h1 class="title-query">
        Consulte seu CNPJ agora
      </h1>
      <h2 class="subtitle-query">
        Sem cobranças, é totalmente gratuito
      </h2>
      <div class="container-query">
        <div class="consulting-div">
          <div class="container-notice">
            <h2 class="notice">{{ messageNotice }}</h2>
          </div>
          <div class="content-query">
            <i class="las la-search"></i>
            <input
              type="text"
              class="consulting-content"
              placeholder="59.974.851/0001-88"
              v-mask="'##.###.###/####-##'"
              v-model="cnpj"
            />
          </div>
        </div>
        <button class="btn-search" @click="isValidCnpj()">
          Consultar
        </button>
      </div>
      <footer class="footer-query">
        <p class="description-query">
          Sua empresa aínda não possui CNPJ?
          <strong>
            <router-link to="/registrar">Crie um agora</router-link>
          </strong>
          mesmo conosco.
        </p>
      </footer>
    </section>
    <footerContainer />
    <div class="backgroud-next-y"></div>
  </div>
</template>

<script>
import footerContainer from "../templates/footerContainer.vue";
import { mapActions } from "vuex";
import { cnpj } from "cpf-cnpj-validator";

export default {
  components: {
    footerContainer,
  },
  data() {
    return {
      cnpj: "",
      computedCnpj: "",
      validCnpj: false,
      messageNotice: "",
    };
  },
  methods: {
    notIsValid() {
      let containerNotice = document.querySelector(".consulting-div");
      let contentInput = document.querySelector(".content-query");
      containerNotice.classList.toggle("notice");
      contentInput.classList.toggle("notice", true);
    },
    isValidCnpj() {
      if (this.cnpj.length === 18) {
        this.computedCnpj = cnpj.strip(this.cnpj);

        if (cnpj.isValid(this.computedCnpj) == true) {
          this.submit();
        } else {
          this.messageNotice = "Você digitou algo errado.";
          this.notIsValid();
        }
      } else {
        this.messageNotice = " Seu CNPJ precisa conter 14 digitos. ";
        this.notIsValid();
      }
    },
    ...mapActions(["ADD_CNPJ"]),
    submit() {
      this.ADD_CNPJ(this.computedCnpj).then(
        (response) => {
          console.log(response);
          this.$router.push("consulta/resultado");
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>

<style>
.backgroud-next-y {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 120vh;
  z-index: 9999;
  opacity: 0;

  background-color: #0099ff;
  animation: showTelaHome-x 2s ease-in-out forwards alternate;
}
.container-QueryPage {
  width: 100%;
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px;
  text-align: center;
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
.container-query .consulting-div {
  margin: 30px;
}
.container-query .consulting-div.notice {
  animation: noticeErro 200ms ease-in-out;
}

.container-query .container-notice {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  padding: 5px;
}
.container-notice .notice {
  font-size: 10rem;
  font-weight: 400;
  color: #8e8e8e;
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
.container-query .btn-search:active {
  cursor: wait;
}
.container-query .content-query {
  display: flex;
  background-color: #0099ff;
  width: 100%;
  align-items: center;

  border-radius: 5px;
}
.content-query.notice {
  border: 2px solid #0099ff;
  box-shadow: 0px 0px 3px #0099ff;
}
.content-query > i {
  padding-left: 10px;
  font-size: 25rem;
  color: white;
}

.content-query .consulting-content {
  width: 100%;
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
  max-width: 580px;
  text-align: center;
  padding: 20px 0px;
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

@keyframes noticeErro {
  from {
    transform: translateX(-70px);
  }
  to {
    transform: translateX(30px);
  }
}
@keyframes showTelaHome-x {
  from {
    opacity: 1;
    transform: translate(0);
  }
  to {
    opacity: 0;
    transform: translate(-100%);
  }
}
@media (max-width:530px){
  .content-query .consulting-content{
    max-width: 250px;
  }
  .container-QueryPage {
    padding: 80px 20px;
  }
}
</style>
