import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import initPageLoading from './components/views/initPageLoading.vue'
import queryPage from './components/views/queryPage.vue'
import resultQuery from  './components/views/resultQuery.vue'
import historicQueryPage from './components/views/historicQueryPage.vue';
import registerNewCnpj from './components/views/registerNewCnpj.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
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
      path: "/",
      redirect: "/inicio"
    }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
