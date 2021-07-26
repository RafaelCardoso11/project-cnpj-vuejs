<template>
  <app-view>
    <headerContainer />
    <router-view></router-view>
    <footerContainer />
  </app-view>
</template>

<script>
import headerContainer from "./components/templates/headerContainer.vue";
import footerContainer from "./components/templates/footerContainer.vue"
export default {
  name: "App",
  components: {
    headerContainer,
    footerContainer
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
html {
  font-size: 10%;
  background-color: #eeeeee;
}
html,
body {
  width: 100%;
  height: 100%;
}
ul {
  list-style: none;
}
a {
  color: black;
  text-decoration: none;
}
input{
  outline: none;
  border: 0;
}
input[type="number"] {
  -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
}
button{
  outline: none;
  border: none;
}
</style>
