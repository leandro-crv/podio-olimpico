  
<template>
  <section @change="atualizar">
    <p>Escolha os esportes</p>
    <input type="checkbox" @click="alterarCheck" checked> Selecionar tudo 
    
    <ul id='ulEsportes' >
      <li v-for="(esp, index) in esportes" :key="`esp-${index}`" class='esportes' >
        <input type="checkbox" :value="esportes[index]" :checked="check" :id="esp" class='checkEsportes'  />
        <label :for="esp" class='labelEsporte'  >{{esp}}</label>
        
      </li>
    </ul>
  </section>
</template>
<script>
import esportes from "../../bancoDeDados/esportes.js";
export default {
  data() {
    return {
      esportes: [...esportes].sort(),
      check:true,
    };
  },
  methods:{
    alterarCheck:function(){
     
      
      this.check = !this.check
    },
    atualizar:function(){
       this.$emit('inputChange')
    }
  }
};


</script>
<style scoped>
.esportes{
  display:inline-block;
  margin-right: 0.3rem;
  
}


.labelEsporte{
  background-color: lightgrey;
  opacity: 0.7;
  padding:0.8rem;
  border-radius: 0.5rem;
}
.checkEsportes{
  display: none;
}

.checkEsportes:checked + label{
  border:solid gray thin;
   opacity:1
}

</style>

