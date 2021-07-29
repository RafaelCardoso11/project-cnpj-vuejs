<template>
  <div>
    <section class="container-result">
      <header class="container-headerText">
        <h1 class="title">
          Resultado da consulta
        </h1>
        <h2 class="subtitle">
          Todos os dados são fornecidos por uma API e salvos em seu local
          storage.
        </h2>
      </header>
      <main class="content-result" v-if="checkCnpj == true">
        <h1 class="title-result">
          Nome de registro
        </h1>
        <h3 class="result" id="nameRegistration">
          {{ dataConsulting.razao_social }}
        </h3>
        <h1 class="title-result">
          N° do CNPJ
        </h1>
        <h3 class="result" id="nameRegistration">
          {{ dataConsulting.cnpj }}
        </h3>
        <h1 class="title-result">
          Situação
        </h1>
        <h3 class="result" id="nameRegistration">
          {{ dataConsulting.descricao_situacao_cadastral }}
        </h3>
        <h1 class="title-result">
          Inicio das atividades
        </h1>
        <h3 class="result" id="nameRegistration">
          {{ dataConsulting.data_inicio_atividade }}
        </h3>
        <h1 class="title-result">
          Descrição
        </h1>
        <h3 class="result" id="nameRegistration">
          {{ dataConsulting.cnae_fiscal_descricao }}
        </h3>
        <h1 class="title-result">
          UF
        </h1>
        <h3 class="result" id="nameRegistration">
          {{ dataConsulting.uf }}
        </h3>
        <h1 class="title-result">
          Bairro
        </h1>
        <h3 class="result" id="nameRegistration">
          {{ dataConsulting.bairro }}
        </h3>
        <h1 class="title-result">
          Município
        </h1>
        <h3 class="result" id="nameRegistration">
          {{ dataConsulting.municipio }}
        </h3>
      </main>
      <main class="content-result" v-else>
        <h3 class="result" id="nameRegistration">
          O seu CNPJ não foi encontrado. Tente consultar novamente.
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
    </section>
  <footerContainer />
  </div>
</template>
<script>
import consulting from "../services/consulting";
import { mapActions, mapState } from "vuex";
import footerContainer from "../templates/footerContainer.vue";

export default {
  components: {
    footerContainer,
  },
  data() {
    return {
      dataConsulting: [],
      checkCnpj: false,
    };
  },
  computed: {
    ...mapState({
      cnpj: (state) => state.cnpj,
      dataA: (state) => state.consulting,
    }),
  },
  methods: {
    ...mapActions(["ADD_HISTORIC"]),
    saveConsulting() {
      this.$store.commit(
        "SET_HISTORIC",
        this.dataConsulting.razao_social,
        this.dataConsulting.cnpj
      );
    },
  },
  mounted() {
    consulting.listar(this.cnpj).then((resposta) => {
      this.dataConsulting = resposta.data;
      if (this.dataConsulting.cnpj > 0) {
        this.checkCnpj = true;
        this.saveConsulting();
      }
    });
  },
};
</script>
<style>
.container-result {
  max-width: 1000px;
  height: auto;
  margin: 0 auto;
  margin-top: 80px;
  padding: 0px 20px;
}
.container-headerText {
  width: 100%;
}
.container-headerText .title {
  font-size: 24rem;
  font-weight: 400;
  font-style: normal;
  line-height: 26, 63px;
  color: #0099ff;
}
.container-headerText .subtitle {
  font-size: 16rem;
  font-weight: 400;
  color: #8e8e8e;
}
.content-result {
  width: 100%;
  padding: 30px 0px;
}
.content-result .title-result {
  font-size: 14rem;
  font-weight: 400;
  color: #0099ff;
  padding-top: 20px;
}
.content-result .result {
  font-size: 12rem;
  color: rgba(0, 0, 0, 0.58);
  margin: 5px 0px;
  font-weight: 400;
}
.footer-result {
  width: 100%;
  display: flex;
}
.footer-result .btn-content {
  background-color: #0099ff;
  display: flex;
  font-size: 11rem;
  padding: 10px 20px;
  color: white;
  margin: 40px 10px 40px 0px;
  border-radius: 5px;
  cursor: pointer;
}
.footer-result .btn-content:hover {
  opacity: 0.8;
}
#vetorBackgroudOpacity {
  position: fixed;
  z-index: -1;
  top: -100px;
  left: 100px;
  width: 700px;
}
</style>
