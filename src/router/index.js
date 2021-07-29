import Router from 'vue-router';
import Vue from 'vue';


import initPageLoading from '../components/views/initPageLoading.vue'
import queryPage from '../components/views/queryPage.vue'
import resultQuery from  '../components/views/resultQuery.vue'
import historicQueryPage from '../components/views/historicQueryPage.vue';
import registerNewCnpj from '../components/views/registerNewCnpj.vue'
import confirmRegisterPage from '../components/views/confirmRegisterPage.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/inicio",
      component: initPageLoading
    },
    {
      path: "/consulta",
      component: queryPage
    },
    {
      path: "/consulta/resultado",
      component: resultQuery
    },
    {
      path: "/consulta/historico",
      component: historicQueryPage
    },
    {
      path: "/registrar",
      component: registerNewCnpj
    },
    {
      path: "/registrar/registrado",
      component: confirmRegisterPage
    },
    {
      path: "/",
      redirect: "/inicio"
    }
  ]
})