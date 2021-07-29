<template>
  <div>
    <section class="container-historic">
      <div class="content-historic">
        <h1 class="title-historic">
          Todas as suas consultas
        </h1>
        <main class="container-cards">
          <div
            class="cards-content"
            v-for="card in data"
            :key="card"
            @click="clickCard()"
          >
            <h1 class="nameConsult">
              Nome de registro
            </h1>
            <h3 class="resultConsult" id="nome">
              {{ data.name }}
            </h3>
            <h1 class="nameConsult">
              N° do CNPJ
            </h1>
            <h3 class="resultConsult" id="cnpj">
              {{ data.cnpj }}
            </h3>
            <footer class="footer-cards">
              <strong class="numCard">{{ data.id }}</strong>
            </footer>
          </div>
        </main>
      </div>
    </section>
    <footerContainer />
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
      cards: [],
      data: [
        {
          name: "",
          cnpj: "",
          id: "",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["ADD_CNPJ"]),
    clickCard() {
      this.ADD_CNPJ(this.data.cnpj).then((response) => {
        console.log(response);
        this.$router.push("resultado");
      });
    },
    loadHistoric() {
      this.data.name = localStorage.NAME;
      this.data.cnpj = cnpj.format(localStorage.CNPJ); 
      this.data.id = localStorage.ITEMSTOTAL;
    },
  },
  created() {
    this.loadHistoric();
  },
};
</script>
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
  cursor: pointer;
}
.container-cards :hover {
  transition: 200ms;
  background-color: #eff7fd;
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
.footer-cards {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.footer-cards .numCard {
  font-size: 10rem;
}
@media (max-width: 900px){
  .container-historic .content-historic {
    padding: 0px 30px;
  }
}
</style>
