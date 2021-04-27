<template>
  <div id="app">
    <header>
      <h1>{{ msg }}</h1>

      <p>
        Escolha as datas, os esportes, a cor da medalha e veja quem são os
        maiores vencedores!
      </p>

        <span class="infoSobre" >
          <img :src="info" @click="classeSobre"/>
          <p>Sobre</p>
          <sobre-sobre :classe="visivelSobre" />
        </span>
    </header>
  <hr>
    <div id="filtro">
      <ul>
        <li class="filtroLi am">
          <filtro-ano v-on:inputChange="query" />
          <filtro-medalhas v-on:inputChange="query" />
        </li>
        <li class="filtroLi e"><filtro-esportes v-on:inputChange="query" /></li>
      </ul>
    </div>
    <br />
    <hr />

    <podio-podio :podio="{ podio }" class="podio" />
  </div>
</template>

<script>
import Anos from "../src/components/filtro/Anos.vue";
import Esportes from "../src/components/filtro/Esportes.vue";
import Medalhas from "../src/components/filtro/Medalhas.vue";
import Podio from "../src/components/podio/Podio.vue";
import Sobre from "../src/components/sobre/Sobre.vue";

import filtrar from "../src/bancoDeDados/filtrar.js";
import banco from "./bancoDeDados/bancoUnicoObjetos.js";
import bancoEsportes from "./bancoDeDados/esportes.js";
import info from "../src/assets/info.svg";


export default {
  name: "app",
  components: {
    "filtro-ano": Anos,
    "filtro-esportes": Esportes,
    "filtro-medalhas": Medalhas,
    "podio-podio": Podio,
    "sobre-sobre": Sobre,
  },

  data() {
    return {
      msg: "Pódio Olímpico",
      podio: {
        primeiro: "",
        segundo: "",
        terceiro: "",
      },
      info,
      visivelSobre: true,
      
    };
  },
  created: function () {
    let dados = filtrar(banco, 1896, 2016, bancoEsportes, [
      "ouro",
      "prata",
      "bronze",
    ]);
    (this.podio.primeiro = dados.primeiroLugar),
      (this.podio.segundo = dados.segundoLugar),
      (this.podio.terceiro = dados.terceiroLugar);
  },
  methods: {
    query: function () {
      let arrayInicio = [
        ...document.getElementById("anoInicio").querySelectorAll("option"),
      ];
      let inicio =
        arrayInicio[arrayInicio.findIndex((element) => element.selected)].value;
      let arrayFim = [
        ...document.getElementById("anoFim").querySelectorAll("option"),
      ];
      let fim =
        arrayFim[arrayFim.findIndex((element) => element.selected)].value;

      let selectorEsportes = [
        ...document.querySelectorAll("[type='checkbox']"),
      ];
      let arrayEsportes = [];
      selectorEsportes.map((e) =>
        e.checked ? arrayEsportes.push(e.value) : ""
      );
      let selectorMedalhas = [
        ...document.querySelectorAll("[name='inputMedalhas']"),
      ];
      let medalhas =
        selectorMedalhas[
          selectorMedalhas.findIndex((element) => element.checked)
        ].value;
      let arrayMedalhas;

      medalhas == "todas"
        ? (arrayMedalhas = ["ouro", "prata", "bronze"])
        : (arrayMedalhas = [medalhas]);

      let dados = filtrar(
        banco,
        Number(inicio),
        Number(fim),
        arrayEsportes,
        arrayMedalhas
      );
      console.log("dados são ", dados);

      (this.podio.primeiro = dados.primeiroLugar),
        (this.podio.segundo = dados.segundoLugar),
        (this.podio.terceiro = dados.terceiroLugar);
    },
    classeSobre: function () {
      this.visivelSobre = !this.visivelSobre;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

.filtroLi {
  display: inline-block;

  vertical-align: top;
}
.e {
  width: 60%;
}
.am {
  width: 35%;
}
.podio {
  height: 50%;
  position: relative;
  width: 100%;
  bottom: 0;
}



</style>
