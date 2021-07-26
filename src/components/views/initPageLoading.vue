<template>
  <section class="pageInit">
    <main class="content-main">
      <div class="backgroud-vector">
        <img
          src="../../assets/Vector-backgroud-1.png"
          alt=""
          class="vectorBG-c1"
        />
        <div class="container-carousel">
          <img
            src="../../assets/Vector-backgroud-2.png"
            alt=""
            class="vectorBG-c2"
          />
          <img src="../../assets/lupa-azul.png" alt="" class="img-carousel" />
          <p class="content-description">
            Software desenvolvido para consultas e análise de CNPJs
          </p>
        </div>
      </div>
    </main>
    <footer class="content-footer">
      <div class="backgroud-vector">
        <img src="../../assets/Vector-footer-c1.png" class="vectorFooter-c1" />
        <img src="../../assets/Vector-footer-c2.png" class="vectorFooter-c2" />
      </div>
      <img src="../../assets/roaming.png" alt="" class="load-img" />
      <p class="copy-content">
        Todos os direitos reservados aos recrutadores ❤
      </p>
    </footer>
    <div class="backgroud-next"></div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted: function (){
    setTimeout(() => {
      this.$router.push('consulta'); 
    }, 8000);
  }
})
</script>

<style>
.pageInit {
  width: 100%;
}
.backgroud-next {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  opacity: 0;

  transform: translateX(-100%);
  background-color: #0099ff;
  animation: showTelaHome 4s 4s ease-in-out forwards alternate;
}
.content-main .vectorBG-c1 {
  position: relative;
  display: flex;
  width: 550px;
  margin: 0 auto;
  margin-top: 20px;
  z-index: 1;
}
.content-main .vectorBG-c2 {
  position: absolute;
  bottom: calc(50% - 190px);
  width: 500px;
  left: calc(50% - 230px);
}
.content-main .img-carousel {
  position: absolute;
  bottom: calc(50% + 30px);
  left: calc(50% - 15px);
  width: 70px;
  animation: searchLoop 3s 1s ease-in-out infinite alternate-reverse;
}
.content-main .content-description {
  position: absolute;
  bottom: calc(50% - 50px);
  left: calc(50% - 180px);
  width: 400px;
  color: #584f4f;
  text-align: center;
  font-size: 12rem;
  animation: showLetters 2s ease-out;
}
.content-footer .backgroud-vector {
  overflow: hidden;
}
.content-footer .vectorFooter-c1 {
  position: absolute;
  width: 100vw;
  height: 150px;
  z-index: 1;
  bottom: 20px;
}
.content-footer .vectorFooter-c2 {
  position: absolute;
  width: 100vw;
  height: 150px;
  z-index: 2;
  bottom: 0;
}
.content-footer .load-img {
  position: absolute;
  z-index: 3;
  width: 50px;
  right: 40px;
  animation: rotateRoaming 6s forwards;
}
.content-footer .copy-content {
  position: absolute;
  bottom: 20px;
  color: white;
  z-index: 3;
  left: calc(50% - 140px);
  font-size: 7rem;
  text-align: center;
}
@keyframes rotateRoaming {
  to {
    opacity: 0;
    transform: rotate(180deg);
  }
}
@keyframes searchLoop {
  from {
    transform: translate(-30%, -20%);
  }
  to {
    transform: translateX(20%, 20%);
  }
}
@keyframes showLetters {
  from {
    opacity: 0;
    transform: translateY(-80%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes showTelaHome {
  from {
    opacity: 0;
    transform: translate(-100%);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
}
@media (max-width: 730px) {
  .content-main .vectorBG-c1 {
    position: relative;
    display: flex;
    width: 450px;
    margin: 0 auto;
    margin-top: 60px;
    z-index: 1;
  }
  .content-main .vectorBG-c2 {
    position: absolute;
    bottom: calc(50% - 140px);
    width: 400px;
    left: calc(50% - 200px);
  }
  .content-main .img-carousel {
    position: absolute;
    bottom: calc(50% + 30px);
    left: calc(50% - 15px);
    width: 50px;
    animation: searchLoop 3s ease-in-out infinite alternate-reverse;
  }
  .content-main .content-description {
    position: absolute;
    bottom: calc(50% - 50px);
    left: calc(50% - 145px);
    width: 300px;
    color: #584f4f;
    text-align: center;
    font-size: 9rem;
  }
}
@media (max-width: 550px) {
  .content-main .vectorBG-c1 {
    position: relative;
    display: flex;
    width: 300px;
    margin: 0 auto;
    margin-top: 130px;
    z-index: 1;
  }
  .content-main .vectorBG-c2 {
    position: absolute;
    bottom: calc(50% - 70px);
    width: 260px;
    left: calc(50% - 120px);
  }
  .content-main .img-carousel {
    position: absolute;
    bottom: calc(50% + 30px);
    left: calc(50% - 15px);
    width: 30px;
    animation: searchLoop 3s ease-in-out infinite alternate-reverse;
  }
  .content-main .content-description {
    position: absolute;
    bottom: calc(50% - 25px);
    left: calc(50% - 95px);
    width: 200px;
    color: #584f4f;
    text-align: center;
    font-size: 6rem;
  }
}
</style>
