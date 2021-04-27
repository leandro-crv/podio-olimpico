<template>
  <section class="conteudo">
      
    <ul class="resultados">
      <li class="posicao">
        
        <div v-if="dados.podio.segundo.medalhas > 0">
          <p v-for="(x, index) in dados.podio.segundo.paises" :key="`${index}`" class='pais'>
            {{ x }}
             <div-pais :codigo="{cod:x}"/>
          </p>
          <p class='medalhas'>
            Medalhas por país: {{ dados.podio.segundo.medalhas }}
          </p>
        </div>
        <div v-else>
          <p>Não há nenhum país nessa posição</p>
        </div>
        <div class="podio-desenho segundo-desenho">
          <p class='numero-posicao'>2</p>
        </div>
      </li>
      <li class="posicao">
        
        <div v-if="dados.podio.primeiro.medalhas > 0">
          <p
            v-for="(x, index) in dados.podio.primeiro.paises"
            :key="`${index}`" class='pais'
          >
            {{ x }}
             <div-pais :codigo="{cod:x}"/>
          </p>
          <p class='medalhas'>
            Medalhas por país: {{ dados.podio.primeiro.medalhas }}
          </p>
        </div>
        <div v-else>
          <p>Não há nenhum país nessa posição</p>
        </div>
                <div class="podio-desenho primeiro-desenho">
          <p class='numero-posicao'>1</p>
        </div>
      </li>

      <li class="posicao">
        
        <div v-if="dados.podio.terceiro.medalhas > 0">
          <p
            v-for="(y, index) in dados.podio.terceiro.paises"
            :key="`${index}`" class='pais'
          >
            {{ y }}
            <div-pais :codigo="{cod:y}"/>
          </p>
          <p class='medalhas'>
            Medalhas por país: {{ dados.podio.terceiro.medalhas }}
          </p>
        </div>
        <div v-else>
          <p>Não há nenhum país nessa posição</p>
        </div>
                <div class="podio-desenho terceiro-desenho">
          <p class='numero-posicao'>3</p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import Pais from "../pais/Pais.vue"
export default {
  props: ["podio"],
  data() {
    return {
      dados: this.podio,
    };
  },
  components:{
    'div-pais':Pais
  }
};
console.log("this.dados ", this.dados);
</script>
<style scoped>

.resultados{
  width:100%;
  /* background-color: maroon; */
  display: absolute;
  margin-top:1%;
  
  
  
}

.pais{
  color:midnightblue;
  display: inline-block;
  padding-left:1rem;
}

.posicao {
  display: inline-block;
  /* background-color: lightsalmon; */
  width: 30%;
  vertical-align: text-bottom;
  margin-right: 0px;
  margin-left:0px;
}



.segundo-desenho,.primeiro-desenho,.terceiro-desenho{
  background-color: #efede7;
  border: black thick solid;
}
.segundo-desenho {
  height: 6rem;
}

.primeiro-desenho {
  height: 9rem;
}

.terceiro-desenho {
  height: 4rem;
}


.numero-posicao{
  font-weight: bold;
  font-size: 2rem;
 
}

.medalhas{
  border-top:thin gray outset;
  margin-bottom:0px;
}
</style>