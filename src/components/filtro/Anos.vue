<template>
  <section @change="()=> this.$emit('inputChange')">
    <p> {{ mensagem }}</p>
    
    <div class="filtroAno" >
      <select placeholder="ano de inicio" id="anoInicio" @change="valorInicio" >
        <option v-for="(a, index) in anos" :key="index" :value="a.ano" >
          {{ a.ano+" - "+a.cidade }}
        </option>
      </select>
      <p>Início</p>
    </div>
        <div class="filtroAno" >
      <select placeholder="ano fim" id="anoFim" >
        <option v-for="(a, index) in anos" :key="index" :value="a.ano" :disabled="desabilita(a.ano)" :selected="a.ano==anoFim">
          {{ a.ano+" - "+a.cidade }}
        </option>
      </select>
      <p>Fim</p>
    </div>
  
  </section>
</template>
<script>
import anos from "../../bancoDeDados/anos.js";
import $ from "jquery";

export default {
  data() {
    return {
      anos:anos.reverse(),
      disabled:0,
      mensagem:"Escolha o período",
      mensagemErro:"O ano de início não pode ser maior que o final",
      anoFim:2016
     

    };
  },

  methods:{
    valorInicio:function(){
      let inicio = [...$('#anoInicio > option')]
      let i = inicio[inicio.findIndex(element => element.selected)]
      this.disabled = i.value
    },
    desabilita:function(valor){
      if(valor<this.disabled){
        return true
      }
      else{
        return false
      }
    },
    
 
  
  }
};

</script>
<style scoped>
.filtroAno {
  display: inline-block;
}


</style>
