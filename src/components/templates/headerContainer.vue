<template>
  <header class="header">
    <nav class="container-nav">
      <div class="container-logo">
        <router-link to="/inicio">
          <img class="logo" src="../../assets/logo.png" alt="logo" />
        </router-link>
        <p>
          Consultation and analysis
        </p>
      </div>
      <ul class="ul-nav">
        <router-link to="/registrar">
          <li class="items-list border-normal">
            <img
              src="../../assets/home.png"
              alt=""
              class="icon-item margin-right-10px"
            />
            Registrar CNPJ
          </li>
        </router-link>
        <router-link to="/consulta">
          <li class="items-list borderBlue">
            <img
              src="../../assets/home.png"
              alt="inicio"
              class="icon-item margin-right-10px"
            />
            Home
          </li>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<style>
.margin-right-10px {
  margin-right: 10px;
}

.header {
  width: 100%;
  height: 70px;
  background-color: #efefef;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.header .container-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
.container-nav .ul-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.container-nav .items-list {
  display: flex;
  align-items: center;
  margin-left: 50px;
  font-size: 13rem;
  color: #000000;

  padding: 10px 0px;
}
.container-nav .items-list:hover {
  opacity: 0.6;
}
.border-normal {
  border-bottom: 3px solid rgba(0, 153, 255, 0.21);
}
.borderBlue {
  border-bottom: 2px solid #0099ff;
}

.container-nav .items-list .icon-item {
  width: 13rem;
  object-fit: cover;
}
.header .container-logo {
  display: flex;
  align-items: center;
  font-size: 10rem;
  color: #9b9494;
}
.container-logo .logo {
  object-fit: cover;
  width: 50px;
  margin-right: 15px;
}

@media (max-width: 750px) {
  .header .container-nav {
    display: flex;
    justify-content: center;
  }
  .container-nav .ul-nav {
    display: none;
  }
}
@media (max-width: 980px) {
  .header .container-nav {
    display: flex;
    justify-content: center;
  }
  
}
</style>
