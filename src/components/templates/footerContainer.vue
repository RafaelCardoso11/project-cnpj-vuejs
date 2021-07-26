<template>
  <section class="container-footer">
    <img class="vetor1" src="../../assets/VectorFooter2-c1.svg" alt="" />
    <img class="vetor2" src="../../assets/VectorFooter2-c2.svg" alt="" />
    <div class="container-copyright">
      <p class="copyright">
        Todos os direitos reservados aos recrutadores ❤
      </p>
      <div class="container-redesSociais">
        <a href="https://github.com/RafaelCardoso11/project-cnpj-vuejs" target="_blank">
          <i class="lab la-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/rafaelcardoso11/" target="_blank">
          <i class="lab la-linkedin-in"></i>
        </a>
      </div>
    </div>
  </section>
</template>
<style>
.container-footer {
  width: 100%;
  padding-top: 20px;
  position: relative;
  overflow: hidden;
}
.container-footer .vetor1 {
  position: absolute;
  z-index: 1;
  bottom: 20px;
}
.container-footer .container-copyright {
  position: absolute;
  width: 100%;
  z-index: 2;
  bottom: 0px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
}
.container-copyright .copyright {
  font-size: 10rem;
  text-align: center;
}
.container-copyright .container-redesSociais i {
  font-size: 25rem;
  color: white;
}
</style>
